import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import image1 from '../../assets/images/img11.png';
const styles = {
  card: {
    maxWidth: 450,
    margin:20,
  },
  media: {
    height: 350,
  },
  

};

function MediaCard(props) {
  const { classes } = props;
  return (
    <div className="mycard">
      <div className="mycard-image">
        <img src={image1}></img>
          {/* <image src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"></image> */}
      </div>
      <div className="mycard-body">
        <h4 className="mycard-title">Header 2</h4>
        {/* <p className="mycard-text">lorem  ipsim=  sj sk dsj  skd  </p> */}
        {/* <button className="btn btn-default">More</button> */}
      </div>
    </div>
  );
}

// MediaCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(MediaCard);
