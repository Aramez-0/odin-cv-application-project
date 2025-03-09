import { useState } from "react";
import "./index.css";

function GeneralInfo() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [phoneNum, setphoneNum] = useState("");
  const [email, setemail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function changeFname(event) {
    setfname(event.target.value);
  }

  function changeLname(event) {
    setlname(event.target.value);
  }

  function changePhoneNum(event) {
    setphoneNum(event.target.value);
  }

  function changeEmail(event) {
    setemail(event.target.value);
  }

  function ToggleIsSubmitted() {
    setIsSubmitted(!isSubmitted);
  }

  return (
    <div className="info-container">
      <h2>Details</h2>
      {!isSubmitted ? (
        <>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" onChange={changeFname} value={fname} />
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" onChange={changeLname} value={lname} />
          <label htmlFor="phoneNum">Phone Number</label>
          <input
            type="tel"
            name=""
            id="phoneNum"
            onChange={changePhoneNum}
            value={phoneNum}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name=""
            id="email"
            onChange={changeEmail}
            value={email}
          />
          <button type="button" onClick={ToggleIsSubmitted}>
            Submit
          </button>
        </>
      ) : (
        <>
          <p>
            Name: {fname} {lname}
          </p>
          <p>Phone number: {phoneNum}</p>
          <p>Email: {email}</p>
          <button type="button" onClick={ToggleIsSubmitted}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default GeneralInfo;
