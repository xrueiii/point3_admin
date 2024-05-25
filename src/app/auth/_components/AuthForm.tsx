"use client";

import { useState } from "react";

import { signIn } from "next-auth/react";


import { publicEnv } from "@/lib/env/public";

import AuthInput from "./AuthInput";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Image from "next/image";

function AuthForm() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("credentials", {
      name,
      password,
      callbackUrl: `${publicEnv.NEXT_PUBLIC_BASE_URL}/main`,
    });
  };

  return (
    <div className="lg:w-1/3 w-1/2 rounded-md py-8 bg-white">
      <div className="lg:text-3xl text-lg px-10">
        管理者{isSignUp ? "註冊":"登入"}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col mt-16 gap-12 px-10 items-center">
        
        <div className="flex items-center border border-black px-2 rounded-md w-full">
          <PersonIcon/>
          <AuthInput
            label="帳號"
            type="text"
            value={name}
            setValue={setName}
          />
        </div>

        <div className="flex items-center border border-black px-2 rounded-md w-full">
          <LockIcon/>
          <AuthInput
            label="密碼"
            type="password"
            value={password}
            setValue={setPassword}
          />
        </div>

        {isSignUp && (
          <div className="flex items-center border border-black px-2 rounded-md w-full">
            <LockIcon/>
            <AuthInput
              label="確認密碼"
              type="password"
              value={confirmPassword}
              setValue={setConfirmPassword}
            />
            </div>
          )}

        <div className="text-sm text-gray-500">
          {isSignUp ? (
            <span>
              已有帳號?{"   "}
              <a
                className="cursor-pointer hover:underline text-column2"
                onClick={() => setIsSignUp(false)}
              >
                前往登入
              </a>
            </span>
          ) : (
            <span>
              尚未註冊?{"   "}
              <a
                data-testid="sign-in-up-button"
                className="cursor-pointer hover:underline text-column2"
                onClick={() => setIsSignUp(true)}
              >
                前往註冊
              </a>
            </span>
          )}
        </div>
                

        <button
          data-testid="auth-submit-button"
          type="submit"
          className="w-1/4 bg-amber-100 rounded-lg py-4 lg:text-xl text-sm hover:bg-gray-300"
        >
          {isSignUp ? "註冊" : "登入"}
        </button>
      </form>
    </div>

  );
}

export default AuthForm;
