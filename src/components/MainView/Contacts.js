import React, { Component } from 'react';
import FooterPage from "../../partial/components/footer";
import FixedNavbarExample  from '../../partial/components/navbar'
import ProfileCard from '../Profile/ProfileCards';
import UserCard from 'react-ui-cards';
import CardExampleCardProps from "../Cards/ProfileCard";
class Contacts extends Component {
    render() {
      return (
        <div className="Contact">
          <FixedNavbarExample />
          <div className="container mcs"> 
            <h1 className="text-center">Our  Team</h1>
            <div className="row">
              <div className="col-4">
                <ProfileCard/>   
              </div>
              <div className="col-4">
              <ProfileCard/>
              </div>
              <div className="col-4">
                <ProfileCard/>   
              </div>
              <div className="col-4">
              <ProfileCard/>
              </div>

              
            </div>
          </div>

          <FooterPage />
        </div>
      );
    }
  }
  
  export default Contacts;
  