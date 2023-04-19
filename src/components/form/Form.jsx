import React, { useState } from 'react';
import axios from 'axios';
import ConfettiComponent from '../ConfettiComponent';
import Modal from 'react-modal';
import './form.scss';

const Form = ({ selectedPrize }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
    message += `Email: ${email}\n`;
    message += `Выбранный приз: ${selectedPrize}\n`;

    try {
      const response = await axios.post(URL_API, {
        chat_id: CHAT_ID,
        text: message,
        parse_model: 'HTML',
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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
            <label htmlFor="prize">Ваш выигрыш</label>
            <RoulettePrizeInput value={selectedPrize} onChange={() => {}} />
          </div>
          <div>
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <button type="submit">Отправить</button>
          {success && <p>Сообщение успешно отправлено!</p>}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Success Modal"
            style={{
              overlay: {
                zIndex: 10,
              },
              content: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red',
                //   zIndex: 9999,
              },
            }}
          >
            <h2>Спасибо за участие в розыгрыше!</h2>
            <p>Ваша заявка успешно отправлена.</p>
            <button onClick={closeModal}>Закрыть</button>
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