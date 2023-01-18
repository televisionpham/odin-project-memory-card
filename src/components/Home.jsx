import { useEffect, useState } from "react";
import Card from "./Card";
import { cards } from "./CONSTANTS";

const Home = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const shuffle = () => {
    const arr = [];
    while (arr.length < cards.length) {
      const index = Math.floor(Math.random() * cards.length);
      if (!arr.includes(index)) {
        arr.push(index);
      }
    }

    return arr;
  };

  const handleCardClick = (title) => {
    if (!clickedCards.includes(title)) {
      setClickedCards([...clickedCards, title]);
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
    } else {
      setScore(0);
      setClickedCards([]);
    }
  };

  const generateCards = () => {
    const indexes = shuffle();
    const list = [];
    for (const index of indexes) {
      list.push(
        <Card
          key={index}
          title={cards[index].title}
          image={cards[index].image}
          handleCardClick={handleCardClick}
        />
      );
    }

    return list;
  };

  return (
    <>
      <header className="header">
        <div className="logo">Memory Card</div>
        <div className="scores">
          <div className="score">Score: {score}</div>
          <div className="score">Best score: {bestScore}</div>
        </div>
      </header>
      <main className="container">
        <div className="cards">{generateCards()}</div>
      </main>
    </>
  );
};

export default Home;
