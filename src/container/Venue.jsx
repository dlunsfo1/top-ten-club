//Venue.jsx
import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {Link} from 'react-router-dom';

const Venue = (props) => ( 
  <div className="card" key={props.id}>
   <Link to={'/venue-detail/'+props.itemkey}>
   <img
      className="card-img-top"
      src={'/images/' + props.img}
      alt={props.name}
    />
    </Link>
    <div className="card-body">
      <h5 className="card-title">{ ReactHtmlParser(props.name)}</h5>
      <p className="card-text">
        <small className="text-muted">{props.city}, {props.vstate}</small>
      </p>
    </div>
  </div> 
);
export default Venue;
