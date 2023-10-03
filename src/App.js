import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header";
import Router from "./Router/router";
import { useState } from "react";
import { LanguageContext } from "./Context/language";
import { ThemeContext } from "./Context/theme";

function App() {
  const [contextLang, setContextLang] = useState("en");
  const [contextTheme, setContextTheme] = useState("Dark");
  return (
    <>
  
        <BrowserRouter>
          <LanguageContext.Provider value={{ contextLang, setContextLang }}>
            <ThemeContext.Provider value={{ contextTheme, setContextTheme }}>
              <Header />
              <div
                className={contextLang === "ar" ? "text-right" : "text-left"}
                dir={contextLang === "ar" ? "rtl" : "ltr"}
              >
                <Router />
              </div>
            </ThemeContext.Provider>
          </LanguageContext.Provider>
        </BrowserRouter>

    </>
  );
}

export default App;
