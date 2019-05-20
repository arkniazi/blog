import React,{ Component } from "react";
import FooterPage from "../../partial/components/footer"
import FixedNavbarExample from "../../partial/components/navbar"
import { MDBInput } from "mdbreact";
import Axios from "axios";

class UpdateBlog extends Component{

    constructor(props){
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        console.log(this.props);
        this.getBlog()
        
        }
    state = {
        blog: []
    }
    
    getBlog = () => {
        Axios.get(`/api/blogs/${this.props.location.state.id}`)
          .then(res => {
            if(res.data){
              this.setState({
                blog: res.data
              })
            }
          })
          .catch(err => console.log(err))
      }

    onChangeTitle(e){
        this.setState({
            blog:{
                title:e.target.value
            }
        })
    }
    onChangeUrl(e){
        this.setState({
            blog:{
                imageUrl:e.target.value
            }
        })
    }
    onChangeDesc(e){
        this.setState({
            blog:{
                description:e.target.value
            }    
        })
    }

    onSubmit (e) {
        const blog = {
            title:this.state.title,
            imageUrl:this.state.imageUrl,
            description:this.state.description
        }
        Axios.post('http://localhost:5000/api/blogs', blog)
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
                            {
                                this.state.blog ?(
                                    <div>
                                        <MDBInput  onInput={this.onChangeTitle} label="Project Name" value={this.state.blog.title} type="text"/>
                                        <MDBInput  onInput={this.onChangeUrl} label="Image URL" value={this.state.blog.imageUrl} type="url"/>
                                        <MDBInput type="textarea" value={this.state.blog.description} onInput={this.onChangeDesc} />
                                    </div>
                                ):(
                                    <div>
                                        <MDBInput  onInput={this.onChangeTitle} label="Project Name"  type="text"/>
                                        <MDBInput  onInput={this.onChangeUrl} label="Image URL" type="url"/>
                                        <MDBInput type="textarea"  onInput={this.onChangeDesc} /> 
                                    </div>
                                )
                            }
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



export default UpdateBlog;