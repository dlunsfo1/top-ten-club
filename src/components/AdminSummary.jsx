import React from 'react';
import './AdminSummary.css';
const adminSummary = (props) => {
    return(
      <div className="adminSummary">
        <h1>Venu Review</h1>
        <div style={{width: '300px', height: '200px', margin: '20px'}}>
        <p>props.name</p>
        <p>props.summary</p>
          {/* <Venue with props /> */}
          </div>
          <button>Submit</button>
        </div>
    )
}

export default adminSummary;