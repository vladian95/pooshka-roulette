import React, { useEffect, useRef } from 'react';
import instagram from '../../assets/instagramMar.svg';
import telegram from '../../assets/telegramMar.svg';
import { gsap, Power3 } from 'gsap';
import './navbar.scss';

const Navbar = () => {
  const iconsNavTeleg = useRef(null);
  const iconsNavInsta = useRef(null);

  useEffect(() => {
    const logoText = document.querySelector('#logoText');
    const letters = logoText.textContent.split('');

    logoText.textContent = '';

    letters.forEach((letter) => {
      logoText.innerHTML += '<span class="letter">' + letter + '</span>';
    });

    gsap.set('.letter', { display: 'inline-block' });
    gsap.fromTo(
      '.letter',
      { y: '100%' },
      { y: 0, delay: 1, stagger: 0.05, ease: 'back.out(1)' }
    );

    gsap.fromTo(
      iconsNavTeleg.current,
      {
        duration: 1,
        opacity: 0,
        y: 40,
        ease: Power3.easeOut,
      },
      {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
      }
    );

    gsap.fromTo(
      iconsNavInsta.current,
      {
        duration: 1,
        opacity: 0,
        y: 40,
        ease: Power3.easeOut,
      },
      {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
        delay: 0.2,
      }
    );
  }, []);

  return (
    <nav className="navbar">
      <div className="navbarWrapper">
        <div className="logo">
          <span id="logoText" className="logoText">
            POOOSHKA
          </span>
        </div>
        <div className="navbarSocial">
          <a
            className="telegramLink"
            href="https://t.me/marusyalook"
            target="_blank"
            rel="noreferrer"
          >
            <div ref={iconsNavTeleg}>
              <img src={telegram} alt="telegram" />
            </div>
          </a>
          <a
            className="instagramLink"
            href="https://instagram.com/poooshka?igshid=ZWIzMWE5ZmU3Zg=="
            target="_blank"
            rel="noreferrer"
          >
            <div ref={iconsNavInsta}>
              <img src={instagram} alt="instagram" />
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
