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
    // axios.get('https://topten-7ff98.firebaseio.com/venues/venue.json')
    .then(response => {

    
      console.log('response data ', response.data[0].item);
      const fetchedVenues = [];
    //  console.log(response.data.length);
    // for(let i = 0; i < response.data.length; i++) {
    //   console.log(response.data[i].item);
    // }
  //   this.setState({venues: response.data})

  //   this.state.items.map(function(object, i){
  //     return <TableRow obj={object} key={i} />;
  // })


  //     for(let key in response.data[0].item) {
  //       console.log(key);
  //       fetchedVenues.push({
  //         ...response.data[0].item,
  //         id: key
  //       });
      
    // }
      //console.log(fetchedVenues)
      this.setState({ loading: false, venues: response.data });
      console.log('state ', this.state.venues);


      // if(this.state.items instanceof Array){
      //   console.log('array')
      //   return this.state.items.map(function(object, i){
      //       console.log(object, i);
      //   })
      // }

    })
    .catch(error => {
      this.setState({loading: false});
    })
  }

  render() {
    return (
     <Aux>
       <div className="container">
       <div className="row">
       <div className="col-md">
      { this.state.venues.map((venue, i) => (
        <Venue key={venue._id} name={venue.item.name} itemkey={venue._id} />
      )) }
      </div>
      </div>
      </div>
      </Aux>
    );
  }
}

export default withRouter(Venues);