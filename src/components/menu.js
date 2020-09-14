import React from "react"
import { Link } from "gatsby"
import "./menu.css"

const Menu = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/blog">Blogs</Link>
    </li>
    <li>
      <Link to="/services">Services</Link>
    </li>
    <li>
      <Link to="/about">About Us</Link>
    </li>
  </ul>
)

export default Menu
