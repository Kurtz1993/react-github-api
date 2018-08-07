import React, { PureComponent, FormEvent, ChangeEvent } from 'react';

import './LoginForm.css';
import { LoginInformation } from '../models/login-information';
import githubLogo from '../assets/github-logo.png';

interface LoginFormProps {
  login: (credentials: LoginInformation) => void;
}

class LoginForm extends PureComponent<LoginFormProps, any> {
  state = {
    username: '',
    password: '',
  };

  usernameRef = React.createRef<HTMLInputElement>();
  passwordRef = React.createRef<HTMLInputElement>();

  submit = (e: FormEvent) => {
    e.preventDefault();

    const { username, password } = this.state;

    this.props.login({ username, password });

    this.setState({ username: '', password: '' });
  };

  inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="login">
        <form className="form form--shadow" onSubmit={this.submit}>
          <img src={githubLogo} alt="GitHub Logo" height="100" className="form__logo" />

          <div className="form__group">
            <label htmlFor="username" className="form__label">
              Username
            </label>
            <input
              type="text"
              className="form__input"
              name="username"
              placeholder="Username"
              onChange={this.inputChange}
              value={username}
              required
            />
          </div>

          <div className="form__group">
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input
              type="password"
              className="form__input"
              name="password"
              placeholder="Password"
              onChange={this.inputChange}
              value={password}
              required
            />
          </div>

          <div className="form__group">
            <button className="form__action form__action--submit" disabled={!username || !password}>
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
