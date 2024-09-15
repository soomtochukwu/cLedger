import Image from "next/image";
import { IoMdPersonAdd } from "react-icons/io";
import { RiFunctionAddLine } from "react-icons/ri";
import { BsCheck2Circle } from "react-icons/bs";
import { BsPersonBoundingBox } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { FaXTwitter, FaGithub, FaRegCopy } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { VscPersonAdd, VscPerson } from "react-icons/vsc";

export function Logo({ src, className, span, spanName, width, height }) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={src}
        alt="Governator Logo"
        width={width}
        height={height}
        className={className}
        priority={true}
      />
      <span className={span}>{spanName}</span>
    </div>
  );
}

export const NavBarIcon = ({ className, span, icon, iconName }) => {
  return (
    <li className={className}>
      {icon}
      <span className={span}>{iconName}</span>
    </li>
  );
};

export const DashBoardAvartarCard = ({ src, username, id, status, func }) => {
  return (
    <div className="block  md:flex items-center justify-between gap-5 p-2 bg-[url('/dashboard/Group1.svg')] bg-cover bg-center bg-[#342eca] text-nowrap rounded-lg">
      <div className="block  md:flex items-start gap-3 text-md text-nowrap">
        <Image
          src={src}
          width={100}
          height={100}
          priority={true}
          alt="avarter"
        />
        <div>
          <h1 className=" ">
            Username: <span className="text-success inline">{username}</span>{" "}
          </h1>
          <p className=" inline-flex gap-2">
            ID: {id}{" "}
            <button className="text-xs" onClick={func}>
              <FaRegCopy />
            </button>{" "}
          </p>
          <p className="text-sm text-nowrap">
            KYC Status: {KycStatusChecker(status)}
          </p>
        </div>
      </div>
      <div className="self-end inline-flex gap-1">
        <span>
          <FaXTwitter />
        </span>
        <span>
          <FaGithub />
        </span>
      </div>
    </div>
  );
};

export function KycStatusChecker(status) {
  return status ? (
    <span className="text-success">Verified</span>
  ) : (
    <span className="text-error text-nowrap">
      Not verified <small className="text-green-400 text-xs">verify</small>
    </span>
  );
}

export function VoterCard({ eligiblity, counts, votingStatues }) {
  return (
    <div className="grid grid-cols-1 content-between bg-[url('/dashboard/Group.svg')] bg-[#1F0322] bg-auto bg-left bg-no-repeat h-32 text-xs rounded-lg py-1 px-2 w-60 ">
      <h3 className="text-slate-50">The time fest for all votes:</h3>
      <footer className=" flex justify-between items-center  ">
        <ul className="inline-flex text-[.4rem] items-center gap-2 text-slate-50">
          <li
            className={`badge border-0 ${
              votingStatues
                ? `bg-green-500 animate-pulse text-yellow-50`
                : ` bg-slate-500 `
            } text-[.44rem]  -py-1`}
          >
            {votingStatues ? "ongoing" : `ended`}
          </li>
          <li>
            About {counts} votes{" "}
            <span className="text-success">{`verified`}</span>{" "}
          </li>
        </ul>
        <span className="inline-flex items-center gap-1 justify-self-end text-orange-400 text-[.8em] duration-200 transition-all ">
          {eligiblity ? ` Invited` : `Not Invite`}
          {eligiblity ? <VscPersonAdd /> : <VscPerson />}
        </span>
      </footer>
    </div>
  );
}

export const ActivityCard = ({ icon, title, nft }) => {
  return (
    <div
      className={`grid grid-cols-1 content-between border rounded-lg text-xs p-1 bg-contain bg-no-repeat bg-center size-28`}
      style={{ backgroundImage: `url(${nft})` }}
    >
      {icon}
      <h6>{title}</h6>
    </div>
  );
};

export const sideBar = [
  {
    icon: <MdDashboard />,
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <BsCheck2Circle />,
    name: "voting panel",
    path: "/dashboard/votingPanel",
  },
  {
    icon: <BsPersonBoundingBox />,
    name: "kyc verification",
    path: "/dashboard/kyc",
  },
  {
    icon: <IoIosNotificationsOutline />,
    name: "notification",
    path: "/dashboard/notification",
  },
];

export const adminSideBar = [
  {
    icon: <IoMdPersonAdd />,
    name: "add modrator",
    path: "/admin/moderator",
  },
  {
    icon: <RiFunctionAddLine />,
    name: "create poll",
    path: "/admin/create-polls",
  },
  {
    icon: <IoIosNotificationsOutline />,
    name: "notification",
    path: "/admin/notification",
  },
];
