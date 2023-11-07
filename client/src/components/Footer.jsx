import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9] w-full mt-40">
      <div className="flex items-center justify-evenly mb-3 pt-3">
        <Link
          to={"/"}
          className="text-3xl font-semibold hover:underline underline-offset-4 text-[#888888]"
        >
          F.A's Blog
        </Link>
        <div>
          <h2 className="h2 mb-1">Contact the Publisher</h2>
          <p>favour@gmail.com</p>
          <p>+234-222-000-111</p>
        </div>
        <div>
          <h2 className="h2 mb-1">Categories</h2>
          <p>All</p>
          <p>Music</p>
          <p>Sports</p>
          <p>Business</p>
          <p>News</p>
          <p>Security</p>
        </div>
        <div className="cursor-pointer">
          <h2 className="h2 mb-1">Connections</h2>
          <span className="flex space-x-3">
          <FaFacebookSquare />
          <FaXTwitter />
          <FaSquareInstagram />
          <FaWhatsapp />
          </span>
        </div>
      </div>
        <p className="text-center font-semibold border-t py-4 border-[#888888]">Copyright &copy; F.A</p>
    </footer>
  );
};
