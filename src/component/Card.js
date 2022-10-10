

function Card(props) {
  return (
    <div className="container">
      <div className="picture">
        <img style={{width:"200px"}}
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
