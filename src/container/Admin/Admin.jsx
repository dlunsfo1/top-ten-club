import React, {Component} from 'react';
import AdminSummary from '../../components/AdminSummary.jsx';

class Admin extends Component {
  state = {
    venue: {
      name: 'Venue Name',
      summary: 'Stateful summary'
    }
  }

  adminCancelHandler = () => {
    console.log('adminCanselHandler');
  }

  adminContinueHandler = () => {
    console.log('adminContinueHandler')
  }


  render() {

    return (
      <div>
        <AdminSummary venueDetails={this.state.venue} />
      </div>
    )
  }

}

export default Admin;