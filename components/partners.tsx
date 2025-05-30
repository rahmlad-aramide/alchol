import React from "react";
import Image from "next/image";
import fate from "@/public/partners/FATE-Foundation.png";
import orange from "@/public/partners/Orange-Corners.png";
import esdc from "@/public/partners/Unilag-ESDC.png";

const Partners = () => {
  return (
    <section className="flex justify-between px-8 md:px-12 h-[100px] w-full container mx-auto">
      <Image
        src={fate}
        width={615}
        height={300}
        alt="Fate Foundation Logo"
        className="flex h-[100px] w-auto mix-blend-luminosity"
      />
      <Image
        src={orange}
        width={615}
        height={198}
        alt="Orange Corners Logo"
        className="flex h-[100px] w-auto mix-blend-luminosity"
      />
      <Image
        src={esdc}
        width={615}
        height={198}
        alt="Unilag ESDC Logo"
        className="flex h-[100px] w-auto mix-blend-luminosity"
      />
    </section>
  );
};

export default Partners;
