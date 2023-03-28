import React, { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutAuthentication from "./layouts/LayoutAuthentication";
import SignInPage from "./Pages/auththenticationPages/SignInPage";
import SignUpPage from "./Pages/auththenticationPages/SignUpPage";

const App = () => {
  return (
    <Fragment>
      <Suspense>
        <Routes>
          <Route element={<LayoutAuthentication></LayoutAuthentication>}>
            <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
            <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default App;
