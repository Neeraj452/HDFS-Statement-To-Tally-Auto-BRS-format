import React,{useEffect} from 'react'
import { useHistory,useLocation} from 'react-router';
import { useDispatch } from 'react-redux';
import {headerShow} from '../actions/AccountStatementAction'
const UserInput=()=> {
      const history = useHistory() 
      const handleSubmit=()=>{
            history.push('/Employee')
      }
      const dispatch=useDispatch()
    const location = useLocation()
    console.log("location1",location)
    useEffect(() => {
       dispatch(headerShow(true)) 
    },[])
      return (


           <div className="container">
              <div className="row col-7 center align-items-center d-flex justify-content-center">
                <form className="form-horizontal hr">
                  <div className="form-group form-inline">
                    <div className="control-label col-sm-4 col-lg-5">
                      <lebel className="font-size "> AWS Token </lebel>
                    </div>
        
                    <div className="col-sm-4">
                      <input type="text" className=" form-control "></input>
                    </div>
                  </div>
                  <div className="form-group form-inline">
                    <div className="control-label col-sm-4 col-lg-5">
                      <lebel className="font-size "> AWS Secret Key </lebel>
                    </div>
                    <div className="col-sm-3  ">
                      <input type="text" className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                  <button
                    type="submit"
                    className=" btn btn-primary btn-lg btn-block"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
                </form>
                
              </div>
            </div>

    
     
          );
}
export default UserInput;
