import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux.js';
import Button from '../../UI/Button/Button.jsx';
import Spinner from '../../UI/Spinner/Spinner';
import Input from '../../UI/Form/Input/Input';
import axios from '../../../axios-topten';
import venueService from '../../components/VenueService/VenueService';

class VenueAdmin extends Component {
  state = {

    venueform:  {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Venue',
          label: 'Venue'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      website: {

          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Website',
            label: 'Website'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false
   
      },
      about: {

        elementType: 'textarea',
        elementConfig: {
          type: 'textarea',
          placeholder: 'About',
          label: 'About',
          rows: 10,
          cols: 80
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
 
    },  
    telephone: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Telephone',
        label: 'Telephone'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false

  },    
      street: {

          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Street',
            label: 'Street'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false
    
      },
  
      city: {

          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'City',
            label: 'city'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false
        
      },
  
      state: {

          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'State',
            label: 'State'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false
        
      },
  
      zipcode: {
    
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Zipcode',
            label: 'Zipcode'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false
      
      },

      venuecat: {
        elementType: 'select',
        elementConfig:  {
          type: 'select',
          options: [
            { value: 'steakhouse', displayValue: 'Steak House' },
            { value: 'texassteakhouse', displayValue: 'Texas Steak House' },    
            { value: 'seafoodhouse', displayValue: 'Seafood House' }                       
          ]
        },
        value: ''
      }

    },

    loading: false
  }

  addItemService = new venueService();

  componentWillMount() {
    console.log('componentWillMount');
  }

  venueUpdateHandler = (event) => {
    event.preventDefault();
    console.log('venueUpdateHandler!');
    const formData = {};

    for (let venueElementId  in this.state.venueform) {
      formData[venueElementId] = this.state.venueform[venueElementId].value;
    }

    const venue = {
      venueData: formData
    }

    console.log(formData);
    
    this.addItemService.sendData(formData);

    // axios
    //   .post('https://topten-7ff98.firebaseio.com/venues/venue.json', venue)
    //   .then(response => {
    //     console.log(response);
    //     this.setState({ loading: false });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     this.setState({ loadding: false });
    //   });   
  }

  checkValidityHandler(value, rules) {
    let isValue = false;

    if(rules.required) {
      isValid = value.trim() !== '';
    }

    return isValid;

  }

  inputChangedHandler = (event, inputIdentifier) => {
    console.log(event.target.value);
    // does not clone deeply!
    const updatedVenueForm = {
      ...this.state.venueform
    }
    // make a copy now of the value which is what I need!
    const updatedVenueFormElement = { 
      ...updatedVenueForm[inputIdentifier] 
    };

    updatedVenueFormElement.value = event.target.value;
    //updatedVenueFormElement.value = this.checkValidityHandler(updatedVenueFormElement.value, updatedVenueFormElement.validation);
    console.log(updatedVenueFormElement);

    updatedVenueForm[inputIdentifier] = updatedVenueFormElement;
    this.setState({ venueform: updatedVenueForm });

  };



  render () {

    // turn the object into an array

    const formElementsArray = [];
    for (let key in this.state.venueform) {
      formElementsArray.push({
        id: key,
        config: this.state.venueform[key]
      })
    }

    console.log(formElementsArray);

    let form = (
      <form onSubmit={this.venueUpdateHandler}>

      
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
        </form>
    );
    if(this.state.loading) {
      form = <Spinner />
    }
    return (
      <Aux>
      <div className="container"> 
      <h2>Venu info</h2>
        {form}
       </div> 
       </Aux>
    )
  }
}

export default VenueAdmin;