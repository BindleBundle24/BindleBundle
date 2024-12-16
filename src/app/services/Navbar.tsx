"use client";
import { Button } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useQueryState } from "nuqs";

export const Navbar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [moveType, setMoveType] = useQueryState("type", {});

  const handleMoveTypeChange = (type: string) => {
    setMoveType(type);

    if (!pathName.includes("/services")) {
      router.push(`/services?${type}`);
    } else {
      router.push(`${pathName}?${type}`);
    }
  };

  return (
    <Suspense>
      <div className="bg-transparent w-full h-[57px] gap-10 hidden md:flex justify-center items-center mx-auto -mt-2">
        <Button
          className={`text-[#777777] flex justify-center items-center font-medium w-[205px] h-[56px] ${
            moveType === "residential"
              ? "bg-[#051937] text-white rounded-r-[18px] rounded-l-[18px] border border-[#D4CACA] transition-all ease-in-out duration-300"
              : ""
          }`}
          onClick={() => handleMoveTypeChange("residential")}
        >
          Residential Move
        </Button>
        <Button
          className={`text-[#777777] flex justify-center items-center font-medium w-[205px] h-[56px] ${
            moveType === "commercial"
              ? "bg-[#051937] text-white rounded-r-[18px] rounded-l-[18px] border border-[#D4CACA] transition-all ease-in-out duration-300"
              : ""
          }`}
          onClick={() => handleMoveTypeChange("commercial")}
        >
          Commercial Move
        </Button>
        <Button
          className={`text-[#777777] flex justify-center items-center font-medium w-[205px] h-[56px] ${
            moveType === "specialty"
              ? "bg-[#051937] text-white rounded-r-[18px] rounded-l-[18px] border border-[#D4CACA] transition-all ease-in-out duration-300"
              : ""
          }`}
          onClick={() => handleMoveTypeChange("specialty")}
        >
          Specialty Move
        </Button>
      </div>
    </Suspense>
  );
};
