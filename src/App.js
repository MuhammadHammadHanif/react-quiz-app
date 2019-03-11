import React, { Component } from 'react';
import AppRouter from './routers/AppRouter'

import './App.css';

class App extends Component {
    
  render() {
    return (
      // <div>
      //   <SignUp addUser={this.addUser}/>
      // </div>
      <AppRouter/>
       
    );
  }
}

export default App;
