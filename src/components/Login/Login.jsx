import React, { Component } from 'react';
import axios from 'axios';
import Input from '../../UI/Form/Input/Input';
import loginService from '../LoginService/LoginService';



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
          type: 'text',
          placeholder: 'Password',
          label: 'Password'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      }
    }
  }
 

  loginService = new loginService();

  userUpdateHandler = (event) => {
    event.preventDefault();
    console.log('userUpdateHandler!');
    const formData = {};

    for (let userElementId  in this.state.userForm) {
      formData[userElementId] = this.state.userForm[userElementId].value;
    }

    const user = {
      userData: formData
    }

    console.log(formData);
    
    this.loginService.sendData(formData);
    this.setState({userForm: initialState})
   
  }

  inputChangedHandler = (event, inputIdentifier) => {
    console.log(event.target.value);
    // does not clone deeply!
    const updatedUserForm = {
      ...this.state.userForm
    }
    // make a copy now of the value which is what I need!
    const updatedUserFormElement = { 
      ...updatedUserForm[inputIdentifier] 
    };

    updatedUserFormElement.value = event.target.value;
    //updatedVenueFormElement.value = this.checkValidityHandler(updatedVenueFormElement.value, updatedVenueFormElement.validation);
    console.log(updatedUserFormElement);

    updatedUserForm[inputIdentifier] = updatedUserFormElement;
    this.setState({ userForm: updatedUserForm });
  };
 

  render() {

    const formElementsArray = [];
    for (let key in this.state.userForm) {
      formElementsArray.push({
        id: key,
        config: this.state.userForm[key]
      })
    }

    return (
      <div className="container detail">
      <h2>Welcome</h2>
<form onSubmit={this.userUpdateHandler}>

      
{
  formElementsArray.map(formEl => (
    <Input 
    key={formEl.id}
    elementType={formEl.config.elementType}
    elementConfig={formEl.config.elementConfig}
    value={formEl.config.value} 
    changed={(event) => this.inputChangedHandler(event, formEl.id)} 
     />
  )
)
}
<button style={{marginTop: "20px"}}  type="submit" className="btn btn-primary" >Submit</button>
</form>
      </div>

    )

  }

}

export default Login;