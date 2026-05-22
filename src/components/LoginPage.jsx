"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Checkbox,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "sonner";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
      callbackURL: callbackUrl,
    });
    setLoading(false);

    if (error) {
      toast.error(error.message || "Login failed. Please try again.");
      return;
    }

    toast.success("Login successful!");
    router.push('/');
  };

  const handleGoogleSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: callbackUrl,
    });
    if (error) {
      toast.error(error.message || "Google sign in failed.");
      return;
    } else {
      toast.success("Google login successful!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa] py-5">
      <div className="text-center mb-6 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-3">Welcome Back</h1>
        <p className="text-gray-500 text-lg">
          Unlock your creative dashboard at{" "}
          <span className="text-indigo-600 font-bold tracking-wide">
            IdeaVault
          </span>
        </p>
      </div>
      <Card className="w-full max-w-lg p-10 shadow-sm rounded-md border border-gray-200/60 bg-white">
        <Form onSubmit={onSubmit} className="flex flex-col gap-6">
          <TextField name="email" type="email" className="w-full">
            <Label className="font-semibold text-gray-800 text-sm mb-1 block">
              Email Address
            </Label>
            <div className="relative w-full">
              <Input placeholder="Enter your email" className="w-full" required />
            </div>
          </TextField>
          <TextField
            isRequired
            minLength={6}
            name="password"
            type={isPasswordVisible ? "text" : "password"}
            validate={(value) => {
              if (value.length < 6) return "Password must be at least 6 characters";
              if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
              if (!/[a-z]/.test(value)) return "Password must contain at least one lowercase letter";
              return null;
            }}
            className="w-full"
          >
            <Label className="font-semibold text-gray-800 text-sm mb-1 block">
              Password
            </Label>
            <div className="relative w-full flex items-center">
              <Input placeholder="Enter your password" className="w-full pr-10" />
              <button
                type="button"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none z-10 cursor-pointer"
              >
                {isPasswordVisible ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
            <Description className="text-xs text-gray-400 mt-1">
              Must be at least 6 characters with 1 uppercase and 1 lowercase letter.
            </Description>
            <FieldError className="text-xs text-danger mt-1" />
          </TextField>

          <div className="flex justify-between items-center text-sm">
            <Checkbox
              radius="none"
              size="sm"
              classNames={{
                label: "text-gray-500 text-sm",
                wrapper: "after:bg-indigo-600 checked:border-indigo-600",
              }}
            >
              Remember me
            </Checkbox>
            <Link href="/signup" className="text-indigo-600 hover:underline font-medium">
              Forgot password?
            </Link>
          </div>
          <Button
            type="submit"
            isLoading={loading}
            isDisabled={loading}
            className="bg-indigo-600 w-full rounded-md hover:bg-indigo-700 text-white font-semibold py-6 text-base shadow-none transition-colors cursor-pointer"
          >
            Sign In
          </Button>

          <div className="flex items-center gap-3">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-xs text-gray-400 uppercase tracking-tight">Or continue with</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            className="w-full py-6 font-medium border border-gray-200 hover:bg-gray-200 text-gray-700 rounded-none cursor-pointer"
            type="button"
          >
            <GoogleIcon size={20} className="mr-2" />
            Sign In With Google
          </Button>

          <p className="text-center text-sm text-gray-500">
            Have a fresh startup concept?{" "}
            <Link href="/signup" className="text-indigo-600 font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;