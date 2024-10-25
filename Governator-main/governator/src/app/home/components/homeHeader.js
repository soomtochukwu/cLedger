import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Logo } from "./helper";
import { NavBarIcon } from "./helper";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useState } from "react";

import Link from "next/link";

export function HomeHeader() {
  const [user, setUser] = useState(false);

  const handleClick = () => {
    setUser(!user);
  };

  return (
    <section>
      <header className=" flex items-center justify-between rounded-lg border bg-slate-500 ">
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
              <div className=" ">
                <Logo
                  src={null}
                  width={30}
                  height={20}
                  spanName={"cobby"}
                  span={" text-[#fefefe] capitalize "}
                />
              </div>
              {user && <></>}
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}
