import Main from "@/components/landing/Header";
import About from "@/components/landing/About";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import Contact from "@/components/landing/Contact";

export default function Home() {
  return (
    <>
      <header>
        <link rel="icon" href="/app/favicon.ico" sizes="any" />
      </header>
      <Main />
      <About />
      <Features />
      <Pricing />
      <Contact />
    </>
  );
}
