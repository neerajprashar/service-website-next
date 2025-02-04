"use client";
import { useState } from "react";

export default function FormModal({ handleClose }) {
    const [showModal, setShowModal] = useState(false);

    // Function to handle closing the modal
    const closeModal = () => {
        setShowModal(false);
        if (handleClose) {
            handleClose(); 
        }
    };

    // Function to handle opening the modal
    const openModal = () => {
        setShowModal(true);
    };



    return (
        <div className="modal d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Book a Service</h5>
                        <button className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input type="text" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Service Needed</label>
                                <select className="form-select">
                                    <option>Plumbing</option>
                                    <option>Electrician</option>
                                    <option>Landscaping</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
