import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
  const html = document.querySelector("html");
  html.classList.remove("dark", "light");
  if (themeMode) {
    html.classList.add(themeMode);
  }
}, [themeMode]);

  return (
    <ThemeProvider value={{ lightTheme, darkTheme, themeMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          {/*  theme button */}
          <ThemeButton/>
          <div className="w-full max-w-sm mx-auto"></div>
          {/*  Card */}
          <Card/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
