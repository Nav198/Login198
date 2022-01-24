import { React, useState } from "react";
import "./Css/Login.css";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
export default function Login() {
  
  const navigate = useNavigate();
  const [uname, setUname] = useState();
  const [upass, setUpass] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (uname === "hello" && upass === "hello") {
      toast.success('Login Successful',{position:toast.POSITION.TOP_CENTER,autoClose:1500})
     setTimeout(()=>{ navigate("/home")},1800)
      localStorage.setItem("auth", true);
    } else {
      toast.error('Incorrect Details',{position:toast.POSITION.TOP_CENTER,autoClose:1500})
      
    }
  };

  return (
    <div>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <h4 className="mt-1 mb-5 pb-1">WeLcome </h4>
                      
                    </div>

                    <form>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                      <label className="form-label" >Username</label>
                        <input
                          type="text"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Enter Your Username"
                          onChange={(e) => setUname(e.target.value)}
                        />
                        
                      </div>

                      <div className="form-outline mb-4">
                      <label
                          className="form-label"
                          
                        >
                          Password
                        </label>
                        <input
                          type="text"
                          id="form2Example22"
                          className="form-control" placeholder="Enter Your Password"
                          onChange={(e) => setUpass(e.target.value)}
                        />
                       
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          onClick={handleLogin}
                        >
                          Log in
                        </button><span> &nbsp; &nbsp;&nbsp;&nbsp;       </span>
                        <a className="text-muted" href="/forgotpassword">
                          Forgot password?
                        </a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={handleSubmit}
                        >
                          Create new
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
