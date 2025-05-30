import React from "react";
import Image from "next/image";
import money from "@/public/why-alchol/money.svg";
import arrowSquare from "@/public/why-alchol/arrow-square.svg";
import greenEnergy from "@/public/why-alchol/green-energy.svg";
import qualityCheck from "@/public/why-alchol/quality-check.svg";

const WhyAlchol = () => {
  return (
    <section className="flex flex-col gap-[100px] bg-(image:--why-alchol) bg-right-top bg-contain bg-no-repeat mt-16 px-6 md:px-10 w-full container mx-auto">
      <div className="flex flex-col gap-5 pt-6" id="learn-more">
        <h1 className="text-primary font-bold text-2xl">
          Why Alchol Chemicals?
        </h1>
        <p className="font-bold text-[50px]/[100%] font-[family-name:var(--font-alumni-sans)]">
          Global <span className="underline-standards">Standards</span>, Locally
          Available
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-4 gap-[45px]">
        <div className="row-span-2 col-start-2 relative bg-white shadow-card w-full h-fit min-h-[220px] rounded-[10px] flex flex-col justify-center items-center gap-4.5">
          <div className="absolute top-0 left-0 h-2 w-full rounded-t-[10px] bg-[#505EF2]" />
          <div className="w-[50px] h-[50px] rounded-full bg-[#505EF21A] flex justify-center items-center">
            <Image
              src={money}
              width={24}
              height={24}
              alt="Vector representing Money"
            />
          </div>
          <p className="max-w-[10ch] mx-auto text-center text-xl font-bold">
            Economical Pricing
          </p>
        </div>
        <div className="row-span-2 col-start-1 relative bg-white shadow-card w-full h-fit min-h-[220px] rounded-[10px] flex flex-col justify-center items-center gap-4.5">
          <div className="absolute top-0 left-0 h-2 w-full rounded-t-[10px] bg-[#50ACF2]" />
          <div className="w-[50px] h-[50px] rounded-full bg-[#50ACF21A] flex justify-center items-center">
            <Image
              src={arrowSquare}
              width={24}
              height={24}
              alt="A square with 2 arrows"
            />
          </div>
          <p className="max-w-[15ch] mx-auto text-center text-xl font-bold">
            Choice of Form & Purity
          </p>
        </div>
        <div className="row-span-2 col-start-3 relative bg-white shadow-card w-full h-fit min-h-[220px] rounded-[10px] flex flex-col justify-center items-center gap-4.5">
          <div className="absolute top-0 left-0 h-2 w-full rounded-t-[10px] bg-[#A5D64B]" />
          <div className="w-[50px] h-[50px] rounded-full bg-[#A5D64B1A] flex justify-center items-center">
            <Image
              src={greenEnergy}
              width={16}
              height={24}
              alt="A light bulb"
            />
          </div>
          <p className="max-w-[10ch] mx-auto text-center text-xl font-bold">
            Sustainable Solutions
          </p>
        </div>
        <div className="row-span-2 col-start-2 relative bg-white shadow-card w-full h-fit min-h-[220px] rounded-[10px] flex flex-col justify-center items-center gap-4.5">
          <div className="absolute top-0 left-0 h-2 w-full rounded-t-[10px] bg-[#F26B2C]" />
          <div className="w-[50px] h-[50px] rounded-full bg-[#F26B2C1A] flex justify-center items-center">
            <Image
              src={qualityCheck}
              width={24}
              height={24}
              alt="A checkmark"
            />
          </div>
          <p className="max-w-[15ch] mx-auto text-center text-xl font-bold">
            Uncompromising Quality
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyAlchol;
