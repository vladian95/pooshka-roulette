import './App.css';
import BackgroundAnimation from './components/BackgroundAnimation';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BackgroundAnimation />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
