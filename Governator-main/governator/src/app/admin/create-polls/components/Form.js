import { MdAddToQueue } from "react-icons/md";
import { Card, Input } from "./InputComp";
import { InitialState, ActionType, reducer, former } from "./ReducerContext";
import { Fragment, useReducer, useState } from "react";
import { RiUserAddFill } from "react-icons/ri";
export default function Forms() {
  const [state, dispatch] = useReducer(reducer, InitialState);

  let extracted = former(state);

  const handle = (e, identifier) => {
    const { value, type, checked } = e.target;
    dispatch({
      type: ActionType.FORM,
      field: identifier,
      value: type === "checkbox" ? checked : value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    extracted.map((value) => {
      return { name: value.id, value: value.config.value };
    });
  };

  return (
    <section className=" ">
      <form className=" text-white space-y-4 text-center " onSubmit={submit}>
        {extracted.map((formOrder) => (
          <Fragment key={formOrder.id}>
            <Input
              label={formOrder.config.elementConfig.label}
              inputType={formOrder.config.inputType}
              inputConfig={formOrder.config.elementConfig}
              style={formOrder.config.elementConfig.styles}
              value={formOrder.config.value}
              onChange={(e) => handle(e, formOrder.id)}
            />
          </Fragment>
        ))}

        <button className="btn btn-success ">
          create poll <MdAddToQueue />
        </button>
      </form>
    </section>
  );
}

export const MultiOption = (props) => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  const [candidate, setCandidate] = useState("");
  const [editMode, setEditMode] = useState(false);

  const change = (e) => {
    setCandidate(e.target.value);
  };

  function geneRate() {
    const value = Math.floor(Math.random() * (1000 - 1)) + 1;
    return value;
  }

  const clicker = (e) => {
    e.preventDefault();
    if (!candidate.trim()) return;
    const info = { id: geneRate(), text: candidate };
    dispatch({
      type: ActionType.ADDCANDIDATE,
      payload: info,
    });
    setCandidate("");
  };
  const DeletePerson = (id) => {
    dispatch({
      type: ActionType.DELETE,
      payload: id,
    });
  };

  const EditPerson = (id, changedText) => {
    setEditMode(true);
    dispatch({
      type: ActionType.EDIT,
      payload: { id, text: changedText },
    });
  };

  const saveEditedPerson = (id, event) => {
    const newText = event.target.innerText.trim();
    if (newText) {
      dispatch({
        type: ActionType.EDIT,
        payload: { id, text: newText },
      });
    }
    setEditMode(false);
  };

  console.log(state.addCandidate);

  return (
    <div
      className={`text-white space-y-2 ${
        props.disable && "pointer-events-none"
      }`}
    >
      <Input inputType="input" onChange={change} value={candidate} />
      <button onClick={clicker} className="btn btn-square w-fit px-1">
        Add Candidate
        <RiUserAddFill />
      </button>

      <div>
        {state.addCandidate?.map((item) => (
          <Fragment key={item.id}>
            <Card
              editProp={editMode}
              item={item.text}
              autoSave={(e) => saveEditedPerson(item.id, e)}
              deleteName={() => DeletePerson(item.id)}
              editName={() => EditPerson(item.id, item.text)}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
