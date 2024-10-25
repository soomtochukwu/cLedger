const Card = ({ name, time, date }) => {
  return (
    <div className="border border-green-600 my-1 px-1 w-fit rounded-lg  ">
      <h5>{name}</h5>
      <small className="badge badge-primary rounded-md text-xs mr-2">
        {time}
      </small>
      <small className="badge badge-primary rounded-md text-xs">{date}</small>
    </div>
  );
};

export default Card;
