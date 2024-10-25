"use client";
import { useState } from "react";
import { levels } from "./components/KycHelper";
import KycCard from "./components/KycCard";

const KYCPage = () => {
  const [kycState, setKycState] = useState("not complete");

  const show = (id) => {
    setKycState(String(id));
  };

  return (
    <section className="space-y-8 my-10 pb-3">
      <h3 className="card-title sticky top-0 left-0 bg-white duration-300">
        {" "}
        My Kyc level : {`Level ${kycState !== "3" ? kycState : "complete"}`}
      </h3>
      <div className=" flex items-center gap-20 flex-wrap  justify-center duration-300">
        {levels.map((kyc) => (
          <KycCard key={kyc.level} {...kyc} showLevel={() => show(kyc.level)} />
        ))}
      </div>
    </section>
  );
};

export default KYCPage;
