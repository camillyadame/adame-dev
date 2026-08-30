import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import Value from "@/components/Value";
import Cases from "@/components/Cases";
import Process from "@/components/Process";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Value />
        <Cases />
        <Process />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
