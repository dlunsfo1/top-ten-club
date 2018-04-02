import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Input from '../../UI/Form/Input/Input';

class User extends Component {
  state = {
    userForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'User Name',
          label: 'User Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Email Address',
          label: 'Email Address'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
    }
  }

  userUpdateHandler = () => {
    console.log('userUpdateForm !!!');
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
      });
    }

  console.log(formElementsArray);

  let form = (
    <Aux>
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
      {/* was onClick={this.venueUpdateHandler} but a better way is onSubmit */}
        <button style={{marginTop: "20px"}}  type="submit" className="btn btn-primary" >submit</button>
      </Aux>
 
    
  );
  if(this.state.loading) {
    form = <Spinner />
  }
  return (
    <Aux>
    <div className="container"> 
    <h2>User info</h2>
   
    
    <form onSubmit={this.userUpdateHandler}>   
    <div className="form-group">
      {form}
     </div>
    </form>
    </div>
     </Aux>
  )
}
}


export default User;