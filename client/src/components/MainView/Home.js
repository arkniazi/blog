import React, { Component } from 'react';
import '../../App.css';
import FooterPage from "../../partial/components/footer";
import AutoGrid  from "../Grid/mainGrid";
import FixedNavbarExample  from '../../partial/components/navbar'
import CarouselPage from "../carousel/MdbCarousel";
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Home extends Component {
  state = {
    action: ""
  }

  state = {
    blogs: []
  }

  componentDidMount(){
    this.getBlogs();
  }

  getBlogs = () => {
    axios.get('/api/blogs')
      .then(res => {
        if(res.data){
          this.setState({
            blogs: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }


  render() {
    let  {blogs } = this.state;
      return (
        <div className="Home">
          <FixedNavbarExample />
          <div className="mt-5 pt-3">
            <CarouselPage />
          </div>
          <div className="container main-content" >
            <AutoGrid blogs={blogs}/>
            <Link to="/add_update">
              <Button className="btn btn-primary">Add Blog</Button>
            </Link>
            <hr  className="hr-line" />
          </div>
          
          <FooterPage />
        </div>
      );
    }
  }
  
  export default Home;
  