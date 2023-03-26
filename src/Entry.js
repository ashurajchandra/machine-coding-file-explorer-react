import React,{useState} from 'react';
import './App.css'

export default function Entry(props) {
  const [isExpanded, setIsExpanded] = useState(false)
    console.log("PROPS____",props)
    // console.log("DEPTH_____",props.depth)
    const {depth,child} = props
    console.log("depth",depth)
  return (
  <div style={{paddingLeft:props.depth*10 }}>
    {
   child?.children ?<div className='folder' onClick = {()=>{setIsExpanded(!isExpanded)}}>
   {isExpanded ?<p>-</p>:<p>+</p>}<h1> {props.child?.name}</h1>
   </div>:
   <div>
   <h1> {child?.name}</h1>
   </div>
    }

  {
    //recurssive call our Entry component till the time we get some children from props
    isExpanded &&
   props.child.children?.map((item,index)=><Entry key={index} child={item} depth={depth+1}/>)
  }
  </div>
  )
}
