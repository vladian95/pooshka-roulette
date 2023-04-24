import React from 'react';
import './footer.scss';
import telegram from '../../assets/telegramMar.svg';
import mail from '../../assets/mail.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';

const Footer = () => {
  return (
    <footer>
      <ul className="wrapperIcon">
        <li className="icon telegram">
          <span class="tooltip">Telegram</span>
          <a href="https://t.me/vladian95" target="_blank" rel="noreferrer">
            <img src={telegram} alt="telegram" />
          </a>
        </li>
        <li className="icon mail">
          <span class="tooltip">Gmail</span>
          <a
            href="mailto:kvankvan1995@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mail} alt="Gmail" />
          </a>
        </li>
        <li className="icon github">
          <span class="tooltip">Github</span>
          <a
            href="https://github.com/vladian95"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" />
          </a>
        </li>
        <li className="icon linkedin">
          <span class="tooltip">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/vlad-kvanin-06a223212/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
      </ul>
      <h1 className="footerText">
        Developed by{' '}
        <a
          href="https://vladian95.github.io/port3d/"
          className="vldn95"
          target="_blank"
          rel="noreferrer"
        >
          vladian95
          <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg>
        </a>
      </h1>
    </footer>
  );
};

export default Footer;
