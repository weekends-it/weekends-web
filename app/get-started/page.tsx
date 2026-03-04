import type { Metadata } from "next";
import EstimateForm from "./EstimateForm";

export const metadata: Metadata = {
  title: "Get a Quote - Weekends IT",
};

export default function GetStartedPage() {
  return <EstimateForm />;
}
