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
        <div className="container-fluid">
        <div className="row">

            <div className="fitted-image fit-top-center col-sm contain" style={{background: 'url(plate-steak.jpg)'}}>
              <div className="overlay">
              <a href="/venues"><div className="text">Steakhouses</div></a>
                {/* <div className="text lnr lnr-heart"></div> */}
              </div>
          </div>

            <div className="fitted-image fit-top-center col-sm contain" style={{background: 'url(plate-seafood.jpg)'}}>
              <div className="overlay">
              <a href="/venues"><div className="text">Seafood Houses</div></a>
                {/* <div className="text lnr lnr-heart"></div> */}
              </div>
          </div>
          </div>
          <div className="row">
            <div className="fitted-image fit-top-center col-sm contain" style={{background: 'url(steakhouse.jpg)'}}>
              <div className="overlay">
              <a href="/venues"><div className="text">Texas Steakhouses</div></a>
                {/* <div className="text lnr lnr-heart"></div> */}
              </div>
          </div>

            <div className="fitted-image fit-top-center col-sm contain" style={{background: 'url(bar-irish.jpg)'}}>
              <div className="overlay">
              <a href="/venues"><div className="text">Irish Establishments</div></a>
                {/* <div className="text lnr lnr-heart"></div> */}
              </div>
          </div>
      </div>
      </div>

      </Aux> 
    );
  }
}

export default Home;