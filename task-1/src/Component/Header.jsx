import React from "react";
import "../Css/Header.css";
import truck from "../Assets/Foodtruck.png";
import pizza from "../Assets/Pizza.png";
const Header = () => {
    return (
        <header>
            <div className="intro">
                <img src={truck} alt="food-truck" id="foodtruck" />
                <p id="beverages">Discover the <span id="good">Best</span> Food and Drinks</p>
                <p id="health">Naturally made Healthcare Products for the better care & Support of your body</p>
                <button id="click"><span id="explore">Explore Now!</span></button>
            </div>
            <div className="intro-2">
                <button id="press"><span id="touch">Get in Touch</span></button>
                <img src={ pizza } alt="pizza" id="vegpizza" />
                <div className="curved-div"></div>
            </div>
        </header>
    )
}
export default Header;
