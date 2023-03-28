import React, { Fragment, Suspense } from "react";
import "./assets/styles/app.scss";
import { Route, Routes } from "react-router-dom";
import LayoutAuthentication from "./layouts/LayoutAuthentication";
import SignInPage from "./Pages/authenticationPages/SignInPage";
import SignUpPage from "./Pages/authenticationPages/SignUpPage";
import ForgotPasswordPage from "./Pages/authenticationPages/ForgotPasswordPage";

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
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default App;
