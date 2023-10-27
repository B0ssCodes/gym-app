import React from 'react'
import Carousel from '../Components/Carousel'
import BenchPRCalculatorButton from './BenchPRCalculatorButton'
import WorkoutSplitButton from './WorkoutSplitButton'

export default function PageText() {
  return (
    <div className="textContainer" >
      <h1 className='text-3xl justify-self-center font-bold'>Welcome to the PR Calculator!</h1>
      <div className="text1">
        <h1>
          What is it?
        </h1>
        <br />
        <p>
              Our PR Calculator uses an advanced mathematical formula that takes your bench press weight and reps then outputs your expected 1 rep max.
       </p>
      </div>
        <h1 className='my-2 font-bold'>
          Alread know your PR? 
        </h1>
        
        <BenchPRCalculatorButton />
       
        <h1 className='mt-1 font-semibold text-xl'>How to use: </h1>
      <div className='my-1'>
        <p>To make this PR Calculator work as intended please input your bench weight and a rep range between 5-12</p>
      </div>
      
      <div className="workoutSplitsLink my-2">
      <WorkoutSplitButton />
      </div>
    </div>
  )
}
