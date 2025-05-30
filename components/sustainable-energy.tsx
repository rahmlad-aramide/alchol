import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrowSquareRight from "@/public/arrow-square-right2.svg";
import hydroGenerator from "@/public/sustainable-energy/hydro-generator-icon.svg";
import fuelCells from "@/public/sustainable-energy/fuel-cells.svg";
import combustionEngine from "@/public/sustainable-energy/combustion-engine.svg";

const SustainableEnergy = () => {
  const sustainableEnergyData = [
    {
      source: "Hydro Generator",
      icon: hydroGenerator,
      slug: "/sustainable-energy/hydro-generator",
    },
    {
      source: "Hydrogen Powered Fuel Cells",
      icon: fuelCells,
      slug: "/sustainable-energy/hydro-generator",
    },
    {
      source: "Hydrogen Combustion Engine",
      icon: combustionEngine,
      slug: "/sustainable-energy/hydro-generator",
    },
  ];
  return (
    <section>
      <p className="font-bold text-[50px]/[100%] font-[family-name:var(--font-alumni-sans)] py-[50px] container px-6 md:px-10">
        <span className="underline-sustainable underline-sustainable2">
          Sustainable
        </span>{" "}
        Energy
      </p>
      <div className="py-20 bg-(image:--sustainable-energy) bg-[#29A64C4D] bg-blend-overlay bg-center bg-cover">
        <div className="flex flex-wrap justify-center items-center gap-x-[45px] gap-y-[60px] px-6 md:px-10 w-full container mx-auto">
          {sustainableEnergyData.map((energy, idx) => (
            <div
              key={idx}
              className="bg-white relative w-full max-w-[350px] h-fit min-h-[227px] rounded-[10px] flex flex-col gap-2.5 pb-4"
            >
              <div className="absolute bg-primary text-white text-lg w-fit min-w-[128px] h-[60px] rounded-tl-[10px] rounded-br-[10px] flex flex-col items-center justify-center">
                Prototype
              </div>
              <div className="flex justify-end pt-[9px] pr-3">
                <Image src={energy.icon} alt={`${energy.source} icon`} />
              </div>
              <h3
                className={`font-[family-name:var(--font-alumni-sans)] font-bold text-4xl text-primary p-6 text-center ${idx === 0 ? "max-w-[12ch]" : "max-w-[19ch]"} mx-auto`}
              >
                {energy.source}
              </h3>
              <div className="flex items-end justify-end px-6">
                <Link href={energy.slug}>
                  <Image
                    src={arrowSquareRight}
                    alt="Arrow square right"
                    width={28}
                    height={22}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainableEnergy;
