import React from 'react';

const Venue = (props) => (
  <div className="card">
    <img
      className="card-img-top"
      src="http://tomhoran.com/wp-content/uploads/2014/03/elliottsoysterbar.jpg"
      alt="Card image cap"
    />
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">
        <small className="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
);

export default Venue;
