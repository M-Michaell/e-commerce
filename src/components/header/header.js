import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./header.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import LanguageCompo from "../language&theme/language";
import ThemeCompo from "../language&theme/theme";

function Header() {
  const cart = useSelector((state) => state.cart.cartItems);
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fs-4">
      <Container>
        <NavLink className="nav-link fs-2 headermain" to="/">
          Products App
        </NavLink>

        {/* lang */}
        <LanguageCompo />
        <ThemeCompo />
        {/* lang */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink className="nav-link " to="/register">
              Register
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link p-1" to="/cart">
              <button
                type="button"
                className="btn btn-outline-success position-relative"
              >
                <FontAwesomeIcon icon={faCartShopping} className="fs-5" />
                {cart.length ? (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                ) : (
                  <></>
                )}
              </button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
