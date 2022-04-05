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

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);

  //routes
  const history = useHistory();
  const location = useLocation();

  //for redux actions
  const dispatch = useDispatch();
  const loggedInRedux = useSelector((state) => state.auth.loggedIn);

  //useEffect
  useEffect(() => {
    emailRef.current.focus();
    console.log("ref");
  }, [emailRef]);

  const handleEmailChange = (event) => {
    // console.log("event", event);
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleOnSubmit = (event) => {
    //prevent the form to do refresh
    if (event) {
      event.preventDefault();
    }
    const validatedValue = Joi.validate({ email, password }, loginSchema, {
      abortEarly: false,
    });
    const { error } = validatedValue;
    if (error) {
      //invalid email or password
      dispatch(authActions.logout());
      toast.error("Email and/or password incorrect");
    } else {
      //email and password is good
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
            // alert(err.response.data);
            console.log(err.response.data);
          }
          localStorage.clear();
          dispatch(authActions.logout());
        });
    }
  };

  const memoizedCallback = useCallback(() => {
    console.log("location.state", location.state);
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
            {/* <img src={dog2} id="icon" alt="" /> */}
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
            <button className="btn btn-danger">login</button>
          </div>
          <br />
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
