import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './index.css';
// import reportWebVitals from './reportWebVitals';
// import Amplify from 'aws-amplify';
// import config from './aws-exports';
// Amplify.configure(config);
// https://stackoverflow.com/questions/70036160/amplifysignout-is-not-exported-from-aws-amplify-ui-react

// import App from './components/App/App';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import Fixtures from './components/Fixtures/Fixtures';
import Contact from './components/Contact/Contact';
import History from './components/History/History';
import Anniversary from './components/Anniversary/Anniversary';

ReactDOM.render(
  <div className="page-container">
    <Router>
      <div className="content-wrap"
      style={{
        // backgroundImage: 'linear-gradient(to right, #8B0000, #000036)',
        backgroundImage: 'url(/wallpaper4n2.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // width: '100vw',
        // height: '100vh',
        // filter: 'brightness(50%)',
      }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/events" element={<Events />} />
          <Route path="/history" element={<History />} />
          <Route path="/anniversary" element={<Anniversary />}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </div>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
