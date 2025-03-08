import { useState } from 'react'
import './App.css'
import GeneralInfo from './general'
import EducationInfo from './educational'
import PracticalInfo from './practical'

function App() {

  return (
    <div id='container'>
      <GeneralInfo />
      <EducationInfo />
      <PracticalInfo />
    </div>
  )
}

export default App
