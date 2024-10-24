import { useState } from "react";
import { RiDeleteBin4Line, RiEdit2Fill } from "react-icons/ri";
const Input = (props) => {
  let inputAttribute = null;

  if (props.inputType === "input") {
    inputAttribute = (
      <input
        {...props.inputConfig}
        onChange={props.onChange}
        value={props.value}
        className={"w-full p-2 rounded-lg  outline-0 "}
      />
    );
  } else if (props.inputType === "textarea") {
    inputAttribute = (
      <textarea
        {...props.inputConfig}
        onChange={props.onChange}
        value={props.value}
        className={"w-full p-2 rounded-lg  outline-0 "}
      />
    );
  } else if (props.inputType === "select") {
    inputAttribute = (
      <select
        value={props.value}
        className={"w-full p-2 rounded-lg  outline-0"}
        onChange={props.onChange}
      >
        {props.inputConfig.options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={"w-full p-2 rounded-lg "}
          >
            {option.displayValue}
          </option>
        ))}
      </select>
    );
  } else {
    inputAttribute = <input {...props.inputConfig} value={props.value} />;
  }
  return (
    <div
      className={
        props.style === "check"
          ? "inline-flex items-center gap-5 w-1/2 text-left"
          : props.style === "half"
          ? "inline-flex items-center mr-2 w-80 md:flex-col gap-5 justify-items-end text-left "
          : " text-left"
      }
    >
      <label
        className={
          props.style === "half" ? "  w-fit text-nowrap" : " text-nowrap "
        }
      >
        {props.label}
      </label>
      {inputAttribute}
    </div>
  );
};

const DropArea = ({ Drop }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <section
      droppable="true"
      onDragEnter={() => setIsDragging(true)}
      onDragLeave={() => setIsDragging(false)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        setIsDragging(false);
        Drop(e);
      }}
      className={
        ("h-2/3 border-2 border-dashed p-4 transition-all",
        isDragging ? "border-green-500 bg-green-100" : "border-gray-300")
      }
    >
      <p className="text-[.6rem]">Drop here</p>
    </section>
  );
};

const Card = ({ item, editProp, autoSave, deleteName, editName }) => {
  return (
    <div className="w-full">
      <p
        contentEditable={editProp}
        suppressContentEditableWarning
        onBlur={autoSave}
        className="border border-warning rounded-lg p-2 mb-2 bg-gray-100 text-black hover:bg-white hover:text-black inline-flex w-full gap-1 items-center"
      >
        {item}
        <span className="ml-auto" onClick={deleteName}>
          <RiDeleteBin4Line className="text-error cursor-pointer" />
        </span>
        <span className="" onClick={editName}>
          <RiEdit2Fill className="text-primary cursor-pointer" />
        </span>
      </p>
    </div>
  );
};

export { Input, Card, DropArea };
