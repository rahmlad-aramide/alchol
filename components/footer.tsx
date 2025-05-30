import React from "react";
import Image from "next/image";
import logoWhite from "@/public/logo-white.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0B6A26] text-[#FCFCFCE5]">
      <div className="flex px-6 md:px-10 w-full max-w-[1440px] mx-auto gap-[108px] py-[100px]">
        <div className="flex flex-col gap-5">
          <Image
            src={logoWhite}
            width={148}
            height={48}
            alt="Alchol White Logo"
          />
          <p>Innovative, Economical, Sustainable...</p>
        </div>
        <div className="flex flex-col gap-7.5">
          <h4>Office</h4>
          <div className="flex flex-col gap-5">
            <p>Alvan Ikoku Rd, University of Lagos, Lagos State, Nigeria</p>
            <Link href={"mailto:info@alcholchemicals.com"}>
              info@alcholchemicals.com
            </Link>
            <Link href={"tel:+2349035285859"}>+234 903 528 5859</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#054517] h-fit min-h-[50px]">
        <div className="flex justify-between items-center px-6 md:px-10 w-full max-w-[1440px] mx-auto">
          <div>&copy; 2023 Alchol Chemicals. All rights reserved.</div>
          <ul className="flex gap-1">
            <li>Privacy Policy</li> |<li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
