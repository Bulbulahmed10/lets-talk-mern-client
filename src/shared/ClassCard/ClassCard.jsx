import React from "react";
import { AiOutlineClockCircle, AiOutlineBook } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import useAuthContext from "../../hooks/useAuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import toastConfig from "../../utils/toastConfig";
import useCart from "../../hooks/useCart";
const ClassCard = ({ singleTopClass }) => {
  const {
    class_image,
    class_name,
    course_time,
    instructor_name,
    price,
    total_sets,
    enrolledStudentsId,
    _id,
  } = singleTopClass;
  const { user } = useAuthContext();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    if (user && user?.email) {
      const classInfo = {
        class_id: _id,
        cart_owner: user?.email,
        class_name,
        class_image,
        instructor_name,
        price,
      };
      axios.post("http://localhost:5000/cart", classInfo).then((res) => {
        if (res.data.insertedId) {
          refetch()
          toast.success("Class added your cart", toastConfig);
        }
      });
    } else {
      Swal.fire({
        title: "Can't add to cart without login",
        text: "Do you want to login?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes I want to login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={class_image}
        alt={class_name}
        className="h-56 w-full object-cover"
      />
      <div className="p-6 font-OpenSans">
        <h3 className="text-xl font-semibold mb-2 font-Poppins">
          {class_name}
        </h3>
        <p className="text-gray-600 mb-4">Instructor: {instructor_name}</p>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 mb-2">
              <FiUsers className="inline-block mr-1 text-lg" />
              Enrolled Students: {enrolledStudentsId.length}
            </p>
            <p className="text-gray-600 mb-2">
              <AiOutlineClockCircle className="inline-block mr-1 text-lg" />
              Course Time: {course_time} Week
            </p>
            <p className="text-gray-600 mb-2">
              <AiOutlineBook className="inline-block mr-1 text-lg" />
              Available Sets: {total_sets - enrolledStudentsId.length}
            </p>
          </div>
        </div>
        <div className="flex  items-center justify-between">
          <p className="text-gray-700 text-2xl font-semibold">${price}</p>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
