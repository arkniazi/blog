import React, { Component } from 'react';
import '../../App.css';
import FooterPage from "../../partial/components/footer";
import AutoGrid  from "../Grid/mainGrid";
import FixedNavbarExample  from '../../partial/components/navbar'
import CarouselPage from "../carousel/MdbCarousel";
class Home extends Component {
    render() {
      return (
        <div className="Home">
          <FixedNavbarExample />
          <div className="mt-5 pt-3">
            <CarouselPage />
          </div>
          <div className="container main-content" >
            <AutoGrid />
            <hr  className="hr-line" />
          </div>
          
          <FooterPage />
        </div>
      );
    }
  }
  
  export default Home;
  