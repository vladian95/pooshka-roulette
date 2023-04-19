import React from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

const ConfettiComponent = () => {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} style={{ zIndex: 11 }} />;
};

export default ConfettiComponent;
