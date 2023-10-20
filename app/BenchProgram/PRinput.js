
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
    <form onSubmit={handleSubmit}>  
    <input type="text" id="benchPR" name="benchPR" className='input input-bordered input-primary ' placeholder='Enter your bench PR'
    onChange={props.handleChange} value= {props.inputtedBenchPR}/>
    <br />

    <button   onClick={props.changeRender} className='btn-primary btn rounded-full '>Submit</button>
    </form>
    
    </div>
  )
}
