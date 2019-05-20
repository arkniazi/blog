import React, { Component } from 'react';
import FooterPage from "../../partial/components/footer";
import FixedNavbarExample  from '../../partial/components/navbar'

import image1 from '../../assets/images/img10.jpg';
import axios from 'axios';

class ProjectView extends Component {
   
    state={
        blog:""
    }
    componentDidMount(){
        axios.get(`/api/blogs/${this.props.location.state.id}`)
        .then(res => {
            if(res.data){
                this.setState({
                    blog: res.data
                  })
            }
        })
        .catch(err => console.log(err))
    }
    render(){
        let  {blog } = this.state;
        return(
            <div>
                <FixedNavbarExample />
                <div className ="container project-view">
                    <h1 className="text-center">{blog.title}</h1>
                    <div className ="row">
                        <div className="col-4 p-image">
                            <img src={blog.imageUrl} className=""></img>
                            <img src={blog.imageUrl} className=""></img>
                        </div>
                        <div className="col-8">
                            <p>{blog.description}
                            </p>
                        </div>
                    </div>
                </div>
                <FooterPage />
            </div>
        );
    }
}

export default ProjectView;