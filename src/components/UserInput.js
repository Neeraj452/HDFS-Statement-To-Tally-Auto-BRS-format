import React from 'react'
import { useHistory } from 'react-router';
import RJSlogo from '../assets/rjs-logo.png'


const UserInput=()=> {
      const history = useHistory() 
      const handleSubmit=()=>{
            history.push('/Employee')
       
      }
     
      return (
            <div>
             <nav className="navbar navbar-expand-sm">
            <div className="container mt-5">
            <a href="https://rjs.in" target="_blank" className="navbar-brand text-dark"><img src={RJSlogo} alt="RJS" width="25" className="mr-2" /> Attendance Reporter</a>
            </div> </nav>
               <div className="container" style={{margin:"160px"}}>
                  <div className="row register">
                     <div className="col-sm-3"></div>
                     <div className="col-sm-6 col-md-6 .col-lg-6 reg ">
                           <form className="form-horizontal hr">
                                 <div className="form-group form-inline">
                                       <div  className="control-label col-sm-7" >
                                       <lebel className="font-size "> AWS Token </lebel>
                                       </div>

                                       <div className="col-sm-4">
                                             <input type="text" className=" form-control "></input>
                                       </div>
                                 </div>
                                 <div className="form-group form-inline">
                                 <div  className="control-label col-sm-7" >
                                       <lebel className="font-size "> AWS Secret Key </lebel>
                                       </div>
                                       <div className="col-sm-5 ">
                                             <input type="text" className="form-control"></input>
                                       </div>
                                 </div>
                           </form>
                           <button type="submit" className="mt-4 btn btn-primary btn-lg btn-block" onClick={handleSubmit}>Submit</button>
                     </div>
               </div>
               </div>
               </div>

            
             
      )
}
export default UserInput;
