import React from 'react'
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
              <Roll top>
                <h2>Join 2,000+ subscribers</h2>
                <p>Stay in the loop with everything you need to know.</p>
              </Roll>
            </div>
            <div className="form_contact">
              <div className="form-group">
                <Roll top>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <button className="btn btn-success"> Subcribe</button>
                </Roll>
              </div>
              <Roll top>
                <p>We care about your data in our privacy policy</p>
              </Roll>
            </div>
          </div>
        </div>
  )
}
