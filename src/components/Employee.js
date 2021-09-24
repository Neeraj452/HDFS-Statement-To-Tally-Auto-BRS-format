import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {addList, employeeUpdate,dataDelete} from '../actions/AccountStatementAction'


function Employee() {

      const [username, setUsername] = useState("");
      const [full_name, setFull_name] = useState("");
      const [company, setCompany] = useState("");
      const dispatch = useDispatch()
      const myState = useSelector((store)=> store.accountStatementReducer )

      const handleSubmit= (e)=>{
            e.preventDefault();
            const data = {
                  id: myState.EmployeeData.length > 0 ? myState.EmployeeData[myState.EmployeeData.length - 1].id + 1 : 1,
                  username,
                  full_name,
                  company,
                };
            dispatch(addList(data))
      }
      
      return (
            <div>
                  <h3 className="heading">Employee Table</h3>
                  <form onSubmit={handleSubmit}>
                <table className="table table-striped">
                     
                      <tr>
                      <th>Serial NO.</th>
                      <th>Username</th>
                      <th>Full name</th>
                      <th>Company</th>
                      <th>ADD</th>
                      </tr>
                 
                      <tbody>
                      <tr>
                            <td><input  type="text" value="#"/></td>
                            <td><input  type="text" onChange={(event)=> setUsername(event.target.value)}  value={username}/></td>
                            <td><input  type="text" onChange={(event)=> setFull_name(event.target.value)}   value={full_name}/></td>
                            <td><input  type="text" onChange={(event)=> setCompany(event.target.value)}   value={company}/></td>
                            <td><button type="submit" className="btn-primary" >ADD</button></td>
                            
                      </tr>
                      </tbody>
                      { 
                     myState.EmployeeData.map((Element,index)=>{
                           const {id,username,full_name,company}=Element;
                           return (
                                 <tbody>
                                 <tr>
                                       <td><input  className ="input1" value={id}/></td>
                                       <td><input className ="input1" value={username} onChange={(event)=> dispatch(employeeUpdate({
                                                   index: index,
                                                   type: 'username',
                                                   value: event.target.value
                                                     }))} /></td>   
                                       <td><input className ="input1"  onChange ={(event)=>dispatch(employeeUpdate({
                                             index:index,
                                             type:'fullname',
                                             value:event.target.value}))} value={full_name}/></td>
                                       <td> <input className ="input1" onChange={(event)=> dispatch(employeeUpdate({
                                             index:index,
                                             type:'company',
                                             value:event.target.value}))} value={company}/></td>
                                       <td><button onClick={()=>dispatch(dataDelete(id))} className="btn-danger">Delete</button></td>
                                  </tr>
                                  </tbody>
                           )
                           
                     })
               }
                </table>
                </form>
            </div>
      )
}

export default Employee
