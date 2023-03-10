import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

const Footer = () => {
  return (
    <>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 mb-3">
            <div className="footer-top-data d-flex align-items-center">
              <img src="/images/newsletter.png" alt="newsletter" />
              <h2 className="ms-3">Sign Up for Newsletter</h2>
            </div>
          </div>
          <div className="col-12 col-md-7 mb-3">
            <div className="input-group">
              <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
              <button
              className="subscribe btn p-2 fs-5" 
              type="submit" name="subscribe" id="subscribe">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
    <footer className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 mb-5">
            <h4 className="mb-4">Contact Us</h4>
            <div className="footer-links d-flex flex-wrap flex-column">
              <ul className="social_links d-flex align-items-center justify-content-md-between">
                <li className="hintT-top me-3" data-hint="Facebook">
                  <Link to="https://facebook.com">
                    <BsFacebook className="fs-3" />
                  </Link>
                </li>
                <li className="hintT-top me-3" data-hint="Twitter">
                  <Link to="https://twitter.com">
                    <BsTwitter className="fs-3" />
                  </Link>
                </li>
                <li className="hintT-top me-3" data-hint="INSTAGRAM">
                  <Link to="https://INSTAGRAM.com">
                    <BsInstagram className="fs-3" />
                  </Link>
                </li>
                <li className="hintT-top me-3" data-hint="youtube">
                  <Link to="https://youtube.com">
                    <BsYoutube className="fs-3" />
                  </Link>
                </li>
                <li className="hintT-top me-3" data-hint="gmail">
                  <Link to="https://gmail.com">
                    <GrMail className="fs-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-4 col-md-3">
            <h4 className="mb-4">Information</h4>
            <div className="footer-links d-flex flex-column">
              <Link className="py-2 mb-1">Privacy Policy</Link>
              <Link className="py-2 mb-1">Shipping Policy</Link>
              <Link className="py-2 mb-1">Terms & Conditions</Link>
            </div>
          </div>
          <div className="col-4 col-md-3">
            <h4 className="mb-4">Account</h4>
            <div className="footer-links d-flex flex-column">
              <Link className="py-2 mb-1">About us</Link>
              <Link className="py-2 mb-1">Support</Link>
              <Link className="py-2 mb-1">FAQs</Link>
            </div>
          </div>
          <div className="col-4 col-md-3">
            <h4 className="mb-4">Quick Links</h4>
            <div className="footer-links d-flex flex-column">
              <Link className="py-2 mb-1">Baskets</Link>
              <Link className="py-2 mb-1">Bags & Clutches</Link>
              <Link className="py-2 mb-1">Cushions</Link>
              <Link className="py-2 mb-1">Dresses</Link>
              <Link className="py-2 mb-1">Mats & Rugs</Link>
              <Link className="py-2 mb-1">Seats & Banquettes</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <footer className="py-3">
      <div className="container">
        <div className="col-12">
          <div className="text-center">
            <p className="copyright">
              ?? {new Date().getFullYear()} Handy Market. All Rights Reserved | <a href="mailto:handymarket@demo.com">handymarket@demo.com</a></p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
};

export default Footer;