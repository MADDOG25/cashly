import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";
import Features from "@/components/landing/Features";
import Main from "@/components/landing/Main";
import Pricing from "@/components/landing/Pricing";

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
