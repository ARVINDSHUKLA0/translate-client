"use client";

import { useState } from "react";
import "./clientSignup.css";
import Link from "next/link";

export default function SignupPage() {
    const [selected, setSelected] = useState("client");

    const [formData, setFormData] = useState({
        fullName: "",
        company: "",
        email: "",
        password: "",
    });
 
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Client Signup Data:", formData);
 
    };

    return (
        <div className="container-fluid p-0 overflow-hidden">
            <div className="row g-0 min-vh-100">
                <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center leftSide mb-3">
                    <div className="w-100 px-4 px-md-5 py-1">
                        <h4 className="fw-bold mb-lg-5 mt-3 mb-3 logo">
                            translate co
                        </h4>
                        
                        <p className=" small m-0 fs-14 mb-lg-3 mb-3">
                           <Link className="text-decoration-none custom-hover fw-bold text-secondary" href='/signup'>
                                ← Choose a different account type
                           </Link>
                        </p>
                        <h1 className="fw-bold mb-2 heading">
                            Create your client account
                        </h1>

                        <p className="text-secondary mb-lg-4 mb-md-3 mb-sm-2 mb-1 small m-0 fs-14">
                            Free to join — pay only when you hire.
                        </p> 
                        <form
                            onSubmit={handleSubmit}
                            className="signupForm"
                        >

                            <div className="row g-3"> 
                                <div className="col-md-6 col-md-6 col-sm-6 col-12">

                                    <label
                                        htmlFor="fullName"
                                        className="form-label fw-semibold fs-14 "
                                    >
                                        Full name
                                    </label>

                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        className="form-control"
                                        placeholder="Noah Carter"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                    />

                                </div> 
                                <div className="col-md-6 col-md-6 col-sm-6 col-12">

                                    <label
                                        htmlFor="company"
                                        className="form-label fw-semibold fs-14"
                                    >
                                        Company
                                    </label>

                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="form-control customfontplaceHolder"
                                        placeholder="Northwind Legal"
                                        value={formData.company}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>
 
                                <div className="col-12">

                                    <label
                                        htmlFor="email"
                                        className="form-label fw-semibold fs-14"
                                    >
                                        Work email
                                    </label>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control customfontplaceHolder"
                                        placeholder="you@company.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />

                                </div> 
                                <div className="col-12">

                                    <label
                                        htmlFor="password"
                                        className="form-label fw-semibold fs-14"
                                    >
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control customfontplaceHolder   "
                                        placeholder="Create a password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        minLength={8}
                                        required
                                    />

                                </div> 
                                <div className="col-12">

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100 fw-semibold"
                                    >
                                        Create account
                                    </button>

                                </div>

                            </div>

                        </form>

                    </div>
                </div>
 
                <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center justify-content-center position-relative rightSide">
                    <div className="position-absolute glow"></div>
                    <div className="rounded-4 p-4 position-relative testimonialCard">
                        <div className="mb-3 stars">
                            ★ ★ ★ ★ ★
                        </div>

                        <p className="text-white mb-4 quoteText">
                            "We handed off a 40-page legal contract and had a
                            certified translation back in under 30 hours —
                            fully tracked the whole way."
                        </p>

                        <div className="d-flex align-items-center gap-2">

                            <div className="rounded-circle text-white d-flex align-items-center justify-content-center fw-semibold avatar">
                                MJ
                            </div>

                            <div>
                                <div className="text-white fw-semibold avatarName">
                                    Maya Jensen
                                </div>

                                <div className="text-white-50 avatarRole">
                                    Ops Lead, Northwind Legal
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}