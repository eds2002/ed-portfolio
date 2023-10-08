import { fetchCaseStudies } from "@/utils/fetchCaseStudies";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function useCaseStudies() {
  return useQuery(["caseStudies"], fetchCaseStudies);
}
