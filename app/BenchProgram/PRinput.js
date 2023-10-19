
import React from 'react'
import ProgramMaker from './ProgramMaker'
import data from './ProgramData'
import page from './page.js'
export default function PRinput(props){

function handleSubmit(event){
    event.preventDefault()
}
  return (
    <>
    <form onSubmit={handleSubmit}>  
    <input type="text" id="benchPR" name="benchPR" className='bg-gray-400'  
      
    onChange={props.handleChange} 
    />

    <button onClick={props.changeRender}>Submit</button>
    </form>
    
    </>
  )
}

