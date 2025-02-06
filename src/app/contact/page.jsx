"use client";

import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Invalid phone number (10 digits required)";
        }

        if (!formData.serviceType) {
            newErrors.serviceType = "Please select a service type";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Form submitted successfully!");
            // Add your form submission logic here (e.g., send to backend)
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Contact Us</h2>

            <div className="row">
                {/* Contact Details Section */}
                <div className="col-md-4">
                    <div className="card shadow-sm p-4 mb-3 d-flex align-items-center flex-row">
                        <FaEnvelope size={30} className="text-primary me-3" />
                        <div>
                            <h5>Email</h5>
                            <p className="mb-0">info@yourcompany.com</p>
                        </div>
                    </div>

                    <div className="card shadow-sm p-4 mb-3 d-flex align-items-center flex-row">
                        <FaPhoneAlt size={30} className="text-primary me-3" />
                        <div>
                            <h5>Phone</h5>
                            <p className="mb-0">+91 98765 43210</p>
                        </div>
                    </div>

                    <div className="card shadow-sm p-4 d-flex align-items-center flex-row">
                        <FaMapMarkerAlt size={30} className="text-primary me-3" />
                        <div>
                            <h5>Address</h5>
                            <p className="mb-0">123 Street, City, State, India</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="col-md-8 mb-5">
                    <div className="card shadow-sm p-4">
                        <h4 className="text-center mb-3">Send Us a Message</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <p className="text-danger">{errors.name}</p>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="text-danger">{errors.email}</p>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    className="form-control"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && <p className="text-danger">{errors.phone}</p>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Service Type</label>
                                <select
                                    name="serviceType"
                                    className="form-select"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a Service</option>
                                    <option value="Plumbing">Plumbing</option>
                                    <option value="Electrician">Electrician</option>
                                    <option value="Landscaping">Landscaping</option>
                                </select>
                                {errors.serviceType && <p className="text-danger">{errors.serviceType}</p>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea
                                    name="message"
                                    className="form-control"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                {errors.message && <p className="text-danger">{errors.message}</p>}
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
