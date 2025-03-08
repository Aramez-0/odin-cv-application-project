import { useState } from "react";
import './index.css'

function GeneralInfo() {
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [phoneNum, setphoneNum] = useState('')
    const [email, setemail] = useState('')

    function changeFname(event) {
        setfname(event.target.value)
    }

    function changeLname(event) {
        setlname(event.target.value)
    }

    function changePhoneNum(event) {
        setphoneNum(event.target.value)
    }

    function changeEmail(event) {
        setemail(event.target.value)
    }

    return (
        <div id="general-container">
            <h2>Details</h2>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" onChange={changeFname}/>
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" onChange={changeLname}/>
            <label htmlFor="phoneNum">Phone Number</label>
            <input type="tel" name="" id="phoneNum" onChange={changePhoneNum}/>
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="email" onChange={changeEmail}/>
        </div>
    )
}

export default GeneralInfo