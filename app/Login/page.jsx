"use client";

import { useState } from "react";
import { account } from "@/components/AppwriteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const page = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //Login
  const loginUser = async (e) => {
    e.preventDefault();
    const promise = account.createEmailSession(user.email, user.password);
    promise.then(
      function (response) {
        console.log(response);
        window.location.replace("/Dashboard");
      },
      function (error) {
        console.log(error);
        alert(error);
      }
    );
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-center">Login To Brief Me</h1>
      <form className="formfix" method="post">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
          />
        </div>
        <button type="submit" className="btn btn-success" onClick={loginUser}>
          Login
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default page;
