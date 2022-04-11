import { useState, useRef, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Joi from "joi-browser";
import jwt_decode from "jwt-decode";
import loginSchema from "../validation/login.validation";
import { authActions } from "../store/auth";
import "./LoginPage.css";
import apple from "../assets/applelogo.png";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);

  const history = useHistory();
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    emailRef.current.focus();
  }, [emailRef]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleOnSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    const validatedValue = Joi.validate({ email, password }, loginSchema, {
      abortEarly: false,
    });
    const { error } = validatedValue;
    if (error) {
      dispatch(authActions.logout());
      toast.error("Email and/or password incorrect");
    } else {
      axios
        .post("/users/login", {
          email,
          password,
        })
        .then((res) => {
          dispatch(authActions.login());
          const decoded = jwt_decode(res.data.token);
          dispatch(authActions.updateUser(decoded));
          localStorage.setItem("tokenKey", res.data.token);
          if (location.state === null) {
            history.push("/cardspanel");
          } else {
            if (location.state.fromPage) {
              history.push(location.state.fromPage);
            } else {
              history.push("/cardspanel");
            }
          }
        })
        .catch((err) => {
          toast.error("Email and/or password incorrect");
          if (err.response) {
          }
          localStorage.clear();
          dispatch(authActions.logout());
        });
    }
  };

  const memoizedCallback = useCallback(() => {
    if (location.state) {
      if (location.state.email && location.state.password) {
        if (!email || !password) {
          setEmail(location.state.email);
          setPassword(location.state.password);
        } else {
          handleOnSubmit();
        }
      }
    }
  }, [location.state, handleOnSubmit]);

  useEffect(() => {
    memoizedCallback();
  }, [location.state, email, password, memoizedCallback]);

  return (
    <form className="LoginForm" onSubmit={handleOnSubmit}>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <br />
          <div className="fadeIn first">
            <img src={apple} id="icon" alt="" />
          </div>
          <br />
          <h2>Login to your account</h2>
          <br />
          <div className="box">
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              ref={emailRef}
              required
            ></input>
            <br />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            ></input>
            <br />
            <br />
            <button className="btn btn-danger">Log In</button>
          </div>
          <br />
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
