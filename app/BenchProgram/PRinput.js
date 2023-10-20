
import React from 'react'
import ProgramMaker from './ProgramMaker'
import data from './ProgramData'
import page from './page.js'
export default function PRinput(props){

function handleSubmit(event){
    event.preventDefault()
}
  return (
    <div className="formClass">
    <form onSubmit={handleSubmit} className="formFormClass">  
    
    <input type="number" id="benchPR" name="benchPR" placeholder='Enter your bench PR'  className='input input-bordered input-primary mb-2 rounded-2xl' 
    onChange={props.handleChange} value= {props.inputtedBenchPR} disabled = {!props.disableOrNot}/>



  
    <button   onClick={props.changeRender}  className='btn-primary btn rounded-full '>Submit</button>
    </form>
    
    </div>
  )
}
