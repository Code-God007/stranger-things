import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={headerStyle}>
      <header className="display-3 mb-4">Stranger Things</header>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About Me
      </Link>
    </div>
  );
}

const headerStyle = {
  background: "#eee",
  color: "#333",
  padding: "10px"
};

const linkStyle = {
  color: "#333",
  textDecoration: "none"
};
