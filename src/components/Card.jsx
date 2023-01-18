const Card = (props) => {
  const { title, image, handleCardClick } = props;
  return (
    <div className="card" onClick={() => handleCardClick(title)}>
      <div className="card-title">{title}</div>
      <div className="card-body">
        <img src={image} className="card-image" />
      </div>
    </div>
  );
};

export default Card;
