import React from 'react';
import './FlipCard.css'; // Import the FlipCard CSS file

const FlipCard = () => {
  return (
    <div className="flip-card-container">
    
    <div class="wrapper">
      
     
      <div class="card front-face">
       
        <img src="./images/Logo.png"/>
      </div>
     
      <div class="card back-face">
     
        <img src="./images/Logo.png"/>
        <div class="info">
          <div class="title">Programing School</div>
          <p> Designer <br/>Full Stack Web Developer <br/> Content Creator</p>
        </div>
  
        <ul>
    
          <a href="#"><i class="fab fa-facebook"></i></a>
  
          <a href="#"><i class="fab fa-twitter"></i></a>
         
          <a href="#"><i class="fab fa-instagram"></i></a>
        
          <a href="#"><i class="fab fa-youtube"></i></a>
        </ul>
    
      </div>
    
    </div>
  
    </div>
  );
};

export default FlipCard;
