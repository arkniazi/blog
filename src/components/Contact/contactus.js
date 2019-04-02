import React from  "react";
import InputPage from "../input//MDBInput"
import TextareaPage from "../input/MDBText"
 

const  ContactUs = ()=>{
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-12 contact-us justify-content-center">
                <form>
                    <h1>Contact us</h1>
                    <InputPage label="Name" type="text"/>
                    <InputPage label="Email" type="email"/>
                    <InputPage label="Subject" type="text"/>
                    <TextareaPage />
                    <div className="text-center">
                        <button className="btn btn-default">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default  ContactUs;