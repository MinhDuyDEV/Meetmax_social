import React from "react";
import { Button } from "../../components/button";
import CheckHaveAccount from "../../modules/authentication/CheckHaveAccount";
import Title from "../../modules/authentication/Title";

const CheckEmailPage = () => {
  return (
    <div className="boxAuthentication max-w-[380px] md:max-w-[580px]">
      <Title
        heading="Check your email"
        desc="We've sent a link to your email address: ahmed@gmail.com"
      ></Title>
      <Button type="button">Skip now</Button>
      <CheckHaveAccount text="Didn't receive an email? " to="#">
        Resend
      </CheckHaveAccount>
    </div>
  );
};

export default CheckEmailPage;
