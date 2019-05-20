
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import './index.css';
import CardExample from '../Cards/customCard';
import MediaCard from '../Cards/mediaCard';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const gridExamplesPage = ({blogs}) => {
  return (
    
      <div className="row">
      {
        blogs && blogs.length > 0 ?
        (blogs.map(blog => {
          return (
            <div className="col-lg-4 col-md-4 col-sm-12 g-card">
            {/* <h1>{blog.title}</h1>
            <img src={blog.imageUrl}></img> */}
              <MediaCard blog = {blog}/>
              <Link  to={{
                pathname: `/project_update`,
                state: {
                  id: blog._id
                  }
                }} >
                <button style={{position:"absolute", bottom:0}}>Hello</button>
              </Link>
            </div>
          )
         })
         ):
         (  <div className="col-lg-4 col-md-4 col-sm-12 g-card">        
            </div>
          )   
      }
      
      </div>
    
  );
}

export default gridExamplesPage;