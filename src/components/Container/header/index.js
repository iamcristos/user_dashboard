import React from 'react'
import  HeaderSection from './styles';
import uk from "../../../assets/uk.svg";
import dp from "../../../assets/dp.jpg";
export default function Header() {
    return (
        <HeaderSection>
           <div className="left">
        <i className="fas fa-bars"></i>

        <div className="help">
          <p>Help: +050 2992 709 </p>
        </div>

        <div className="location">
          <div className="image">
            <img src={uk} alt="uk" />
          </div>
          <p>United States </p>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>

      <div className="right">
        <input placeholder="Search Here" />
        <i className="far fa-bell"></i>
        <i className="far fa-envelope"></i>

        <div className="profile">
          <img src={dp} alt="profile" />
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
        </HeaderSection>
    )
}
