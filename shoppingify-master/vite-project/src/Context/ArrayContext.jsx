import { createContext } from "react";

const ArrayContext = createContext({
  setShowNewItem: true,
  showNewItem: false,
});

export default ArrayContext;
