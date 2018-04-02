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
    axios.get('https://topten-7ff98.firebaseio.com/venues/venue.json')
    .then(response => {

      console.log(response.data);
      const fetchedVenues = [];
      for(let key in response.data) {
        fetchedVenues.push({
          ...response.data[key],
          id: key
        });
      }
      console.log(fetchedVenues)
      this.setState({ loading: false, venues: fetchedVenues });

    })
    .catch(error => {
      this.setState({loading: false});
    })
  }
  
  render() {
    return (
     <Aux>
      { this.state.venues.map(venue => (
        <Venue key={venue.id} name={venue.name} />
      )) }
      </Aux>
    );
  }
}

export default withRouter(Venues);