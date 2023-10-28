import { createBrowserRouter, RouterProvider, redirect, Navigate } from "react-router-dom";
import React from "react";
import Home from "../Home";
import Article from "../Article";
import Login from "../Login";
import ChangePassword from "../ChangePassword";
import RecoverPassword from "../RecoverPassword";
import CodeSender from "../CodeSender";
import Statistics from "../Statistics";

let router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/*",
    Component: Login,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/home/:urlTopic",
    Component: Home,
  },
  {
    path: "/article/:urlTopic/:articleId",
    Component: Article,
  },
  {
    path: "/stats",
    Component: Statistics,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/change_password",
    Component: ChangePassword,
  },
  {
    path: "/recover_password",
    Component: RecoverPassword,
  },
  {
    path: "/code_sender",
    Component: CodeSender,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
