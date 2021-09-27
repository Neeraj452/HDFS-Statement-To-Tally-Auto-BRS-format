import React, {useState,useEffect} from 'react'
import productdb, {
      bulkcreate
} from './DB'
import { useSelector, useDispatch } from 'react-redux';
import {addList, employeeUpdate,dataDelete} from '../actions/AccountStatementAction'

function Employee() {
    
      const [username, setUsername] = useState("");
      const [full_name, setFull_name] = useState("");
      const [company, setCompany] = useState("");
      const dispatch = useDispatch()
      const myState = useSelector((store)=> store.accountStatementReducer);
      var db
      useEffect(() => {
            db = productdb("ProductsDB",{
            products:'++id,name,seller,price'})      
      })
      const handleSubmit= (e)=>{
            e.preventDefault();
            let flag=bulkcreate(db.products,{
                  name:username,
                  seller:full_name,
                  price:company
            })
            console.log(flag);
           
           
            // if('indexedDb' in window){
            //       console.log("yor browser not supported")
            //       return 
            // }
            // const dbname = "myDB";
            // const requestDB = window.indexedDB.open(dbname);
            // requestDB.onupgradeneeded = ()=>{
            //    let db = requestDB.result;
            //    let store = db.createObjectStore("Employee",{autoIncrement:true})
            //    store.put({username:"neeraj",full_name:"Neeraj Maurya"})
            //    store.put({username:"dfsdg",full_name:"Nfdfdsga"})
            //    store.put({username:"dfdfs",full_name:"Neerdfsurya"})
            // }
            // const data = {
            //       id: myState.EmployeeData.length > 0 ? myState.EmployeeData.length + 1 : 1,
            //       username,
            //       full_name,
            //       company,    
            //     };
            //     setUsername("")
            //     setFull_name("")
            //     setCompany("")
            // dispatch(addList(data))
           
      }
      myState.EmployeeData.sort((a, b) => {
            let fa = a.full_name.toLowerCase(),
                fb = b.full_name.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
           });
      return (
            <div>
                  <h3 className="heading">Employee Table</h3>
                  
                <table className="table table-striped">
                <tbody>  
                      <tr>
                      <th>#</th>
                      <th>Username</th>
                      <th>Full name</th>
                      <th>Company</th>
                      <th>ADD</th>
                      </tr>
                      </tbody>  
                      <tr className="input2">
                            <td className="input2"></td>
                            <td><input  type="text" onChange={(event)=> setUsername(event.target.value)}  onfocus="this.value=''" value={username}/></td>
                            <td><input  type="text" onChange={(event)=> setFull_name(event.target.value)}  value={full_name}/></td>
                            <td><input  type="text" onChange={(event)=> setCompany(event.target.value)}   value={company}/></td>
                            <td><button type="button" onClick={handleSubmit} className="btn-primary">ADD</button></td>
                            
                      </tr>
                      
                     
                      <tbody>  
                      { 
                     myState.EmployeeData.map((Element,index)=>{
                           const {id,username,full_name,company}=Element;
                           return (<tr>
                                       <td>{id}</td>
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

                                       <td><button onClick={()=>dispatch(dataDelete(id))} className="btn-danger">Remove</button></td>
                              
                                       </tr>
                           )
                           
                     })
               }  </tbody>
                </table>

            </div>
      )
}

export default Employee
