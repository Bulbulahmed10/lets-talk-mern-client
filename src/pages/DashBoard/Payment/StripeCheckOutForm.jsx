import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import useAxiosSecureRequest from "../../../hooks/useAxiosSecureRequest";
import useAuthContext from "../../../hooks/useAuthContext";
import "./StripeCheckOutForm.css";

import { useNavigate } from "react-router-dom";
const StripeCheckOutForm = ({ parsableTotalPrice, carts, refetch }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuthContext();
  const [cardError, setCardError] = useState("");
  const [axiosSecureRequest] = useAxiosSecureRequest();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (parsableTotalPrice > 0) {
      axiosSecureRequest
        .post("/create-stripe-payment-intent", { parsableTotalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [parsableTotalPrice, axiosSecureRequest]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      const transactionId = paymentIntent.id;
      setTransactionId(transactionId);

      const payment = {
        email: user?.email,
        transactionId,
        date: new Date(),
        price: parsableTotalPrice,
        quantity: carts.length,
        cartItems: carts.map((item) => item._id),
        classItems: carts.map((item) => item.class_id),
        orderStatus: "pending",
        className: carts.map((item) => item.class_name),
      };

      axiosSecureRequest.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (
          res.data.deleteResult.deletedCount > 0 &&
          res.data.insertResult.insertedId
        ) {
          navigate("/dashboard/payment-history");
          refetch();
        }
      });
    }
  };
  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success mt-4 btn-sm"
          type="submit"
          disabled={!stripe || !clientSecret || processing || carts.length < 1}>
          Pay
        </button>
      </form>
      {cardError && toast.error(cardError)}

      {transactionId && toast.success("Payment Successful")}
    </>
  );
};

export default StripeCheckOutForm;
