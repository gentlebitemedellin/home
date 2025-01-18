import React from "react";

const Pedido = () => {
  return (
    <div>
      <>
        <div className="my-2  bg-pinky border-2  p-5 rounded-xl flex flex-col items-center justify-center">
          <h3 className="mb-2 text-xl">Pasos</h3>
          <p className="whitespace-pre-line text-center">
            Realiza tu pedido con al menos 3 días de anticipación para
            garantizar calidad y personalización de tus minidonas
            <br />
            <br />
            Indícanos los productos que deseas y sus especificaciones:
            cobertura, color, diseño, tipo de masa.
            <br />
            <br />
            Realiza tu pago con un adelanto por transferencia.
            <br />
            <br />
            Realizamos el envio de tu compra
            <br />
            <br />
            <div className="flex justify-center pb-20">
              <div className="bg-brown-400 rounded-xl p-2 w-96 flex text-white shadow-2xl">
                <p>
                  Puedes cotizar tus cajitas a partir de 6 unidades. Se cotizará
                  dependiendo de la cantidad y el diseño o frases Todo pedido se
                  agenda con el 50% Los precios no incluyen domicilio.
                </p>
              </div>
            </div>
          </p>
        </div>
      </>
    </div>
  );
};

export default Pedido;
