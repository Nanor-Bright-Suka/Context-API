import { createContext } from "react";

export type Theme = "light" | "dark" | "system"


const ThemeContext = createContext<Theme>("dark")

export default ThemeContext;