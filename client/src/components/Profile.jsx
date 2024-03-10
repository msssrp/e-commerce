import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate, useLocation, Link } from "react-router-dom";
const Profile = ({ user }) => {
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const handlerLogout = () => {
    logout();
    navigate(from, { replace: true });
  };
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user?.photoURL ? (
                  <img alt="User profile" src={user.photoURL} />
                ) : (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                )}
              </div>
            </div>
          </label>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/updateProfile">Profile</Link>
            </li>
            <li>
              <a>Order</a>
            </li>
            <li>
              <a>Setting</a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
