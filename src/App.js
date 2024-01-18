import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Footer from './components/Common/Footer/Footer';
import Header from './components/Common/Header/Header';
import LandingPage from './components/LandingPages/MainComponent/LandingPage';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
