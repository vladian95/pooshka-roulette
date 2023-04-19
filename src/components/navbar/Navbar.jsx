import React from 'react';
import './navbar.scss';
import instagram from '../../assets/instagramMar.svg';
import telegram from '../../assets/telegramMar.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarWrapper">
        <div className="logo">
          <span className="logoText">PoooshkA</span>
        </div>
        <div className="navbarSocial">
          <a className="telegramLink" href="#">
            <img src={telegram} alt="telegram" />
          </a>
          <a className="instagramLink" href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
