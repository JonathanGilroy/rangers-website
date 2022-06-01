import React from 'react';
import logo from './rangers-logo.jpg';
import './App.css';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <p>Blood, sweat and beers coming soon!</p>
      </header>
      {/* <AmplifySignOut /> */}
    </div>
  );
}

// export default withAuthenticator(App);
export default App;
