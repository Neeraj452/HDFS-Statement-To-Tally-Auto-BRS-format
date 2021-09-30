import React, {useState,useEffect} from 'react'
import productdb, {
      bulkcreate,getData} from './DB'
import { useSelector, useDispatch } from 'react-redux';
import {addList, employeeUpdate,dataDelete} from '../actions/AccountStatementAction'

function Employee() {
    
      const [username, setUsername] = useState("");
      const [full_name, setFull_name] = useState("");
      const [company, setCompany] = useState("");
      const dispatch = useDispatch()
      const myState = useSelector((store)=> store.accountStatementReducer);
      let db = productdb("ProductsDB",{
            products:'++id,username,full_name,company'})
      
      const getData1= ()=> {
            getData(db.products, data => {
            if (data===0){
                  console.log(data)
            }else{
            dispatch(addList(data))
            }
          })}
      
      useEffect(() => {
            getData1() 
            
      },[])
     
    
      const handleSubmit= ()=>{
            bulkcreate(db.products,{
                  username:username,
                  full_name:full_name,
                  company:company
            })
          
            getData(db.products, data => {
            dispatch(addList(data))
           
                });
                setUsername("")
                setFull_name("")
                setCompany("")
                
      }
    
       myState.EmployeeData.sort((a, b) => {
            let fa = a.username.toLowerCase(),
                fb = b.username.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
           }) 
      
      const update =(id,full_name)=>{
            db.products.update(id,{"full_name":full_name}) 
      } 
      const update1 =(id,username)=>{
            db.products.update(id,{"username":username}) 
      }
      const update2 =(id,company)=>{
            db.products.update(id,{"company":company}) 
      }
      const dataDelete1=(id)=>{
            db.products.delete(id)
            dispatch(dataDelete(id))
            
      }
      
      return (
            <div className="container mb-5">
            <div className="row">
             <div className="col-12 mx-auto text-center"> 
                <h5 className="mb-3">
                <strong>Employee Table</strong>
                </h5>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Full name</th>
                            <th>Company</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tr className="input2">
                       <td className="input2"></td>
                            <td><input  type="text" onChange={(event)=> setUsername(event.target.value)}  onfocus="this.value=''" value={username}/></td>
                            <td><input  type="text" onChange={(event)=> setFull_name(event.target.value)}  value={full_name}/></td>
                            <td><input  type="text" onChange={(event)=> setCompany(event.target.value)}   value={company}/></td>
                            <td><button type="button" onClick={handleSubmit} className="btn-primary">ADD</button></td>
                            
                       </tr>
                        <tbody>
                        {
                      myState.EmployeeData[0] && (myState.EmployeeData).map((Element,index)=>{
                           const {id,username,full_name,company}=Element;
                           return (<tr>
                                       <td>{index+1}</td>
                                       <td><input  value={username} onChange={(event)=> dispatch(employeeUpdate({
                                                   index: index,
                                                   type: 'username',
                                                   value: event.target.value
                                                   }))} onBlur={()=>update1(id,username)}/></td>   
                                       <td><input  onChange ={(event)=>dispatch(employeeUpdate({
                                             index:index,
                                             type:'fullname',
                                             value:event.target.value}))} value={full_name} onBlur={()=>update(id,full_name)}/></td>
                                       <td> <input onChange={(event)=> dispatch(employeeUpdate({
                                             index:index,
                                             type:'company',
                                             value:event.target.value}))} value={company} onBlur={()=>update2(id,company)}/></td>

                                       <td><button  onClick={()=>dataDelete1(id)}  className="btn-danger">Remove</button></td>
                                       </tr>
                           )
                           
                     })
               }
                        </tbody>
                    </table>
            </div>
        </div>
    </div>

            
      )
}

export default Employee
