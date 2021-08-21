import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import signup from "../images/signup1.png";
import {
  FcBusinessman,
  FcLock,
  FcInvite,
  FcPhone,
  FcBriefcase,
  FcUnlock,
} from "react-icons/fc";


const Signup = () => {

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <FcBusinessman />
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    // value={user.name}
                    // onChange={handleInputs}
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <FcInvite />
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    // value={user.email}
                    // onChange={handleInputs}
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <FcPhone />
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    // value={user.phone}
                    // onChange={handleInputs}
                    placeholder="Your Mobile Number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="work">
                    {/* <FcBriefcase /> */}
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    autoComplete="off"
                    // value={user.work}
                    // onChange={handleInputs}
                    placeholder="Your Profession"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <FcUnlock />
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    autoComplete="off"
                    // value={user.password}
                    // onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <FcLock />
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    // value={user.cpassworde}
                    // onChange={handleInputs}
                    placeholder="Confirm Your password"
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                    // onClick={PostData}
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <NavLink to="/login" className="signup-image-link">
                I am already member
              </NavLink>
              <figure>
                <img src={signup} alt="signpic" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;