import React from 'react'
import { useHistory } from 'react-router';



const UserInput=()=> {
      const history = useHistory() 
      const handleSubmit=()=>{
            history.push('/Employee')
      }
      return (
            <div class="d-flex justify-content-center align-items-center h-25" >
              <div className="row ">
                <form className="form-horizontal hr">
                  <div className="form-group form-inline">
                    <div className="control-label col-lg-6">
                      <lebel className="font-size "> AWS Token </lebel>
                    </div>
        
                    <div className="col-lg-4 col-xs-4">
                      <input type="text" className=" form-control "></input>
                    </div>
                  </div>
                  <div className="form-group form-inline">
                    <div className="control-label col-lg-6">
                      <lebel className="font-size "> AWS Secret Key </lebel>
                    </div>
                    <div className="col-lg-4 ">
                      <input type="text" className="form-control"></input>
                    </div>
                  </div>
                </form>
                <div className=" col-9 col-sm-6 col-md-6 col-lg-10">
                  <button
                    type="submit"
                    className=" btn btn-primary btn-lg btn-block"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          );
}
export default UserInput;
