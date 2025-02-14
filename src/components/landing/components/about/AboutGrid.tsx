import React from "react";
import Image from "next/image";

export default function AboutGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 md:gap-8 md:p-8">
      {/* Subtitle and description */}
      <div className="flex flex-col justify-center items-center px-6">
        <div>
          <h2 className="font-bold text-5xl text-colorFont">
            Simplifica tu vida financiera con Cashly
          </h2>
          <p className="font-medium text-colorFont text-lg mt-4">
            Cashly es una plataforma de gestión de gastos personales diseñada
            para ayudarte a controlar tu dinero de manera fácil y efectiva.
          </p>
        </div>
        {/* List About */}
        <div className="mt-8">
          <ul className="space-y-8">
            <li className="flex items-center space-x-4">
              <Image
                src="/icon/graphicon.svg"
                alt="graph icon"
                height={60}
                width={60}
                priority
              />
              <p className="font-semibold text-colorFont text-3xl">
                300+ reportes
              </p>
            </li>
            <li className="flex items-center space-x-4">
              <Image
                src="/icon/usericon.svg"
                alt="user icon"
                height={60}
                width={60}
                priority
              />
              <p className="font-semibold text-colorFont text-3xl">
                1,000+ usuarios
              </p>
            </li>
            <li className="flex items-center space-x-4">
              <Image
                src="/icon/cardicon.svg"
                alt="card icon"
                height={60}
                width={60}
                priority
              />
              <p className="font-semibold text-colorFont text-3xl">
                5,000+ registros
              </p>
            </li>
          </ul>
        </div>
      </div>
      {/* Image */}
      <div className="flex mt-4 md:mt-0 justify-center items-center">
        <Image
          src="/image/savings.webp"
          alt="savings image"
          height={500}
          width={500}
          priority
        />
      </div>
    </div>
  );
}
