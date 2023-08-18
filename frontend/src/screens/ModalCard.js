// CardComponent.js

import React from 'react';
import { Link } from 'react-router-dom';
import "./ModalCard.css";

const CardComponent = ({ imagelink, Productlink, content }) => {
  return (
    <div class="card-container">
    <div class="card">
      <img src={imagelink}/>
      <p>{content}</p>
      <Link to={Productlink}>Details</Link>
    </div>
    
  </div>
  );
};

export default CardComponent;
