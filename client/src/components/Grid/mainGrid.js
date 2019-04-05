
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import './index.css';
import CardExample from '../Cards/customCard';
import MediaCard from '../Cards/mediaCard';

const gridExamplesPage = () => {
  return (
   
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 g-card">
        <MediaCard />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 g-card">
        <MediaCard />
        </div>
        <div className="col-lg-4 col-md-4 col-12 g-card">
        <MediaCard />
        </div>
      </div>
    
  );
}

export default gridExamplesPage;