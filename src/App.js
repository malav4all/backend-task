import './App.css';
// import { BrowserRouter as Router} from "react-router-dom";
import { BrowserRouter as Routes ,Route } from 'react-router-dom';
import Header from './Compnents/Navbar';
import Slider from "./Compnents/Slider";
import ProductListing from "./Compnents/ProductListing"
import ProductDetails from "./Compnents/ProductDetails"
import Footer from './Compnents/Footer';

const  App = () => {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Routes>
        <Header />
       
        <Slider />
        {/* <Route path="/" exact component={<ProductListing/>}/> */}
       
        <ProductListing/>
        <Footer/>
      </Routes>
      {/* </BrowserRouter> */}
      
    </div>
  );
}

export default App;
