import React from "react";
import useCart from "../../../hooks/useCart";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useDarkTheme from "../../../hooks/useDarkTheme";
const Cart = () => {
  const [carts, refetch] = useCart();
  const { darkTheme } = useDarkTheme();
  const handleRemoveCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://lets-talk-school.vercel.app/cart/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Removed!",
                "Your Selected has been Removed.",
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <>
      <div className="md:flex justify-between items-center w-full md:px-8">
        <p
          className={`font-Poppins text-lg font-medium ${
            darkTheme && "text-neutral-300"
          }`}>
          Total Selected Class:
          <span className="text-[#00C172]"> {carts && carts?.length} </span>
        </p>
        <p
          className={`font-Poppins text-lg font-medium ${
            darkTheme && "text-neutral-300"
          }`}>
          Total Price:
          <span className="text-[#00C172] ml-1">
            $
            {carts && carts?.length > 0
              ? carts.reduce((acc, curr) => acc + parseFloat(curr.price), 0)
              : "0"}
          </span>
        </p>
        <Link
          to="/dashboard/stripe-payment"
          className={`btn btn-outline btn-md ${
            darkTheme && "border border-neutral-400 text-neutral-300"
          } `}>
          Pay All
        </Link>
      </div>

      <div className="overflow-x-auto w-full px-4">
        <table className="table">
          <thead>
            <tr className={`${darkTheme && "text-neutral-300"}`}>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {carts &&
              carts?.length > 0 &&
              carts?.map((classItem, index) => {
                const { class_image, class_name, instructor_name, price, _id } =
                  classItem;
                return (
                  <tr key={_id} className={darkTheme && "text-neutral-300"}>
                    <td> {index + 1} </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={class_image} alt={class_name} />
                          </div>
                        </div>
                        <div className="font-medium font-Poppins">
                          {class_name}
                        </div>
                      </div>
                    </td>
                    <td>{instructor_name}</td>
                    <td>${price} </td>
                    <td>
                      <button
                        onClick={() => handleRemoveCart(_id)}
                        className="btn btn-sm btn-outline btn-primary">
                        Remove
                      </button>
                      <Link
                        to="/dashboard/stripe-payment"
                        className="btn btn-ghost btn-sm btn-outline ml-2 mt-2 md:mt-0">
                        Pay
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
