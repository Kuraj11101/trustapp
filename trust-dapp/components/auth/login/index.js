import { useState, useEffect } from "react";
import Router from "next/router";
import { loginUser } from "../../../lib/auth";
import { removeToken } from "../../../lib/token";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Remove the User's token which saved before.
    removeToken();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      // API call:
      const data = await loginUser(username, password);
      // console.log("Data is :", data);
      // console.log("Payload is :" , data.payload);
      // console.log("Token is :" , data.payload.token);
      if (data.payload && data.payload.token) {
        if (rememberMe) {
          window.localStorage.setItem("token", data.payload.token);
        } else {
          window.sessionStorage.setItem("token", data.payload.token);
        }
        setTimeout(() => {
          Router.push("/dashboard");
        }, 1000);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (

    <div className="card text-dark bg-light mb-3" style={{maxWidth:"500px", marginTop: "20px"}}>
        <div className="card-header">Login</div>
        <div className="card-body">
<<<<<<< HEAD
            {/* <h5 class="card-title">Success card title</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
=======
            {/* <h5 className="card-title">Success card title</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
>>>>>>> 851c2b5c012b3d4431b3801bac65afe75e1d431c
             <form className="col-sm-6 justify-content-center" onSubmit={handleSubmit}>
      <fieldset>
        <legend className="h1"></legend>
        <div className="mb-3">
          <label htmlFor="usernameInput" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="usernameInput"
            className="form-control"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="passwordInput"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="RememberMeInput"
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="RememberMeInput">
              Remember Me
            </label>
          </div>
        </div>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          Login
        </button>
      </fieldset>
    </form>
        </div>
    </div>
  );
}
