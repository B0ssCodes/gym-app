import React from 'react'
import Carousel from '../Components/Carousel'

export default function PageText() {
  return (
    <div className="textContainer" >
      <h1 className='text-2xl justify-self-center'>Welcome to the Bench Workout Maker!</h1>
      <div className="text1">
        <h1>
          What is it?
        </h1>
        <br />
        <p>
              Our Bench Workout Maker uses an advanced mathematical formula that takes your bench press PR and turns it into a 6 week program that will help you increase your bench press strength. 
       </p>
      </div>
      <div className="text2">
        <h1>
          Not sure what your PR is? 
        </h1>
        <h2>
          Check out our Bench PR Calculator!
        </h2>
      </div>
      <div className="text3">
        <h1>Rules: </h1>
        <br />
        
      <Carousel />
  
      </div>
      <div className="workoutSplitsLink">
       <h1 className='text-center' >
        Check out our recommended workout splits!
       </h1>
      </div>
    </div>
  )
}
