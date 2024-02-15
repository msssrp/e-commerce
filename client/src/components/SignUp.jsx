import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";
import Modal from "./Modal";
const SignUp = () => {
  const { createUser } = React.useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((resp) => {
        const user = resp.user;
        console.log(user);
        alert("Create An Account successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="modal-box flex flex-col justify-center">
        <form className="card-body w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-left lg:text-left">
            <h1 className="text-xl font-bold">Create An Account</h1>
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
          </div>
          <div className="form-control mt-2">
            <button className="btn bg-red text-white mt-3" type="submit">
              Sign up
            </button>
          </div>
          <p className="my-2 text-center">
            Already have an account?{" "}
            <button
              className="text-red underline"
              onClick={() => document.getElementById("login").showModal()}
            >
              Sign In Now
            </button>
          </p>
        </form>
        <div className="flex justify-center gap-2 items-center">
          <button className="btn w-[55px] h-[55px] bg-transparent border-none hover:bg-transparent hover:border-none shadow-transparent">
            <FcGoogle className="w-full h-full" />
          </button>
          <button className="btn w-[55px] h-[55px] bg-transparent border-none hover:bg-transparent hover:border-none shadow-transparent">
            <ImGithub className="w-full h-full" />
          </button>
          <button className="btn w-[55px] h-[55px] bg-transparent border-none hover:bg-transparent hover:border-none shadow-transparent">
            <FaFacebook className="w-full h-full" />
          </button>
        </div>
      </div>
      <Modal name={"login"} />
    </div>
  );
};

export default SignUp;
