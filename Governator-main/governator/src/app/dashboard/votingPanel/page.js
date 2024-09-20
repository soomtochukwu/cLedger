"use client";
import { useState } from "react";
import Mycard from "./components/Mycard";
import Public from "./components/PublicCard";
import Private from "./components/Private";
import Carddetails from "./components/Carddetail";
import { user } from "../../dashboard/components/helper";

const VotingPanel = () => {
  const [votingData, setVotingData] = useState(true);
  const [privates, setPrivates] = useState(false);
  const [publics, setPublics] = useState(true);
  const [summary, setSummary] = useState(false);

  const { voteId } = user;

  const switcher = () => {
    if (votingData === true) {
      setVotingData(false);
    } else {
      setVotingData(true);
    }
  };

  const handleChange = (event) => {
    if (event.target.value === "public") {
      setPublics(true);
      setPrivates(false);
    } else if (event.target.value === "private") {
      setPublics(false);
      setPrivates(true);
    }
  };

  function handleClick() {
    setSummary(true);
  }

  return (
    <>
      {/* <div className=" absolute inset-0 h-full w-full blur-sm border border-red-500" /> */}
      <section className="flex items-center justify-start border-b border-b-gray-300 w-full space-x-10 mb-2 relative">
        <div
          className={`${
            votingData === true && "font-bold border-b-green-700 "
          }  border-b-green-200 border-b-2  duration-300`}
          onClick={() => switcher()}
        >
          My participation
        </div>
        <div
          className={`${
            votingData === false && "border-b-green-700 font-bold  "
          }  border-b-green-200 border-b-2 duration-300`}
          onClick={() => switcher()}
        >
          My Card
        </div>
      </section>

      {votingData ? (
        <div className="pl-3 space-y-3">
          <select
            className="bg-white w-40 py-3 rounded-lg mt-2 left-0 "
            onChange={handleChange}
          >
            <option value="public"> public</option>
            <option value="private"> private</option>
          </select>
          {publics && (
            <>
              <Public tracker={true} trend={true} />
              <Public tracker={null} trend={null} />
            </>
          )}
          {privates && (
            <>
              <Private tracker={true} trend={true} />
              <Private tracker={false} trend={false} />
            </>
          )}
        </div>
      ) : (
        <>
          <div onClick={handleClick}>
            <Mycard voteId={voteId} />
          </div>{" "}
          {summary && (
            <div className="absolute top-0 w-full h-full backdrop-blur-sm left-0 duration-500  ">
              {<Carddetails voteId={voteId} func={() => setSummary(false)} />}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default VotingPanel;
