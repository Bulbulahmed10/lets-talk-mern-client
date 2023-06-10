import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-hot-toast";
import toastConfig from "../../../utils/toastConfig";
import { useForm } from "react-hook-form";
import SyncLoader from "react-spinners/SyncLoader";
import axios from "axios";
import useAxiosSecureRequest from "../../../hooks/useAxiosSecureRequest";
const imageHostingSecretToken = import.meta.env.VITE_IMAGE_UPLOAD_SECRET_KEY;

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecureRequest] = useAxiosSecureRequest();
  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingSecretToken}`;
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    const { classCode, className, courseTime, price, totalSets, image } = data;
    const formData = new FormData();
    formData.append("image", image[0]);
    if (user && image) {
      setLoading(true);
      axios
        .post(imageHostingURL, formData)
        .then((res) => {
          setLoading(true);
          console.log(res.data);
          if (res.data.success) {
            const classInfo = {
              class_name: className,
              class_code: classCode,
              instructor_name: user?.displayName || "Anonymous",
              instructor_email: user?.email || "anonymousexample@gmail.com",
              enrolledStudentsId: [],
              course_time: courseTime,
              total_sets: totalSets,
              price: price,
              approved_status: "pending",
              class_image: res?.data?.display_url,
            };
            axiosSecureRequest
              .post("/addClass", classInfo)
              .then((res) => {
                if (res.data.insertedId) {
                  toast.success("Class added request successful!", toastConfig);
                  reset();
                  setLoading(false);
                }
              })
              .catch((err) => {
                console.log(err);
                setLoading(false);
              });
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      console.log("user and image not found");
    }
  };

  return (
    <div className="w-full mt-10 px-4">
      <h2 className="text-center font-Poppins text-xl font-bold text-blue-500">
        Add Class
      </h2>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="my-0 w-full mx-auto grid grid-cols-3 gap-4 items-center flex-wrap">
        <div>
          <label
            htmlFor="className"
            className="block text-gray-700 font-medium mb-2">
            Class Name
          </label>
          <div className="relative">
            <input
              {...register("className", { required: true })}
              type="text"
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              placeholder="Enter Class name (English to Bengali"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="classCode"
            className="block text-gray-700 font-medium mb-2">
            Class Code
          </label>
          <div className="relative">
            <input
              {...register("classCode", { required: true })}
              type="text"
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              placeholder="Enter Class Code (eng-ben)"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="instructorName"
            className="block text-gray-700 font-medium mb-2">
            Instructor Name
          </label>
          <div className="relative">
            <input
              defaultValue={
                user && user?.displayName ? user?.displayName : "Anonymous"
              }
              type="text"
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              readOnly
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="instructorEmail"
            className="block text-gray-700 font-medium mb-2">
            Instructor Email
          </label>
          <div className="relative">
            <input
              defaultValue={
                user && user?.email ? user?.email : "anonymousexample@gmail.com"
              }
              type="email"
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              readOnly
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="courseTime"
            className="block text-gray-700 font-medium mb-2">
            Course Time
          </label>
          <div className="relative">
            <input
              {...register("courseTime", { required: true })}
              type="number"
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              placeholder="Course time week"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="totalSets"
            className="block text-gray-700 font-medium mb-2">
            Total Sets
          </label>
          <div className="relative">
            <input
              {...register("totalSets", { required: true })}
              type="number"
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              placeholder="total sets"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-gray-700 font-medium mb-2">
            Price
          </label>
          <div className="relative">
            <input
              {...register("price", { required: true })}
              type="number"
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-gray-700 font-medium mb-2">
            Price
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered file-input-primary w-full p-0"
          />
        </div>
        <div className="mt-6">
          <div className="relative">
            <button
              type="submit"
              disabled={loading}
              className={`w-full h-10 ${
                !loading ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"
              } text-white font-medium py-2 px-4 rounded-lg transition duration-300 `}>
              {loading ? (
                <SyncLoader loading={loading} size={12} color="#36D7B7" />
              ) : (
                "Add Class"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
