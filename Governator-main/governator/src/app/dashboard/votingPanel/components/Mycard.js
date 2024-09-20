import { Logo } from "../../components/helper";

const Mycard = ({ voteId }) => {
  return (
    <div className=" w-fit  bg-[url('/votepanel/Frame.svg')] bg-no-repeat bg-contain bg-[#101010] text-[.6em] text-[#575759] px-2 py-4 pb-1 rounded-md ">
      <Logo
        src={"/votepanel/verNft.svg"}
        width={60}
        height={60}
        logoStyle={"flex flex-row-reverse items-end justify-between mb-3"}
        spanName={`vote Id: ${voteId}`}
        span={`uppercase text-md text-white`}
      />
      {`This validates your KYC and shows are eligible to vote`}
    </div>
  );
};

export default Mycard;
