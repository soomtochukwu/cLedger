import { FaRegCopy } from "react-icons/fa6";
import Mycard from "./Mycard";
import { RiMenuFold2Fill } from "react-icons/ri";
const Carddetails = ({ voteId, func }) => {
  function copyId() {
    navigator.clipboard.writeText(voteId);
  }

  return (
    <div className=" capitalize w-1/2  absolute right-0 top-0 bottom-0  bg-white p-4  ">
      <h4 className=" card-title  capitalize text-left mb-10" onClick={func}>
        <RiMenuFold2Fill /> Card details
      </h4>
      <div className="space-y-10">
        <Mycard voteId={voteId} />
        <article className=" flex items-center bg-slate-300  w-full rounded-lg ">
          <p className=" w-32 bg-slate-600 text-center text-white rounded-l-lg">
            voter ID
          </p>
          <p className="ml-2 uppercase">{voteId}</p>
          <p
            className="bg-slate-00 w-6 ml-auto bg-slate-600 p-1 rounded-r-lg h-full"
            onClick={copyId}
          >
            <FaRegCopy />
          </p>
        </article>
        <article className="  flex items-center bg-slate-300 rounded-lg w-full">
          <p className=" w-32 bg-slate-600 text-center text-white rounded-l-lg">
            total Vote
          </p>
          <p className="ml-2">115</p>
        </article>
        <div className="block space-y-4 md:space-y-0 md:grid grid-cols-2 gap-x-3 gap-y-4 capitalize">
          <article className="  flex items-center bg-slate-300 rounded-lg w-full">
            <p className=" w-32 bg-slate-600 text-center text-white rounded-l-lg">
              public vote
            </p>
            <p className="ml-2">115</p>
          </article>
          <article className="  flex items-center bg-slate-300 rounded-lg w-full">
            <p className=" w-32 bg-slate-600 text-center text-white rounded-l-lg">
              remaining
            </p>
            <p className="ml-2">115</p>
          </article>
          <article className="  flex items-center bg-slate-300 rounded-lg w-full">
            <p className=" w-32 bg-slate-600 text-center text-white rounded-l-lg">
              private votes
            </p>
            <p className="ml-2">115</p>
          </article>
          <article className="  flex items-center bg-slate-300 rounded-lg w-full">
            <p className=" w-32 bg-slate-600 text-center text-white rounded-l-lg">
              remaining
            </p>
            <p className="ml-2">115</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Carddetails;
