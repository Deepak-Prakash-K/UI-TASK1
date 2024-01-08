import React from "react";
import "../Css/Footer.css";
import truck from "../Assets/Foodtruck.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <footer className="end">
            <div className="first-div">
                <img src={truck} alt="foodtruck" id="truck" />
            </div>
            <div className="second-div">
                <h3 id="details">Contact Us</h3>
                <p id="address">Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
                <p id="mail">example2020@gmail.com</p>
                <p id="phone">(904) 443-0343</p>
            </div>
            <div className="third-div">
                <h3 id="more">More</h3>
                <p id="us">About Us</p>
                <p id="product">Products</p>
                <p id="career">Career</p>
                <p id="contact">Contact Us</p>
            </div>
            <div className="fourth-div">
                <h3 id="social">Social Links</h3>
                <FontAwesomeIcon icon={faInstagram} id="insta" />
                <FontAwesomeIcon icon={faTwitter}   id="twitter" />
                <FontAwesomeIcon icon={faFacebookF} id="facebook" />
            </div>
        </footer>
    )
}
export default Footer;