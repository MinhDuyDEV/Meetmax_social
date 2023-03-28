import Title from "../../modules/authentication/Title";
import React from "react";
import OR from "../../modules/authentication/OR";
import GroupForm from "../../modules/authentication/GroupForm";
import ErrorText from "../../modules/authentication/ErrorText";
import CheckHaveAccount from "../../modules/authentication/CheckHaveAccount";
import ButtonSignIn from "../../modules/authentication/ButtonSignIn";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Radio } from "../../components/radio";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import {
  IconSmile,
  IconMale,
  IconMail,
  IconLock,
  IconGoogle,
  IconFemale,
  IconCalender,
  IconApple,
} from "../../assets/icons";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Please enter your name."),
    email: yup
      .string()
      .email("Please enter a valid email address.")
      .required("Please enter your email address."),
    password: yup
      .string()
      .min(8, "Your password must be at least 8 characters or greater")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{8,}$/,
        {
          message:
            "Your password must have at least uppercase, 1 lowercase and 1 special characters",
        }
      )
      .required("Please enter your password"),
    gender: yup
      .string()
      .required("Please select your gender")
      .oneOf(["male", "female"], "You can only select male or female"),
    date: yup.string().required("Please enter your birthday."),
  })
  .required();

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      gender: "male",
    },
  });
  const handleSignUp = (values) => {
    console.log("🚀 ~ handleSignUp ~ values:", values);
  };
  const watchGender = watch("gender");
  return (
    <div>
      <Title
        heading="Getting Started"
        desc="Create an account to continue and connect with the people."
      ></Title>
      <div className="boxAuthentication max-w-[380px] md:max-w-[580px] mb-[100px]">
        <div className="flex items-center gap-x-5 md:mb-[30px] mb-6">
          <ButtonSignIn icon={<IconGoogle></IconGoogle>}>
            Log in with Google
          </ButtonSignIn>
          <ButtonSignIn icon={<IconApple></IconApple>}>
            Log in with Apple
          </ButtonSignIn>
        </div>
        <OR></OR>
        <form onSubmit={handleSubmit(handleSignUp)}>
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
          <GroupForm className={errors.name && "mb-[14px]"}>
            <Input
              placeholder="Your Name"
              name="name"
              control={control}
              className={errors.name && "border-red focus:border-red"}
            >
              <IconSmile></IconSmile>
            </Input>
            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
          </GroupForm>
          <GroupForm className={errors.password && "mb-[14px]"}>
            <Input
              placeholder="Create Password"
              name="password"
              type="password"
              iconPassword
              control={control}
              className={errors.password && "border-red focus:border-red"}
            >
              <IconLock></IconLock>
            </Input>
            {errors.password && (
              <ErrorText>{errors.password.message}</ErrorText>
            )}
          </GroupForm>
          <div className="mb-[20px] md:mb-[30px] ">
            <div
              className={`items-center w-full lg:flex gap-x-5 ${
                errors.date && "mb-[6px]"
              }`}
            >
              <Input
                placeholder="Date of birth"
                name="date"
                type="text"
                control={control}
                className={errors.date && "border-red focus:border-red"}
              >
                <IconCalender></IconCalender>
              </Input>
              <div className="flex items-center border-opacity-20 md:w-2/4 pl-[10px] md:pl-[18px] md:py-[14px] py-2 rounded-[10px] gap-x-[18px] border border-gray transition-all w-full">
                <div className="flex items-center gap-x-5">
                  {watchGender === "male" ? <IconMale></IconMale> : null}
                  {watchGender === "female" ? <IconFemale></IconFemale> : null}
                  <div className="flex items-center gap-x-[14px]">
                    <Radio
                      name="gender"
                      control={control}
                      checked={watchGender === "male"}
                      value={"male"}
                    ></Radio>
                    <span className="font-medium text-display text-gray">
                      Male
                    </span>
                  </div>
                  <div className="flex items-center gap-x-[14px]">
                    <Radio
                      name="gender"
                      control={control}
                      checked={watchGender === "female"}
                      value={"female"}
                      text="female"
                    ></Radio>
                    <span className="font-medium text-display text-gray">
                      Female
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {errors.date && <ErrorText>{errors.date.message}</ErrorText>}
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
        <CheckHaveAccount text="Already have an account?" to="/sign-in">
          Sign In
        </CheckHaveAccount>
      </div>
    </div>
  );
};

export default SignUpPage;
