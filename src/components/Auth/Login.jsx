import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email + " " + password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className=" bg-transparent outline-none text-xl px-4 py-3 border-2 border-emerald-500 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-transparent outline-none text-xl px-4 py-3 border-2 border-emerald-500 rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter Password"
          />
          <button className="mt-4 outline-none text-xl px-4 py-3 bg-emerald-500 rounded-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
