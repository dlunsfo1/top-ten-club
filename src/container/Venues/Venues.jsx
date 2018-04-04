//Venues.jsx
import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Venue from '../Venue.jsx';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Venues extends Component {
  state = {
    venues: [],
    loading: false
  }

  componentDidMount() {
    console.log('componentDidMount! ');
    axios.get('http://localhost:4200/items')
    .then(response => {
    console.log('response data ', response.data[0].item);
      const fetchedVenues = [];
      this.setState({ loading: false, venues: response.data });
      console.log('state ', this.state.venues);
    })
    .catch(error => {
      this.setState({loading: false});
    })
  }

  render() {
    return (
     <Aux>
       <div className="container detail">
       <div class="card-columns">      
      { this.state.venues.map((venue, i) => (
        <Venue key={venue._id} name={venue.item.name} img={venue.item.imagefile} city={venue.item.city} vstate={venue.item.state} itemkey={venue._id} />
      )) }
      </div>
      </div>
      </Aux>
    );
  }
}

export default withRouter(Venues);