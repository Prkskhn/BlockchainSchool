function Card(props) {
  return <div className={`${props.color} w-40 h-60`}>{props.cardName}</div>;
}

export default Card;
