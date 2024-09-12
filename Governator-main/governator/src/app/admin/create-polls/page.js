"use client";

import { useState } from "react";
export default function CreatePoll() {
  const [info, setInfo] = useState({
    candidate1: "",
    candidate2: "",
    location: "",
    position: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setInfo((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      candidate1: info.candidate1,
      candidate2: info.candidate2,
      location: info.location,
      position: info.position,
      purpose: info.purpose,
    };
    console.log(data);
  }

  return (
    <div className="  mt-4  ">
      <section className="w-2/3 h-full bg-[#1a1a2e] p-6 rounded-lg border border-[#00ff85] min-w-full">
        <h2 className="text-lg font-semibold text-[#00ff85] mb-4">New Poll</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="candidate1"
            placeholder="enter name of candidate 1"
            className="w-full px-4 py-3 bg-[#010014] text-white border border-[#00ff85]  rounded-md focus:outline-none"
            onChange={handleChange}
            value={info.candidate1}
            required
          />
          <input
            type="text"
            name="candidate2"
            placeholder="enter name of candidate 2"
            className="w-full px-4 py-3 bg-[#010014] text-white border border-[#00ff85] rounded-md focus:outline-none"
            onChange={handleChange}
            value={info.candidate2}
            required
          />

          <div className="flex flex-col  md:flex-row gap-4 w-full">
            <input
              type="text"
              name="location"
              placeholder="Location or Institution where the election is goin on"
              className="flex-1 px-4 py-3 bg-[#010014] text-white border border-[#00ff85] rounded-md focus:outline-none"
              onChange={handleChange}
              value={info.location}
              required
            />
            <input
              type="text"
              name="position"
              placeholder="Position being contested in the election."
              className="flex-1 px-4 py-3 bg-[#010014] text-white border border-[#00ff85] rounded-md focus:outline-none"
              onChange={handleChange}
              value={info.position}
              required
            />
          </div>

          <div className="flex gap-4">
            <textarea
              type="text"
              name="purpose"
              placeholder="Purpose of the election "
              className="w-full px-4 py-3 bg-[#010014] text-white border border-[#00ff85] rounded-md focus:outline-none"
              onChange={handleChange}
              s
              cols={30}
              value={info.purpose}
              required
            />
          </div>

          <button className="w-full py-3 mt-4 bg-[#00ff85] text-black rounded-md hover:bg-[#00e074]">
            Create Poll
          </button>
        </form>
      </section>
    </div>
  );
}
