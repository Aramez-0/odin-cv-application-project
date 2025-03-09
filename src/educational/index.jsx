import { useState } from "react";
import "./index.css";

function EducationInfo() {
  const [school, setSchool] = useState("");
  const [Sstudy, setSstudy] = useState("");
  const [Dstudy, setDstudy] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function changeSchool(event) {
    setSchool(event.target.value);
  }

  function changeSstudy(event) {
    setSstudy(event.target.value);
  }

  function changeDstudy(event) {
    setDstudy(event.target.value);
  }

  function ToggleIsSubmitted() {
    setIsSubmitted(!isSubmitted);
  }

  return (
    <div className="info-container">
      <h2>Education</h2>
      {!isSubmitted ? (
        <>
          <label htmlFor="school">Place of education</label>
          <input
            type="text"
            id="school"
            onChange={changeSchool}
            value={school}
          />
          <label htmlFor="Tstudy">Subject of study</label>
          <input
            type="text"
            id="Sstudy"
            onChange={changeSstudy}
            value={Sstudy}
          />
          <label htmlFor="Dstudy">Date of study completion</label>
          <input
            type="date"
            id="Dstudy"
            onChange={changeDstudy}
            value={Dstudy}
          />
          <button type="button" onClick={ToggleIsSubmitted}>
            Submit
          </button>
        </>
      ) : (
        <>
          <p>Place of education: {school}</p>
          <p>Subject of study: {Sstudy}</p>
          <p>Date of study completion: {Dstudy}</p>
          <button type="button" onClick={ToggleIsSubmitted}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default EducationInfo;
