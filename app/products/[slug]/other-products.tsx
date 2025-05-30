import { chemicalsData } from "@/app/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
export const OtherProductsDropdown = ({ slug }: { slug: string }) => {
  if (!slug) return;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 items-center h-11 bg-primary border-2 border-primary px-3 py-2.5 text-white rounded-[10px]">
        Other Products <ChevronDown size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        {chemicalsData
          .filter((p) => p.slug !== slug)
          .map((p, idx) => (
            <DropdownMenuItem key={idx}>
              <Link href={p.slug}>{p.name}</Link>
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
