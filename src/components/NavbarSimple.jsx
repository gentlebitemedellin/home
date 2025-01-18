import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo_gentle_bite.png";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-medium font-agbalumo"
      >
        <a href="#pedido" className="flex items-center hover:text-blue-500 transition-colors">
          Pedido
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-medium font-agbalumo"
      >
        <a href="#menu" className="flex items-center hover:text-blue-500 transition-colors">
          Menú
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-medium font-agbalumo"
      >
        <a href="https://www.instagram.com/gentle__bite?igsh=MXNvNW83YWd6cGplbQ==" target="_blank" className="flex items-center hover:text-blue-500 transition-colors">
        <i class="bi bi-instagram"></i>
        </a>
      </Typography>
    </ul>
  );
}
 
export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className=" top-0  h-max max-w-full  rounded-none shadow-none bg-pinky">
      <div className="flex items-center justify-between text-black">
        <div className="flex items-center">
        <img src={logo} alt="" className="h-10 w-10" />
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 font-agbalumo"
        >
          Gentle Bite
        </Typography>
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
export default NavbarSimple;