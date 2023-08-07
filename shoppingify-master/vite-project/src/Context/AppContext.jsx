import { createContext } from "react";

const AppWideContext = createContext({
  setShowNewItem: true,
  showNewItem: false,
});

export default AppWideContext;
