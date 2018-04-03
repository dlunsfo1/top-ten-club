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
        <div className="row">

            <div className="col-sm contain cover-bkg" style={{background: 'url(https://placeimg.com/400/400/archg)'}}>
              <div className="overlay">
                <div className="text lnr lnr-heart"></div>
              </div>
          </div>

            <div className="col-sm contain cover-bkg" style={{background: 'url(https://placeimg.com/400/400/archg)'}}>
              <div className="overlay">
                <div className="text lnr lnr-heart"></div>
              </div>
          </div>

            <div className="col-sm contain cover-bkg" style={{background: 'url(https://placeimg.com/400/400/archg)'}}>
              <div className="overlay">
                <div className="text lnr lnr-heart"></div>
              </div>
          </div>

            <div className="col-sm contain cover-bkg" style={{background: 'url(https://placeimg.com/400/400/archg)'}}>
              <div className="overlay">
                <div className="text lnr lnr-heart"></div>
              </div>
          </div>
      </div>
      </div>

      </Aux> 
    );
  }
}

export default Home;