"use client";
import { useState } from "react";
import Link from "next/link";
import FormModal from "./FormModal";
const Header = () => {
  const [showModal, setShowModal] = useState(false);

  function handleClose() {
    setShowModal(false);
  }


  return (
    <>
 
      <nav className="navbar navbar-expand-lg navbar-light px-4">
        <Link href="/" className="navbar-brand fw-bold">
          <img src="/logo.png" alt="WebOps Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <button
            className="btn btn-primary ms-3"
            onClick={() => setShowModal(true)}
          >
            Book Now
          </button>
        </div>
      </nav>

      {/* Booking Modal */}
      {showModal && (
        <FormModal handleClose={handleClose} />
      )}

      {/* Modal Background */}
      {showModal && <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>}
    </>
  );
};

export default Header;
