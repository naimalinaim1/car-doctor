import NavBar from "../../pages/Shared/NavBar/NavBar";
import img from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import SocialLogin from "../../pages/Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { singInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    singInUser(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center w-full min-h-[85vh]">
        <div className="grid md:grid-cols-2 items-center gap-4 ">
          <div className="w-full">
            <img src={img} alt="" />
          </div>
          <div className="card w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl font-bold text-center">Login now!</h1>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="my-4 text-center">
                New to Car Doctors{" "}
                <Link
                  className="text-orange-500 font-bold underline hover:no-underline"
                  to="/singup"
                >
                  Sign Up
                </Link>
              </p>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
