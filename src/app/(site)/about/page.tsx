import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is About page description",
};

const AboutPage = () => {
  return (
    <main>
      <div  className="bg-[url('/main-bg-1.jpg')] bg-cover bg-no-repeat">
        <Breadcrumb pageName="About Us Page" />
      </div>
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;
