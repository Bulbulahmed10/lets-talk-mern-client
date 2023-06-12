import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import toastConfig from "../../utils/toastConfig";
import { useForm } from "react-hook-form";
import SyncLoader from "react-spinners/SyncLoader";
import axios from "axios";
const imageHostingSecretToken = import.meta.env.VITE_IMAGE_UPLOAD_SECRET_KEY;

const Registration = () => {
  const { signup, updateUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingSecretToken}`;
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const onsubmit = (data) => {
    const { name, email, password, confirmPassword } = data;
    setInputPassword(password);
    setInputConfirmPassword(confirmPassword);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    if (password === confirmPassword) {
      setLoading(true);
      signup(email, password)
        .then((result) => {
          setUser(null);
          fetch(imageHostingURL, {
            method: "POST",
            body: formData,
          })
            .then((res) => res.json())
            .then((uploadResponse) => {
              if (uploadResponse.success) {
                updateUser(name, uploadResponse.data.display_url).then(() => {
                  const { displayName, email, photoURL } = result.user;
                  const saveUserInfo = {
                    name: displayName,
                    email: email,
                    profilePictureURL: photoURL,
                    role: "student"
                  };
                  axios
                    .post("http://localhost:5000/user", saveUserInfo)
                    .then((res) => {
                      if (res.data.insertedId) {
                        toast.success("Registration Successful!", toastConfig);
                        navigate("/");
                        setUser(result.user);
                        setLoading(false);
                       
                      }
                    })
                    .catch((err) => console.log(err));
                });
              }
            })
            .catch((err) => {
              toast.error(err.message, toastConfig);
              setLoading(false);
            });
        })
        .catch((err) => {
          toast.error(err.message, toastConfig);
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div className="flex items-center justify-center bg-gray-100 ">
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit(onsubmit)}
            className="bg-white shadow-md rounded-lg px-8 py-6 my-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <div className="relative">
                <input
                  {...register("name", { required: true, maxLength: 20 })}
                  type="text"
                  className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <input
                  {...register("email")}
                  type="email"
                  required
                  className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="photoUrl"
                className="block text-gray-700 font-medium mb-2">
                Profile Picture
              </label>
              <div className="relative">
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="file-input w-full file-input-bordered file-input-accent "
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 15,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                  })}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                  placeholder="Enter your password"
                />
                {errors.password?.type === "required" && (
                  <span className="text-sm mt-1 text-red-500">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-sm mt-1 text-red-500">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-sm mt-1 text-red-500">
                    Password must be less than 15 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-sm mt-1 text-red-500">
                    Password must be less than 15 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-sm mt-1 text-red-500">
                    Password must be one upper case and one special characters
                  </span>
                )}

                <div
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  onClick={handlePasswordToggle}>
                  {showPassword ? <FiEye /> : <FiEyeOff />}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-medium mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  {...register("confirmPassword", {
                    required: true,
                  })}
                  type={showPassword ? "text" : "password"}
                  className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                  placeholder="Enter your confirm password"
                />
                {errors.confirmPassword?.type === "required" && (
                  <span className="text-sm mt-1 text-red-500">
                    Confirm Password is required
                  </span>
                )}
                {inputPassword !== inputConfirmPassword && (
                  <span className="text-sm mt-1 text-red-500">
                    Password not match
                  </span>
                )}

                <div
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  onClick={handlePasswordToggle}>
                  {showPassword ? <FiEye /> : <FiEyeOff />}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full h-10 ${
                !loading ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"
              } text-white font-medium py-2 px-4 rounded-lg transition duration-300 `}>
              {loading ? (
                <SyncLoader loading={loading} size={12} color="#36D7B7" />
              ) : (
                "Register"
              )}
            </button>

            <div className="text-center mt-4">
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-600 text-sm">
                Have an account? Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
