import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/tik-tok-toe">Tik Tok Toe</Link>
      <Link to="/nested-checkbox">Nested Checkbox</Link>
    </div>
  );
};

export default HomePage;
