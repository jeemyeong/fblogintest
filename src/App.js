import React, { Component } from 'react';
import './App.css';
import FacebookLogin from 'react-facebook-login';


class App extends Component {
  
  render() {

    const responseFacebook = (response) => {
      console.log(response);
    }

    return (
      <div className="App">
        수빈♥️
      <FacebookLogin
          appId="129463160981271"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook} />
      </div>
    );
  }
}

export default App;
