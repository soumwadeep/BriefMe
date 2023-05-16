"use client";

import { useEffect, useState } from "react";
import { account } from "@/components/AppwriteConfig";
import Link from "next/link";

const DashboardNavbar = () => {

  const [userDetails, setUserDetails] = useState();
  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserDetails(response);
      },
      function (error) {
        console.log(error);
        alert(error);
      }
    );
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      window.location.replace("/");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg text-center ms-3 pcnav"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="nav-link me-4 brand" href="/Dashboard">
            Brief Me Dashboard
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" href="/Dashboard/RecentSearches">
                Recent Searches
              </Link>
              <Link className="nav-link" onClick={handleLogout} href="#">
                Log Out
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Navbar */}
      {/* <div className="mobnav">
        <Link className="nav-link" href="/Dashboard/RecentSearches">
          Recent Searches
        </Link>
        <Link className="nav-link" href="/Dashboard/Profile">
          Your Profile
        </Link>
        <Link className="nav-link" href="#">
          Log Out
        </Link>
      </div> */}
    </div>
  );
};

export default DashboardNavbar;
