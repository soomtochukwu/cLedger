import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Logo } from "./helper";
import { NavBarIcon } from "./helper";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useState } from "react";
import { LuContact } from "react-icons/lu";
import { HiOutlineLogout } from "react-icons/hi";
import Link from "next/link";

export function HomeHeader({ logo, avatarName, avatarImage }) {
  const [user, setUser] = useState(false);

  const handleClick = () => {
    setUser(!user);
  };

  return (
    <section>
      <header className=" flex items-center justify-between rounded-lg border px-4  py-3">
        <Link key="scd" href="/home">
          <Logo
            src={"/logo.png"}
            width={60}
            height={60}
            span={"text-2xl font-bold text-[#fefefe]"}
            spanName={"Governator"}
          />
        </Link>
        <nav>
          <ul className=" flex items-center gap-5">
            <div className="nav">
              <ConnectButton
                accountStatus={{
                  smallScreen: "avatar",
                  largeScreen: "avatar",
                }}
                chainStatus="icon"
                showBalance={{
                  smallScreen: false,
                  largeScreen: true,
                }}
              />
            </div>
            <NavBarIcon
              icon={<IoIosNotificationsOutline className="text-3xl" />}
              span={"badge badge-error badge-xs absolute left-3 top-0"}
              className={"relative"}
              iconName={""}
            />
            <li onClick={handleClick}>
              <div className="border p-2 rounded-[2rem]">
                <Logo
                  src={avatarImage}
                  width={40}
                  height={40}
                  spanName={avatarName}
                  span={"text-lg font-bold text-[#fefefe] capitalize "}
                />
              </div>
              {user && (
                <div className="bg-slate-900 w-[19rem] h-[6rem] absolute  ">
                  <NavBarIcon
                    iconName={"my profile"}
                    className={
                      "list-none absolute top-0 px-2 pt-1 border-b-2 flex flex-row-reverse items-center justify-between gap-12"
                    }
                    span={""}
                    icon={<LuContact />}
                  />
                  <NavBarIcon
                    iconName={"sign out"}
                    className={
                      "list-none absolute bottom-0 px-2 pb-1 border-t-2 flex flex-row-reverse  items-center justify-between gap-16"
                    }
                    icon={<HiOutlineLogout />}
                  />
                  <NavBarIcon
                    iconName={"sign out"}
                    className={
                      "list-none absolute bottom-0 px-2 pb-1 border-t-2 flex flex-row-reverse  items-center justify-between gap-16"
                    }
                    icon={<HiOutlineLogout />}
                  />
                  <NavBarIcon
                    iconName={"sign out"}
                    className={
                      "list-none absolute bottom-0 px-2 pb-1 border-t-2 flex flex-row-reverse  items-center justify-between gap-16"
                    }
                    icon={<HiOutlineLogout />}
                  />
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}
