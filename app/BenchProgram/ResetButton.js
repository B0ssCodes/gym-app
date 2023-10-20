export default function Reset(props){
    return(
        <>
        {props.isRendered&&(<div>
        <button  onClick={props.resetRender} className ="btn-primary btn rounded-full" >Reset</button>
        </div>
        )}
        </>
    )
}