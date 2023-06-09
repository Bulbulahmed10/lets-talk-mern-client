import React from "react";
import useCart from "../../hooks/useCart";
import axios from "axios";
import Swal from "sweetalert2";
const Cart = () => {
  const [carts, refetch] = useCart();
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
        axios.delete(`http://localhost:5000/cart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Removed!", "Your Selected has been Removed.", "success");
          }
        });
      }
    });
  };
  return (
    <div className="overflow-x-auto w-full px-4">
      <table className="table">
        <thead>
          <tr>
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
              console.log(classItem);
              const { class_image, class_name, instructor_name, price, _id } =
                classItem;
              return (
                <tr>
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
                      className="btn btn-ghost btn-sm btn-outline">
                      Remove
                    </button>
                    <button className="btn btn-ghost btn-sm btn-outline ml-2">
                      Pay
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
