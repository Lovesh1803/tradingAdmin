import React, { useEffect, useState } from "react";
import AppButton from "../../libComponents/AppButton/AppButton";
import { FaUser } from "react-icons/fa";
import "./Login.css";
import { callAPI } from "../../network/NetworkConnection";
import {
  APIUrl,
  NetworkConfiguration,
} from "../../network/NetworkConfiguration";
import {
  getAuthLocalStorage,
  setAuthLocalStorage,
} from "../../storage/getLocalStorage";
import { useNavigate } from "react-router-dom";
import AppLoader from "../../libComponents/AppLoader/AppLoader";
import { useDispatch, useSelector } from "react-redux";
import { setIsAdninLogin } from "../../redux/actions/auth";
import { setLoading } from "../../redux/actions/admin";

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description login page component
 * @returns JSX.Element
 */
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginFormData, setLoginFormData] = useState({
    userId: "",
    password: "",
  });
  const { isAdminLogin } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (isAdminLogin) {
      navigate("/", { replace: true });
    }
  }, [isAdminLogin]);

  /**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description handle login api on click login 
 */
  const onCickLogin = () => {
    dispatch(setLoading(true))
    callAPI(APIUrl + NetworkConfiguration.LOGIN, "POST", {
      userId: loginFormData?.userId,
      password: loginFormData?.password,
    })
      .then((res) => {
        setAuthLocalStorage(res?.token);
        dispatch(setIsAdninLogin(true));
        dispatch(setLoading(false))
        navigate("/", { replace: true });
      })
      .catch((err) => console.log("error: ", err))
      .finally(() => dispatch(setLoading(false)));
  };

  return (
    <>
      <div className="login__bg"></div>
      <div className="login">
        <div className="login__form">
          <FaUser color="white" size={80} style={{ margin: "1rem 0" }} />
          <p className="login__text">Admin Login</p>
          <input
            className="login__username-input"
            value={loginFormData?.userId}
            type="text"
            placeholder="Enter user id"
            onChange={(e) =>
              setLoginFormData({ ...loginFormData, userId: e.target.value })
            }
          />
          <input
            className="login__password-input"
            value={loginFormData?.password}
            type="password"
            placeholder="Enter password"
            onChange={(e) =>
              setLoginFormData({ ...loginFormData, password: e.target.value })
            }
          />
          <AppButton
            text={"Login"}
            style={{
              margin: "1rem 0",
              width: "85%",
              height: "3rem",
              borderRadius: "0.3rem",
            }}
            onClick={onCickLogin}
          />
        </div>
      </div>
      {/* <AppLoader show={true} /> */}
    </>
  );
}

export default Login;
