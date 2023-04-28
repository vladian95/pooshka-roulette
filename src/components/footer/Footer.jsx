import React, { useEffect, useRef } from 'react';
import './footer.scss';
import telegram from '../../assets/telegramMar.svg';
import mail from '../../assets/mail.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import { gsap, Power3 } from 'gsap';

const Footer = () => {
  const footerTelegram = useRef(null);
  const footerMail = useRef(null);
  const footerGithub = useRef(null);
  const footerLinkedin = useRef(null);
  const footerContent = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerTelegram.current,
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
      footerMail.current,
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
    gsap.fromTo(
      footerGithub.current,
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
        delay: 0.4,
      }
    );
    gsap.fromTo(
      footerLinkedin.current,
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
        delay: 0.6,
      }
    );

    gsap.fromTo(
      footerContent.current,
      {
        duration: 1,
        opacity: 0,
        y: 200,
        ease: Power3.easeOut,
      },
      {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
      }
    );
  }, []);

  return (
    <footer>
      <ul className="wrapperIcon">
        <li className="icon telegram">
          <span class="tooltip">Telegram</span>
          <a href="https://t.me/vladian95" target="_blank" rel="noreferrer">
            <div ref={footerTelegram}>
              <img src={telegram} alt="telegram" />
            </div>
          </a>
        </li>
        <li className="icon mail">
          <span class="tooltip">Gmail</span>
          <a
            href="mailto:kvankvan1995@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div ref={footerMail}>
              <img src={mail} alt="Gmail" />
            </div>
          </a>
        </li>
        <li className="icon github">
          <span class="tooltip">Github</span>
          <a
            href="https://github.com/vladian95"
            target="_blank"
            rel="noreferrer"
          >
            <div ref={footerGithub}>
              <img src={github} alt="github" />
            </div>
          </a>
        </li>
        <li className="icon linkedin">
          <span class="tooltip">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/vlad-kvanin-06a223212/"
            target="_blank"
            rel="noreferrer"
          >
            <div ref={footerLinkedin}>
              <img src={linkedin} alt="linkedin" />
            </div>
          </a>
        </li>
      </ul>
      <div className="footerWrap">
        <h1 className="footerText" ref={footerContent}>
          Developed by{' '}
          <a
            href="https://vladian95.github.io/port3d/"
            className="vldn95"
            target="_blank"
            rel="noreferrer"
          >
            vladian95
          </a>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
