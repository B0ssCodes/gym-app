import React from 'react'
import PageText from './Text.jsx'
import WeightRepsInput from './weightRepsInput.js'
import PRCalcState from './PRCalcState.js'
export default function PRCalculator() {
  return (
    
        <div>
    
          <PageText />
          
          <div className="workoutMakerBody">
            <h1>
                Input your bench weight and reps:
            </h1>
            <PRCalcState />
          </div>
        </div>
       
        
    
  )
}
