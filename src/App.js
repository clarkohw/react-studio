import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  console.log(cart);

  const sumArray = (cart) => {
    var sum = 0;

    cart.forEach((item) => (sum += item.price));
    return sum;
  };
  return (
    <div className="App">
      <h1>My Bakery</h1>
      <div className="container">
        <div>
          {" "}
          {bakeryData.map(
            (
              item,
              index // TODO: map bakeryData to BakeryItem components
            ) => (
              <BakeryItem
                item={item}
                cartState={cart}
                setCart={setCart}
                key={index}
              ></BakeryItem> // replace with BakeryItem component
            )
          )}
        </div>

        <div>
          <h2>Cart</h2>
          <div>
            <h2>Total: {sumArray(cart)}</h2>
            {cart.map((item) => (
              <p>
                {item.name} - {item.price}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
