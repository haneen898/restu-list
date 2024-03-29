
import React from 'react';
import PropTypes from 'prop-types';


const RestaurantCard = ({ name, location, rating }) => {
  // Function to render stars based on the rating
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} data-testid={`star-${i}`}>
          {i < rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <div data-testid="restaurant-card">
      <h2 data-testid="restaurant-name">{name}</h2>
      <p data-testid="restaurant-location">{location}</p>
      <div data-testid="restaurant-rating">{renderStars()}</div>
    </div>
  );
};

RestaurantCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};


export default RestaurantCard;



// import React from "react";

// function RestaurantCard ({ name, location, rating }) {
//     return (
//       <div>
//         <h2>{name}</h2>
//         <p>Location: {location}</p>
//         <p>Rating: {'★'.repeat(rating)}</p>
//       </div>
//     );
//   }

//   export default RestaurantCard;
