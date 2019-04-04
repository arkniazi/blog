import React from "react"
import InputPage from "./../input/MDBInput"
import TextareaPage from "./../input/MDBText"
import FooterPage from "../../partial/components/footer"
import FixedNavbarExample from "../../partial/components/navbar"



const AddUpdate =() =>{
   
    return(
        <div>
            <FixedNavbarExample />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-12 contact-us justify-content-center">
                    <form>
                        <h1>Add Update</h1>
                        <InputPage label="Email" type="email"/>
                        <InputPage label="Image URL" type="url"/>
                        <TextareaPage />
                        <div className="text-center">
                            <button className="btn btn-default">Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            <FooterPage />
        </div>
    )
}

export default AddUpdate;