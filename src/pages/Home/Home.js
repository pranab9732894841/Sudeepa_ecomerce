import React from "react";
import { product } from "./data.js";

function Home(props) {
  const { cart, SetCart } = props;
  const handleCart = (item) => {
    const createNewCart = Object.assign(item, { qnt: 1 });
    SetCart([...cart, createNewCart]);
  };

  return (
    <div className="flex-container">
      {product.map((item) => (
        <div key={item.id} className="flex-item">
          <div className="imgWapper">
            <img className="img" alt="img" src={item.imgPath} />
          </div>

          <h1 className="name">{item.productName}</h1>
          <h1 className="price">₹ {item.price}</h1>
          <button class="addtocart" onClick={() => handleCart(item)}>
            <div class="pretext">
              <i class="fas fa-cart-plus"></i> ADD TO CART
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
