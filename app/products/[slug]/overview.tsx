import { FC } from "react";
import { IChemical } from "./page";

export const Overview: FC<{ chemical: IChemical }> = ({ chemical }) => {
  return (
    <div className="flex flex-col gap-[50px] px-6 md:px-10 w-full container mx-auto font-medium">
      <div className="flex flex-col gap-5">
        <h3 className="text-primary text-[25px]">What is {chemical.name}?</h3>
        <p className="text-xl leading-[40px] text-[#021207CC]">
          {chemical.definition}
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-primary text-[25px]">Uses</h3>
        <ul className="text-[#021207CC] pl-6">
          {chemical.uses.map((u, idx) => (
            <li key={idx} className="list-disc text-xl leading-[40px]">
              {u}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          <h4 className="text-primary text-[25px]">Packaging Options</h4>
          <ul className="text-[#021207CC] pl-6">
            {chemical.packagingOptions.map((p, idx) => (
              <li key={idx} className="list-disc text-xl leading-[40px]">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="text-primary text-[25px]">Purity Level</h4>
          <ul className="text-[#021207CC] pl-6">
            {chemical.purityLevel.map((p, idx) => (
              <li key={idx} className="list-disc text-xl leading-[40px]">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="text-primary text-[25px]">Form</h4>
          <ul className="text-[#021207CC] pl-6">
            {chemical.form.map((f, idx) => (
              <li key={idx} className="list-disc text-xl leading-[40px]">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
