import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import {fileUpload} from '../actions/AccountStatementAction'

function UploadRecord() {
      const [item, setitem] = useState("")
      const [fileDate,setfileData]=useState("")
      const dispatch = useDispatch()
      const myState = useSelector((store)=> store.accountStatementReducer)
      const cartItems=(localStorage.getItem("FileData"))
      useEffect(()=>{
            setfileData(cartItems)
      })

      
      console.log("fileDate",fileDate)
      console.log(myState.FileData)
     
     var files
      const setfile=(e)=>{
            console.log(e.target.files[0])
            files = e.target.files[0]
      }
      
      const hangelFile=()=>{
            // const  dataURL = canvas.toDataURL(files[0]).toString();
            // localStorage.setItem((files[0].name, dataURL);
            const reader = new FileReader()
            reader.addEventListener("load",()=>{
                  localStorage.setItem(files.name, reader.result);
            })
            reader.readAsDataURL(files)
            
            const d = new Date();
            const date =(d.getFullYear() + "-" + d.getMonth() + "-" +d.getDate())  
            const object ={
                  id:myState.FileData.length > 0 ? myState.FileData.length + 1 : 1,
                  name:files.name,
                  date:date
            }
            dispatch(fileUpload(object))
      }
     
     const displayFile =(name)=>{
      const data = localStorage.getItem(name)
      console.log("Data", data)
      var reader = new FileReader();
      reader.onload = function(e) {
        var contents = e.target.result;
        console.log(contents)
      };
      reader.readAsDataURL(files);   
     }
     const deleteLocalStorage = ()=>{
           localStorage.clear()
     }
       
      const Download =()=>{
            myState.FileData.map((Element)=>{
            const {name}=Element
            const data = localStorage.getItem(name)
            return setitem(data)
      })
      
      // fileDate.sort((a, b) => {
      //       let da =new Date(a.date),
      //           db = new Date(b.date);
      //       return db - da;
      //   });
      // }
      fileDate.sort((a, b) => {
            let da =a.id,
                db = b.id;
            return db - da;
        });
      }

      return (
           
            
                  <div className="uploadFile">
                        <input type="file" onChange={ (e)=>setfile(e)} name='text_file'></input> 
                        <button type="button" onClick={hangelFile}>Upload</button>
                        <button type="button"onClick={deleteLocalStorage} className="btn-danger"> Delete</button>
                  <div>
           
                <table className="table table-striped mt-5">
                <tbody> 
                     <tr>
                     <th>#</th>
                     <th>Username</th>
                     <th>Date</th>
                     <th>Download</th>
                     </tr>
                     </tbody>
                     <tbody>
                           {   
                             fileDate && JSON.parse(fileDate).map((Element)=>{
                                       const {id,name,date} = Element
                                       return (
                                             <tr><td>{id}</td>
                                             <td>{name}</td>
                                             <td >{date}</td>
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
