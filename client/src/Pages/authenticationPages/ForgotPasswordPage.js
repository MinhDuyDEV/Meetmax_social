import React from "react";
import GroupForm from "../../modules/authentication/GroupForm";
import Title from "../../modules/authentication/Title";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "../../components/input";
import { IconMail } from "../../assets/icons";
import ErrorText from "../../modules/authentication/ErrorText";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Please enter a valid email address.")
      .required("Please enter your email address."),
  })
  .required();

const ForgotPasswordPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleForgotPassword = (values) => {
    console.log("🚀 ~ handleForgotPassword ~ values:", values);
  };
  return (
    <div>
      <Title
        heading="Forgot password?"
        desc="Enter your details to receive a rest link"
      ></Title>
      <div className="boxAuthentication max-w-[380px] md:max-w-[580px]">
        <form onSubmit={handleSubmit(handleForgotPassword)}>
          <GroupForm className={errors.email && "mb-[14px]"}>
            <Input
              placeholder="Your Email"
              name="email"
              control={control}
              className={errors.email && "border-red focus:border-red"}
            >
              <IconMail></IconMail>
            </Input>
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </GroupForm>
          <Button type="submit">Send</Button>
        </form>
        <Link
          to="/sign-in"
          className="inline-block mx-auto font-medium text-display text-blue"
        >
          {"<"} Back to Sign In
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
