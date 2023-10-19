'use client'
import React from 'react'
import PRinput from './PRinput'
import ProgramMaker from './ProgramMaker'
import data from './ProgramData'
import Reset from './ResetButton.js'

export default function Bench() {
 
  const [renderOrNot, setRenderOrNot] = React.useState(false)
  const [inputtedBenchPR, setBenchPR] = React.useState(0)
  function changeRender(){
      setRenderOrNot(true)
  }
  function resetRender(){
      setRenderOrNot(false)
      setBenchPR(0)
  }
  function handleChange(event) {
    setBenchPR(event.target.value)
  }
 
  
  const workouts = data.map(workout => {
    return <ProgramMaker key={workout.id} 
                  title={workout.title}
                  input={inputtedBenchPR}
                  set1= {workout.set1}
                  set2= {workout.set2}
                  set3= {workout.set3}
                  set4= {workout.set4}
                  set5= {workout.set5}
                  set6= {workout.set6}
                  shouldRender={renderOrNot}
                  />
  })

  return (
    <div>
        <h1>
            Input your bench PR:
        </h1>
        <PRinput changeRender={changeRender} inputtedBenchPR={inputtedBenchPR} handleChange={handleChange} />
        {renderOrNot&&<h1>Here is your program: </h1>}
        
        <div>
            {workouts}
            </div>
        <Reset resetRender={resetRender} />
    </div>
   
    
  )
}

