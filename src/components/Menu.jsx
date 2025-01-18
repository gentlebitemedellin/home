import React from "react";
import { motion } from "framer-motion";
import { slideSide } from "../animations";

const Menu = () => {
  return (
    <div className="grid 1 md:grid-cols-3">
      
      <div className="flex justify-center">

        <div className="my-2 w-96 bg-bluy border-2 border-black p-5 rounded-xl shadow-2xl">
        
          <h3 className="mb-2 text-xl">Cajitas</h3>

          <p className="whitespace-pre-wrap">
            CAJA X6..............$12.000 <br />
            6 donitas, 1 toppings y 1 salsa
            <br />
            CAJA X8...........$16.000
            <br />
            8 donitas, 2 toppings y 1 salsas
            <br />
            CAJA X10..........$20.000
            <br />
            10 donitas, 2 toppings, 2 salsas
            <br />
            CAJA X16...........$30.000
            <br />
            16 donitas, 3 toppings, 3 salsas
            <br />
          </p>
          
        </div>
      </div>

      <div className="flex justify-center">
        <div className="my-2 w-96 bg-yellowy border-2 border-black  p-5 rounded-xl shadow-2xl">
          <h3 className="mb-2 text-xl">Especiales</h3>
          <p className="whitespace-pre-line">
            BROCHETA X3..............$10.000
            <br />
            3 donitas con cobertura de chocolate.
            <br />
            VASO X6...........$16.000
            <br />
            6 donitas con cobertura de chocolate
            <br />
            PARA COMPARTIR X32......$62.000
            <br />
            32 donitas con cobertura de chocolate en bandeja de 4 divisiones con
            1 salsa
            <br />
            ARMALAS TÚ X12........$24.000
            <br />
            12 donitas con 1 salsa y 1 toppings
            <br />
            ARMALAS TÚ X18.........$34.000
            <br />
            18 donitas con 2 salsa y 2 toppings
            <br />
          </p>
          <div className="flex justify-center pt-5 z-50 relative">
            <button>
              <a
                href="https://wa.me/+573245110672"
                className="bg-pink-500 text-white p-2 rounded-lg "
                target="blank"
              >
                Pide tus donas ahora
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="my-2 w-96 bg-pinky border-2 border-black p-5 rounded-xl shadow-2xl">
          <h3 className="mb-2 text-xl">Cajitas Personalizadas</h3>
          <p className="whitespace-pre-line">
            Festividades importantes (cumpleaños, graduación, aniversario, etc)
            <br />
            CAJA X6..............$18.000
            <br />
            6 donitas con cobertura de chocolate y temática a elección.
            <br />
            CAJA X8...........$20.000
            <br />
            8 donitas con cobertura de chocolate y temática a elección.
            <br />
            CAJA X10..........$25.000
            <br />
            10 donitas con cobertura de chocolate y temática a elección.
            <br />
            CAJA X16...........$35.000
            <br />
            16 donitas con cobertura de chocolate y temática a elección.
            <br />
            CAJA X20...........$42.000
            <br />
            20 donitas con cobertura de chocolate y temática a elección.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
