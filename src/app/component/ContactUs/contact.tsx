'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {   FaMapMarkerAlt } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import {CiMail, CiGlobe } from "react-icons/ci";


import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <div className="info-item">
          <IoCallOutline size={30} />
          <span>+977 9824998432</span>
        </div>
        <div className="info-item">
          <CiGlobe size={30} />
          <Link href="http://www.cosmotechintl.com" target="_blank" rel="noopener noreferrer">
            www.cosmotechintl.com
          </Link>
        </div>
        <div className="info-item" >
          <CiMail size={30} />
          <Link href="mailto:info@cosmotechintl.com">info@cosmotechintl.com</Link>
        </div>
        <div className="info-item">
          <FaMapMarkerAlt size={30}/>
          <span>Subidhanagar, Tinkune, Kathmandu, Bagmati, Nepal</span>
        </div>
      </div>

      <div className="mobile-preview">
        <Image src="/assets/contactus.png" alt="Mobile Preview 1" layout="fill" width={0} height={0} />
        
      </div>
    </div>
  );
};

export default Contact;
