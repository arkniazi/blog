import React, { Component } from "react"
import InputPage from "./../input/MDBInput"
import TextareaPage from "./../input/MDBText"
import FooterPage from "../../partial/components/footer"
import FixedNavbarExample from "../../partial/components/navbar"
import axios from "axios";
import { MDBInput } from "mdbreact";


class AddUpdate extends Component{

    constructor(props){
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            title:"",
            imageUrl:"",
            description:""
        }

    }

    onChangeTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    onChangeUrl(e){
        this.setState({
            imageUrl:e.target.value
        })
    }
    onChangeDesc(e){
        this.setState({
            description:e.target.value
        })
    }

    onSubmit (e) {
        alert('hello')
        const blog = {
            title:this.state.title,
            imageUrl:this.state.imageUrl,
            description:this.state.description
        }
        axios.post('http://localhost:5000/api/blogs', blog)
        .then(res => console.log(res.data));

        this.setState({
            title:"",
            imageUrl:"",
            description:""
        })
        
    }

   
    render(){
        return(
            <div>
                <FixedNavbarExample />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-12 contact-us justify-content-center">
                        <form onSubmit={this.onSubmit}>
                            <h1>Add Update</h1>
                            <MDBInput  onInput={this.onChangeTitle} label="Project Name" type="text"/>
                            <MDBInput  onInput={this.onChangeUrl} label="Image URL" type="url"/>
                            <MDBInput type="textarea"  onInput={this.onChangeDesc} />
                            <div className="text-center  form-group">
                                <button type="submit" className="btn btn-default" >Submit</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                <FooterPage />
            </div>
        )    
    }
}


export default AddUpdate;