import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Aux/Aux';

class VenueDetail extends Component {
  state ={
    venue: null
  }

  componentDidMount(){
    axios.get('http://localhost:4200/items/edit/5ac2df601be331ef682ed21c')
    
    .then(response => {
      this.setState({ venue: response.data});
      console.log('detail ', this.state.venue)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

 

render() {

   let currentVenue = {};

   return (
     <Aux>
    <div className="container" id="detail">
      <div className="row">
        {/* <div className="col-12" style={{minHeight: '480px',background: 'url(https://placeimg.com/1000/380/arch) no-repeat center center fixed', overflow: 'hidden', backgroundSize: 'cover'}}> */}
      </div>
      
      <div className="row">
      <div className="col-md-8 offset-md-2">
      <h1>The Steakhouse</h1>
      <address>
        1355 Market St, Suite 900<br />
        San Francisco, CA 94103<br />
      <abbr title="Phone">P:</abbr> (123) 456-7890
      </address>
      <span className="lnr lnr-map"></span> 
      
      <span className="lnr lnr-phone-handset"></span>
      <span className="lnr lnr-heart"></span>

      <p>The Steakhouse is constantly raising the bar and exceeding guest expectations with incomparable service, an innovative Gulf Coast inspired menu and an atmosphere that is both elegant and relaxing.</p>
      </div>
      </div>
     </div>
     </Aux>
   )
  }  
}

export default VenueDetail;