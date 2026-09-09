'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import '../componentStyle/Navbar.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <> 
        <nav className="navbar-bg-custom ">
            <div className="navbar-main"> 
                <div className="navbar-inner container-fluid"> 
                    <Link
                        href="/"
                        onClick={closeMenu}
                        className="navbar-brand p-0 m-0 text-decoration-none"
                    >
                        <span className="fw-bold navbar-logo">
                            logo<span className="navbar-dot">●</span>
                        </span>
                    </Link>
 
                    <ul className="navbar-menu list-unstyled mb-0">
                        <li>
                            <Link href="#" className="navbar-menu-link">
                                Services
                            </Link>
                        </li>

                        <li>
                            <Link href="#" className="navbar-menu-link">
                                Solutions
                            </Link>
                        </li>

                        <li>
                            <Link href="#" className="navbar-menu-link">
                                Pricing
                            </Link>
                        </li>

                        <li>
                            <Link href="#" className="navbar-menu-link">
                                How it works
                            </Link>
                        </li>

                        <li>
                            <Link href="#" className="navbar-menu-link">
                                FAQ
                            </Link>
                        </li>
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="navbar-desktop-actions gap-2 gap-xl-3">
                        <Link
                            href="/signup"
                            className="btn rounded-pill navbar-signin"
                        >
                            Sign in
                        </Link>
                    </div>

                    {/* Mobile Button */}
                    <button
                        type="button"
                        className="btn navbar-bars"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>

                </div>
            </div>
 
            {menuOpen && (
                <div
                    className="navbar-overlay"
                    onClick={closeMenu}
                />
            )}

            {/* Mobile Menu */}
            <div
                className={`navbar-menu-wrapper ${
                    menuOpen ? 'navbar-menu-wrapper-open' : ''
                }`}
            >
 
                <div className="navbar-mobile-header">
                    <Link
                        href="/"
                        onClick={closeMenu}
                        className="text-decoration-none"
                    >
                        <span className="fw-bold navbar-logo">
                            verba<span className="navbar-dot">●</span>
                        </span>
                    </Link>

                    <button
                        type="button"
                        className="btn navbar-close"
                        onClick={closeMenu}
                        aria-label="Close menu"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
 
                <ul className="navbar-mobile-menu list-unstyled mb-0">
                    <li>
                        <Link href="#" onClick={closeMenu}>
                            Services
                        </Link>
                    </li>

                    <li>
                        <Link href="#" onClick={closeMenu}>
                            Solutions
                        </Link>
                    </li>

                    <li>
                        <Link href="#" onClick={closeMenu}>
                            Pricing
                        </Link>
                    </li>

                    <li>
                        <Link href="#" onClick={closeMenu}>
                            How it works
                        </Link>
                    </li>

                    <li>
                        <Link href="#" onClick={closeMenu}>
                            FAQ
                        </Link>
                    </li>
                </ul>
 
                <div className="navbar-mobile-actions">
                    <Link
                        href="/signup"
                        onClick={closeMenu}
                        className="btn rounded-pill navbar-signin"
                    >
                        Sign in
                    </Link>

                </div>

            </div>

        </nav>
        <div className="navbar-spacer"></div>
        </>
    )
}

export default Navbar