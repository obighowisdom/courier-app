import { Metadata } from "next";
import Land from "@/components/Land";

export const metadata: Metadata = {
  title: "Cargo Explore Logistics",
  description:
    "One of the rated package tracking platform that gives you detailed information about you products, tracking its movement every moment",
  icons: {
    icon: "/icon.jpg",
  },
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Land />
    </main>
  );
}
