import React from 'react'
import menu1 from '../assets/gentle_bite_masa.png'
import menu2 from '../assets/gentle_bite_salsa_y_cobertura.png'
import menu3 from '../assets/gentle_bite_toppings.png'
import menu4 from '../assets/gentle_bite_toppings_extras.png'

const Menu2 = () => {
  return (
    <div className="grid 1 md:grid-cols-2">
        <img src={menu1} alt="gentle bite masa para pedido" />
        <img src={menu2} alt="gentle bite salsa y cobertura para pedido" />
        <img src={menu3} alt="gentle bite toppings para pedido" />
        <img src={menu4} alt="gentle bite toppings extras para pedido" />

    </div>
  )
}

export default Menu2