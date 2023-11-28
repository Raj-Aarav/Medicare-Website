// CustomerCarePage.jsx
import React from 'react';
import CustomerCare from './CustomerCare';
import Navbar from './Navbar';
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";

const customerCareData = [
  {
    id: 1,
    department: 'General Inquiries',
    contactNumber: '+1 123-456-7890',
    email: 'info@medicare.com',
  },
  {
    id: 2,
    department: 'Lab test Scheduling',
    contactNumber: '+1 987-654-3210',
    email: 'LabTests@medicare.com',
  },
  {
    id: 3,
    department: 'Billing and Payments',
    contactNumber: '+1 555-123-4567',
    email: 'billing@medicare.com',
  },
];

function CustomerCarePage() {

  const redirect_yt = () => {
    window.location.href = 'https://www.youtube.com/channel/UC0InVdvqNyNzKBl1-TL348A';
  };

  const redirect_ig = () => {
    window.location.href = 'https://www.instagram.com/theapollohospitals/?hl=en';
  };

  const redirect_meta = () => {
    window.location.href = 'https://www.facebook.com/TheApolloHospitals/';
  };

  const redirect_x = () => {
    window.location.href = 'https://twitter.com/HospitalsApollo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor';
  };

  return (
    <div>
      <div className="customer-care-page">
        <h1>Customer Care</h1>
        <Navbar></Navbar>
        <div className="customer-care-container">
          {customerCareData.map(contact => (
            <CustomerCare key={contact.id} {...contact} />
          ))}
        </div>
      </div>
      <h2 className="featured-services">Find us on</h2>
            <div className="social">
                <TiSocialYoutube className="social-media" onClick={redirect_yt} />
                <TiSocialTwitter className="social-media" onClick={redirect_x}/>
                <SlSocialFacebook className="social-media" onClick={redirect_meta}/>
                <SlSocialInstagram className="social-media" onClick={redirect_ig}/>
            </div>
    </div>
  );
}

export default CustomerCarePage;