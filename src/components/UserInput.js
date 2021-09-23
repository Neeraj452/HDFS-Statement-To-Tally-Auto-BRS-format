import React from 'react'
import { NavLink} from 'react-router-dom';


const UserInput=()=> {
      return (
            <div>
                  <div className="Employee">
                  <h1>Hii Employee</h1>
                  <lebel>AWS Token</lebel><input type="text"/>
                  </div>
                  <div className="Employee1">
                  <lebel>AWS Secret Key</lebel><input type="text"/>
                  </div>
                 <NavLink type="button" className="btn1" to="/Employee">Login</NavLink>
                 </div>
      )
}

export default UserInput;
