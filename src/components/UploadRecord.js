import React, {useState, useEffect,useCallback} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { Button, Modal } from 'react-bootstrap';

import {fileUpload,fileClear,headerShow} from '../actions/AccountStatementAction'
import Dropzone from './Dropzone';
function UploadRecord() {
      const [item, setitem] = useState("")
      const [show, setShow]= useState(false) 
      const [id, setId] = useState("")
      const [name, setName] = useState("")
      const [fileData,setfileData]=useState([])
      const dispatch = useDispatch()
      const myState = useSelector((store)=> store.accountStatementReducer)
      console.log("myState",myState.FileData)
      console.log("fileData", fileData)
      const cartItems=JSON.parse(localStorage.getItem("FileData"))
     
     
      const onDrop = useCallback(acceptedFiles => {
            handalFile(acceptedFiles);
          });
     
          
      
         
          fileData.sort((a, b) =>{
            let da =(new Date(a.date)).getTime()/1000.0,
                db = (new Date(b.date)).getTime()/1000.0;
            return db - da;
           });
      
       useEffect(()=>{
            if(cartItems===null){
                  setfileData([])
            }
            else
            {
                  setfileData(cartItems)
            }
            dispatch(headerShow(false)) 
        
       },[myState.FileData]) 

      const handalFile=(files)=>{
            const reader = new FileReader()
            reader.addEventListener("load",()=>{
                  localStorage.setItem(files[0].name, reader.result);
            })
            reader.readAsDataURL(files[0])
            const monthNames = ["Jan", "Feb", "Mar", "April", "May", "June",
            "July", "Aug", "Sep", "Oct", "Nov", "Dec"
            ];
            const d= new Date();
            const hour = d.getHours()
            const suffix = hour >= 12 ? "PM":"AM";
            var h = d.getHours()
            if(h===12){
                h = 12
            }
            if(h>12){
                h= h-12
            }
            if(h<10){
                  h= "0"+h
            }
            var m = d.getMinutes()
            if(m<10){
                  m= "0"+m
            }

            const time = h + ":"+ m +" "+suffix
            const date =(monthNames[d.getMonth()] +" " + d.getDate() +" " +d.getFullYear() + " "+ time)  
            const object ={
                  id:myState.FileData.length > 0 ? myState.FileData[myState.FileData.length-1].id + 1 : 1,
                  name:files[0].name,
                  date:date
            }
            dispatch(fileUpload(object))
          
      }
      const modalShow=(name,id)=>{
            setId(id)
            setName(name)
            setShow(true)


      }

       const dataClear= (name,id)=>{
            const a=localStorage.removeItem(name)
            console.log(a)
            dispatch(fileClear(id))
            setShow(false)
       }

       
      const Download =()=>{
            myState.FileData.map((Element)=>{
            const {name}=Element
            const data = localStorage.getItem(name)
            return setitem(data)
      })
      
}

      return( 
      
 
            <div className="container mb-5">
                   <main className="App">
                  <Dropzone onDrop={onDrop}  />
                     </main>
          {fileData.length>0 &&        
            <div className="row">
             <div className="col-12 mx-auto"> 
                <h5 className="mb-3">
                <strong></strong>
                </h5>
      
                    <table className="table  table-striped">
                        <thead>
                        <tr  className="">
                            <th className="col-sm-2">#</th>
                            <th  className="col-sm-3">Username</th>
                            <th className="col-sm-3">Date</th>
                            <th className="col-sm-3"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {   
                             fileData &&(fileData).map((Element,index)=>{
                                       const {id,name,date} = Element
                                       return (
                                             <tr><td className="col-sm-2 py-4">{index+1}</td>
                                             <td className="col-sm-3 py-4" >{name}</td>
                                             <td className=" col-sm-3 py-4">{date}</td>
                                             <td className="pt-3"><a href={item} download={name} onClick={Download}><button type="button" className=" btn btn-primary mr-1">Download</button></a> 
                                             <button type="button" onClick={()=>modalShow(name,id)} className=" btn btn-danger col-sm-4  ">Remove</button>
                                          </td> 
                                             </tr>
                                       )
                                 })
                           }
                        </tbody>
                    </table>
            </div>
            </div>
}

{show && <Modal show={show}>
       <Modal.Header>Conformation</Modal.Header>
       <Modal.Body>Are you sure to remove this record </Modal.Body>

       <Modal.Footer>
             <Button onClick={()=>dataClear(name,id)}>Remove</Button>
             <Button onClick={()=>setShow(false)}>Close</Button>
       </Modal.Footer>
     </Modal>}
    </div>

      )
}

export default UploadRecord;
