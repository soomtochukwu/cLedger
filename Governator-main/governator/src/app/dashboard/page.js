"use client";
import {
  DashBoardAvartarCard,
  VoterCard,
  ActivityCard,
} from "./components/helper";
import { FaArrowUp } from "react-icons/fa6";
export const user = {
  username: "John Doe",
  id: "123456 ",
  status: false,
  src: "/dashboard/animoji.svg",
};

const Dashboard = () => {
  function copyId() {
    const { id } = user;
    navigator.clipboard.writeText(id);
    alert("ID copied to clipboard");
  }
  return (
    <div>
      <div className="flex justify-between items-start text-left pt-3 text-base">
        <div>
          <h1> Dashboard</h1>
          <section className="space-y-5">
            <DashBoardAvartarCard {...user} func={copyId} />
            <div className="flex items-start gap-2 justify-start flex-wrap">
              <ActivityCard
                icon={
                  <FaArrowUp className="rotate-45 cursor-pointer rounded-full text-[.8rem] text-green-500 bg-fuchsia-300 hover:bg-transparent duration-200 justify-self-end mr-3" />
                }
                title={"card"}
                nft={"/dashboard/Segment-amico2.svg"}
              />

              <ActivityCard
                icon={
                  <FaArrowUp className="rotate-45 cursor-pointer rounded-full text-[.8rem] text-green-500 bg-fuchsia-300 hover:bg-transparent duration-200 justify-self-end mr-3" />
                }
                title={"card"}
                nft={"/dashboard/create-amico2.svg"}
              />
            </div>
          </section>
        </div>
        <div>
          <h1>voting History</h1>
          <section className="space-y-3 border border-3 h-[30rem] p-2">
            <VoterCard eligiblity={true} votingStatues={true} counts={299} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
