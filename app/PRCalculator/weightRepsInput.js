'use client'
import React from 'react'

export default function WeightRepsInput(props){

    function handleSubmit(event){
        event.preventDefault()
        props.setWeight()
        props.setReps()
    
    }
      return (
        <div className="formClass">
        <form onSubmit={handleSubmit} className="formFormClass">  
        
        <input type="number" id="weight" name="weight" placeholder='Enter weight'  className='input input-bordered input-primary mb-2 rounded-2xl' 
        onChange={props.handleWeightChange} value= {props.inputtedWeight} />
    
    
    <input type="number" id="reps" name="reps" placeholder='Enter reps'  className='input input-bordered input-primary mb-2 rounded-2xl' 
        onChange={props.handleRepsChange} value= {props.inputtedReps} />
      
        <button   onClick={props.changeRender}  className='btn-primary btn rounded-full '>Submit</button>
        </form>
        
        </div>
      )
    }