import React from "react";
import MenuNavbar from "./components/header/MenuNavbar";
import TitleCta from "./components/header/TitleCta";

export default function Main() {
  return (
    <>
      <main className="relative min-h-screen w-full">
        {/* Imagen de fondo con degradado */}
        <div className="absolute inset-0 bg-dollars bg-cover bg-center -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/75 to-transparent"></div>
        </div>
        <MenuNavbar />
        <TitleCta />
      </main>
    </>
  );
}
