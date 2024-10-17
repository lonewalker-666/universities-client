import React, { useState } from "react";
import { GoogleIcon, MetaIcon } from "../common/icons";
import Divider from "../common/divider";
import SiteLayout from "../layout/siteLayout";
import router from "next/router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log("Google login");
  };

  const handleMetaLogin = () => {
    // Handle Meta login logic here
    console.log("Meta login");
  };

  return (
    <div className="flex lg:flex-row flex-col min-h-screen">
      {/* Left side: Login form */}
      <div className="lg:w-1/2 w-full flex items-center justify-center p-8 bg-transparent">
        <div className="max-w-md w-full">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="Logo" className="w-[230px] h-[50px]" />
          </div>
          <h1 className="text-4xl font-medium poppin-text  text-[#000000]">
            Get Started
          </h1>

          <p className="text-md mb-4 poppin-text text-[#000000] ">
            Create your account
          </p>
          <form onSubmit={handleLogin}>
            <div className="mb-8">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4  bg-[#FAFAFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-8">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4  bg-[#FAFAFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-4 bg-[#FAFAFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* <div className="flex justify-between items-center mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="form-checkbox accent-[#7E55C8]"
                />
                <span className="ml-2 text-gray-700">Remember Me</span>
              </label>
              <a href="#" className="text-[#7E55C8] hover:underline">
                Forgot Password?
              </a>
            </div> */}
            <button
              type="submit"
              className="w-full bg-[#6F42C1E5] text-white py-4 rounded-lg transition-colors mt-6"
            >
              Sign up
            </button>
          </form>
          <div className="flex items-center justify-center my-4">
            <span className="flex-grow">
              <Divider
                thickness={1}
                width={"100%"}
                borderColor="#E8E8E8"
                marginBlock="10px"
              />
            </span>
            <span className="mx-4 text-gray-500">OR</span>
            <span className="flex-grow">
              <Divider
                thickness={1}
                width={"100%"}
                borderColor="#E8E8E8"
                marginBlock="10px"
              />
            </span>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={handleGoogleLogin}
              className="bg-[#FAFAFA] text-black flex flex-row gap-4 py-2 px-4 rounded-lg  items-center justify-center transition-colors"
            >
              <span>
                <GoogleIcon />
              </span>
              <p className="inter-text">Google</p>
            </button>
            <button
              onClick={handleMetaLogin}
              className="bg-[#FAFAFA] text-balck flex flex-row gap-4  py-2 px-4 rounded-lg items-center justify-center transition-colors"
            >
              <span>
                <MetaIcon />
              </span>
              <p className="inter-text"> Meta</p>
            </button>
          </div>
          <div className="text-center mt-4">
            Already have an account?{" "}
            <a
              href="#"
              className="text-[#6F42C1E5] hover:underline"
              onClick={() => router.push("/login")}
            >
              log in
            </a>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full hidden lg:flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-screen object-cover"
        >
          <source src="loginLoop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default SignUp;
