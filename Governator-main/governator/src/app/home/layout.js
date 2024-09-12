"use client";
import { HomeHeader } from "./components/homeHeader";
export default function Layout({ children }) {
  return (
    <main className=" space-y-6 px-3 py-3 bg-[url('/Group.svg')] h-screen  w-screen">
      <HomeHeader />
      <div>{children}</div>
    </main>
  );
}
