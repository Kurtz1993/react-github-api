import React, { Component } from 'react';

import { LoginInformation } from './models/login-information';
import LoginForm from './authentication/LoginForm';
import RepositoriesList from './repositories/containers/RepositoriesList';

class App extends Component {
  state = {
    isLoggedIn: false,
  };

  componentDidMount() {
    if (sessionStorage.getItem('token')) {
      this.setState({ isLoggedIn: true });
    }
  }

  login = (credentials: LoginInformation) => {
    const { username, password } = credentials;
    const token = btoa(`${username}:${password}`);
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('username', username);

    this.setState({ isLoggedIn: true });
  };

  logout = () => {
    sessionStorage.clear();
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <main className="app">
        {!isLoggedIn && <LoginForm login={this.login} />}
        {isLoggedIn && <RepositoriesList logout={this.logout} />}
      </main>
    );
  }
}

export default App;
