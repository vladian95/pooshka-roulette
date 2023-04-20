import React from 'react';
import Confetti from 'react-confetti';

const ConfettiComponent = () => {
  const width = document.documentElement.scrollWidth;
  const height = document.documentElement.scrollHeight;

  return (
    <Confetti
      width={width}
      height={height}
      style={{ zIndex: 11 }}
      numberOfPieces={500}
      gravity={0.1}
      run={true}
      friction={1}
    />
  );
};

export default ConfettiComponent;
