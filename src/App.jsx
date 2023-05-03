import "./style.css";

export const BotonRow = ({value}) => {
  return (
    <>
      <button className="Square" >{value + 1}</button>
      <button className="Square" >{value + 2}</button>
      <button className="Square" >{value + 3}</button>
    </>
  );
};


export const Square = () => {
  return (
    <>
      <div className="boardRow">
        <BotonRow value={0} />
      </div>

      <div className="boardRow">
        <BotonRow value={3} />
      </div>

      <div className="boardRow">
        <BotonRow value={6} />
      </div>
    </>
  );
};
