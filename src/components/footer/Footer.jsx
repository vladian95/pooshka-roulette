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
          <a href="#">
            <img src={telegram} alt="telegram" />
          </a>
        </li>
        <li className="icon mail">
          <span class="tooltip">Gmail</span>
          <a href="#">
            <img src={mail} alt="Gmail" />
          </a>
        </li>
        <li className="icon github">
          <span class="tooltip">Github</span>
          <a href="#">
            <img src={github} alt="github" />
          </a>
        </li>
        <li className="icon linkedin">
          <span class="tooltip">LinkedIn</span>
          <a href="#">
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
      </ul>
      <h1 className="footerText">
        Developed by <span className="vldn95">vladian95</span>
      </h1>
    </footer>
  );
};

export default Footer;
