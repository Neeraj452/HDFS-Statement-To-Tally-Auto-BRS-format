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


           <div className="container mb-5">
             <div class="d-flex justify-content-center align-items-center center " >
              <div className="row col-7">
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

           </div>
      
            // <div class="d-flex justify-content-center align-items-center  mt-5" >
            //   <div className="row ">
            //     <form className="form-horizontal hr">
            //       <div className="form-group form-inline">
            //         <div className="control-label col-lg-6">
            //           <lebel className="font-size "> AWS Token </lebel>
            //         </div>
        
            //         <div className="col-lg-4 col-xs-4">
            //           <input type="text" className=" form-control "></input>
            //         </div>
            //       </div>
            //       <div className="form-group form-inline">
            //         <div className="control-label col-lg-6">
            //           <lebel className="font-size "> AWS Secret Key </lebel>
            //         </div>
            //         <div className="col-lg-4 ">
            //           <input type="text" className="form-control"></input>
            //         </div>
            //       </div>
            //     </form>
            //     <div className=" col-9 col-sm-6 col-md-6 col-lg-10">
            //       <button
            //         type="submit"
            //         className=" btn btn-primary btn-lg btn-block"
            //         onClick={handleSubmit}
            //       >
            //         Submit
            //       </button>
            //     </div>
            //   </div>
            // </div>
     
          );
}
export default UserInput;
