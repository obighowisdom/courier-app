import { Metadata } from "next";
import Land from "@/components/Land";

export const metadata: Metadata = {
  title: "Logistics",
  description: "One of the rated package tracking platform that gives you detailed information about you products, tracking its movement every moment",
};

export default function Home() {

  

  return (
    <main>
     <Land />
    </main>
  );
}
