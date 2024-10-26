"use client";
import { useState } from "react";
import CardKyc from "./components/CardKyc";
const levels = [
  {
    level: 1,
    perks: [
      "Can participate on up to 100 public votes, and 15 private votes",
      "Create up to 10 public polls",
    ],
    requirements: ["Your BVN or NIN", "Your visual identity"],
    done: true,
  },
  {
    level: 2,
    perks: [
      "Can participate on up to 500 public votes, and 50 private votes",
      "Can create up to 50 public votes and 15 private votes",
    ],
    requirements: [
      "Your proof of address",
      "Your recent 3 months utility bill",
    ],
    done: false,
  },
  {
    level: 3,
    perks: [
      "Can participate on up to 500 public votes, and 50 private votes",
      "Can create up to 50 public votes and 15 private votes",
    ],
    requirements: [
      "Your proof of home address",
      "Your recent 3 months utility bill",
    ],
    done: false,
  },
];

const Kyc = () => {
  const [kycState, setKycState] = useState("not complete");

  const show = (id) => {
    setKycState(String(id));
  };

  return (
    <section className="space-y-8 my-10 pb-3">
      <h3 className="card-title sticky top-0 left-0 bg-white duration-300">
        My Kyc level : {`Level ${kycState !== "3" ? kycState : "complete"}`}
      </h3>
      <div className=" flex items-center gap-20 flex-wrap  justify-center duration-300">
        {levels.map((kyc) => (
          <CardKyc key={kyc.level} {...kyc} showLevel={() => show(kyc.level)} />
        ))}
      </div>
    </section>
  );
};

export default Kyc;
