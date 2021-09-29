import React, {useState, useEffect,useCallback} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import {fileUpload,fileClear} from '../actions/AccountStatementAction'
import Dropzone from './Dropzone';
function UploadRecord() {
      const [item, setitem] = useState("")
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
           setfileData(cartItems)
     
       },[myState.FileData]) 

      const handalFile=(files)=>{
            const reader = new FileReader()
            reader.addEventListener("load",()=>{
                  localStorage.setItem(files[0].name, reader.result);
            })
            reader.readAsDataURL(files[0])
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ];
            const d = new Date();
            const time = new Date(new Date().getTime() + 4*60*60*1000).toLocaleTimeString()
            const date =(monthNames[d.getMonth()] +" " + d.getDate() +"," +d.getFullYear() + " "+ time)  
            const object ={
                  id:myState.FileData.length > 0 ? myState.FileData[myState.FileData.length-1].id + 1 : 1,
                  name:files[0].name,
                  date:date
            }
            dispatch(fileUpload(object))
      }

       const dataClear= (name,id)=>{
            const a=localStorage.removeItem(name)
            console.log(a)
            dispatch(fileClear(id))
       }
       
      const Download =()=>{
            myState.FileData.map((Element)=>{
            const {name}=Element
            const data = localStorage.getItem(name)
            return setitem(data)
      })
      
}

      return ( 
                  <div className="uploadFile">
                        <main className="App">
                        <Dropzone onDrop={onDrop}  />
                      </main>
                  <div>
                <table className="table table-striped mt-5">
              
                     <tr>
                     <th>#</th>
                     <th>Username</th>
                     <th>Date</th>
                     <th></th>
                     </tr>
                     
                     <tbody>       
                           {   
                             fileData &&(fileData).map((Element,index)=>{
                                       const {id,name,date} = Element
                                       return (
                                             <tr><td>{index+1}</td>
                                             <td>{name}</td>
                                             <td >{date}</td>
                                             <td><a href={item} download={name} onClick={Download}><button type="button" className="btn-primary">Download</button></a> <button onClick={()=>dataClear(name,id)} className="btn-danger">Remove</button></td>
                                             </tr>
                                       )
                                 })
                           }
                          
                        </tbody>
                        </table>
                </div>
            </div>

      )
}

export default UploadRecord;
