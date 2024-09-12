"use client";

import { IoIosPersonAdd } from "react-icons/io";
import { useState } from "react";

export default function ModeratorPage() {
  const [address, setAddress] = useState("");

  function submit(e) {
    e.preventDefault();
    const data = new String(address);
    console.log(data);
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
    </div>
  );
}
