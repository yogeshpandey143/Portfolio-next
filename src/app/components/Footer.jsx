import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Image
            src="/logo.jpg"
            alt="logo Image"
            width={100}
            height={100}
            className="mx-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-1 shadow-sm"
          />
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
