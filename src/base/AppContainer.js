import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import Home from "../components/Home/Home";
import Contract from "../components/Contract/Contract";
import { Route, Routes } from "react-router-dom";
import NoPage from "../components/NoPage/NoPage";
import Login from "../components/Login/Login";
import AuthProvider from "./context/AuthProvider";
import { setIsAdninLogin } from "../redux/actions/auth";
import { getAuthLocalStorage } from "../storage/getLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import AppLoader from "../libComponents/AppLoader/AppLoader";
import PurchasedContract from "../components/PurchasedContract/PurchasedContract";
import PendingContract from "../components/PendingContract/PendingContract";
import MessageProvider from "./context/MessageProvider";

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description app containter for wrapping all routes
 * @returns JSX.Element
 */
function AppContainer() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.adminReducer);

  /**
   * @author Lovesh Singh
   * @since 10-08-2023
   * @description to render layout component
   * @returns JSX.Element
   */
  const renderLayout = (children) => {
    return <Layout>{children}</Layout>;
  };

  useEffect(() => {
    getAuthLocalStorage().then((res) => {
      dispatch(setIsAdninLogin(res.isLoggedIn));
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={renderLayout(<Home />)} />
        <Route path="/contracts" element={renderLayout(<Contract />)} />
        <Route
          path="/contracts/pending"
          element={renderLayout(<PendingContract />)}
        />
        <Route
          path="/contracts/purchased"
          element={renderLayout(<PurchasedContract />)}
        />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
      <AppLoader show={loading} />
    </>
  );
}

export default AppContainer;
