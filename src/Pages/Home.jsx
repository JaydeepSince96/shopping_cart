import React from "react";
import Products from "../Components/Products";

function Home() {
  return (
    <div>
      <h2>Welcome to The Store</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
}

export default Home;
