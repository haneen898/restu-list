import logo from './logo.svg';
import './App.css';
import RestaurantList from './components/RestaurantList';
import RestaurantCard from './components/RestaurantCard';
import RestaurantForm from './components/RestaurantForm';

function App() {
  return (
    <div>
      <RestaurantList/>
      <RestaurantCard/>
      <RestaurantForm/>
  </div>
  );
}

export default App;
