import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">TrendyTrove:)</Link>
          </div>
          <div className="header-links">
            
          <Link to="/cart/"><FontAwesomeIcon icon={faShoppingCart} size="lg" />Cart</Link>
            
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin"><FontAwesomeIcon icon={faSignInAlt} size="lg" />Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <h2>Shopping Categories</h2>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
          <li>
            <Link to="/category/Pants">Pants</Link>
          </li>
          <li>
            <Link to="/category/Shirts">Shirts</Link>
          </li>
          <li>
            <Link to="/category/Pants">TShirt</Link>
          </li>
          <li>
            <Link to="/category/Shirts">Shoes</Link>
          </li>
          <li>
            <Link to="/category/Pants">Watch</Link>
          </li>
          <li>
            <Link to="/category/Shirts">Fitness-Wear</Link>
          </li>
        </ul>

        </aside>
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        {/* <footer className="footer">
          <div className='firstfooter'>

          </div>
          <div className='secondfooter'>
            made with ❤️ by SHRESHTH
          </div>
          </footer> */}
          </div>
          <footer class="ecommerce-footer">
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <h4>Contact Information</h4>
        <ul class="contact-info">
          <li>Phone: +91 7876183598</li>
          <li>Email: <a href="mailto:shreshth.sahay@gmail.com">shreshth.sahay@gmail.com</a></li>
          <li>Address: 123,Hypothetical Colony, India </li>
        </ul>
      </div>
      <div class="col-md-3 col-sm-6">
        <h4>Customer Service</h4>
        <ul class="customer-service">
          <li><a href="/">Returns & Exchanges</a></li>
          <li><a href="/">Shipping & Delivery</a></li>
          <li><a href="/">FAQ</a></li>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Terms of Service</a></li>
        </ul>
      </div>
      <div class="col-md-3 col-sm-6">
        <h4>Quick Links</h4>
        <ul class="quick-links">
          <li><a href="/">Home</a></li>
          <li><a href="/">Shop</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
      </div>
      <div className='maps'>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88933.61895741198!2d76.72209300656311!3d30.954668702546204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39055f9a5f7ac64f%3A0x5809b42ac0e8aa7!2sBaddi%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1689318726527!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: "0" }}
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>


      </div>
      <div class="col-md-3 col-sm-6">
        <h4>Stay Connected</h4>
        <div class="social-media">
          <a href="/"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
          <a href="/"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
          <a href="/"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
          <a href="/"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
        </div>
        <p>Follow us on social media for the latest updates and promotions.</p>
      </div>
    </div>
    <hr/>
    <div class="row1">
      <div class="col-md-6">
        <p id='copy'>&copy; 2023 .TrendyTrove.  All rights reserved.</p>
      </div>
      {/* <div class="col-md-6">
        <ul class="additional-links">
          <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          
          
        </ul>
      </div> */}
    </div>
  </div>
</footer>

      
      
    </BrowserRouter>
  );
}

export default App;
