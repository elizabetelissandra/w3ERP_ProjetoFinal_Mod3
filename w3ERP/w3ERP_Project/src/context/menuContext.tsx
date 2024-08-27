import { createContext, useContext, useState } from "react";

interface MenuContextProps {
  menu: boolean;
  toggleMenu: () => void;
}

const MenuContext = createContext<MenuContextProps>({
  menu: true,
  toggleMenu: () => {},
});

export const MenuProvider = ({ children }: any) => {
  const [menu, setMenu] = useState(true);
  
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <MenuContext.Provider value={{ menu, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
    export const useMenu = () => useContext(MenuContext)