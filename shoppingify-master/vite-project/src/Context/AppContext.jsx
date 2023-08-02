import { createContext } from "react";

const AppWideContext = createContext({
  state: true,
  items: [],
});
export default AppWideContext;
