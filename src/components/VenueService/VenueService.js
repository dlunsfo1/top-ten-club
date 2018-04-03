import axios from 'axios';

class VenueService {
  sendData(data) {
    axios
      .post('http://localhost:8080/venues/add/item', {
        item: data
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}

export default venueService;
