import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg text-center ms-3 pcnav"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="nav-link me-4 brand" href="/">
            Brief Me
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
              {/* <Link className="nav-link" href="/Features">
                Features
              </Link> */}
              <Link className="nav-link" href="/Contact">
                Contact
              </Link>
              <Link className="nav-link" href="/Login">
                Login
              </Link>
              <Link className="nav-link" href="/Register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Navbar */}
      {/* <div className="container mobnav">
        <Link className="nav-link" href="/Features">
          Home
        </Link>
        <Link className="nav-link" href="/Features">
          Features
        </Link>
        <Link className="nav-link" href="/Contact">
          Contact
        </Link>
        <Link className="nav-link" href="/Login">
          Login
        </Link>
      </div> */}
    </div>
  );
};

export default Navbar;
