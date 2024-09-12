"use client";
import { useState } from "react";

const VotingPanel = () => {
  const [votingData, setVotingData] = useState(true);
  const switcher = () => {
    if (votingData === true) {
      setVotingData(false);
    } else {
      setVotingData(true);
    }
  };

  return (
    <div>
      <section className="flex border-b-2  border-b-gray-300 w-full items-center justify-start  space-x-4 border">
        <div
          className={`${
            votingData === true && "font-bold border-b-green-600"
          } border-4`}
          onClick={() => switcher()}
        >
          My participation
        </div>
        <div
          className={`${
            votingData === false && "border-b-green-600 font-bold "
          } border-4`}
          onClick={() => switcher()}
        >
          My Card
        </div>
      </section>
      {votingData === true && (
        <select className="bg-white p-3 rounded-lg mt-2 left-0 absolute">
          <option value="public"> public</option>
          <option value="private"> private</option>
        </select>
      )}
    </div>
  );
};

export default VotingPanel;
