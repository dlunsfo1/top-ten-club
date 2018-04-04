//LoginService.js
import axios from 'axios';

class LoginService {
  sendData(data) {
    console.log('recieved data', data);
    axios
      .post('http://localhost:4200/user/add', {
        item: data
      })
      .then(res => {
        console.log('postData ', res);
      })
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
