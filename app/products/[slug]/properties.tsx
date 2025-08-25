import { FC } from "react";
import { IChemical } from "./page";
import Image from "next/image";

export const Properties: FC<{ chemical: IChemical }> = ({ chemical }) => {
  return (
    <div className="flex flex-col gap-[50px] px-6 md:px-10 w-full container mx-auto font-medium">
      <div className="flex justify-center items-center mt-[50px]">
        {chemical.propertiesImages.map((img, idx) => (
          <Image key={idx} src={img} width={600} height={600} alt={`#`} className="max-h-[300px] w-auto" />
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-primary text-[25px]">State</h3>
        <ul className="text-[#021207CC] pl-6">
          {chemical.state.map((st, idx) => (
            <li key={idx} className="list-disc text-xl leading-[40px]">
              {st}
            </li>
          ))}
        </ul>
      </div>
      {chemical.boilingPoint ? (
        <div className="flex flex-col gap-5">
          <h3 className="text-primary text-[25px]">Boiling Point</h3>
          <ul className="text-[#021207CC] pl-6">
            {chemical.boilingPoint.map((bp, idx) => (
              <li key={idx} className="list-disc text-xl leading-[40px]">
                {bp}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {chemical.meltingPoint ? (
        <div className="flex flex-col gap-5">
          <h3 className="text-primary text-[25px]">Melting Point</h3>
          <ul className="text-[#021207CC] pl-6">
            {chemical.meltingPoint.map((mp, idx) => (
              <li key={idx} className="list-disc text-xl leading-[40px]">
                {mp}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="flex flex-col gap-5">
        <h3 className="text-primary text-[25px]">Odor</h3>
        <ul className="text-[#021207CC] pl-6">
          {chemical.odor.map((od, idx) => (
            <li key={idx} className="list-disc text-xl leading-[40px]">
              {od}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-primary text-[25px]">Density</h3>
        <ul className="text-[#021207CC] pl-6">
          {chemical.density.map((dens, idx) => (
            <li key={idx} className="list-disc text-xl leading-[40px]">
              {dens}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-primary text-[25px]">Corrosiveness</h3>
        <ul className="text-[#021207CC] pl-6">
          {chemical.corrosiveness.map((cor, idx) => (
            <li key={idx} className="list-disc text-xl leading-[40px]">
              {cor}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
