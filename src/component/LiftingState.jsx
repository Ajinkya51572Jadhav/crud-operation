import React from 'react'

const LiftingState = (props) => {
  function childDataPass(data){
       let child= `child data pass ${data}`;
        
       return child;
  }
  
    return (
    <div>
    <div>LiftingState</div>
    <button onClick={()=>props.pass(()=>childDataPass('data'))}>data pass</button>
    </div>

    )
}

export default LiftingState;