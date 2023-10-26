import React from 'react'

export default function Carousel() {
  return (
    <div>
<div className="carousel w-full ">
  <div id="item1" className="carousel-item w-full">
  <div className="carouselDiv">Finish every rep. Even if you fail, get a spotter to help you complete your rep goal. </div>
  </div> 
  <div id="item2" className="carousel-item w-full">
  <div className="carouselDiv">Don&apos;t move on to the next workout unless you finish every single rep and set completely alone. </div>
  </div> 
  <div id="item3" className="carousel-item w-full">
  <div className="carouselDiv">Each workout takes place on a different chest day, either once or twice a week depending on your split.. </div>
  </div> 
  <div id="item4" className="carousel-item w-full">
  <div className="carouselDiv">After workout 6, max out on day 7, take a deload week and then start over using your new max </div>
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
</div>
  )
}

