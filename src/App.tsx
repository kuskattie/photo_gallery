import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./components/Portfolio";
import Argentina from "./pages/portfolio/Argentina";
import Spain from "./pages/portfolio/Spain";
import Morocco from "./pages/portfolio/Morocco";
import Portraits from "./pages/portfolio/Portraits";

function App() {
  return (
    <>
      <Header title="Kattie" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <About>
              I am a creative photographer with a passion for capturing people
              in natural, candid moments. I love telling stories through unique
              perspectives and unexpected compositions. My goal is to reveal
              authentic emotion and personality in every frame — whether it’s a
              quiet glance, a burst of laughter, or a moment of stillness. I
              believe the best photos happen when people feel at ease, and I
              strive to create a relaxed atmosphere that allows true beauty to
              shine through.
            </About>
          }
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/argentina" element={<Argentina />} />
        <Route path="/portfolio/spain" element={<Spain />} />
        <Route path="/portfolio/portraits" element={<Portraits />} />
        <Route path="/portfolio/morocco" element={<Morocco />} />
      </Routes>
      <Footer email="e.lujnova@gmail.com" />
    </>
  );
}

export default App;
