import React from  "react";
import InputPage from "../../input/MDBInput"

const  Login = ()=>{
    return (
        <div className="container login-container" >
            <div className="row justify-content-center">
                <div className="col-lg-4 col-12 contact-us justify-content-center">
                <form>
                    <h1>Log in</h1>
                    <div className="form-group my-5">
                        <InputPage label="Email" type="email"/>
                    </div>
                    <div className="form-group my-5 ">
                    <InputPage label="Password" type="password"/>
                    </div>
                    <div className="text-center ">
                        <button className="btn btn-default btn-lg btn-block my-5">Log in</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default  Login;