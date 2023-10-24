
import React from 'react'
import PRinput from './PRinput'
import ProgramMaker from './ProgramMaker'
import data from './ProgramData.js'
import Reset from './ResetButton.js'
import styles from './styles.modules.css'
import ClientState from './clientState.jsx'
import PageText from './Text.jsx'



export default function Bench() {
 

  return (
    <div>

      <PageText />
      
      <div className="workoutMakerBody">
        <h1>
            Input your bench PR:
        </h1>
        <ClientState />
      </div>
    </div>
   
    
  )
}

