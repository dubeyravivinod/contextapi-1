import { useState } from "react";
import B from "./B";
import myContext from "./myContext";

function A(props) {
  const [state, setState] = useState("name"); //string
  return (
    <div>
      <h2>A Component</h2>
      <button
        onClick={() => {
          setState("saiteja");
        }}
      >
        Change Data
      </button>
      <hr />
      <myContext.Provider value={state}>
        <B />
      </myContext.Provider>
    </div>
  );
}

export default A;
