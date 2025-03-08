import { useState } from "react";
import './index.css'

function PracticalInfo() {
    return (
        <div id="practical-container">
            <h2>Practical</h2>
            <label htmlFor="name">Company name</label>
            <input type="text" id="name"/>
            <label htmlFor="position">Position in company</label>
            <input type="text" id="position"/>
            <label htmlFor="responsibilities">Main responsinilities of that position</label>
            <input type="text" id="responsibilities"/>
            <label htmlFor="date">From time of employment to end</label>
            <input type="date" id="date"/>
        </div>
    )
}

export default PracticalInfo