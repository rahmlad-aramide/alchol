import { StaticImageData } from "next/image";
import { chemicalsData } from "../../data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Overview } from "./overview";
import { OtherProductsDropdown } from "./other-products";
import { Properties } from "./properties";
import { TechnicalContent } from "./technical-content";
import Link from "next/link";

export interface IChemical {
  name: string;
  slug: string;
  definition: string;
  uses: string[];
  packagingOptions: string[];
  purityLevel: string[];
  form: string[];
  propertiesImages: StaticImageData[];
  state: string[];
  meltingPoint?: string[];
  boilingPoint?: string[];
  odor: string[];
  density: string[];
  corrosiveness: string[];
  technicalDataSheet: never[];
  safetyDataSheet: never[];
  regulatoryDataSheet: never[];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chemical: IChemical | undefined = chemicalsData.find(
    (chemical) => chemical.slug === slug
  );

  if (!chemical) {
    return (
      <main className="flex flex-col pt-24 py-10 md:py-[100px] pattern-after">
        <div className="flex flex-col justify-center items-center gap-10 pattern-before min-h-[50vh]">
          <h1
            className={`uppercase font-[family-name:var(--font-alumni-sans)] text-[70px]/[100%] font-bold text-center`}
          >
            Chemical not found!
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col font-(family-name:--font-lato)">
      <div className="min-h-[90px] flex items-center justify-between px-6 md:px-10 w-full container mx-auto">
        <h1 className="font-(family-name:--font-alumni-sans) text-[50px]/[100%] font-bold text-[#021207CC]">
          {chemical.name}
        </h1>
        <OtherProductsDropdown slug={slug} />
      </div>
      <div className="w-full">
        <Tabs defaultValue="overview" className="w-full">
          <div className="sticky top-0 bg-white">
            <div className=" min-h-[67px] flex items-center">
              <TabsList className="h-fit items-center px-6 md:px-10 w-full container mx-auto">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="properties">Properties</TabsTrigger>
                <TabsTrigger value="technical_content">
                  Technical Content
                </TabsTrigger>
                <TabsTrigger value="sample_options">Sample Options</TabsTrigger>
                <TabsTrigger value="buying_options">Buying Options</TabsTrigger>
              </TabsList>
            </div>
            <div className="h-0.5 w-full bg-[#FCFCFC] shadow-line" />
          </div>
          <TabsContent value="overview" className="pt-12">
            <Overview chemical={chemical} />
          </TabsContent>
          <TabsContent value="properties">
            <Properties chemical={chemical} />
          </TabsContent>
          <TabsContent value="technical_content">
            <TechnicalContent />
          </TabsContent>
        </Tabs>
        <div className="my-[100px] flex items-center justify-center gap-[100px]">
          <Link href={'/#contact'} className="flex items-center w-fit border-2 border-[#C23133] rounded-[25px] py-6 px-[30px] gap-5">
            <div className="bg-[#C231331A] h-[50px] w-[50px] aspect-square rounded-full flex items-center justify-center">
              <Tag2Icon />
            </div>
            <div>
              <h4>Sample Options</h4>
              <p>Request a sample</p>
            </div>
            <div className="text-[#C23133]">
              <SendIcon />
            </div>
          </Link>
          <Link href={'/#contact'} className="flex items-center w-fit border-2 border-primary rounded-[25px] py-6 px-[30px] gap-5">
            <div className="bg-[#29A64C1A] h-[50px] w-[50px] aspect-square rounded-full flex items-center justify-center">
              <ShoppingCartIcon />
            </div>
            <div>
              <h4>Buying Options</h4>
              <p>Request a quote</p>
            </div>
            <div className="text-primary">
              <SendIcon />
            </div>
          </Link>
          <div></div>
        </div>
      </div>
    </main>
  );
}

const Tag2Icon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.83 8.70005L15.3 4.17005C14.35 3.22005 13.04 2.71005 11.7 2.78005L6.69998 3.02005C4.69998 3.11005 3.10998 4.70005 3.00998 6.69005L2.76998 11.69C2.70998 13.03 3.20998 14.34 4.15998 15.29L8.68997 19.82C10.55 21.68 13.57 21.68 15.44 19.82L19.83 15.43C21.7 13.58 21.7 10.56 19.83 8.70005ZM9.49998 12.38C7.91998 12.38 6.61998 11.09 6.61998 9.50005C6.61998 7.91005 7.91998 6.62005 9.49998 6.62005C11.08 6.62005 12.38 7.91005 12.38 9.50005C12.38 11.09 11.08 12.38 9.49998 12.38ZM17.53 13.53L13.53 17.53C13.38 17.68 13.19 17.75 13 17.75C12.81 17.75 12.62 17.68 12.47 17.53C12.18 17.24 12.18 16.76 12.47 16.47L16.47 12.47C16.76 12.18 17.24 12.18 17.53 12.47C17.82 12.76 17.82 13.24 17.53 13.53Z"
        fill="#C23133"
      />
    </svg>
  );
};

const SendIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_1234_23881" fill="white">
<path d="M3.5 21.25H20.5C20.91 21.25 21.25 21.59 21.25 22C21.25 22.41 20.91 22.75 20.5 22.75H3.5C3.09 22.75 2.75 22.41 2.75 22C2.75 21.59 3.09 21.25 3.5 21.25Z"/>
</mask>
<path d="M3.5 21.25H20.5C20.91 21.25 21.25 21.59 21.25 22C21.25 22.41 20.91 22.75 20.5 22.75H3.5C3.09 22.75 2.75 22.41 2.75 22C2.75 21.59 3.09 21.25 3.5 21.25Z" fill="currentColor"/>
<path d="M3.5 19.25H20.5V23.25H3.5V19.25ZM20.5 19.25C22.0146 19.25 23.25 20.4854 23.25 22H19.25C19.25 22.6946 19.8054 23.25 20.5 23.25V19.25ZM23.25 22C23.25 23.5146 22.0146 24.75 20.5 24.75V20.75C19.8054 20.75 19.25 21.3054 19.25 22H23.25ZM20.5 24.75H3.5V20.75H20.5V24.75ZM3.5 24.75C1.98543 24.75 0.75 23.5146 0.75 22H4.75C4.75 21.3054 4.19457 20.75 3.5 20.75V24.75ZM0.75 22C0.75 20.4854 1.98543 19.25 3.5 19.25V23.25C4.19457 23.25 4.75 22.6946 4.75 22H0.75Z" fill="currentColor" mask="url(#path-1-inside-1_1234_23881)"/>
<mask id="path-3-inside-2_1234_23881" fill="white">
<path d="M19 14.52C18.59 14.52 18.25 14.18 18.25 13.77V5.31L5.53 18.03C5.38 18.18 5.19 18.25 5 18.25C4.81 18.25 4.62 18.18 4.47 18.03C4.18 17.74 4.18 17.26 4.47 16.97L17.19 4.25H8.73C8.32 4.25 7.98 3.91 7.98 3.5C7.98 3.09 8.32 2.75 8.73 2.75H19C19.1 2.75 19.19 2.77 19.29 2.81C19.47 2.88 19.62 3.03 19.69 3.21C19.73 3.31 19.75 3.4 19.75 3.5V13.77C19.75 14.18 19.41 14.52 19 14.52Z"/>
</mask>
<path d="M19 14.52C18.59 14.52 18.25 14.18 18.25 13.77V5.31L5.53 18.03C5.38 18.18 5.19 18.25 5 18.25C4.81 18.25 4.62 18.18 4.47 18.03C4.18 17.74 4.18 17.26 4.47 16.97L17.19 4.25H8.73C8.32 4.25 7.98 3.91 7.98 3.5C7.98 3.09 8.32 2.75 8.73 2.75H19C19.1 2.75 19.19 2.77 19.29 2.81C19.47 2.88 19.62 3.03 19.69 3.21C19.73 3.31 19.75 3.4 19.75 3.5V13.77C19.75 14.18 19.41 14.52 19 14.52Z" fill="currentColor"/>
<path d="M18.25 5.31L16.8358 3.89579L20.25 0.481572V5.31H18.25ZM5.53 18.03L6.94421 19.4442L5.53 18.03ZM4.47 16.97L3.05579 15.5558L4.47 16.97ZM17.19 4.25V2.25H22.0184L18.6042 5.66421L17.19 4.25ZM19.29 2.81L18.5651 4.67401L18.5561 4.67052L18.5472 4.66695L19.29 2.81ZM19.69 3.21L17.833 3.95278L17.8295 3.94385L17.826 3.93489L19.69 3.21ZM19 16.52C17.4854 16.52 16.25 15.2846 16.25 13.77H20.25C20.25 13.0754 19.6946 12.52 19 12.52V16.52ZM16.25 13.77V5.31H20.25V13.77H16.25ZM19.6642 6.72421L6.94421 19.4442L4.11579 16.6158L16.8358 3.89579L19.6642 6.72421ZM6.94421 19.4442C6.39937 19.9891 5.6918 20.25 5 20.25V16.25C4.6882 16.25 4.36063 16.3709 4.11579 16.6158L6.94421 19.4442ZM5 20.25C4.3082 20.25 3.60063 19.9891 3.05579 19.4442L5.88421 16.6158C5.63937 16.3709 5.3118 16.25 5 16.25V20.25ZM3.05579 19.4442C1.98474 18.3732 1.98474 16.6268 3.05579 15.5558L5.88421 18.3842C6.37526 17.8932 6.37526 17.1068 5.88421 16.6158L3.05579 19.4442ZM3.05579 15.5558L15.7758 2.83579L18.6042 5.66421L5.88421 18.3842L3.05579 15.5558ZM17.19 6.25H8.73V2.25H17.19V6.25ZM8.73 6.25C7.21543 6.25 5.98 5.01457 5.98 3.5H9.98C9.98 2.80543 9.42457 2.25 8.73 2.25V6.25ZM5.98 3.5C5.98 1.98543 7.21543 0.75 8.73 0.75V4.75C9.42457 4.75 9.98 4.19457 9.98 3.5H5.98ZM8.73 0.75H19V4.75H8.73V0.75ZM19 0.75C19.3992 0.75 19.742 0.836719 20.0328 0.953047L18.5472 4.66695C18.5832 4.68134 18.6472 4.70404 18.733 4.7221C18.8216 4.74075 18.9121 4.75 19 4.75V0.75ZM20.0149 0.945991C20.7175 1.21922 21.2808 1.78251 21.554 2.48511L17.826 3.93489C17.9592 4.27749 18.2225 4.54078 18.5651 4.67401L20.0149 0.945991ZM21.547 2.46722C21.6633 2.75804 21.75 3.10083 21.75 3.5H17.75C17.75 3.58785 17.7593 3.67845 17.7779 3.76702C17.796 3.85279 17.8187 3.91681 17.833 3.95278L21.547 2.46722ZM21.75 3.5V13.77H17.75V3.5H21.75ZM21.75 13.77C21.75 15.2846 20.5146 16.52 19 16.52V12.52C18.3054 12.52 17.75 13.0754 17.75 13.77H21.75Z" fill="currentColor" mask="url(#path-3-inside-2_1234_23881)"/>
</svg>

  )
}

const ShoppingCartIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.25 22.5C17.2165 22.5 18 21.7165 18 20.75C18 19.7835 17.2165 19 16.25 19C15.2835 19 14.5 19.7835 14.5 20.75C14.5 21.7165 15.2835 22.5 16.25 22.5Z" fill="#29A64C"/>
<path d="M8.25 22.5C9.2165 22.5 10 21.7165 10 20.75C10 19.7835 9.2165 19 8.25 19C7.2835 19 6.5 19.7835 6.5 20.75C6.5 21.7165 7.2835 22.5 8.25 22.5Z" fill="#29A64C"/>
<path d="M4.84 3.94L4.64 6.39C4.6 6.86 4.97 7.25 5.44 7.25H20.75C21.17 7.25 21.52 6.93 21.55 6.51C21.68 4.74 20.33 3.3 18.56 3.3H6.27C6.17 2.86 5.97 2.44 5.66 2.09C5.16 1.56 4.46 1.25 3.74 1.25H2C1.59 1.25 1.25 1.59 1.25 2C1.25 2.41 1.59 2.75 2 2.75H3.74C4.05 2.75 4.34 2.88 4.55 3.1C4.76 3.33 4.86 3.63 4.84 3.94Z" fill="#29A64C"/>
<path d="M20.5101 8.75H5.17005C4.75005 8.75 4.41005 9.07 4.37005 9.48L4.01005 13.83C3.87005 15.54 5.21005 17 6.92005 17H18.0401C19.5401 17 20.8601 15.77 20.9701 14.27L21.3001 9.6C21.3401 9.14 20.9801 8.75 20.5101 8.75Z" fill="#29A64C"/>
</svg>

  )
}