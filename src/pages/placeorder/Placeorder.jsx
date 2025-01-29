import React from "react";
import "./Placeorder.css";

const Placeorder = () => {
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
  <h3 className="order-summary-title">Order Summary</h3>
  
  <div className="order-summary-details">
    <p><span>Items:</span> 3</p>
    <p><span>Total Price:</span> <strong>$45.99</strong></p>
  </div>
  
  <button className="order-summary-button">Proceed to Payment</button>
</div>

    </form>
  );
};

export default Placeorder;
