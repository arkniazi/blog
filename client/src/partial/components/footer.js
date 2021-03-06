import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="default-color" className="font-small mt-4">
      {/* <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
          </MDBCol>
        </MDBRow>
      </MDBContainer> */}
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.sudo.com"> sudo </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;