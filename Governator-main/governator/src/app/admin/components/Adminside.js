import Link from "next/link";
import { Logo, NavBarIcon } from "./helper";
import { adminSideBar } from "./helper";

function AdminSidebar() {
  return (
    <section className="min-w-fit md:w-1/4 capitalize">
      <header className=" border border-[#02002D] p-4 ">
        <Logo
          className="object-contain"
          span="text-2xl font-bold hidden md:flex "
          width={50}
          height={50}
          src={"/logo.png"}
          spanName={"Governator"}
        />
      </header>
      <nav className="border border-[#02002D] min-h-full ">
        <ul className="py-4 space-y-8 transition ease-in-out text-nowrap">
          {adminSideBar.map((content, idx) => (
            <Link key={idx + content.name} href={content.path}>
              <NavBarIcon
                key={idx}
                icon={content.icon}
                className={
                  "flex items-center justify-center md:justify-start gap-3 hover:bg-[#02002D] p-2 hover:text-white hover:shadow-md hover:px-3 transition-transform duration-300 hover:border-r-[#1AC268] hover:border-r-[.5rem] "
                }
                span="text-md hidden md:flex"
                iconName={content.name}
              />
            </Link>
          ))}
        </ul>
      </nav>
    </section>
  );
}
export default AdminSidebar;
