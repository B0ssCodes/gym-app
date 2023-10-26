'use client'
import React from 'react'
import WeightRepsInput from './weightRepsInput'
import PRMaker from './PRMaker'

export default function PRCalcState() {
 
    const [renderOrNot, setRenderOrNot] = React.useState(false)
    const [inputtedWeight, setInputtedWeight] = React.useState("")
    const [inputtedReps, setInputtedReps] = React.useState("")
    const [weightToMaker, setWeightToMaker] = React.useState(0)
    const [repsToMaker, setRepsToMaker] = React.useState(0)

    function changeRender(){
        setRenderOrNot(true)
    }

    function handleWeightChange(event){
      setInputtedWeight(event.target.value)
    }

    function handleRepsChange(event){
        setInputtedReps(event.target.value)
    }
    
    function setWeight(){
        setWeightToMaker(inputtedWeight)
    }
    function setReps(){
        setRepsToMaker(inputtedReps)
    }
 return (
    <div>
        
      
        <div className='inputBlock'>
            <div className='inputTextButton'>
            <WeightRepsInput inputtedWeight={inputtedWeight} 
            inputtedReps={inputtedReps} 
            handleWeightChange={handleWeightChange}
            handleRepsChange={handleRepsChange} 
            setWeight={setWeight} 
            setReps={setReps} 
            changeRender={changeRender}/>
            </div>
            
            </div>  
            {renderOrNot&&<div className='prOutput' >
      <PRMaker weight={weightToMaker} reps={repsToMaker} renderOrNot={renderOrNot}/>
      </div>
}
    </div>
  )
}
