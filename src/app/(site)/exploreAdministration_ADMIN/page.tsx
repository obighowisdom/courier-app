import Admin from "@/components/Admin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Admin page",
  description: "Admin Cargo Explore LLC",
};

const AboutPage = () => {
  return (
    <main>
     
      <Admin />
    </main>
  );
};

export default AboutPage;
