import React from "react";
import "./style.css";
function Cart(props) {
  const { cart } = props;
  console.log(cart);
  return (
    <div id="w">
      <div id="page">
        <table id="cart">
          <thead>
            <tr>
              <th class="first"></th>
              <th class="second">Qty</th>
              <th class="third">Product</th>
              <th class="fourth">Line Total</th>
              <th class="fifth">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr class="productitm">
                <td>
                  <img src={item.imgPath} class="thumb" alt={/>
                </td>
                <td>
                  <input
                    type="number"
                    value="1"
                    min="0"
                    max="99"
                    class="qtyinput"
                  />
                </td>
                <td>Design Bundle Package</td>
                <td>$79.00</td>
                <td>
                  <span class="remove">
                    <img src="https://i.imgur.com/h1ldGRr.png" alt="X" />
                  </span>
                </td>
              </tr>
            ))}

            <tr class="extracosts">
              <td class="light">Shipping &amp; Tax</td>
              <td colspan="2" class="light"></td>
              <td>$35.00</td>
              <td>&nbsp;</td>
            </tr>
            <tr class="totalprice">
              <td class="light">Total:</td>
              <td colspan="2">&nbsp;</td>
              <td colspan="2">
                <span class="thick">$225.45</span>
              </td>
            </tr>

            <tr class="checkoutrow">
              <td colspan="5" class="checkout"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
