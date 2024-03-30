import { createContext, useMemo, useState } from "react";

interface IAppContext {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IAppContextProvider {
  children: JSX.Element | JSX.Element[];
}

export const AppContext = createContext<IAppContext>({
  setOpenMenu: () => {},
  openMenu: false,
});

export const AppContextProvider: React.FC<IAppContextProvider> = ({
  children,
}) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const valueProps = useMemo(
    () => ({
      openMenu,
      setOpenMenu,
    }),
    [openMenu]
  );

  return (
    <AppContext.Provider value={valueProps}>{children}</AppContext.Provider>
  );
};
