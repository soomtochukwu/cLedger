"use client";
import { useState } from "react";
import { LuContact } from "react-icons/lu";
import { NavBarIcon } from "./helper";
import { HiOutlineLogout } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";

export function HomeFilter() {
  const [state, setState] = useState(false);
  const [selectValue, setSelectValue] = useState("trending");

  const clickHandler = () => {
    setState((prev) => !prev);
  };

  const handleValue = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <section className=" flex items-center  w-full justify-between ">
      <article className=" border py-2 px-2 w-2/3 rounded-lg">
        <div className=" flex items-center justify-between">
          <p className="border px-1 inline-flex gap-1 rounded-md">
            <small className=" text-[#fefefe]">
              sort by:
              <span className="text-green-400"> {selectValue} votes</span>
            </small>
            <IoMdArrowDropdown className="text-xl" onClick={clickHandler} />
          </p>
          {state && (
            <select
              className="w-[8rem] bg-slate-900 px-2 rounded-md absolute h-[rem] translate-y-[1.67rem] translate-x-10 py-1"
              value={selectValue}
              onChange={handleValue}
            >
              <option
                className="text-green-10 mb-2 text-xs  hover:bg-green-500"
                value={"ended"}
              >
                ended Votes
              </option>
              <option
                className="text-green-100 text-xs hover:bg-green-500"
                value={"trending"}
              >
                Trending Votes
              </option>
            </select>
          )}
          <p>
            <small className=" text-[#fefefe]">
              Ongoing Voting: <span className="text-green-400">{`24`}</span>
            </small>
          </p>
        </div>
      </article>{" "}
    </section>
  );
}

const HomeScreenMenu = () => {
  return (
    <div className="bg-slate-900 w-fit h-[6rem] absolute translate-x-[-10rem]  ">
      <Link href="/dashboard">
        <NavBarIcon
          iconName={"my profile"}
          className={
            "list-none top-0 px-2 pt-1 border-b-2 flex flex-row-reverse items-center justify-between gap-12 "
          }
          span={""}
          icon={<LuContact />}
        />
      </Link>
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
  );
};
