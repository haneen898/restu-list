import React from 'react';

const RestaurantList = () => {
  const restaurants = [
    { id:1, name: 'KFC', location: ' jadreai St' },
    { id:2, name: 'Popeyes', location: ' istanbul St' },
    { id:3, name: 'Super Chicken', location: ' falsten St' }
  ];


  return (
    <div>
      <h1 data-testid='restaurants-list'>Fried Chicken Restaurants</h1>
      <ul data-testid='restaurants-list'>
        {restaurants.map((restaurant, index) => (
          <li key={index}>
            <strong>{restaurant.name}</strong> - {restaurant.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
