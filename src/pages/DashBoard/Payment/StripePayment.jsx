import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckOutForm from "./StripeCheckOutForm";
import useCart from "../../../hooks/useCart";
const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PAYMENT_GATEWAY_KEY
);

const StripePayment = () => {
  const [carts, refetch] = useCart();
  const totalPrice = carts.reduce((acc, item) => acc + item.price, 0);
  const parsableTotalPrice = parseFloat(totalPrice.toFixed(2));
  return (
    <Elements stripe={stripePromise}>
      <StripeCheckOutForm
        refetch={refetch}
        carts={carts}
        parsableTotalPrice={parsableTotalPrice}
      />
    </Elements>
  );
};

export default StripePayment;
