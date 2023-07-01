import React, { Fragment, Suspense } from "react";
import "./assets/styles/app.scss";
import { Route, Routes } from "react-router-dom";
import LayoutAuthentication from "./layouts/LayoutAuthentication";
import SignInPage from "./Pages/authenticationPages/SignInPage";
import SignUpPage from "./Pages/authenticationPages/SignUpPage";
import ForgotPasswordPage from "./Pages/authenticationPages/ForgotPasswordPage";
import CheckEmailPage from "./Pages/authenticationPages/CheckEmailPage";
import LayoutHomePage from "./layouts/LayoutDashboard";

const App = () => {
  return (
    <Fragment>
      <Suspense>
        <Routes>
          <Route element={<LayoutAuthentication></LayoutAuthentication>}>
            <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
            <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
            <Route
              path="/forgot-password"
              element={<ForgotPasswordPage></ForgotPasswordPage>}
            ></Route>
            <Route
              path="/check-email"
              element={<CheckEmailPage></CheckEmailPage>}
            ></Route>
          </Route>
          <Route element={<LayoutHomePage></LayoutHomePage>}></Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default App;
