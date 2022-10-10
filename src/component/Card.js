

function Card(props) {
  return (
    <div className="container">
      <div className="picture">
        <img 
          src={props.src}
          alt="img"
        />
      </div>
      <div className="info">
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default Card;
