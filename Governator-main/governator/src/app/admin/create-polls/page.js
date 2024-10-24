"use client";
import Forms, { MultiOption } from "./components/Form";
export default function CreatePoll() {
  return (
    <>
      <div className="flex w-full gap-2  ">
        <section className=" bg-black w-2/3 rounded-lg p-4 ">
          <h4 className="card-title text-success capitalize py-2">new poll</h4>
          <div>
            <Forms />
          </div>
        </section>
        <section className=" bg-black md:w-1/3 rounded-lg p-2 w-fit ">
          <h4 className="card-title text-success capitalize py-2">
            multi-select option
          </h4>
          <MultiOption />
        </section>
      </div>
    </>
  );
}
