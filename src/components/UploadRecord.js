import React, {useState, useEffect,useCallback} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import HomeScreen from "../components/HomeScreen";
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

      return( 
      <div>
            <HomeScreen/> 
            <div className="container mb-5">
                   <main className="App">
                  <Dropzone onDrop={onDrop}  />
                     </main>
          { fileData.length>0 &&        
            <div className="row">
             <div className="col-12 mx-auto text-center"> 
                <h5 className="mb-3">
                <strong></strong>
                </h5>
                    <table className="table  table-striped">
                        <thead>
                        <tr  className="">
                            <th>#</th>
                            <th  className="pl-5 ml-5">Username</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {   
                             fileData &&(fileData).map((Element,index)=>{
                                       const {id,name,date} = Element
                                       return (
                                             <tr><td className="">{index+1}</td>
                                             <td className="pt-3 pl-5 ml-5" >{name}</td>
                                             <td className=" pt-3 ">{date}</td>
                                             <td className=""><a href={item} download={name} onClick={Download}><button type="button" className=" btn btn-primary  ">Download</button></a> <button onClick={()=>dataClear(name,id)} className=" btn btn-danger ml-2  ">Remove</button></td>
                                             </tr>
                                       )
                                 })
                           }
                        </tbody>
                    </table>
            </div>
            </div>
              }
    </div>
    </div>

      )
}

export default UploadRecord;
