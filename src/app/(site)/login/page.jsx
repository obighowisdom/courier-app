"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const adminLogin = (e) => {
    e.preventDefault();
    const newUsername = 'AdminExplore';
    const newPassword = "AdminExplore456@34";
    if (username === newUsername && password === newPassword) {
      Cookies.set("loggedIn", true);
      router.push("/admin");
    } else {
      return;
    }
  };
  return (
    <div
      className="absolute right-0 top-0 z-50 flex h-[100vh] w-full items-center justify-center overflow-hidden
                 backdrop-blur "
    >
      <div className="h-[100% ] w-[500px]  overflow-scroll rounded-md bg-white p-8">
        <form>
          <div className="flex flex-col flex-wrap items-center justify-between">
            <div className="mb-[22px] w-[100%]">
              <label
                htmlFor="phone"
                className="mb-4 block text-sm text-body-color dark:text-dark-6"
              >
                Username*
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                name=""
                placeholder="enter username"
                className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
              />
            </div>
            <div className="mb-[22px] w-[100%] ">
              <label
                htmlFor="phone"
                className="mb-4 block text-sm text-body-color dark:text-dark-6"
              >
                Password*
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="text"
                name="phone"
                className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
              />
            </div>
          </div>

          <div className="mb-0 flex flex-wrap items-center gap-3">
            <button
              onClick={adminLogin}
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"
            >
              Admin Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
