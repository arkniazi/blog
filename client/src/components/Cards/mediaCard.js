import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import anime from 'animejs';

const MediaCard =({blog})=>{
  return(
  <div className="mycard">
      <Link target="_blank" to={{
        pathname: `/project_view`,
        state: {
          id: blog._id
          }
        }} >
        <div className="mycard-image" >
          <img src={blog.imageUrl}></img>
          <div className="overlay-body">
          <h2 className="mycard-title">{blog.title}</h2>
        </div>
        </div>
        </Link>
      </div>
  )}



const styles = {
  card: {
    maxWidth: 450,
    margin:20,
  },
  media: {
    height: 350,
  },
  

};


export default withStyles(styles)(MediaCard);
