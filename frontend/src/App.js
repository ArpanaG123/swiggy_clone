import { Route, Routes } from 'react-router-dom';
import './App.css';
import RestaurantPage from './components/Restaurants/RestaurantPage';
import LandingPage from './components/Landing/LandingPage';
import Cart from './components/Blogs/Cart';
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from 'react-toastify'
import Relevance from './components/Blogs/Relevance';
import DeliveryTime from './components/Blogs/DeliveryTime'
import Rating from  './components/Blogs/Rating'
import CostLH from './components/Blogs/CostLH'
import CostHL from './components/Blogs/CostHL';

function App() {

  return (
    <>
    <ToastContainer />
    <Routes>
      <Route exact path = "/" element = {< LandingPage />  } />
      <Route path = "/home/*" element = { <RestaurantPage />} />
      <Route path = "/cart" element = {<Cart />} />
      <Route path ="/relevance" element = {<Relevance />} />
      <Route path = "/delivery" element = {< DeliveryTime />} />
      <Route path = "/rating" element = {<Rating />} />
      <Route path = "/pricelowToHigh" element = {<CostLH />} />
      <Route path = "/pricehighTolow" element = {<CostHL />} />
    </Routes>
    </>
  );
}

export default App;
