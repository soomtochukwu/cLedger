import { createContext, useReducer } from "react";

const ContextState = createContext("");

const formStructure = {
  title: {
    inputType: "input",
    elementConfig: {
      type: "text",
      name: "title",
      placeholder: " title",
      label: "Title",
      styles: "full",
    },
    value: "",
  },
  description: {
    inputType: "textarea",
    elementConfig: {
      type: "text",
      name: "description",
      placeholder: " what are you voting for",
      rows: 3,
      label: "Description",
      styles: "full",
    },
    value: "",
  },
  startdate: {
    inputType: "input",
    elementConfig: {
      type: "text",
      name: "title",
      placeholder: "Start date",
      label: "Start date",
      styles: "half",
    },
    value: "",
  },
  enddate: {
    inputType: "input",
    elementConfig: {
      type: "text",
      name: "title",
      placeholder: "end date",
      label: "End Date",
      styles: "half",
    },
    value: "",
  },
  timetoendpoll: {
    inputType: "input",
    elementConfig: {
      type: "text",
      name: "title",
      placeholder: "time to end poll",
      label: "End Poll",
      styles: "half",
    },
    value: "",
  },
  visibilitiy: {
    inputType: "select",
    elementConfig: {
      options: [
        { value: "visible", displayValue: "visible" },
        { value: "not visible", displayValue: "not visible" },
      ],
      label: "Visibilitiy",
      styles: "half",
    },
    value: "visible",
  },
  typeofvote: {
    inputType: "input",
    elementConfig: {
      type: "checkbox",
      name: "votetype",
      label: " Type of Vote",
      styles: "check",
    },
    checked: false,
  },
  multiselect: {
    inputType: "input",
    elementConfig: {
      type: "checkbox",
      name: "multiselect",
      label: "Multi-select",
      styles: "check",
    },
    checked: false,
  },
  // candidates: [],
};
export const InitialState = {
  form: formStructure,
  addCandidate: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "FORM":
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: {
            ...state.form[action.field],
            value: action.value,
          },
        },
      };
    case "ADD CANDIDATE":
      return {
        ...state,
        addCandidate: [...state.addCandidate, action.payload],
      };
    case "DELETE":
      return {
        ...state,
        addCandidate: state.addCandidate.filter(
          (candidate) => candidate.id !== action.payload
        ),
      };
    case "EDIT":
      return {
        ...state,
        addCandidate: state.addCandidate.map((candidate) =>
          candidate.id === action.payload.id
            ? { ...candidate, text: action.payload.text }
            : candidate
        ),
      };

    default:
      return state;
  }
};

export const ActionType = {
  FORM: "FORM",
  ADDCANDIDATE: "ADD CANDIDATE",
  DELETE: "DELETE",
  EDIT: "EDIT",
};

export function former(content) {
  let formArr = [];
  for (const key in content.form) {
    formArr.push({
      id: key,
      config: content.form[key],
    });
  }
  return formArr;
}

export default function FormProvider({ childern }) {
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <ContextState.Provider value={{ state, dispatch }}>
      {childern}
    </ContextState.Provider>
  );
}

export { ContextState };
