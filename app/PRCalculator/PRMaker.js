import React from 'react'

export default function PRMaker(props) {
  
  var weight = props.weight;
  var reps = props.reps;
  var personalRecord = weight * (36/(37-reps))
  var personalRecordNoDecimals = (Math.trunc(personalRecord))
    return (
    <div className='workoutBox'>
        <p>
            Your estimated PR is: {personalRecordNoDecimals}
        </p>
    </div>
  )
}
