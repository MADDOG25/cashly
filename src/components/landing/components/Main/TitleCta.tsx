import React from "react";

export default function TitleCta() {
  return (
    <div className="py-40 max-w-4xl mx-auto text-center">
      <h1 className="font-bold text-6xl text-colorFont2">
        Controla todos tus activos desde un solo lugar.
      </h1>
      <p className="font-semibold text-2xl mt-6 mb-8 text-colorFont2">
        Cashly es una plataforma de confianza para ahorrar tu dinero.
        <br /> Hacemos registros claros y mantenemos tus finanzas seguras.
      </p>
      <a
        href="/login"
        className="font-bold bg-colorAccent rounded-3xl px-6 py-4"
      >
        Empezar ahora
      </a>
    </div>
  );
}
