import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { getCart } from "./cartHelpers";
import Card from "./Card";
import Checkout from "./Checkout";

const Cart = () => {
  const [items, setItems] = useState([]);
  // const [cartSize, setCartSize] = useState([]);
  const [run, setRun] = useState(false);

  useEffect(() => {
    console.log("MAX DEPTH ...");
    setItems(getCart());
  }, [run]);

  const showItems = (items) => {
    return (
      <div>
        <h2>Your cart has {`${items.length}`} items</h2>
        <hr />
        {items.map((product, i) => (
          <Card
            key={i}
            product={product}
            showAddToCartButton={false}
            cartUpdate={true}
            showRemoveProductButton={true}
            setRun={setRun}
            run={run}
            // changeCartSize={changeCartSize}
          />
        ))}
      </div>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your Cart is empty. <br />
      <Link to="/shop"> Continue shopping. </Link>
    </h2>
  );

  return (
    <Layout
      title="T-Shirt Art Store Cart"
      description="Once an item is selected for purchase it is displayed in this area along with a payment form. Quantity can be adjusted. Products can be viewed or removed. To test use testing Visa number 4111 1111 1111 1111 to simulate a payment. Add any expiration date and CVV."
      className="container-fluid"
    >
      <div className="row">
        <div className="col-md-6 col-sm-12">
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </div>
        <div className="col-md-6 col-sm-12">
          <h2 className="mb-4">Your Cart Summary</h2>
          <hr />
          <Checkout products={items} />
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
