'use client'
import React from 'react'
import PRinput from './PRinput'
import ProgramMaker from './ProgramMaker'
import data from './ProgramData.js'
import Reset from './ResetButton.js'


export default function ClientState() {
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
                  reps1= {workout.reps1}
                  reps2= {workout.reps2}
                  reps3= {workout.reps3}
                  reps4= {workout.reps4}
                  reps5= {workout.reps5}
                  reps6= {workout.reps6}
                  shouldRender={renderOrNot}
                  />
  })
  
    return (
        <div className="inputBlock">
          <div className="inputTextButton">
          <PRinput changeRender={changeRender} inputtedBenchPR={inputtedBenchPR}
           handleChange={handleChange}  disableOrNot= {renderOrNot}/>
        
          </div>
          {renderOrNot&&<h1>Here is your program: </h1>}
        {renderOrNot&&<div className='allWorkouts'>
            {workouts}
            </div>
}
        <Reset resetRender={resetRender} isRendered={renderOrNot} />
        </div>
  
  )
}
