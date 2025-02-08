import Image from "next/image";
import React from "react";

export default function MenuNavbar() {
  return (
    <header className="relative text-colorFont2 flex justify-between items-center py-8 px-12">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/icon/logoicon.svg"
          alt="logo cashly"
          height={40}
          width={40}
          priority
        />
        <a href="/inicio" className="ml-1 text-xl font-semibold">
          Cashly
        </a>
      </div>
      {/* Navegacion */}
      <nav className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="grid grid-cols-3 gap-4 font-normal">
          <li className="text-center">
            <a href="/funciones" aria-label="funciones">
              Funciones
            </a>
          </li>
          <li className="text-center">
            <a href="/precios" aria-label="precios">
              Precios
            </a>
          </li>
          <li className="text-center">
            <a href="/acercade" aria-label="acerca de">
              Acerca de
            </a>
          </li>
        </ul>
      </nav>
      {/* Links de usuario */}
      <div className="flex gap-4 items-center">
        <a className="text-base font-semibold" href="/login">
          Iniciar Sesión
        </a>
        <a
          className="text-base font-bold px-6 py-2.5 bg-colorAccent rounded-2xl text-colorFont"
          href="/signup"
        >
          Regístrate
        </a>
      </div>
    </header>
  );
}
