"use client";
import React from "react";
import { useTheme } from "@/app/context/theme-context";
import TagSearchFilters from "../components/tagssearchfilter/tagssearchfilter";
import USercard from "../components/usercard/card";

export default function Communities() {
  const { darkMode } = useTheme();

  return (
    <div
      className={` ml-[245px]  min-h-[120vh] mt-[64px] ${
        darkMode ? "bg-[#090a0f]" : "bg-white"
      } p-4`}
    >
      {/* Your content goes here */}
      <TagSearchFilters heading={"Communities"} placeholder={"Highest Reputation"} />
      <USercard/>
    </div>
  );
}
