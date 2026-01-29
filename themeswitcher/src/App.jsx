import { useEffect, useState } from "react"
import Card from "./components/Card"
import ThemeBtn from "./components/ThemeBtn"
import { ThemeProvider } from "./context/Theme"

function App() {
  const [themeMode, setTheme] = useState("light")

  const darkTheme = () => {
    setTheme("dark")
  }

  const lightTheme = () => {
    setTheme("light")
  }
  useEffect(() => {

    document.querySelector("html").classList.remove("dark", "light")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])

  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>

        <h1 className="font-bond text-white text-center p-4 bg-pink-500 text-3xl">Theme Switcher</h1>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
