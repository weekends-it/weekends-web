import type { Metadata } from "next";
import EstimateForm from "./EstimateForm";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Get an instant IT support estimate from Weekends IT. Tell us about your issue and we'll give you a price guide before any work begins.",
  openGraph: { title: "Get a Quote | Weekends IT", url: "/get-started" },
};

export default function GetStartedPage() {
  return <EstimateForm />;
}
