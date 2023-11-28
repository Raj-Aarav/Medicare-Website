import React from "react";
import Cards from "./Cards";
import { Link, redirect } from "react-router-dom";
import Navbar from './Navbar';
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
function HomePage() {

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
            <Navbar></Navbar>
            <h2 className="featured-services">Featured services</h2>
            <div className="card-palete">

                <div className="card-item">

                    <Cards
                        title="Medicines"
                        img="https://img.freepik.com/premium-photo/colorful-pills-tablets-background_488220-74752.jpg?w=360"
                        info="You are so much more than just a patient. We have designed our patient rooms with an aim to take care of medical needs, maximise comfort, and accommodate personal requirements for recovery."
                    />
                </div>

                <div className="card-item">
                    <Cards
                        title="Pathology"
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_YN-IzjoQ8LcXyLQR1B1moUBNpyETubJ_NA&usqp=CAU"
                        info="Discover Advanced Pathology Testing at Our Hospital!
                        
                        Uncover the intricate details of your health with our cutting-edge pathology testing services. Our hospital is dedicated to providing comprehensive diagnostic solutions through state-of-the-art procedures."
                    />
                </div>

                <div className="card-item">
                    <Cards
                        title="Health History"
                        img="https://e7.pngegg.com/pngimages/570/399/png-clipart-medicine-physician-health-care-medical-record-patient-health-thumbnail.png"
                        info="Your Health History, Our Priority!
                        
                        At MediCare, we prioritize your well-being by maintaining comprehensive health histories for our valued patients. Our commitment to personalized care extends to compiling and securely storing your health information, ensuring a holistic approach to your healthcare journey."
                    />
                </div>
            </div>
            <h2 className="featured-services">Health Tips</h2>
            <div className="health-tips">
                <p className="health-tips-heading"><b>Stay informed with latest health tips for a healthier life.</b></p>
                {/* Add your health tips or articles here */}
                <ul className="health-tips-points">
                    <li>Do not forget to eat breakfast and choose a nutritious meal with more protein and fiber and less fat, sugar, and calories. Strive for a healthy weight by combining a balanced diet with regular physical activity.</li><br />
                    <li>
                        To make sure you have sufficient levels of nutrients, taking a daily multivitamin supplement is a good idea,
                        especially when you do not have a variety of vegetables and fruits at home</li><br />
                    <li>Drink Water and Stay Hydrated, and Limit Sugared Beverages</li><br />
                    <li>There is a very strong connection between sleep quality and quantity and your immune system. You can keep your immune system functioning properly by getting seven to eight hours of sleep each night. Reduce excessive screen time, especially before bedtime, to improve sleep quality.</li><br />
                    <li>Foster positive relationships and social connections. Socializing is essential for mental and emotional well-being.</li><br />
                    <li>Stay informed about health-related topics. Knowledge empowers you to make informed decisions about your well-being.</li><br />
                </ul>
            </div>

            {/* About Us Section */}
            <h2 className="featured-services">About Us</h2>
            <div className="about-us">
                <p className="about-us-heading"><b>
                    Our initiative towards healthcare is dedicated to providing quality services and care for a healthier community.</b></p>
                <p className="about-us-points">
                    Welcome to MediCare  –  a platform dedicated to health and wellness. We are passionate about empowering individuals to lead healthier lives, providing reliable healthcare information, and services.
                </p>
                <p className="about-us-points">
                    Our Mission - At MediCare, our mission is to inspire and educate people to make informed choices about their health. Take routine health check-ups, keep a track of there health history. We believe that by offering advice, promoting healthy habits, and fostering a supportive platform where you've got all the basic necessities, we can contribute to a healthier and happier world.
                </p>
            </div>

            {/* Social Media Integration Section */}
            <h2 className="featured-services">Find us on</h2>
            {/* <div className="social-media"> */}
            <div className="social">
                <TiSocialYoutube className="social-media" onClick={redirect_yt} />
                <TiSocialTwitter className="social-media" onClick={redirect_x}/>
                <SlSocialFacebook className="social-media" onClick={redirect_meta}/>
                <SlSocialInstagram className="social-media" onClick={redirect_ig}/>
            </div>
        </div>
    )
}

export default HomePage;