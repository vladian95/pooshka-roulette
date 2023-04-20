import React from 'react';
import './navbar.scss';
import instagram from '../../assets/instagramMar.svg';
import telegram from '../../assets/telegramMar.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarWrapper">
        <div className="logo">
          <span className="logoText">
            POOOSHK<span className="logoLetter">A</span>
          </span>
        </div>
        <div className="navbarSocial">
          <a
            className="telegramLink"
            href="https://t.me/marusyalook"
            target="_blank"
          >
            <img src={telegram} alt="telegram" />
          </a>
          <a
            className="instagramLink"
            href="https://instagram.com/poooshka?igshid=ZWIzMWE5ZmU3Zg=="
            target="_blank"
          >
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
