import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import apple from "../assets/applelogo.png";
import { toast } from "react-toastify";

const SignupPage = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [biz, setBiz] = useState(false);

  const handleNameChange = (ev) => {
    setName(ev.target.value);
  };
  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };
  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value);
  };
  const handleBizChange = (ev) => {
    setBiz(ev.target.checked);
  };

  const handleSignup = (ev) => {
    ev.preventDefault();
    axios
      .post("/users/register", { name, email, password, biz })
      .then((res) => {
        history.push("/login", { email, password });
      })
      .catch((err) => {
        toast.error(err.response.data);
        if (err.response) {
        }
      });
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <form onSubmit={handleSignup}>
          <br />
          <div className="fadeIn first">
            <img src={apple} id="icon" alt="" />
          </div>
          <br />
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Name
            </label>
            <br />
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              onChange={handleNameChange}
              value={name}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleEmailChange}
              value={email}
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handlePasswordChange}
              value={password}
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={handleBizChange}
              checked={biz}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Business User
            </label>
          </div>
          <button type="submit" className="btn btn-danger">
            Sign Up
          </button>
        </form>
        <br />
      </div>
    </div>
  );
};

export default SignupPage;
