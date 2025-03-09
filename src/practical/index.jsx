import { useState } from "react";
import "./index.css";

function PracticalInfo() {
  const [name, setname] = useState("");
  const [position, setposition] = useState("");
  const [responsible, setresponsible] = useState("");
  const [date, setdate] = useState("");
  const [date2, setdate2] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function changeName(event) {
    setname(event.target.value);
  }

  function changePosition(event) {
    setposition(event.target.value);
  }

  function changeResponsible(event) {
    setresponsible(event.target.value);
  }

  function changeDate(event) {
    setdate(event.target.value);
  }

  function changeDate2(event) {
    setdate2(event.target.value);
  }

  function ToggleIsSubmitted() {
    setIsSubmitted(!isSubmitted);
  }

  return (
    <div className="info-container">
      <h2>Practical</h2>
      {!isSubmitted ? (
        <>
          <label htmlFor="name">Company name</label>
          <input type="text" id="name" onChange={changeName} value={name} />
          <label htmlFor="position">Position in company</label>
          <input
            type="text"
            id="position"
            onChange={changePosition}
            value={position}
          />
          <label htmlFor="responsibilities">
            Main responsinilities of that position
          </label>
          <input
            type="text"
            id="responsibilities"
            onChange={changeResponsible}
            value={responsible}
          />
          <label htmlFor="date">From time of employment to end</label>
          <input type="date" id="date" onChange={changeDate} value={date} />
          <input
            type="date"
            name=""
            id="date2"
            onChange={changeDate2}
            value={date2}
          />
          <button type="button" onClick={ToggleIsSubmitted}>
            Submit
          </button>
        </>
      ) : (
        <>
          <p>Company name: {name}</p>
          <p>Position in company: {position}</p>
          <p>Main responsibilites: {responsible}</p>
          <p>
            Employed from: {date} to: {date2}
          </p>
          <button type="button" onClick={ToggleIsSubmitted}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default PracticalInfo;
