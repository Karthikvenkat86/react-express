import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link,  IndexRoute  } from 'react-router';



class App extends React.Component {
  render() {
    return(
      <div>

      <ul>
      <li><Link to="/google/new">New User |</Link></li>
      <li><Link to="/google/existing">Existing User |</Link></li>
      <li><Link to="/google/googlelogin">Use Google Login</Link></li>
      </ul>

      {this.props.children}
      </div>
    )
  }
}

export default App;



export class New extends React.Component {
  render() {
    return (
      <h6>New User</h6>
    )
  }
}



export class Existing extends React.Component {
  render() {
    return (
      <h6>Existing User</h6>
    )
  }
}


export class GoogleLogin extends React.Component {
  render()  {
    return (
      <h6>Google Login Credentials</h6>
    )
  }
}