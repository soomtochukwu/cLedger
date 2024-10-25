"use client";

import { IoIosPersonAdd } from "react-icons/io";
import { useState } from "react";
import Card from "./components/ModCard";

export default function ModeratorPage() {
  const [address, setAddress] = useState("");
  const [poll, setPoll] = useState([]);

  function submit(e) {
    e.preventDefault();
    let copy = new Date();
    const data = {
      name: String(address),
      time: copy.toLocaleTimeString(),
      date: copy.toLocaleDateString(),
    };
    const newObject = poll.concat(data);
    setPoll(newObject);
    setAddress("");
  }
  return (
    <div className="mb-3">
      <section>
        <form className=" space-y-4 text-left mt-4" onSubmit={submit}>
          <div>
            <input
              type="text"
              className="p-2 border-0 rounded bg-slate-50 text-nowrap w-2/3"
              placeholder="enter Modrerator address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-success ">
            add Moderator{" "}
            <span>
              <IoIosPersonAdd />
            </span>
          </button>
        </form>
      </section>
      {poll?.map((mod) => (
        <Card
          key={mod.name}
          name={mod.name}
          time={mod.time}
          date={mod.date}
          
        />
      ))}
    </div>
  );
}
