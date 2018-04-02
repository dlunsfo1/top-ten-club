import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import axios from '../../../axios-topten';

class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {color: 'blue'};
  }

  componentDidMount() {
    console.log(this.props);
  }

  venueSubmitHandler = () => {
    event.preventDefault();
    console.log('venue submited');

    const venue = {
      name: 'Sent from the system',
      address: '123323 Main Street',
      city: 'anytown',
      state: 'tx',
      zipcode: 888888
    }

    axios
      .post('/venues/vname.json', venue)
      .then(response => {
        console.log(response);
        this.setState({ loadding: false, ordering: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ loadding: false, ordering: false });
      });

  }

  render(){
    return (
      <Aux>
      <div className="container">
     
      <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState">State</label>
      <select id="inputState" className="form-control">
        <option defaultValue>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip" />
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" onClick={this.venueSubmitHandler} className="btn btn-primary">Sign in</button>
</form> 
      
      
      
      
      
      </div>
      </Aux>
    );
  }
}

export default Admin;