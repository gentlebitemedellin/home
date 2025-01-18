
import c1 from "../assets/gentle_bite_donas.jpeg";
import c2 from "../assets/gentle_bite_caja_de_donas.jpeg";
import c3 from "../assets/gentle_bite_caja_de_donas_pedido.jpeg";

 
export function CarouselTransition() {
  return (
    <div className="grid grid-cols-3 h-80" > 
    
      <img
        src={c1}
        alt="gentle bite donas con toppings"
        className="h-60 md:h-80 w-full object-cover"
      />
      <img
        src={c2}
        alt="gentle bite caja de donas"
        className="h-60 md:h-80 w-full object-cover"
      />
      <img
        src={c3}
        alt="gentle bite caja de donas pedido"
        className="h-60 md:h-80 w-full object-cover"
      />
    </div>
  );
}