import { useState } from "react";
import './index.css'

function EducationInfo() {
    
    
    return (
        <div id="education-container">
            <h2>Education</h2>
            <label htmlFor="school">Place of education</label>
            <input type="text" id="school"/>
            <label htmlFor="Tstudy">Subject of study</label>
            <input type="text" id="Tstudy"/>
            <label htmlFor="Dstudy">Date of study completion</label>
            <input type="date" id="Dstudy"/>
        </div>
    )
}

export default EducationInfo