import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Modal = ({ name }) => {
  const { login, signUpWithGoogle } = React.useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const from = "/shop";
  const onSubmit = (data) => {
    login(data.email, data.password)
      .then((resp) => {
        const user = resp.user;
        console.log(user);
        alert("Login successfully");
        document.getElementById("login").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const googleSignUp = () => {
    signUpWithGoogle()
      .then((resp) => {
        const user = resp.user;
        console.log(user);
        alert("Login Google Successfully");
        document.getElementById("login").close();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <dialog id={name} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col justify-center">
          <form className="card-body w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="text-left lg:text-left">
              <h1 className="text-xl font-bold">Sign In</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                {...register("password")}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-2">
              <button className="btn bg-red text-white" type="submit">
                Login
              </button>
            </div>
            <p className="my-2 text-center">
              Don't have an account?{" "}
              <Link className="text-red underline" to={"/signup"}>
                Sign up Now
              </Link>
            </p>
            <button
              htmlFor={name}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById(name).close()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </form>
          <div className="flex justify-center gap-2 items-center">
            <button className="btn w-[55px] h-[55px] bg-transparent border-none hover:bg-transparent hover:border-none shadow-transparent">
              <FcGoogle
                onClick={() => googleSignUp()}
                className="w-full h-full"
              />
            </button>
            <button className="btn w-[55px] h-[55px] bg-transparent border-none hover:bg-transparent hover:border-none shadow-transparent">
              <ImGithub className="w-full h-full" />
            </button>
            <button className="btn w-[55px] h-[55px] bg-transparent border-none hover:bg-transparent hover:border-none shadow-transparent">
              <FaFacebook className="w-full h-full" />
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
