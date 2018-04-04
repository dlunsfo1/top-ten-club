//Login.jsx
import React, { Component } from 'react';
import axios from 'axios';
import Input from '../../UI/Form/Input/Input';
import loginService from '../LoginService/LoginService';
import Aux from '../../hoc/Aux/Aux';

class Login extends Component {
  state = {
    userForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
          label: 'Your Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
          label: 'Password'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      }
    },
    authenticated: false
  };

  loginService = new loginService();

  userUpdateHandler = event => {
    event.preventDefault();
    console.log('userUpdateHandler!');
    const formData = {};

    for (let userElementId in this.state.userForm) {
      formData[userElementId] = this.state.userForm[userElementId].value;
    }

    const user = {
      userData: formData
    };

    console.log(formData);

    this.loginService.sendData(formData);
    this.setState({ authenticated: true });
  };

  inputChangedHandler = (event, inputIdentifier) => {
    console.log(event.target.value);
    // does not clone deeply!
    const updatedUserForm = {
      ...this.state.userForm
    };
    // make a copy now of the value which is what I need!
    const updatedUserFormElement = {
      ...updatedUserForm[inputIdentifier]
    };

    updatedUserFormElement.value = event.target.value;
    console.log(updatedUserFormElement);

    updatedUserForm[inputIdentifier] = updatedUserFormElement;
    this.setState({ userForm: updatedUserForm });
  };

  render() {
    // builds the form
    const formElementsArray = [];
    for (let key in this.state.userForm) {
      formElementsArray.push({
        id: key,
        config: this.state.userForm[key]
      });
    }

    let display = (
      <Aux>
        <h2>Welcome</h2>
        <form id="user" onSubmit={this.userUpdateHandler}>
          {formElementsArray.map(formEl => (
            <Input
              key={formEl.id}
              elementType={formEl.config.elementType}
              elementConfig={formEl.config.elementConfig}
              value={formEl.config.value}
              changed={event => this.inputChangedHandler(event, formEl.id)}
            />
          ))}
          <button
            style={{ marginTop: '20px' }}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </Aux>
    );

    if (this.state.authenticated) {
      display = (
        <Aux>
          <h3>Hello Daren</h3>
          <address>
            123 Main Street<br />
            The Woodlands, Texas<br />
            77382
          </address>
          <h3>Your Favorites</h3>
        </Aux>
      );
    }

    return (
      <div className="container detail">
        <div className="row">
          <div className="col-md">{display}</div>
        </div>
      </div>
    );
  }
}

export default Login;
