"use client";

import { useAccount } from "wagmi";
import MenuBar from "./components/menubar";
import SideBar from "./components/sideBar";
import { usePathname, useRouter } from "next/navigation";
// import { useEffect } from "react";

export default function DashboardLayout({ children }) {
  const //
    path = usePathname(),
    pathName = path.split("/").map((i) => i);
  //   { isConnected, address } = useAccount(),
  //   { push } = useRouter();
  // useEffect(() => {
  //   if (!(isConnected && address)) {
  //     push("/");
  //   }
  // }, [isConnected, address]);
  return (
    <main className="relative w-full h-screen overflow-hidden flex p-4 text-blue-950 gap-2">
      <SideBar sidebar={false} />
      <div className="relative w-full h-full ">
        <MenuBar />
        <h1 className="text-2xl font-bold">{ pathName[2]}</h1>
        <div className="w-full h-full overflow-x-hidden">{children}</div>
      </div>
    </main>
  );
}
