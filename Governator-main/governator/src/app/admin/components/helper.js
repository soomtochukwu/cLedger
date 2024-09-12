import Image from "next/image";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import { RiFunctionAddLine } from "react-icons/ri";
import { BsCheck2Circle } from "react-icons/bs";
import { BsPersonBoundingBox } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";

export function HomeHeader({ logo, avatarName, avatarImage }) {
  return (
    <section>
      <header className=" flex items-center justify-between rounded-lg border px-4  py-3">
        <Logo
          src={logo}
          width={60}
          height={60}
          span={"text-2xl font-bold text-[#fefefe]"}
          spanName={"Governator"}
        />
        <nav>
          <ul className=" flex items-center gap-5">
            <NavBarIcon
              icon={<IoIosNotificationsOutline className="text-3xl" />}
              span={"badge badge-error badge-xs absolute left-3 top-0"}
              className={"relative"}
              iconName={""}
            />
            <li>
              <div className="border p-2 rounded-[2rem]">
                <Logo
                  src={avatarImage}
                  width={40}
                  height={40}
                  spanName={avatarName}
                  span={"text-lg font-bold text-[#fefefe] capitalize "}
                />
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}

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

export const NavBarIcon = ({ className, span, icon, iconName }) => {
  return (
    <li className={className}>
      {icon}
      <span className={span}>{iconName}</span>
    </li>
  );
};


export const sideBar = [
  {
    icon: <MdDashboard />,
    name: "Dashboard",
    path:"/dashboard"
  },
  {
    icon: <BsCheck2Circle />,
    name: "voting panel",
    path:"/dashboard/votingPanel"
  },
  {
    icon: <BsPersonBoundingBox />,
    name: "kyc verification",
    path:'/dashboard/kyc'
  },
];

export const adminSideBar = [
  {
    icon: <IoMdPersonAdd />,
    name: "add moderator",
    path: "/admin/moderator",
  },
  {
    icon: <RiFunctionAddLine />,
    name: "create poll",
    path: "/admin/create-polls",
  },
];
