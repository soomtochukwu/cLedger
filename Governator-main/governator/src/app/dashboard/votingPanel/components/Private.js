import Image from "next/image";
import { MdDoNotDisturb, MdGroupAdd } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";
const Private = ({ tracker, trend }) => {
  return (
    <div className="bg-[url('/votepanel/Group.svg')] bg-no-repeat bg-cover bg-right min-w-full bg-slate-900 p-2 rounded-lg text-white">
      <article className="md:flex items-start justify-between ">
        <div>
          <h1 className="mb-2">The All Hacks Hackathon Contest :</h1>
          <p className="text-md mb-1">
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
          <span className="badge badge-warning text-white">soon to start</span>
        ) : (
          <span className="badge  badge-error">Ended</span>
        )}
      </article>
      <article className="md:flex  items-center justify-between pb-1">
        <div className="flex  items-center gap-2">
          <div className="inline-flex  ">
            <Image
              src={`/dashboard/animoji.svg`}
              width={30}
              height={30}
              priority={true}
              alt="card"
              className="rounded-full "
            />
            <Image
              src={`/dashboard/animoji.svg`}
              width={30}
              height={30}
              priority={true}
              alt="card"
              className="rounded-full -ml-3"
            />
            <Image
              src={`/dashboard/animoji.svg`}
              width={30}
              height={30}
              priority={true}
              alt="card"
              className="rounded-full -ml-3"
            />
            <Image
              src={`/dashboard/animoji.svg`}
              width={30}
              height={30}
              priority={true}
              alt="card"
              className="rounded-full -ml-3"
            />
          </div>
          <p className="text-xs first-letter:capitalize">
            about <span className="text-green-500"> {`120`}k </span>votes and
            counting
          </p>
        </div>
        {trend ? (
          <span className=" text-success inline-flex items-center gap-1 ">
            voted
            <BsCheck2Circle />
          </span>
        ) : trend === null ? (
          <span className=" text-warning inline-flex items-center gap-1">
            invited <MdGroupAdd />{" "}
          </span>
        ) : (
          <span className="text-error inline-flex items-center gap-1 ">
            {" "}
            no participation <MdDoNotDisturb />{" "}
          </span>
        )}
      </article>
    </div>
  );
};

export default Private;
