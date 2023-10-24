import React from 'react'

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
        
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <div className="carouselDiv">Finish every rep. Even if you fail, get a spotter to help you complete your rep goal. </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="carouselDiv"> Don&apos;t move on to the next workout unless you finish every single rep and set completely alone.</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="carouselDiv"> Each workout takes place on a different chest day, either once or twice a week depending on your split..
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className="carouselDiv">After workout 6, max out on day 7, take a deload week and then start over using your new max</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  
      </div>
      <div className="workoutSplitsLink">
       <h1 className='text-center' >
        Check out our recommended workout splits!
       </h1>
      </div>
    </div>
  )
}
