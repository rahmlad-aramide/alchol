import { StaticImageData } from "next/image";
import { chemicalsData } from "../../data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Overview } from "./overview";
import { OtherProductsDropdown } from "./other-products";

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
  meltingPoint: string[];
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
    (chemical) => chemical.slug === slug,
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
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
