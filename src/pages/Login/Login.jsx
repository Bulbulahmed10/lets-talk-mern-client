import { useContext, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import toastConfig from "../../utils/toastConfig";
import { AuthContext } from "../../context/AuthProvider";
import SyncLoader from "react-spinners/SyncLoader";
import axios from "axios";
const Login = () => {
  const { login, googleLogin, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    setLoading(true);
    googleLogin()
      .then((result) => {
        const signInUser = result.user;
        const { displayName, email, photoURL } = signInUser;

        const saveUserInfo = {
          name: displayName,
          email: email,
          profilePictureURL:
            photoURL !== null
              ? photoURL
              : "https://i.ibb.co/5x6rFVp/noAvatar.png",
          role: "student",
        };
        axios
          .post("https://lets-talk-school.vercel.app/user", saveUserInfo)
          .then((res) => {
            console.log(res);
            if (res.data.existUser) {
              toast.success("Login Successful!", toastConfig);
              setUser(signInUser);
              navigate(from, { replace: true });
              setLoading(false);
            }
            if (res.data.insertedId) {
              toast.success("Login Successful!", toastConfig);
              navigate("/");
              setUser(result.user);
              setLoading(false);
            }
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const onsubmit = (data) => {
    setLoading(true);
    login(data.email, data.password)
      .then(async (result) => {
        const loginInUser = result.user;
        toast.success("User Login Successful", toastConfig);
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message, toastConfig);
        setLoading(false);
      });
  };

  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 ">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg px-8 py-6 my-6">
        <form onSubmit={handleSubmit(onsubmit)}>
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <input
                {...register("email", { required: true })}
                type="email"
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                placeholder="Enter your email"
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
                {...register("password", { required: true })}
                type={showPassword ? "text" : "password"}
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                placeholder="Enter your password"
              />
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
              "Login"
            )}
          </button>
        </form>
        <div className="text-center mt-4">
          <div>
            <p className="font-Raleway font-medium text-slate-500">
              Login in with
            </p>
            <div className="flex justify-center my-2 ">
              <button
                onClick={handleGoogleSignIn}
                className="w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">
                <BsGoogle />
              </button>
            </div>
            <Link
              to="/register"
              className="text-blue-500 hover:text-blue-600 text-sm">
              Don't have an account? Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
