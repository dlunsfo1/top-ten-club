// VenueDetail.jsx
import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Aux/Aux';
import Map from '../Google/Google';
import cors from 'cors';
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from 'react-html-parser';

class VenueDetail extends Component {
  state = {
    venue: [],
    favorites: [],
    favorited: false
  };

  componentDidMount() {
    axios
      .get('http://localhost:4200/items/edit/' + this.props.match.params.id)
      .then(response => {
        this.setState({ venue: response.data });
        console.log('detail ', this.state.venue);
        const thisVenue = { id: this.state.venue._id };
        Object.keys(this.state.venue.item).map(igKey => {
          thisVenue[igKey] = this.state.venue.item[igKey];
        });
        this.setState({ venue: thisVenue });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  addToFavoritesHandler = () => {
    this.setState({ favorited: !this.state.favorited });
    const myFavorites = this.state.favorites;

    myFavorites.push(action);
    this.setState({ favorites: myFavorites });
    console.log(this.state.favorites);

    this.setState({ favorite: myFavorites });
    console.log('added to favorites', this.state.favorite);
  };

  externalClickHandler = action => {
    console.log('going somewhere ? ', action);
  };

  uberPickupHandler = pickup => {
    // TODO: Fix this
    console.log('uber is coming');
    window.open('https://m.uber.com/ul/?action=setPickup')
  }
  visitWebsiteHandler = rurl => {
    window.open('http://' + rurl);
  };

  getDirectionsHandler = addr => {
    console.log('get directions');
    window.open('http://maps.google.com/maps?daddr=' + encodeURI(addr));
  }

  render() {
    let favoriteBtnConfig = {
      background: !this.state.favorited ? '#fff' : '#951922',
      color: !this.state.favorited ? '#951922' : '#fff'
    }

    let address = this.state.venue.street + ' ' + this.state.venue.city + ' ' + this.state.venue.state + ' ' + this.state.venue.zipcode + '&zoom=10';

    return (
      <Aux>
        {/* <div className="float-sm">
          <div className="fl-fl float-fb">
            <i className="fa fa-facebook" />
            <a href="" target="_blank">
              {' '}
              Like us!
            </a>
          </div>
        </div> */}
        <div
          className="container-fluid cover-bkg"
          fav
          id="detail"
          style={{ background: `url(/images/${this.state.venue.imagefile})` }}
        />
        <div className="container" id="detail">
          <div className="row">
            <div className="col-md-8 offset-md-2 content">
              <h2>{this.state.venue.name}</h2>
              <address>
                {this.state.venue.street}
                <br />
                {this.state.venue.city}, {this.state.venue.state}{' '}
                {this.state.venue.zipcode}
                <br />
                <abbr title="Phone">P:</abbr> {this.state.venue.telephone}
              </address>
              <div className="user-actions">
                <span className="lnr lnr-map" onClick={() => this.getDirectionsHandler(address)}/>
                <span onClick={() => this.uberPickupHandler()} class="lnr lnr-car" />
                <span
                  class="lnr lnr-earth"
                  onClick={rurl =>
                    this.visitWebsiteHandler(this.state.venue.website)
                  }
                />
                <span
                  className="lnr lnr-phone-handset"
                  onClick={event =>
                    this.externalClickHandler(event, this.state.venue.website)
                  }
                />
                <span
                  className="lnr lnr-heart"
                  style={favoriteBtnConfig}
                  onClick={action =>
                    this.addToFavoritesHandler(this.state.venue.id)
                  }
                />
              </div>
              {ReactHtmlParser(this.state.venue.about)} 
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default VenueDetail;
