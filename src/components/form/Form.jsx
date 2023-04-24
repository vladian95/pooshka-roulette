import Modal from 'react-modal';
import React, { useState } from 'react';
import axios from 'axios';
import ConfettiComponent from '../ConfettiComponent';

import './form.scss';

const Form = ({ selectedPrize }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const TOKEN = '6061856841:AAF4o0WXDcFWUc3J9b3Cybs4-X8UMBC6E8E';
    const CHAT_ID = '-1001546830288';
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    let message = `<b>Запись клиента</b>\n`;
    message += `Имя: ${name}\n`;
    message += `Телефон: ${phone}\n`;
    message += `Выбранный приз: ${selectedPrize}\n`;

    try {
      const response = await axios.post(URL_API, {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      });

      if (response.status === 200) {
        setSuccess(true);
        setShowConfetti(true);
        setModalIsOpen(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {showConfetti && <ConfettiComponent />}
      <div className="formInner">
        <form onSubmit={handleSubmit}>
          <div className="inputPrizeInner">
            <label className="inputPrizeTitle" htmlFor="prize">
              ВАШ ВЫИГРЫШ:
            </label>
            <RoulettePrizeInput
              className="inputPrize"
              value={selectedPrize || ''}
              onChange={() => {}}
            />
          </div>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              id="name"
              className="inputFrom"
              value={name || ''}
              onChange={handleNameChange}
            />
            <span className="inputLabel">Ваше имя:</span>
          </div>
          <div className="inputBox">
            <input
              type="tel"
              required="required"
              id="phone"
              className="inputFrom"
              value={phone || ''}
              onChange={handlePhoneChange}
            />
            <span className="inputLabel">Ваш телефон:</span>
          </div>

          <button className="formBtn" type="submit">
            <span>О</span>тправить
          </button>
          {success && (
            <h2 className="successText">Информация успешна отправлена!</h2>
          )}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Success Modal"
            style={{
              overlay: {
                zIndex: 10,
                backgroundColor: 'transparent',
              },
              content: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                color: 'gray',
              },
            }}
          >
            <h2>Спасибо за участие в розыгрыше!</h2>
            <p>Ваша заявка успешно отправлена.</p>
            <button className="modalBtn" onClick={closeModal}>
              Закрыть
            </button>
          </Modal>
        </form>
      </div>
    </>
  );
};

const RoulettePrizeInput = ({ value }) => {
  return <input className="inputPrize" type="text" value={value} readOnly />;
};

export default Form;
