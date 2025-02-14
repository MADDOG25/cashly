"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Link } from "react-scroll";

const navigation = [
  { name: "Funciones", to: "funciones" },
  { name: "Precios", to: "precios" },
  { name: "Acerca de", to: "acercade" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between py-8 px-10"
      >
        {/* Logo */}
        <div className="flex flex-row items-center lg:flex-1">
          <a href="/inicio" className="-m-1 p-2.5">
            <Image
              alt="logo Cashly"
              src="/icon/logoicon.svg"
              className="h-10 w-auto"
              width={60}
              height={60}
            />
          </a>
          <a href="/inicio" className="text-xl  font-semibold text-colorFont2">
            Cashly
          </a>
        </div>

        {/* Boton menu abrir */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-colorFont2"
          >
            <Bars3Icon aria-hidden="true" className="size-12" />
          </button>
        </div>

        {/* Menu de navegacion */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              offset={80}
              duration={500}
              className="text-xl font-medium text-colorFont2 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Boton de Iniciar sesion */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <a href="/login" className="text-lg font-bold text-colorFont2">
            Inicia sesión
          </a>
          <a
            href="/register"
            className="text-lg font-bold text-colorFont rounded-xl bg-colorAccent py-2 px-6 ml-2"
          >
            Registro
          </a>
        </div>
      </nav>

      {/* Cuadro de Menu abierto */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          {/* Logo */}
          <div className="flex items-center justify-between">
            <a href="/inicio" className="-m-1.5 p-1.5">
              <Image
                alt="logo Cashly"
                src="/icon/logoicon.svg"
                className="h-10 w-auto"
                width={60}
                height={60}
              />
            </a>
            {/* Boton menu cerrar */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-colorFont2"
            >
              <XMarkIcon aria-hidden="true" className="size-12" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-4 py-12">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    smooth={true}
                    offset={80}
                    duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-colorFont2 hover:bg-white hover:text-colorFont cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-8">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-lg font-bold text-colorFont2 hover:bg-colorAccent hover:text-colorFont"
                >
                  Inicia sesión
                </a>
                <a
                  href="/registro"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-lg font-bold text-colorFont2 hover:bg-colorAccent hover:text-colorFont"
                >
                  Registro
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
