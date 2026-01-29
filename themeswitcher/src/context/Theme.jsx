import { useContext, createContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {

    },
    lightTheme: () => {

    }
})
// provider
export const ThemeProvider = ThemeContext.Provider
// custom hook
export default function useTheme() {
    return useContext(ThemeContext)
}