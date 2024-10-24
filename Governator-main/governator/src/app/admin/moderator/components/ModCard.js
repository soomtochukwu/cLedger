const Card = ({ name, time, date, created }) => {
  return (
    <div className="border border-green-600 m-0.5 p-0.5 w-fit rounded-lg ">
      <h5>{name}</h5>
      <small>{time}</small>
      <small>{date}</small>
      <p className="text-xs">{created}</p>
    </div>
  );
};

export default Card;
