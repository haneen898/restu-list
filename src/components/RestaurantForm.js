import React, { useState } from 'react';

function RestaurantForm( addRestaurant) { 
  const [restaurant, setRestaurant] = useState([{ 
    id: 1, 
    taskName: "KFC" 
  },  
  { 
    id: 2, 
    taskName: "Popeeyes" 
  }, ]); 

  const [inputValue, setInputValue] = useState(''); 
  const RestaurantForm = () => { 
   console.log(inputValue);    
   
   if (inputValue.trim() !== '') { 
    setRestaurant([...restaurant, {id: Date.now(), taskName: inputValue}]);     
     setInputValue(''); 
   }}; 

  const handleInputChange = (e) => { 
   setInputValue(e.target.value) ;
   }; 


 function handleItemUpdate(id) {  

 }
 const handleDelete = (id) => {const filterdData =  restaurant.filter(restaurant => restaurant.id !== id); 
  setRestaurant(filterdData);
 }; 
  
  const handelUpdate = (id) => { 
   const UpdateRestaurant = restaurant.map(restaurant => restaurant.id === handelUpdate.id? handelUpdate : restaurant );   
    setRestaurant(UpdateRestaurant); 
 }


  
  const handleSubmit = (event) => {
    event.preventDefault();
    addRestaurant('name');
    setName('');
  };


  return (
    <div className='contenar'>
    <form onSubmit={handleSubmit}>
       <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        data-testid='restaurant-name-input'
      /> 
      <button className="button" onClick={addRestaurant}>Add Todo</button> 
      <ul> 
        {restaurant.map((restaurant, index) => ( 
          <> 
            <li key={index}>{restaurant.taskName}</li> 
            <button className="btn" onClick={() => handleInputChange(restaurant.id)}><span>{restaurant.text}</span> Update </button> 
            <button className="btm"> 
              <span role="img" aria-label="delete" onClick={() => handleDelete(restaurant.id)}>🗑️</span> 
            </button> 
          </> 
        ))} 
      </ul>
    </form>
    </div>
  );
}

export default RestaurantForm;