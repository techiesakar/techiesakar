import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Header from "./components/header/Header";
import Blog from "./components/pages/Blog";
import Tools from "./components/pages/Tools";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
