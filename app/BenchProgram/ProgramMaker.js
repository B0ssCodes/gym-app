
import React from 'react'
export default function ProgramMaker(props) {

    var set1Rounded = 2.5 * Math.ceil(((props.set1)*props.input)/2.5)
    var set2Rounded = 2.5 * Math.ceil(((props.set2)*props.input)/2.5)
    var set3Rounded = 2.5 * Math.ceil(((props.set3)*props.input)/2.5)
    var set4Rounded = 2.5 * Math.ceil(((props.set4)*props.input)/2.5)
    var set5Rounded = 2.5 * Math.ceil(((props.set5)*props.input)/2.5)
    var set6Rounded = 2.5 * Math.ceil(((props.set6)*props.input)/2.5)
    var render6 = false

    if(set6Rounded === 0){
        render6 = false
    }
    else{
        render6 = props.shouldRender
    }
   
return(
   
    <div className='m-4'>
    {props.shouldRender &&<h2>{props.title}</h2>}
    {props.shouldRender &&<h2>Set 1: {set1Rounded} x{props.reps1} </h2>}
    {props.shouldRender &&<h2>Set 2: {set2Rounded} x{props.reps2}</h2>}
    {props.shouldRender &&<h2>Set 3: {set3Rounded} x{props.reps3}</h2>}
    {props.shouldRender &&<h2>Set 4: {set4Rounded} x{props.reps4}</h2>}
    {props.shouldRender &&<h2>Set 5: {set5Rounded} x{props.reps5}</h2>}
    {render6&&<h2>Set 6: {set6Rounded} x{props.reps6}</h2>}
    </div>
)

}
