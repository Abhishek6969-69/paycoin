"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Input from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import { Label } from "@repo/ui/label";

export default function SignInPage() {
  const [data, setData] = useState({
    phone: "",
    password: "",
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const result = await signIn("credentials", {
      phone: data.phone,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      setErrorMessage(result.error);
    } else {
      router.push("/dashboard");
    }

    setLoading(false);
  };

  // Try Now: sign in with the demo account you provided
  const tryNow = async () => {
    setLoading(true);
    setErrorMessage("");
    const demoPhone = "9696694046";
    const demoPassword = "123456789"; // as requested, do not alter

    setData({ phone: demoPhone, password: demoPassword });

    const result = await signIn("credentials", {
      phone: demoPhone,
      password: demoPassword,
      redirect: false,
    });

    if (result?.error) {
      setErrorMessage(result.error);
    } else {
      router.push("/dashboard");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Welcome back</h2>
        <p className="text-sm text-gray-600 text-center mt-2">Sign in to continue to <span className="font-semibold text-blue-600">CoinPay</span></p>

        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">
            {decodeURIComponent(error)}
          </p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-sm mt-4 text-center">{errorMessage}</p>
        )}

        <form onSubmit={(e) => handleSignIn(e)} className="space-y-5 mt-6">
          <div>
            <Label className="text-sm text-gray-700" label="Phone Number" />
            <Input
              className="w-full border border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg p-3"
              placeholder="Enter your phone number"
              type="tel"
              maxlength={10}
              onChange={(value) => setData({ ...data, phone: value })}
            />
          </div>

          <div>
            <Label className="text-sm text-gray-700" label="Password" />
            <Input
              className="w-full border border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg p-3"
              type="password"
              placeholder="Enter your password"
              onChange={(value) => setData({ ...data, password: value })}
            />
          </div>

          <div className="space-y-3">
            <Button
              type="submit"
              className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow"
              onClick={() => {}}
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>

            {/* <Button
              type="button"
              className="w-full py-3 text-lg font-semibold border-2 border-blue-600 text-blue-600 rounded-lg bg-transparent hover:bg-blue-50"
              onClick={tryNow}
            >
              {loading ? "Signing in..." : "Try Now"}
            </Button> */}
          </div>
        </form>

        <div className="text-center text-sm text-gray-600 mt-6">
          <p>
            Don’t have an account?
            <a href="/user/signup" className="text-blue-600 hover:underline ml-1">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}