import React, { useContext } from "react";
import "./Placeorder.css";
import { StoreContext } from "../../context/Storecontext";

const Placeorder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className="placeorder">
      {/* Left Section - Delivery Form */}
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
        </div>
        <input type="email" placeholder="Email address" required />
        <input type="text" placeholder="Street" required />
        <div className="multi-field">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>
        <div className="multi-field">
          <input type="text" placeholder="Zip code" required />
          <input type="text" placeholder="Country" required />
        </div>
        <input type="text" placeholder="Phone" required />
        <button className="submit" type="submit">Place Order</button>
      </div>

   
      <div className="place-order-right">
      <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <span>Subtotal</span>
              <span>${getTotalCartAmount()}</span>
            </div>
            <div className="cart-total-details">
              <span>Delivery Fee</span>
              <span>$2.00</span>
            </div>
            <div className="cart-total-details total-amount">
              <strong>Total</strong>
              <strong>${(getTotalCartAmount() + 2).toFixed(2)}</strong>
            </div>
            <button className="order-summary-button">
              Proceed to Payment
            </button>
          </div>
 
 
  </div>

    </form>
  );
};

export default Placeorder;
