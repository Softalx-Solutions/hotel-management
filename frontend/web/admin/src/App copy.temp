import { Header, NavBar, Main } from "./components";
import React, {useState} from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative h-screen bg-[#F7F8FC] flex flex-col sm:flex-row">
      <div className="absolute right-0">
      {isOpen?(
          <Bars3Icon
          onClick={(e) => setIsOpen(!isOpen)}
          className="sm:hidden text-blue-800 font-bold w-6 m-7 cursor-pointer"
        />
        ):(
          <XMarkIcon
          onClick={(e) => setIsOpen(!isOpen)}
          className="sm:hidden text-secondary font-bold w-6 m-7 cursor-pointer"
        />
        )}
      </div>
      <NavBar isOpen={isOpen}/>
      <Main isMenuOpen={!isOpen}/>
    </div>
  );
};

export default App;
