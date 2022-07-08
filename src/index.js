import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './index.css';
// import reportWebVitals from './reportWebVitals';
// import Amplify from 'aws-amplify';
// import config from './aws-exports';
// Amplify.configure(config);
// https://stackoverflow.com/questions/70036160/amplifysignout-is-not-exported-from-aws-amplify-ui-react

import App from './components/App/App';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';

ReactDOM.render(
  <div className="page-container">
    <Router>
      <div className="content-wrap"
      style={{
        // backgroundImage: 'url(/wallpaper.jpg)',
        backgroundImage: 'linear-gradient(to right, red, blue)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // width: '100vw',
        // height: '100vh',
        // filter: 'brightness(70%)',
      }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  </div>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
