import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import NewProject from "./pages/NewProject";
import Container from "./layout/Container";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

function App() {
  return (
    <div>
      {/* Configuração do roteador para navegação */}
      <Router>
        {/* Barra de navegação com links para diferentes páginas */}
        <Navbar />
        {/* Container para envolver as páginas e aplicar estilos */}
        <Container customClass="min-height">
          {/* Configuração das rotas e correspondência com os componentes */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/company" element={<Company />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/newproject" element={<NewProject />} />
          </Routes>
        </Container>
        {/* Rodapé */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
