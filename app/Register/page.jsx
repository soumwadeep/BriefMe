"use client";

import { useState } from "react";
import { account } from "@/components/AppwriteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const page = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  //Register
  const registerUser = async (e) => {
    e.preventDefault();
    const userId = user.phone;
    const promise = account.create(
      userId,
      user.email,
      user.password,
      user.name
    );
    promise.then(
      function (response) {
        console.log(response);
        window.location.replace("/Login");
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
      <h1 className="text-center">Register With Us</h1>
      <form className="formfix" method="post">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setUser({
                ...user,
                name: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => {
              setUser({
                ...user,
                phone: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
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
        <button
          type="submit"
          className="btn btn-success"
          onClick={registerUser}
        >
          Register
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default page;
