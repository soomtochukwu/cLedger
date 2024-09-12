import KYCLevelCard from "./KYCCard";

const KYCVerification = () => {
  const levels = [
    {
      level: 1,
      perks: [
        "Can participate on up to 100 public votes, and 15 private votes",
        "Create up to 10 public polls",
      ],
      requirements: ["Your BVN or NIN", "Your visual identity"],
      buttonText: "Start KYC",
      highlighted: true,
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
      buttonText: "Start KYC",
    },
    {
      level: 3,
      perks: [
        "Can participate on up to 500 public votes, and 50 private votes",
        "Can create up to 50 public votes and 15 private votes",
      ],
      requirements: [
        "Your proof of address",
        "Your recent 3 months utility bill",
      ],
      buttonText: "Start KYC",
    },
  ];

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-2">KYC Verification</h2>
      <p className="text-xl text-[#00ff85] mb-8">
        My KYC Level: <span className="font-semibold">Level 1</span>
      </p>

      <div className="flex flex-col gap-6 md:flex-row">
        {levels.map((level, index) => (
          <KYCLevelCard
            key={index}
            level={level.level}
            perks={level.perks}
            requirements={level.requirements}
            buttonText={level.buttonText}
            highlighted={level.highlighted}
          />
        ))}
      </div>
    </div>
  );
};

export default KYCVerification;
