// Home.jsx
import React, {Component} from 'react';
import Aux from '../hoc/Aux/Aux';
import Venues from '../container/Venues/Venues';
import axios from 'axios';

class Home extends Component {
  render(){
    return (
      <Aux>
        <div className="container-fluid">
        <div className="row">

            <div className="fitted-image fit-top-center col-sm contain" style={{background: 'url(/images/plate-steak.jpg)'}}>
              <div className="overlay">
              <a href="/venues"><div className="text">Steakhouses</div></a>
              </div>
          </div>

            <div className="fitted-image fit-top-center col-sm contain" style={{background: 'url(/images/plate-seafood.jpg)'}}>
              <div className="overlay">
              <a href="/venues"><div className="text">Seafood Houses</div></a>
              </div>
          </div>
          </div>
          <div className="row">
            <div className="fitted-image fit-top-center col-sm contain" style={{background: 'url(/images/steakhouse.jpg)'}}>
              <div className="overlay">
              <a href="/venues"><div className="text">Texas Steakhouses</div></a>
              </div>
          </div>

            <div className="fitted-image fit-top-center col-sm contain" style={{background: 'url(/images/bar-irish.jpg)'}}>
              <div className="overlay">
              <a href="/venues"><div className="text">Irish Establishments</div></a>
              </div>
          </div>
      </div>
      </div>

      </Aux> 
    );
  }
}

export default Home;