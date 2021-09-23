import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {User_ID,DeleteData,employeeUpdate, User_Full_name, User_Company} from '../actions/AccountStatementAction'
function EmployeeDerails() {
      const dispatch = useDispatch()
      const myState = useSelector((store)=> store.accountStatementReducer )
      return (
            <div>
                  <h3 className="heading">Employee Details</h3>
                    <table className="table input1">
                    <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Full name</th>
                    <th>Company</th>
                    <th>Delete</th>
                    </tr>
              
                     { 
                     myState.ArrayData.map((Element,index)=>{
                           const {id,username,full_name,company}=Element;
                           return (
                                 <tr>
                                       <td><input  className ="input1" onChange={(event)=> dispatch(User_ID(event.target.value))} value={id}/></td>
                                       <td><input className ="input1"  onChange={(event)=> dispatch(employeeUpdate({
                                                   index: index,
                                                   type: 'username',
                                                   value: event.target.value
                                                     }))} value={username}/></td>   
                                       <td><input className ="input1"  onChange={(event)=> dispatch(User_Full_name(event.target.value))}  value={full_name}/></td>
                                       <td> <input className ="input1" onChange={(event)=> dispatch(User_Company(event.target.value))}value={company}/></td>
                                       <td><button onClick={()=>dispatch(DeleteData(id))}>Click Here</button></td>
                                  </tr>
                           )
                           
                     })
               }
                  </table>    
            </div>
      )
}

export default EmployeeDerails
