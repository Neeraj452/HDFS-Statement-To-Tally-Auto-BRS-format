import React, {useState,useEffect} from 'react'
import productdb, {
      bulkcreate,getData} from './DB'
import { useSelector, useDispatch } from 'react-redux';
import {addList, employeeUpdate,dataDelete,headerShow} from '../actions/AccountStatementAction'

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
            dispatch(headerShow(false)) 
            
      },[])
     
    
      const handleSubmit= ()=>{
            bulkcreate(db.products,{
                  username:username,
                  full_name:full_name,
                  company:company
            })
            getData1()
            
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
                <h5 className="mb-4">
                <strong>Employee Table</strong>
                </h5>
                    <table className="table table-striped ">
                        <thead>
                        <tr className="">
                            <th className="col">#</th>
                            <th className="col">Username</th>
                            <th className="col">Full name</th>
                            <th className="col">Company</th>
                            <th className="col"></th>
                        </tr>
                        </thead>
                        <tr className="">
                       <td className="col"></td>
                            <td className=" pt-3"><input className=""  type="text" onChange={(event)=> setUsername(event.target.value)}  onfocus="this.value=''" value={username}/></td>
                            <td className=" pt-3"><input className="" type="text" onChange={(event)=> setFull_name(event.target.value)}  value={full_name}/></td>
                            <td className=" pt-3"><input className="" type="text" onChange={(event)=> setCompany(event.target.value)}   value={company}/></td>
                            <td className=" pt-3"><button  type="button" onClick={handleSubmit} className="btn btn-primary" style={{width: "80px"}}>Add</button></td>
                       </tr>
                        <tbody>
                        {
                      myState.EmployeeData[0] && (myState.EmployeeData).map((Element,index)=>{
                           const {id,username,full_name,company}=Element;
                           return (<tr>
                                       <td className="col pt-3">{index+1}</td>
                                       <td className="col pt-3"><input className="" value={username} onChange={(event)=> dispatch(employeeUpdate({
                                                   index: index,
                                                   type: 'username',
                                                   value: event.target.value
                                                   }))} onBlur={()=>update1(id,username)}/></td>   
                                       <td className="col pt-3"><input className=""  onChange ={(event)=>dispatch(employeeUpdate({
                                             index:index,
                                             type:'fullname',
                                             value:event.target.value}))} value={full_name} onBlur={()=>update(id,full_name)}/></td>
                                       <td className="col pt-3"> <input className="" onChange={(event)=> dispatch(employeeUpdate({
                                             index:index,
                                             type:'company',
                                             value:event.target.value}))} value={company} onBlur={()=>update2(id,company)}/></td>

                                       <td className="col"><button  onClick={()=>dataDelete1(id)}  className="btn btn-danger">Remove</button></td>
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
