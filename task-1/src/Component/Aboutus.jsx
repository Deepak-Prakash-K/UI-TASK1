import React from "react";
import "../Css/Aboutus.css";
import tumericpowder from "../Assets/Tumerictable.png"
const Aboutus = () => {
    return (
        <div className="main-div">
            <div className="photo-div">
                <img src={ tumericpowder } alt="tumricpowder" id="tumeric" />
            </div>
            <div className="content-div">
                <h2 id="head">About Us</h2>
                <p id="dummy">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
                <button id="read-button"><span id="read-text">Read More</span></button>
            </div>
        </div>

    )
}
export default Aboutus;