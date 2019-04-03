import React from 'react';
import { Link } from 'react-router-dom'

const Menu = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/hello">Hello from the other side</Link></li>
    </ul>
  </div>
);

export default Menu;
