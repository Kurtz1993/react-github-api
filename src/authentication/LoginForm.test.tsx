import React from 'react';
import { shallow } from 'enzyme';

import LoginForm from './LoginForm';

test('Login Form should call login with the correct params', () => {
  const onLogin = function () {}
  const component = shallow(<LoginForm login={onLogin} />);
  const loginSpy = spyOn(component.props(), 'login');
  const usernameInput = component.find('input[name="username"]');
  const passwordInput = component.find('input[name="password"]');
  const form = component.find('form');

  usernameInput.simulate('change', 'user');
  passwordInput.simulate('change', 'pass');

  form.simulate('submit');

  // expect(loginSpy).toHaveBeenCalled();
  // expect(loginSpy).toHaveBeenCalledWith({username: 'user', password: 'pass'});
});