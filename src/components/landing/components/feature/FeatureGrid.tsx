import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Registros",
    image: "/image/report.webp",
    description: "Agrega y categoriza tus transacciones rápidamente.",
  },
  {
    title: "Alertas",
    image: "/image/alert.webp",
    description:
      "Recibe notificaciones para mantenerte dentro de tus límites financieros.",
  },
  {
    title: "Exportación",
    image: "/image/export.webp",
    description: "Descarga tus reportes en formatos CSV y PDF.",
  },
  {
    title: "Multiplataforma",
    image: "/image/webapps.webp",
    description: "Accede a Cashly desde tu móvil, tablet o computadora.",
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 justify-center gap-4 md:gap-8 md:p-8">
        {/* Subtitle and description */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-bold text-5xl text-colorFont">¿Qué esperas?</h2>
        <p className="font-medium text-colorFont text-lg mt-4 text-left">
          Con Cashly, tienes a tu disposición funciones poderosas que hacen que
          gestionar tus finanzas sea sencillo
        </p>
      </div>
      {/* Palets */}
      <div className="flex flex-col justify-center items-center">
        <ul className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-8 md:p-8">
          {features.map((feature, index) => (
            <li
              key={index}
              className="w-80 h-full flex flex-col justify-center items-center space-y-6 shadow-xl py-14 rounded-2xl px-2"
            >
              <p className="font-semibold text-colorFont text-4xl">
                {feature.title}
              </p>
              <Image
                src={feature.image}
                alt={feature.title}
                height={200}
                width={200}
                priority
              />
              <p className="font-semibold px-6 text-colorFont text-base text-left">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
