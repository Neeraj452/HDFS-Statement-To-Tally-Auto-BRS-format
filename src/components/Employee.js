import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {ID,Username,Full_name,Company,AddList} from '../actions/AccountStatementAction'
import EmployeeDerails from '../components/EmployeeDerails';

function Employee() {
      const dispatch = useDispatch()
      const myState = useSelector((store)=> store.accountStatementReducer )
      console.log(myState.ArrayData)
      return (
            <div>
                  <h3 className="heading">Employee Table</h3>
                <table className="table">
                      <tr>
                      <th>ID</th>
                      <th>Username</th>
                      <th>Full name</th>
                      <th>Company</th>
                      <th>ADD</th>
                      </tr>
                      <tr>
                            <td><input  type="text" onChange={(event)=> dispatch(ID(event.target.value))}   value={myState.id}/></td>
                            <td><input  type="text" onChange={(event)=> dispatch(Username(event.target.value))}   value={myState.username}/></td>
                            <td><input  type="text" onChange={(event)=> dispatch(Full_name(event.target.value))}   value={myState.full_name}/></td>
                            <td><input  type="text" onChange={(event)=> dispatch(Company(event.target.value))}   value={myState.company}/></td>
                            <td><button onClick={()=>dispatch(AddList())}>ADD</button></td>
                      </tr>
                </table>
                <EmployeeDerails/>
                
               
            </div>
      )
}

export default Employee
