import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import {fileUpload} from '../actions/AccountStatementAction'

function UploadRecord() {
      const [item, setitem] = useState("")
      const [fileDate,setfileData]=useState("")
      const dispatch = useDispatch()
      const myState = useSelector((store)=> store.accountStatementReducer)
      localStorage.setItem("FileData",JSON.stringify(myState.FileData))
      const cartItems=(localStorage.getItem("FileData"))
      useEffect(()=>{
            setfileData(cartItems)
      })

    
      console.log("fileDate",fileDate)
      console.log(myState.FileData)
     
     var files
      const setfile=(e)=>{
            console.log(e.target.files)
            files = e.target.files
      }
      
      const hangelFile=()=>{
            // const  dataURL = canvas.toDataURL(files[0]).toString();
            // localStorage.setItem((files[0].name, dataURL);
            const reader = new FileReader()
            reader.addEventListener("load",()=>{
                  localStorage.setItem(files[0].name, reader.result);
            })
            reader.readAsDataURL(files[0])
            
            const d = new Date();
            const date = d.getDate()+ "/" + d.getMonth() + "/" + d.getFullYear() +" "+ d.getHours() +":"+d.getMinutes() 
            const object ={
                  id:myState.FileData.length > 0 ? myState.FileData[myState.FileData.length - 1].id + 1 : 1,
                  name:files[0].name,
                  date:date
            }
            dispatch(fileUpload(object))
      }
       
      const Download =()=>{
            myState.FileData.map((Element)=>{
            const {name}=Element
            const data = localStorage.getItem(name)
            return setitem(data)
      })
      }
      
      return (
           
            <div>
                <h1>Upload file in React</h1>
                <input type="file" onChange={ (e)=>setfile(e)} name='text_file'></input> 
                <button type="button" onClick={hangelFile}>Upload</button>
                <div>
                <table className="table table-striped">
                     
                     <tr>
                     <th>#</th>
                     <th>Username</th>
                     <th>Date</th>
                     <th>Download</th>
                     </tr>
                     <tbody>
                           {   
                             fileDate && JSON.parse(fileDate).map((Element)=>{
                                       const {id,name,date} = Element
                                       return (
                                             <tr><td>{id}</td>
                                             <td>{name}</td>
                                             <td>{date}</td>
                                             <td><a href={item} download={name} onClick={Download}><button type="button">Download</button> </a></td></tr>
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
