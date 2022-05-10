import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
    <section id="header" className="">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                      <div className="col-md-6 headerstyle order-2 order-lg-0 ">
                          <h1>{props.name} <b>CodeAcademy</b></h1>
                          <h2 className="pt-3">we are the team of professional developer</h2>
                          <div className="btn btn-start mt-3">
                              <NavLink to={props.visit}>{props.btname}</NavLink>
                          </div>
                      </div>
                      <div className="home_img col-lg-6 order-lg-2 order-1">
                          <img src={props.imgsrc} alt="home_img" className="animated"/>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Common;
