import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="logo"
    />
    <ul className="header-links-container">
      <Link to="/" className="link-item">
        <li>Home</li>
      </Link>
      <Link to="/products" className="link-item">
        <li>Products</li>
      </Link>
      <Link to="/cart" className="link-item">
        <li>Cart</li>
      </Link>
      <button type="button">logout</button>
    </ul>
  </div>
)

export default Header
