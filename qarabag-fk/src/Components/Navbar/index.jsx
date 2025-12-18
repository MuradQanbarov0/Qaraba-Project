import { useState } from "react";
import Container from "../Container";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    const [showMobileMenu,setShowMobileMenu] = useState(false);


    
  return (
    <div className="bg-primary text-white py-3 sticky top-0 h-[92px] z-10">
      <Container>
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex gap-3 items-center">
            <img src="/logo.png" alt="logo" className="w-12" />
            <span className="uppercase text-xl">qarabağ fk</span>
          </Link>

          <div className={`items-center gap-6 ${showMobileMenu ? 'flex md:hidden absolute top-full right-0 flex-col bg-primary h-screen w-full border-t border-slate-200 justify-center' : 'hidden md:flex'}`}>
            <NavLink to="/" className="text-lg">
              Ana səhifə
            </NavLink>
            <span className="relative group/item">
              <span className="text-lg">Komanda</span>

              <div className="absolute invisible group-hover/item:visible pt-2">
                <div className="flex flex-col w-32 rounded-md bg-white shadow-md">
                  <NavLink className="text-slate-800! p-3 rounded-t-md hover:bg-slate-200 border-b border-b-slate-200" to="/trainers">
                    Məşqçilər
                  </NavLink>
                  <NavLink className="text-slate-800! p-3 rounded-b-md hover:bg-slate-200" to="/players">
                    Oyunçular
                  </NavLink>
                </div>
              </div>
            </span>

            <NavLink className="text-lg" to="/news">Xəbər</NavLink>
            <NavLink className="text-lg" to="/contact">Əlaqə</NavLink>
          </div>

          <div className="cursor-pointer block md:hidden" onClick={() => setShowMobileMenu((pre) => !pre)}>
            {showMobileMenu ? <X size={25}/> : <Menu size={25}/>}
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
