import React from "react";
import MenuNavbar from "./components/Main/MenuNavbar";
import TitleCta from "./components/Main/TitleCta";

export default function Main() {
  return (
    <>
      <main className="relative min-h-screen w-full">
        {/* Imagen de fondo con opacidad
        <div className="absolute inset-0 bg-dollars bg-cover bg-center -z-10"></div> */}
        <MenuNavbar />
        <TitleCta />
      </main>
    </>
  );
}
