"use client";
import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [moveType, setMoveType] = useState("");

  useEffect(() => {
    const type = searchParams.get("type") || "residential";
    setMoveType(type);
  }, [searchParams]);

  const handleMoveTypeChange = (type: string) => {
    setMoveType(type);
    router.push(`?type=${type}`);
  };

  return (
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
  );
};
