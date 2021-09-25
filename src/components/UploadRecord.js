import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {fileUpload} from '../actions/AccountStatementAction'

function UploadRecord() {
      const dispatch = useDispatch()
      const myState = useSelector((store)=> store.accountStatementReducer )

      console.log(myState.FileData)
      // const [file, setfile] = useState("")
      var files,formData;
      const setfile=(e)=>{
            console.log(e.target.files)
            files = e.target.files
            formData = new FormData();
            formData.append('text_file',files)
            console.log(formData)}

      const hangelFile=()=>{
            const d = new Date();
            const date = d.getDate()+ "/" + d.getMonth() + "/" + d.getFullYear() +" "+ d.getHours() +":"+d.getMinutes() 
            const object ={
                  id:myState.FileData.length > 0 ? myState.FileData[myState.FileData.length - 1].id + 1 : 1,
                  name:files[0].name,
                  date:date
            }
            dispatch(fileUpload(object))
      }

      
      return (
            <div>
                <h1>Upload file in React</h1>
                <input type="file" onChange={ (e)=>setfile(e)} name='text_file'></input> 
                <button type="button" onClick={hangelFile}>Upload</button>
            </div>
      )
}

export default UploadRecord;
