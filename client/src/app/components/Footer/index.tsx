'use client'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <footer className="footer-5">
            <div className="footer-5-section">
                <div className="container footer-5-container">
                    <div className="footer-5-row">
                        <div className="footer-5-col">
                            <div className="footer-5-title">Follow Us</div>
                            <nav className="footer-5-nav nav"><a className="nav-link" href="#">Facebook</a><a className="nav-link" href="#">Twitter</a><a className="nav-link" href="#">Instagram</a></nav>
                        </div>
                        <div className="footer-5-col">
                            <div className="footer-5-title">Company</div>
                            <nav className="footer-5-nav nav"><a className="nav-link" href="#">About</a><a className="nav-link" href="#">Press</a><a className="nav-link" href="#">Careers</a></nav>
                        </div>
                        <div className="footer-5-col">
                            <div className="footer-5-title">Support</div>
                            <nav className="footer-5-nav nav"><a className="nav-link" href="#">Help Center</a><a className="nav-link" href="#">FAQ</a><a className="nav-link" href="#">Shipping</a></nav>
                        </div>
                        <div className="footer-5-col">
                            <div className="footer-5-title">Legal</div>
                            <nav className="footer-5-nav nav"><a className="nav-link" href="#">Privacy Policy</a><a className="nav-link" href="#">Returns Terms</a><a className="nav-link" href="#">Cookie Policy</a></nav>
                        </div>
                        <div className="footer-5-col">
                            <div className="footer-5-title">Info</div>
                            <nav className="footer-5-nav nav"><a className="nav-link" href="#">Blog</a><a className="nav-link" href="#">Stores</a><a className="nav-link" href="#">Contact Us</a></nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-5-section">
                <div className="container footer-5-container">
                    <div className="footer-5-row footer-5-row_last">
                        <div className="footer-5-col">
                            <div className="footer-5-content content">Questions? <a href="mailto:kalli@mail.com">kalli@mail.com</a></div>
                        </div>
                        <div className="footer-5-col"><a className="footer-5-logo" href="/"><img className="footer-5-pic" src="/img/kalli-white.svg" width={56} alt="Kalli" /></a></div>
                        <div className="footer-5-col">
                            <div className="footer-5-content content">Copyright © 2019 Kalli</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
