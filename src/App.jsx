import { useState } from "react";
import NavbarSimple from "./components/NavbarSimple";
import Start from "./components/Start";
import Menu from "./components/Menu";
import { CarouselTransition } from "./components/CarouselTransition";
import WhatsappButton from "./components/WhatsappButton";
import Separator from "./components/Separator";
import Pedido from "./components/Pedido";
import Instagram from "./components/Instagram";
import Menu2 from "./components/Menu2";
import { Helmet } from 'react-helmet';
function App() {
  return (
    <>
      <div className="overflow-hidden">
      <Helmet>
        <title>Gentle bite</title>
        <meta name="description" content="venta de mini donas y cajas de donas en medellin colombia" />
      </Helmet>
          <NavbarSimple />
            <Start />
            
            <div className=" h-60 md:h-80 ">
            <CarouselTransition />
            </div>
            <div id="menu"></div>
            <Separator  text1={"Nuestro"} text2={"Menú"} />
            <Menu />
            <Menu2 />
            <div id="pedido"></div>
            <Separator  text1={"Cómo hacer "} text2={"Un pedido"} />
            <Pedido />
            <WhatsappButton />
            <Instagram />
          
            
            
      </div>
    </>
  );
}

export default App;
