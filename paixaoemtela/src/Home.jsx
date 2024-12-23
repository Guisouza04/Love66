import React from "react";
import Button from "./components/button/button";
import Header from "./components/Header";
import MenuPrincipal from "./components/Main/tela-principal";
import Footer from "./components/Footer/Footer";
import Forms from "./components/Forms/Forms";
import Fluxo from "./components/Fluxo/Fluxo";
import Perguntas from "./components/Perguntas-frequentes/Perguntas";
import OutraPagina from "./pages/Outrapagina";
import "@fontsource/montserrat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <MenuPrincipal />
              <Forms />
              <Fluxo />
              <Perguntas />
              <Footer />
            </div>
          }
        />
        <Route path="/outra-pagina" element={<OutraPagina />} />
      </Routes>
    </Router>
  );
};

export default App;