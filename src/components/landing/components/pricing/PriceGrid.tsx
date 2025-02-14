import React from "react";

const plans = [
  {
    title: "Básico",
    price: "$0",
    features: ["control de ingresos y gastos"],
    buttonText: "Comenzar Gratis",
    buttonStyle: "bg-colorAccent text-colorFont",
    buttonHref: "/compra",
  },
  {
    title: "Pro",
    price: "$5.99",
    features: [
      "control de ingresos y gastos",
      "reportes detallados",
      "exportación de datos",
      "sincronización en la nube",
    ],
    buttonText: "Suscribirse",
    buttonStyle: "bg-colorAccent text-colorFont",
    buttonHref: "/compra",
  },
  {
    title: "Premium",
    price: "$9.99",
    features: [
      "control de ingresos y gastos",
      "reportes detallados",
      "exportación de datos",
      "sincronización en la nube",
      "más presupesto por categoría",
      "soporte 24/7",
    ],
    buttonText: "Obtener Premium",
    buttonStyle: "bg-colorAccent text-colorFont",
    buttonHref: "/compra",
  },
];

export default function PriceGrid() {
  return (
    <div className="text-colorFont">
      <div className="max-w-4xl md:max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Precios</h2>
      </div>

      <div className="grid gap-14 md:grid-cols-3 px-10 lg:px-20 py-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-colorBg shadow-2xl rounded-2xl p-6 items-center flex flex-col justify-between"
          >
            <div>
              <div className="border-b-2 border-black pb-6">
                <h3 className="text-2xl font-bold">{plan.title}</h3>
                <p className="text-4xl font-medium mt-4">{plan.price}</p>
              </div>
              <div>
                <ul className="mt-8 py-4 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="font-medium flex items-center py-1">
                      <p className="font-bold pr-1">✓</p> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              href={plan.buttonHref}
              className={`my-8 w-fit px-6 py-2.5 rounded-xl font-semibold text-base text-center ${plan.buttonStyle}`}
            >
              {plan.buttonText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
