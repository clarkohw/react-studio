// TODO: create a component that displays a single bakery item
// TODO: create a component that displays a single bakery item
import "./BakeryItem.css";

function BakeryItem(props) {
  return (
    <div className="card">
      <h3>
        {props.item.name} - {props.item.price}
      </h3>
      <img src={props.item.image}></img>
      <button
        onClick={() =>
          props.setCart(
            props.cartState.concat([
              { name: props.item.name, price: props.item.price },
            ])
          )
        }
      >
        Add to cart
      </button>
    </div>
  );
}

export default BakeryItem;
