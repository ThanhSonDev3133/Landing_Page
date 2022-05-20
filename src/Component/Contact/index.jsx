import React from 'react'
import { Fade } from 'react-reveal';
import Roll from "react-reveal/Roll";
import icon from "../../assets/img/icon.png";

export default function Contact() {
  return (
    <div className="body_icon">
          <div className="icon_img">
            <img src={icon} alt="" />
          </div>
          <div className="icon_form">
            <div className="form_text">
              <Fade top>
                <h2>Join 2,000+ subscribers</h2>
                <p>Stay in the loop with everything you need to know.</p>
              </Fade>
            </div>
            <div className="form_contact">
              <div className="form-group">
                <Fade top>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <button className="btn btn-success"> Subcribe</button>
                </Fade>
              </div>
              <Fade top>
                <p>We care about your data in our privacy policy</p>
              </Fade>
            </div>
          </div>
        </div>
  )
}
