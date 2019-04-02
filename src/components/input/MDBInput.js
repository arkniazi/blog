import React from "react";
import PropTypes from 'prop-types';
import { MDBInput } from "mdbreact";

const InputPage = (props) => {
  return (
    <MDBInput label={props.label} type={props.type} />
  );
}

export default InputPage;