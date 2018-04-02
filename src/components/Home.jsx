import React, {Component} from 'react';
import Aux from '../hoc/Aux/Aux';
import Venues from '../container/Venues/Venues';
import axios from 'axios';


class Home extends Component {
  state = {
    categories: null,
    error: false
  };

  componentDidMount() {
    // ttps://topten-7ff98.firebaseio.com/venues/venue.json
    axios.get('https://topten-7ff98.firebaseio.com/categories.json')
    .then(response => {
      this.setState({categories: response.data });
    }).catch(error => {
      console.log(error);
      this.setState({error: true});
    });

  }
  render(){
    console.log(this.state.categories);
    return (
      <Aux>
        <div className="container">
        {/* <div className="card-deck"> */}
        <Venues />
        </div>
        {/* </div> */}
      </Aux> 
    );
  }
}

export default Home;