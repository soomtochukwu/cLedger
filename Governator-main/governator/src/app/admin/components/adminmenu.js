import { Logo, NavBarIcon } from "./helper";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbSettings2 } from "react-icons/tb";
import { RiMenuUnfold4Line2 } from "react-icons/ri";

export default function AdminMenu() {
  return (
    <section className="p-4 border border-[#02002D] flex items-center justify-between w-full rounded-lg  ">
      <div>
        <NavBarIcon
          icon={<RiMenuUnfold4Line2 />}
          className={
            "text-xl list-none border hidden md:flex border-[#cecdd4] p-1 rounded-lg  bg-white"
          }
        />
      </div>
      <div className=" flex items-center list-none gap-3">
        <NavBarIcon
          icon={<TbSettings2 />}
          className={"text-xl  bg-white p-1 rounded-lg"}
        />
        <NavBarIcon
          icon={<IoIosNotificationsOutline />}
          className={"text-xl  bg-white text-center p-1  rounded-lg"}
        />
        <Logo
          className="object-contain border border-[#cecdd4] p-1 rounded-3xl"
          span="text-2xl font-bold "
          width={50}
          height={50}
          src={"/animoji2.png"}
        />
      </div>
    </section>
  );
}
