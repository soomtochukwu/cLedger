"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

const Header = ({ addOnstyles }) => {
  return (
    <div className={`flex items-center justify-between static ${addOnstyles}`}>
      <Logo span={"/logo.png"} width={"40"} height={"40"} />
      <div className=" rounded-full">
        <ConnectButton
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "avatar",
          }}
          chainStatus="icon"
          showBalance={{
            smallScreen: true,
            largeScreen: false,
          }}
          label="Get started"
        />
      </div>
    </div>
  );
};
export default Header;

export function Logo({ className, span, width, height }) {
  return (
    <div className="flex items-center">
      <Image
        src="/logo.png"
        alt="Governator Logo"
        width={width}
        height={height}
        className={className}
      />
      <span className={span}>Governator</span>
    </div>
  );
}
