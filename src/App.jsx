import "./style.css";
import { useState } from "react";

export const BotonRow = ({ value }) => {
  const [valueX, putX] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          putX("X");
        }}
        className="Square"
      >
        {valueX}
      </button>
    </>
  );
};

export const Square = () => {
  return (
    <>
      <div className="boardRow">
        <BotonRow />
        <BotonRow />
        <BotonRow />
      </div>

      <div className="boardRow">
        <BotonRow />
        <BotonRow />
        <BotonRow />
      </div>

      <div className="boardRow">
        <BotonRow />
        <BotonRow />
        <BotonRow />
      </div>
    </>
  );
};
