import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Aux/Aux';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class VenueDetail extends Component {
  state ={
    venue: []
  }

  addToFavoritesHandler = (event) => {
    console.log('added to favorites', event);

  }

  componentDidMount(){
    axios.get('http://localhost:4200/items/edit/' + this.props.match.params.id)   
    .then(response => {
      this.setState({ venue: response.data});
      console.log('detail ', this.state.venue);
      const thisVenue = { id: this.state.venue._id };
      Object.keys(this.state.venue.item).map(igKey => { 
        thisVenue[igKey] = this.state.venue.item[igKey];
      });
      this.setState({venue: thisVenue });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
render() {

   let currentVenue = {};

   return (
     <Aux>
    <div className="container-fluid" id="detail" style={{minHeight: '480px',background: 'url(https://placeimg.com/1000/380/arch) no-repeat center center fixed', overflow: 'hidden', backgroundSize: 'cover'}}>
     
        {/* <div className="col-12" style={{minHeight: '480px',background: 'url(https://placeimg.com/1000/380/arch) no-repeat center center fixed', overflow: 'hidden', backgroundSize: 'cover'}}> */}
      </div>
      <div className="container" id="detail">
      <div className="row">
      <div className="col-md-8 offset-md-2">
      <h1>{this.state.venue.name}</h1>
      <address>
      {this.state.venue.address}<br />
      {this.state.venue.city}, {this.state.venue.stage} {this.state.venue.zipcde}<br />
      <abbr title="Phone">P:</abbr> {this.state.venue.telephone}
      </address>
      <span className="lnr lnr-map"></span> 
      
      <span className="lnr lnr-phone-handset"></span>
      <span className="lnr lnr-heart" onClick={this.addToFavoritesHandler}></span>
      { ReactHtmlParser(this.state.venue.about)}     
      </div>
      </div>
     </div>
     </Aux>
   )
  }  
}

export default VenueDetail;