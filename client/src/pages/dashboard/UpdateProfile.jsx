import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
const UpdateProfile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { updateUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const onSubmit = async (data) => {
    await updateUser(data.name, data.picture);
    alert("update");
    navigate(from, { replace: true });
  };
  return (
    <div className="section-container">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="modal-box flex flex-col justify-center">
          <form className="card-body w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="text-left lg:text-left">
              <h1 className="text-xl font-bold">Update Your Profile</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="new name"
                className="input input-bordered"
                required
                {...register("name")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Profile Picture</span>
              </label>
              <input
                type="text"
                placeholder="new profile"
                className="input input-bordered"
                required
                {...register("picture")}
              />
            </div>
            <div className="form-control mt-2">
              <button className="btn bg-red text-white mt-3" type="submit">
                update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
