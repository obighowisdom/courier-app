"use client";

import Footer from "@/components/Footer";

import Header from "@/components/Header";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import { useEffect, useState } from "react";
import PreLoader from "@/components/Common/PreLoader";
import { ChakraProvider } from "@chakra-ui/react";
import { TrackingProvider } from "../components/Context/Context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <head />

      <body>
        <ChakraProvider>
          {loading ? (
            <PreLoader />
          ) : (
            <TrackingProvider>
              <SessionProvider>
                <ThemeProvider
                  attribute="class"
                  enableSystem={false}
                  defaultTheme="light"
                >
                  <Header />
                  {children}
                  <Footer />
                </ThemeProvider>
              </SessionProvider>
            </TrackingProvider>
          )}
        </ChakraProvider>


        <script type="text/javascript">
          var Tawk_API=Tawk_API||{ }, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/66ba8710146b7af4a4399095/1i549v6va';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
        })();
        </script>
       
      </body>
    </html>
  );
}
