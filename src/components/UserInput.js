import React from 'react'
import { useHistory } from 'react-router';


const UserInput=()=> {
      const history = useHistory() 
      const handleSubmit=()=>{
            history.push('/Employee')
      }
      return (
            <div>
                  <div className="Employee">
                  <lebel className="lebel1">AWS Token</lebel><input type="text" value="**************"></input>
                  </div>
                  <div className="Employee1">
                  <lebel className="lebel2">AWS Secret Key</lebel><input type="text" value="AKIAJSIE27KKMHXI3BJQ"/>
                  </div>
                 <button type="button" className="btn1" onClick={handleSubmit}>Submit</button>
                 </div>
      )
}

export default UserInput;
