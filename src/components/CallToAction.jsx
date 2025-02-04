"use client";
import React, { useState } from "react";
import styles from '../../public/styles/CallToActionSection.module.css'; // Import the CSS module
import FormModal from "./FormModal";

const CallToAction = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className={styles.ctaContainer}>
      <h2 className={styles.ctaHeading}>Need Expert Electricians?</h2>
      <p className={styles.ctaSubheading}>
        Our certified electricians are here to solve all your electrical needs, from installations to repairs.
      </p>
      <button className="btn btn-secondary" onClick={handleShow}>
        Get a Free Quote
      </button>

      {/* Modal */}
      {showModal && (
        <FormModal handleClose={handleClose} />
      )}
    </div>
  );
};

export default CallToAction;
