import React,{useEffect,useState, Fragment} from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useHistory} from 'react-router';
import { useDispatch } from 'react-redux';
import {headerShow} from '../actions/AccountStatementAction'

const UserInput=()=> {
      const history = useHistory()
      const dispatch=useDispatch()

      const [token, setToken]= useState(null)
      const [key,setKey]=useState(null)
      const [show, setShow]= useState(false) 
     
     
      const handleSubmit=()=>{
        if(token===null && key===null)
        {
          setShow(true)
         
         
        }
        else{
            console.log("token",token)
            history.push('/Employee')
      }}
      
    
    useEffect(() => {
       dispatch(headerShow(true)) 
    },[])
      return (
        <div>
   
   {show && <Modal show={show}>
       <Modal.Header>Error</Modal.Header>
       <Modal.Body>Please fill the value</Modal.Body>
       <Modal.Footer><Button  onClick={()=>setShow(false)}>Close</Button></Modal.Footer>
     </Modal>}
       
           <div className="container">
              <div className="row col-7 mx-auto align-items-center d-flex justify-content-center">
                <form  className="form-horizontal hr" required>
                  <div className="form-group form-inline">
                    <div className="control-label col-sm-4 col-lg-5">
                      <lebel className="font-size "> AWS Token </lebel>
                    </div>
        
                    <div className="col-sm-4">
                      <input type="text" className=" form-control" id="user"  onChange={(event)=>setToken(event.target.value)} value={token}></input>
                    </div>
                  </div>
                  <div className="form-group form-inline">
                    <div className="control-label col-sm-4 col-lg-5">
                      <lebel className="font-size "> AWS Secret Key </lebel>
                    </div>
                    <div className="col-sm-3  ">
                      <input type="text" className="form-control" id="username" onChange={(event)=>setKey(event.target.value)} value={key}></input>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                  <button
                    type="button"
                    className=" btn btn-primary btn-lg btn-block"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
                </form>
                
              </div>
            </div>

      
</div> 
    
     
          );
}
export default UserInput;
