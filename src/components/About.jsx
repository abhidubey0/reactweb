import React from "react";
import Common from "./common";
import about from "../images/about.svg"

const About = () =>{
    return(
       <Common name="Welcome to About Page" btname="Contact now" visit="/contact" imgsrc={about}/>
    );
}

export default About;