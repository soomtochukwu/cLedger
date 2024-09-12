import Image from "next/image";
// import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";
import { BsPersonBoundingBox } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";

export function Logo({ src, className, span, spanName, width, height }) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={src} // Replace with the actual logo path
        alt="Governator Logo"
        width={width}
        height={height}
        className={className}
      />
      <span className={span}>{spanName}</span>
    </div>
  );
}

export const NavBarIcon = ({
  className,
  span,
  icon,
  iconName
}) => {
  return (
    <li className={className}>
      {icon}
      <span className={span}>{iconName}</span>
    </li>
  );
};
export function NotificationCard({ avater, name, purpose, time }) {
  return (
    <div className="px-2 mb-2 ">
      <article className="flex justify-between items-center bg-[#121212] px-2 py-1 rounded-lg">
        <span className="inline-flex items-center gap-1">
          {" "}
          <Image
            src={avater}
            width={30}
            height={30}
            priority={true}
            alt="card"
          />
          <span>{name}</span>
          {purpose}
        </span>
        <p>{time}</p>
      </article>
    </div>
  );
}

export function HomeTracker({ tracker }) {
  return (
    <article className="md:flex items-start justify-between ">
      <div>
        <h1 className="mb-2">The All Hacks Hackathon Contest :</h1>
        <p className="text-md mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          dolorum
        </p>
        <p className="first-letter:uppercase text-nowrap text-xs">
          time remaining till end:
          <span className="uppercase text-green-500">{`3`}DAYS</span>:{" "}
          <span className="lowercase text-green-500">
            {`11`}hrs : {`42`}mins
          </span>
        </p>
      </div>
      {tracker ? (
        <p className="text-nowrap space-x-2">
          <span className="badge badge-error  text-white">Ongoing</span>
          <span className="badge badge-success text-white"> Trending</span>
        </p>
      ) : tracker === null ? (
        <span className="badge badge-success text-white"> Trending</span>
      ) : (
        <p className="text-nowrap space-x-2">
          <span className="badge  text-gray-100">Ended</span>
        </p>
      )}
    </article>
  );
}

export function HomeVoteCard({ trend }) {
  return (
    <article className="md:flex  items-center justify-between pb-1">
      <div className="inline-flex  items-center gap-2">
        <div className="inline-flex ">
          <Image src={`/animoji3.png`} width={30} height={30} priority={true} alt="card" />
          <Image src={`/animoji3.png`} width={30} height={30} priority={true} alt="card" />
          <Image src={`/animoji3.png`} width={30} height={30} priority={true} alt="card" />
          <Image src={`/animoji3.png`} width={30} height={30} priority={true} alt="card" />
        </div>
        <p className="text-xs first-letter:capitalize">
          about <span className="text-green-500"> {`120`}k </span>votes and
          counting
        </p>
      </div>
      {trend ? (
        <button className="btn btn-success px-[2.3rem] text-white ">
          {" "}
          vote
        </button>
      ) : (
        <div className=" space-x-4 text-nowrap">
          <button className="btn btn-error px-[2.3rem] text-white ">
            view results
          </button>
          <button className="btn btn-success px-[2.3rem] text-white ">
            {" "}
            vote
          </button>{" "}
        </div>
      )}
    </article>
  );
}

export const sideBar = [
  {
    icon: <MdDashboard />,
    name: "Dashboard",
  },
  {
    icon: <BsCheck2Circle />,
    name: "voting panel",
  },
  {
    icon: <BsPersonBoundingBox />,
    name: "kyc verification",
  },
];


