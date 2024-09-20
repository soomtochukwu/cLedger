const KYCLevelCard = ({
  level,
  perks,
  requirements,
  buttonText,
  highlighted = false,
}) => {
  return (
    <div
      className={`p-6 border rounded-lg text-nowrap text-left ${"hover:border-[#00ff85]"}`}
    >
      <h3
        className={`text-lg font-semibold mb-4 ${
          highlighted ? "text-[#010014]" : "text-[#020617]"
        }`}
      >
        Level {level}
      </h3>

      <div className="mb-6">
        <h4 className="font-semibold text-[#020617]">Perks</h4>
        <ul className="list-none text-sm text-[#010014]">
          {perks.map((perk, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-green-500">●</span> {perk}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-[#020617]">Requirements</h4>
        <ul className="list-none text-sm text-[#010014]">
          {requirements.map((requirement, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-green-500">●</span> {requirement}
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`w-full py-3 rounded-md text-white bg-gray-500 ${" hover:bg-[#00e074]"}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default KYCLevelCard;
