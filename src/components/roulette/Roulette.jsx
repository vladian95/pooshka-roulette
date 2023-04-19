import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import './roulette.scss';

const data = [
  { option: '0' },
  { option: '1' },
  { option: '2' },
  { option: '3' },
  { option: '4' },
  { option: '5' },
  { option: '6' },
  { option: '7' },
];

const Roulette = ({ onResultChange }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [selectedPrize, setSelectedPrize] = useState(null);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handlePrizeNumberChange = (newPrizeNumber) => {
    setPrizeNumber(newPrizeNumber);
    setMustSpin(false);
  };

  const handleStopSpinning = () => {
    if (data[prizeNumber]) {
      const selectedOption = data[prizeNumber].option;
      setSelectedPrize(selectedOption);
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
      <button className="rouletteBtn" onClick={handleSpinClick}>
        START
        <div className="wave"></div>
      </button>
    </div>
  );
};

export default Roulette;
