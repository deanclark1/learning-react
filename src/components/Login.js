import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      {/* <div className="">
        <form>
          <div className="form-group col-lg-6">
            <label for="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
            />
          </div>
          <div className="form-group col-lg-6">
            <label for="password">Password</label>
            <Link>
              <small id="nameHelp" className="form-text text-muted">
                Forgot password?
              </small>
            </Link>
            <input
              type="password"
              className="form-control"
              name="email"
              id="password"
            />
          </div>
          <div className="col-lg-6">
            <input className="btn btnn mt-1" type="submit" value="SIGN IN" />
          </div>
        </form>
      </div> */}
      {/* <form method="POST" name="myEmailform" action="" className="needs-validation" novalidate>
          <div className="form-group col-lg-6">
            <label for="inputLastName">Email</label>
            <input type="text" className="form-control" name="lastName"  id="inputLastName" >
          </div>
          <div className="form-group col-lg-6">
            <label for="inputLastName">Password</label>
            <Link href="" style="float:right;"><small id="nameHelp" className="form-text text-muted">Forgot password?</small></Link>
            <input type="email" className="form-control"  name="email" id="inputLastName" >
          </div>
          <div className="col-lg-6">
            <input  className="btn btnn mt-1" type="submit" value="SIGN IN">
          </div>                           
        </form>   */}

      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-none d-lg-flex">
            <div class="">
              <h1 class="fw-600">Welcome to my BLog</h1>
              <p>Login to access my blog posts</p>
            </div>
          </div>
          <div class=" col-12 col-lg-6 login-left">
            <div class="white-background mt-5">
              <div class="py-3">
                <h1 class="fw-600">Login</h1>
              </div>

              <div class="myForm">
                <form
                  method="POST"
                  name="myEmailform"
                  action=""
                  class="needs-validation"
                  novalidate
                >
                  <div class="form-group col-lg-6">
                    <label for="inputLastName">Email</label>
                    <input
                      type="text"
                      class="form-control"
                      name="lastName"
                      id="inputLastName"
                    />
                  </div>
                  <div class="form-group col-lg-6">
                    <label for="inputLastName">Password</label>
                    <Link to="">
                      <small id="nameHelp" class="form-text text-muted">
                        Forgot password?
                      </small>
                    </Link>
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="inputLastName"
                    />
                  </div>
                  <div class="col-lg-6">
                    <input
                      class="btn btnn mt-1"
                      type="submit"
                      value="SIGN IN"
                    />
                  </div>
                </form>
              </div>
              <div class="text-center py-4">
                {/* <p class="py-2">
                  By continuing, you agree to accept our Privacy Policy & Terms
                  of Service.
                </p> */}
                <small id="nameHelp" class="form-text text-muted">
                  {" "}
                  Don't have an account? <Link to="/signup">Sign up</Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
