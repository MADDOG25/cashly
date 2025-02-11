import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <footer className="relative w-full h-full py-32 gap-y-4 flex flex-col items-center">
      {/* Imagen de fondo con degradado */}
      <div className="absolute inset-0 bg-dollars bg-cover bg-center -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/75 to-transparent"></div>
      </div>
      {/* Contenido de contacto */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold text-colorFont2">Contacto</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 p-4 justify-center items-center">
        <a href="mailto:mdog1525@gmail.com" target="_blank" rel="noreferrer">
          <Image
            alt="gmail icon"
            src="/icon/gmailicon.svg"
            loading="lazy"
            width={60}
            height={60}
          />
        </a>
        <a
          href="https://www.instagram.com/devjeffrey25/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            alt="instagram icon"
            src="/icon/instagramicon.svg"
            loading="lazy"
            width={60}
            height={60}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/dev-jeffrey/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            alt="linkedin icon"
            src="/icon/linkedinicon.svg"
            loading="lazy"
            width={60}
            height={60}
          />
        </a>
      </div>
    </footer>
  );
}
