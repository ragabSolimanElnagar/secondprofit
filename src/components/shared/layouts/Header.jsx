import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

function Header() {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <Navbar className="navbar" bg="primary" variant="dark">
      <Navbar.Brand className="m-3">Second Profit</Navbar.Brand>
      {isAuthenticated ? (
        <Button className="button" onClick={() => logout()}>logout</Button>
      ) : (
        <Button className="button" onClick={() => loginWithRedirect()}>login</Button>
      )}
    </Navbar>
  );
}

export default Header;
