"use client";
import About from "@/components/About";
import How from "@/components/How";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import AOS from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles

import { useEffect } from "react";


const Land = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    }, []);
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <How />
      <CallToAction />
      <Testimonials />
      <Faq />
      <Team />
      <Contact />
      <Clients />
    </>
  );
};

export default Land;
