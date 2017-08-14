import React, { Component } from 'react';
import { Navbar } from 'views/generic/components';
import Routes from '../Routes.jsx';

class App extends Component {
  componentDidMount() {
    /* Remove the loading spinner */
    document.getElementById( 'mounting-preview' ).remove();
  }

  render() {
    return (
      <main>
        <Navbar appName="EXAMPLE APP" />
        <Routes />
      </main>
    );
  }
}

export default App;
