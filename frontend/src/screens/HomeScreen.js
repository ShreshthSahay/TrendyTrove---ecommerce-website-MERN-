import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Rating from '../components/Rating';
import './HomeScreen.css'; 
import landingimg from "./28686.jpg";
import SigninScreen from './SigninScreen';
// import 'pure-react-carousel/dist/react-carousel.es.css';
import Carousel from "./Carousel";
import upload from "./1690228544197.jpg";
// import FlipCard from './FlipCard';
// import { Card, CardStack} from './IndexCard.js'
// import App from './ModalMain';
import image1 from "./fall-studio-shot-two-models-with-blond-wavy-hairstyle-wool-straw-hat-wearing-striped-poncho.jpg"


const images = [
  "https://images.pexels.com/photos/4720366/pexels-photo-4720366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/932398/pexels-photo-932398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2856338/pexels-photo-2856338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/675876/pexels-photo-675876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7691227/pexels-photo-7691227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3252792/pexels-photo-3252792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];




function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  useEffect(() => {
    const textElement = document.getElementById("text");
    const text = "Shopping Made Easy!!";
    let index = 0;

    function writeText() {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
      } else {
        // When the self-writing is complete, clear the text and reset the index
        textElement.textContent = "";
        index = 0;
      }
    }

    // Call the writeText function every 100 milliseconds to create the self-writing effect
    const intervalId = setInterval(writeText, 100);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);

    // Add 'index' as a dependency to reset the effect on category change
  }, [category]);

  // ... rest of your component ...

  return (
    <>
    {/* <div className='landing'>
      <img src='./Logo.png'/>
    </div> */}
    <div className="landing">
  <img src={landingimg} />
  <div className='content'>
    <span id="text"></span>
  <p>Explore our trendy online boutique for fashion-forward clothing and accessories. Stay stylish with the latest collections and exclusive deals.</p>
  
  <Link to="./signin">
      <button className="btn">Get Started</button>
    </Link>
      
  </div>
    
</div>

        <div className='car'>
        <Carousel images={images} />
        </div>
        <h2>Trending Products</h2>
        <div className="card-container">
    <div className="card">
      <img src={upload} alt="Image 1"/>
      <Link to="/product/64bed75af8ce2a7090b67903"><button className="btn">Explore</button></Link>
    </div>
    <div className="card">
      <img src={upload} alt="Image 1"/>
      <Link to="/product/64bed75af8ce2a7090b67903"><button className="btn">Explore</button></Link>
    </div>
    <div className="card">
      <img src={upload} alt="Image 1"/>
      <Link to="/product/64bed75af8ce2a7090b67903"><button className="btn">Explore</button></Link>
    </div>
    <div className="card">
      <img src={upload} alt="Image 1"/>
      <Link to="/product/64bed75af8ce2a7090b67903"><button className="btn">Explore</button></Link>
    </div>
  </div>
        
       
      {/* <App/> */}
      
      
      <div className='secondNav'>
      <ul className="filter">
        <li>
          <h3>Customize Your Search:</h3>
        </li>
        <li>
          <form onSubmit={submitHandler}>
            <input
              name="searchKeyword"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </li>
        
        <li>
          <h5>Sort By{' '}</h5>
          <select name="sortOrder" onChange={sortHandler}>
          <option disabled selected>~~Select~~</option>
            <option value="">Latest</option>
            <option value="lowest">Price: Low to High</option>
            <option value="highest">Price: High to Low</option>
          </select>
        </li>
      </ul>
      </div>
      {category && <h2>{category}</h2>}
      
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className='pro'>
        <ul className="products">
          {products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <Link to={'/product/' + product._id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                </Link>
                <div className="product-name">
                  <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">
                  <Rating
                    value={product.rating}
                    text={product.numReviews + ' reviews'}
                  />
                  {/* <span id='threedots'><h5>. . .</h5></span> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
        </div>
      )}
    </>
  );
}
export default HomeScreen;




