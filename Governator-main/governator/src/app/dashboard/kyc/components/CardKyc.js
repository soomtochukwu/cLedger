"use client";
import ListItem from "./KycHelper";

const CardKyc = ({ level, perks, requirements, done, showLevel }) => {
  return (
    <div
      className={`space-y-5 border border-success w-[15rem] p-3 rounded-lg text-center hover:bg-slate-700 hover:text-white duration-300 shadow-md   ${
        done && "bg-slate-600 hover:bg-slate-600 border-transparent text-white"
      }`}
      onClick={showLevel}
    >
      <h4 className="card-title card"> level {level} </h4>
      <article className="text-left space-y-2  capitalize">
        <h5>peaks</h5>
        {perks.map((item, index) => (
          <ListItem key={index} text={item} />
        ))}
      </article>
      <article className="text-left space-y-2 capitalize">
        <h5>requirements</h5>
        {requirements.map((item, index) => (
          <ListItem key={index} text={item} />
        ))}
      </article>
      <button
        className={`capitalize btn p-[px] min-h-3 h-8 hover:btn-success hover:text-white border-0 text-white ${
          done && "bg-slate-600 hover:bg-slate-600 hover:text-white"
        }`}
      >
        {done ? "done" : "start kyc"}
      </button>
    </div>
  );
};

export default CardKyc;
