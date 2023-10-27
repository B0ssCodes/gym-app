import React from 'react'

export default function Carousel() {
  return (
    <div>
<div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
  <div className="carouselDiv">Finish every rep. Even if you fail, get a spotter to help you complete your rep goal. </div>
  </div> 
  <div id="item2" className="carousel-item w-full">
  <div className="carouselDiv">Finish every rep. Even if you fail, get a spotter to help you complete your rep goal. </div>
  </div> 
  <div id="item3" className="carousel-item w-full">
  <div className="carouselDiv">Finish every rep. Even if you fail, get a spotter to help you complete your rep goal. </div>
  </div> 
  <div id="item4" className="carousel-item w-full">
  <div className="carouselDiv">Finish every rep. Even if you fail, get a spotter to help you complete your rep goal. </div>
  </div>
</div> 
<div className="flex justify-center w-full py-1 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
</div>
  )
}

