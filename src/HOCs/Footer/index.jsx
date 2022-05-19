import React from 'react'
import Roll from "react-reveal/Roll";
import img from "../../assets/img/logoVitaorga.png";

export default function Footer() {
  return (
    <footer>
        <div className="footer_vitao">
          <div className="footer_left">
            <div className="img_logo">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="text">
            <Roll top>
              <p>© 2077 VitaOrga. All rights reserved.</p>
            </Roll>
          </div>
        </div>
      </footer>
  )
}
