import React from "react"
import FixedNavbarExample from  '../../partial/components/navbar'
import FooterPage from  '../../partial/components/footer'
import ContactUs from '../Contact/contactus';

const EmailPage = ()=>{
    return(
        <div>
        <FixedNavbarExample />
        <ContactUs />
        <FooterPage />
        </div>
    )
}

export default EmailPage;