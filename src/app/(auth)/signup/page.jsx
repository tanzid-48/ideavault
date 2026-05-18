"use client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";

const RegistrationPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa] py-5">
      <div className="text-center mb-6 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-3">Create Account</h1>
        <p className="text-gray-500 text-lg">
          Join the builder community at{" "}
          <span className="text-indigo-600 font-bold tracking-wide">
            IdeaVault
          </span>
        </p>
      </div>

      <Card className="w-full max-w-lg p-10 shadow-sm rounded-md border border-gray-200/60 bg-white">
        <Form className="flex flex-col gap-6">
          <TextField name="name" type="text" className="w-full" isRequired>
            <Label className="font-semibold text-gray-800 text-sm mb-1 block">
              Full Name
            </Label>
            <div className="relative w-full">
              <Input
                placeholder="Enter your full name"
                className="w-full"
                required
              />
            </div>
          </TextField>

          <TextField name="email" type="email" className="w-full" isRequired>
            <Label className="font-semibold text-gray-800 text-sm mb-1 block">
              Email Address
            </Label>
            <div className="relative w-full">
              <Input
                placeholder="Enter your email"
                className="w-full"
                required
              />
            </div>
          </TextField>

          <TextField name="photoUrl" type="url" className="w-full">
            <Label className="font-semibold text-gray-800 text-sm mb-1 block">
              Photo URL
            </Label>
            <div className="relative w-full">
              <Input
                placeholder="https://example.com/photo.jpg"
                className="w-full"
              />
            </div>
          </TextField>

          <TextField
            isRequired
            minLength={6}
            name="password"
            type={isPasswordVisible ? "text" : "password"}
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[a-z]/.test(value)) {
                return "Password must contain at least one lowercase letter";
              }
              return null;
            }}
            className="w-full"
          >
            <Label className="font-semibold text-gray-800 text-sm mb-1 block">
              Password
            </Label>

            <div className="relative w-full flex items-center">
              <Input
                placeholder="Create a strong password"
                className="w-full pr-10"
              />
              <button
                type="button"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none z-10 cursor-pointer"
              >
                {isPasswordVisible ? (
                  <FiEyeOff size={18} />
                ) : (
                  <FiEye size={18} />
                )}
              </button>
            </div>
            <Description className="text-xs text-gray-400 mt-1">
              Must be at least 6 characters with 1 uppercase and 1 lowercase letter.
            </Description>
            <FieldError className="text-xs text-danger mt-1" />
          </TextField>

          <Button
            type="submit"
            className="bg-indigo-600 w-full rounded-md hover:bg-indigo-700 text-white font-semibold py-6 text-base shadow-none transition-colors cursor-pointer"
          >
            Sign Up
          </Button>

          <div className="flex items-center gap-3">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-xs text-gray-400 uppercase tracking-tight">
              Or register with
            </span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <Button
            variant="outline"
            className="w-full py-6 font-medium border border-gray-200 hover:bg-gray-200 text-gray-700 rounded-none cursor-pointer"
            type="button"
          >
            <GoogleIcon size={20} className="mr-2" />
            Sign Up With Google
          </Button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-indigo-600 font-bold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </Form>
      </Card>
    </div>
  );
};

export default RegistrationPage;