import React, { useState} from "react";
import "../Css/Caurosel.css";
import tomato from "../Assets/Grilledtomatoes.png";
import salad from "../Assets/Salad.png";
import meal from "../Assets/Brocolli.png";
import grillcorn from "../Assets/Corn.png";
import wrap from "../Assets/Wrap.png";
import soup from "../Assets/Soup.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Carosuel = () => {
    const [containerVisible, setContainerVisible] = useState(1);
    const click1 = () =>{
        setContainerVisible(2);
    }
    const click2 =()=>{
        setContainerVisible(1);
    }
    return (
        <>
        {containerVisible === 1 && (
        <div className="main-cont">
            <p className="caro-head">Latest Artical</p>
            <div className="img-container">
            <div className="tomato-container">
                <img src={ tomato } alt="Grilled Tomato" className="tomato" />
                <h4 className="img-head1">Grilled Tomatoes at Home</h4>
                <p className="img-para1">PLorem Ipsum is simply dummy text of hte <br />printing and typesetting industry.Lorem 
                <br />Ipsum has been the industry's standard...</p>
                <button className="read-button1"><a href="..">Read More</a></button>
            </div>
            <div className="salad-container">
                <img src={salad} alt="salad" className="salad" />
                <h4 className="img-head2">Snacks for Travel</h4>
                <p className="img-para2">PLorem Ipsum is simply dummy text of hte <br />printing and typesetting industry.Lorem 
                <br />Ipsum has been the industry's standard...</p>
                <button className="read-button2"><a href="..">Read More</a></button>
            </div>
            <div className="meal-container">
                <img src={meal} alt="meal" className="meal" />
                <h4 className="img-head3">Post-workout Recipes</h4>
                <p className="img-para3">PLorem Ipsum is simply dummy text of hte <br />printing and typesetting industry.Lorem 
                <br />Ipsum has been the industry's standard...</p>
                <button className="read-button3"><a href="..">Read More</a></button>
            </div>
            </div>
            <button className="nav-button1"><FontAwesomeIcon icon={faAngleLeft} /></button><span className="half">  1/2  </span><button className="nav-button2" onClick={click1}><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
        )}
        {containerVisible === 2 && (
        <div className="main-content2">
            <p className="caro-head">Latest Artical</p>
            <div className="img-container">
            <div className="grill-container">
                <img src={ grillcorn} alt="grillcorn" className="grill"/>
                <h4 className="img-head1">How To Grill Corn</h4>
                <p className="img-para1">PLorem Ipsum is simply dummy text of hte <br />printing and typesetting industry.Lorem 
                <br />Ipsum has been the industry's standard...</p>
                <button className="read-button1"><a href="..">Read More</a></button>
            </div>
            <div className="wrap-container">
                <img src={wrap} alt="wrap" className="wrap"/>
                <h4 className="img-head2">Crunchwrap Supreme</h4>
                <p className="img-para2">PLorem Ipsum is simply dummy text of hte <br />printing and typesetting industry.Lorem 
                <br />Ipsum has been the industry's standard...</p>
                <button className="read-button2"><a href="..">Read More</a></button>
            </div>
            <div className="meal-container">
                <img src={soup} alt="soup" className="soup"/>
                <h4 className="img-head3">Broccoli Cheese Soup</h4>
                <p className="img-para3">PLorem Ipsum is simply dummy text of hte <br />printing and typesetting industry.Lorem 
                <br />Ipsum has been the industry's standard...</p>
                <button className="read-button3"><a href="..">Read More</a></button>
            </div>
            </div>
            <button className="nav-button1"><FontAwesomeIcon icon={faAngleLeft} onClick={click2}/></button><span className="half">  2/2  </span><button className="nav-button2"><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
        )}
        </>
    )
}
export default Carosuel;