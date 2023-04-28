import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import confetti from 'canvas-confetti';
import './roulette.scss';

const data = [
  { option: '5%' },
  { option: '50%' },
  { option: '30%' },
  { option: '20%' },
  { option: '15%' },
  { option: '10%' },
];

const Roulette = ({ onResultChange }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const onClickConfetti = () => {
    confetti({
      particleCount: 400,
      spread: 200,
    });
  };

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handleStopSpinning = () => {
    if (data[prizeNumber]) {
      const selectedOption = data[prizeNumber].option;
      onResultChange(selectedOption);
    }
    setMustSpin(false);
  };

  return (
    <div className="rouletteInner">
      <Wheel
        className="rouletteWheel"
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={handleStopSpinning}
        style={{ zIndex: 2 }}
        backgroundColors={['#fff', 'lightpink']}
        radiusLineColor={['lightgray']}
        outerBorderColor={['lightgray']}
        outerSize={1000}
      />
      <button
        className="rouletteBtn"
        onClick={() => {
          handleSpinClick();
          onClickConfetti();
        }}
      >
        START
        <div className="wave"></div>
      </button>
    </div>
  );
};

export default Roulette;
// БЕЗ ОГРАНИЧЕНИЯ

// import React, { useState, useEffect } from 'react';
// import { Wheel } from 'react-custom-roulette';
// import './roulette.scss';

// const data = [
//   { option: '10%' },
//   { option: '20%' },
//   { option: '30%' },
//   { option: '15%' },
//   { option: '5%' },
//   { option: '50%' },
// ];

// const Roulette = ({ onResultChange }) => {
//   const [mustSpin, setMustSpin] = useState(false);
//   const [prizeNumber, setPrizeNumber] = useState(0);
//   const [lastSpinDate, setLastSpinDate] = useState(null);
//   const [nextSpinDate, setNextSpinDate] = useState(null);
//   const [showNextSpinDate, setShowNextSpinDate] = useState(true);

//   useEffect(() => {
//     const lastSpin = localStorage.getItem('lastSpin');
//     if (lastSpin) {
//       setLastSpinDate(new Date(lastSpin));
//     }
//   }, []);

//   useEffect(() => {
//     if (lastSpinDate) {
//       const nextSpin = new Date(lastSpinDate.getTime() + 2592000000); // 2592000000ms = 1 mon
//       setNextSpinDate(nextSpin);
//     }
//   }, [lastSpinDate]);

//   useEffect(() => {
//     if (nextSpinDate) {
//       const now = new Date();
//       if (now.getTime() >= nextSpinDate.getTime()) {
//         setShowNextSpinDate(false);
//       } else {
//         setShowNextSpinDate(true);
//       }
//     }
//   }, [nextSpinDate]);

//   const handleSpinClick = () => {
//     if (
//       !mustSpin &&
//       (!lastSpinDate || Date.now() - lastSpinDate.getTime() > 2592000000) //2592000000
//     ) {
//       const newPrizeNumber = Math.floor(Math.random() * data.length);
//       setPrizeNumber(newPrizeNumber);
//       setMustSpin(true);
//       setLastSpinDate(new Date());
//       localStorage.setItem('lastSpin', new Date());
//       setShowNextSpinDate(true);
//     }
//   };

//   const handleStopSpinning = () => {
//     if (data[prizeNumber]) {
//       const selectedOption = data[prizeNumber].option;
//       onResultChange(selectedOption);
//     }
//     setMustSpin(false);
//   };

//   return (
//     <div className="rouletteInner">
//       <Wheel
//         className="rouletteWheel"
//         mustStartSpinning={mustSpin}
//         prizeNumber={prizeNumber}
//         data={data}
//         onStopSpinning={handleStopSpinning}
//         style={{ zIndex: 2 }}
//         backgroundColors={['#fff', 'lightpink']}
//         radiusLineColor={['lightgray']}
//         outerBorderColor={['lightgray']}
//         outerSize={1000}
//       />
//       <button className="rouletteBtn" onClick={handleSpinClick}>
//         START
//         <div className="wave"></div>
//       </button>
//       {showNextSpinDate && nextSpinDate && (
//         <div className="nextSpinDate">
//           Ваш очередной розыгрыш возможен:{' '}
//           {`${nextSpinDate.toLocaleDateString()} ${nextSpinDate.toLocaleTimeString()}`}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Roulette;
