import React from 'react'
import img from "../../assets/img/logoVitaorga.png";

export default function Header() {
  return (
        <div className="header-fixed">
          <div className="header_top">
            <div className="header_left">
              <img src={img} alt="" />
            </div>
            <div className="header_right">
              <button className="btn ">
                Apply now <i class="fa fa-long-arrow-alt-right"></i>
              </button>
              <input type="checkbox" name="" id="nav-toggle" />
              <span className="btn_bars">
                <label htmlFor="nav-toggle">
                  <i class="fa fa-bars"></i>
                </label>
              </span>
            </div>
          </div>
        </div>
  )
}
