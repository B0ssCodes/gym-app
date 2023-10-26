import React from 'react'
import Carousel from '../Components/Carousel'
import BenchPRCalculatorButton from './BenchPRCalculatorButton'
import WorkoutSplitButton from './WorkoutSplitButton'

export default function PageText() {
  return (
    <div className="textContainer" >
      <h1 className='text-3xl justify-self-center font-bold'>Welcome to the Bench Workout Maker!</h1>
      <div className="text1">
        <h1>
          What is it?
        </h1>
        <br />
        <p>
              Our Bench Workout Maker uses an advanced mathematical formula that takes your bench press PR and turns it into a 6 week program that will help you increase your bench press strength. 
       </p>
      </div>
        <h1 className='my-3 font-medium'>
          Not sure what your PR is? 
        </h1>
        <br />
        <BenchPRCalculatorButton />
        <br />
        <br />
        <h1 className='mt-4 font-semibold text-xl'>Rules: </h1>
      
      <div className="text3 ml-5">
        
        
      <Carousel />
  
      </div>
      <div className="workoutSplitsLink">
      <WorkoutSplitButton />
      </div>
    </div>
  )
}
