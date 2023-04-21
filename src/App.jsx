import { useState } from 'react';
import BackgroundAnimation from './components/BackgroundAnimation';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Navbar from './components/navbar/Navbar';
import Roulette from './components/roulette/Roulette';
import './App.css';

function App() {
  const [selectedPrize, setSelectedPrize] = useState(null);
  const handleResultChange = (selectedOption) => {
    setSelectedPrize(selectedOption);
  };

  return (
    <div className="App">
      <BackgroundAnimation />
      <Navbar />
      <div className="wrapperComponents">
        <Roulette onResultChange={handleResultChange} />
        <Form selectedPrize={selectedPrize} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
