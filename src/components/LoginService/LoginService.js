import axios from 'axios';

class LoginService {
  sendData(data) {
    console.log('recieved data', data);
    axios
      .post('http://localhost:4200/user/add', {
        // http://localhost:4200/items/add/post
        //
        item: data
      })
      .then(res => {
        console.log('postData ', res);
      })
      // .then(res => this.setState({ items: res.data }))
      .catch(err => console.log('user send data ', err));
  }

  updateData(data, id) {
    axios
      .post('http://localhost:4200/user/update/' + id, {
        item: data
      })
      .then(res => {
        console.log('updateData', res);
      })
      // .then(res => this.setState({ items: res.data }))
      .catch(err => console.log(err));
  }

  deleteData(id) {
    axios
      .get('http://localhost:4200/user/delete/' + id)
      .then()
      .catch(err => console.log(err));
  }
}

export default LoginService;
