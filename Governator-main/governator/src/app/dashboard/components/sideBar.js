import { sideBar, Logo, NavBarIcon } from "./helper";
import Link from "next/link";
function SideBar() {
  return (
    <section className="min-w-fit md:w-1/4 capitalize h-screen border">
      <header className=" border border-[#02002D] p-4 ">
        <Link href="/home">
          <Logo
            className="object-contain"
            span="text-2xl font-bold hidden md:flex"
            width={50}
            height={50}
            src={"/logo.png"}
            spanName={"Governator"}
          />
        </Link>
      </header>
      <nav className="border border-t-0 border-[#02002D] h-full">
        <ul className="py-4 space-y-8 transition ease-in-out text-nowrap">
          {sideBar.map((content, idx) => (
            <Link key={idx + content.name} href={content.path}>
              <NavBarIcon
                key={idx}
                icon={content.icon}
                className={
                  "flex items-center justify-center md:justify-start gap-3 hover:bg-[#02002D] p-2 hover:text-white hover:shadow-md hover:px-3 transition-transform duration-300 hover:border-r-[#1AC268] hover:border-r-[.5rem]"
                }
                span="text-md hidden md:flex "
                iconName={content.name}
              />
            </Link>
          ))}
        </ul>
      </nav>
    </section>
  );
}
export default SideBar;
