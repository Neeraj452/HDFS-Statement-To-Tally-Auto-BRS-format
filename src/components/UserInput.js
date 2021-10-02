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
               <div className="container border-bottom">
            <div className="border-bottom pb-4 pt-1">
               <a href="https://rjs.in"  className="navbar-brand text-dark mt-3"><img src={RJSlogo} alt="RJS" width="25" className="mr-2" /> Attendance Reporter</a>
               </div>
                     <div className="mh-100"  style={{margin:"160px"}}>
           
                  <div className="row register">
                     <div className="col-sm-2"></div>
                     <div className="col-sm-9 ">
                           <form className="form-horizontal hr">
                                 <div className="form-group form-inline">
                                       <div  className="control-label col-lg-6" >
                                       <lebel className="font-size "> AWS Token </lebel>
                                       </div>

                                       <div className="col-lg-4">
                                             <input type="text" className=" form-control "></input>
                                       </div>
                                 </div>
                                 <div className="form-group form-inline">
                                 <div  className="control-label col-lg-6" >
                                       <lebel className="font-size "> AWS Secret Key </lebel>
                                       </div>
                                       <div className="col-lg-5 ">
                                             <input type="text" className="form-control"></input>
                                       </div>
                                 </div>
                                 
                           </form>
                           <div  className="col-xl-11 col-sm-12 col-md-11 col-lg-12" >
                                 <button type="submit" className=" btn btn-primary btn-lg btn-block" onClick={handleSubmit}>Submit</button>
                                 </div>
                     </div>
               </div>
               </div>
               </div>
               </div>


            
             
      )
}
export default UserInput;
