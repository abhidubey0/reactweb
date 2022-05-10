import React from "react";
import Common from "./common";
import home from "../images/home2.png";
const Home = () =>{
   return(
       <>
           <Common  name="Grow your bussiness with" btname="Get Started" visit="/service" imgsrc={home} />
       </>
   );
};

export default Home;