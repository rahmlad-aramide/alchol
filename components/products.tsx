import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrowSquareRight from "@/public/arrow-square-right.svg";

const Products = () => {
  const productsData = [
    {
      product: "Caustic Soda",
      detail:
        "Produced in Various Packaging Options, Offered in All Forms and Tailored Purity Levels.",
      slug: "/products/caustic-soda",
    },
    {
      product: "Hydrochloric Acid",
      detail:
        "Produced in Various Packaging Options at Tailored Concentration Levels.",
      slug: "/products/hydrochloric-acid",
    },
    {
      product: "Bleach",
      detail:
        "Produced in Various Packaging Options, Offered in All Forms and Standard Purity Levels.",
      slug: "/products/bleach",
    },
    {
      product: "Chlorine",
      detail:
        "Produced in Various Packaging Options, Offered in All Forms and Standard Purity Levels.",
      slug: "/products/chlorine",
    },
    {
      product: "Hydrogen Gas",
      detail:
        "Produced and Stored in Specialized Containers Designed to Facilitate Distribution.",
      slug: "/products/hydrogen-gas",
    },
  ];
  return (
    <section className="flex flex-col gap-[50px] pt-[100px]">
      <div className="flex flex-col gap-5 pt-6 px-6 md:px-10 w-full container mx-auto">
        <h1 className="text-primary font-bold text-2xl">Our Products</h1>
        <p className="font-bold text-[50px]/[100%] font-[family-name:var(--font-alumni-sans)]">
          <span className="underline-chemical">Chemical</span> Manufacturing
        </p>
      </div>
      <div className="py-[110px] bg-(image:--our-products) bg-[#DEC0524D] bg-blend-overlay bg-bottom">
        <div className="flex flex-wrap justify-center gap-x-[45px] gap-y-[60px] px-6 md:px-10 w-full max-w-[1440px] mx-auto">
          {productsData.map((product, idx) => (
            <div
              key={idx}
              className="bg-white w-full max-w-[350px] h-fit min-h-[227px] rounded-[10px] flex flex-col gap-2.5 p-6 pb-4"
            >
              <div className="flex flex-col gap-4">
                <h3 className="font-[family-name:var(--font-alumni-sans)] font-bold text-4xl text-[#DEC052]">
                  {product.product}
                </h3>
                <p className="text-xl text-[#808882] text-center line-clamp-3">
                  {product.detail}
                </p>
              </div>
              <div className="flex justify-end">
                <Link
                  href={product.slug}
                  className="hover:opacity-80 active:scale-90 transition duration-200"
                >
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

export default Products;
