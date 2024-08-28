import { BrowserRouter, Route, Routes } from "react-router-dom";
import CanvasModel from "./canvas/index";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <main className="app transition-all ease-in">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/canva"
            element={
              <>
                <CanvasModel />
                <Customizer />
              </>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
{
  /* <Home />
      <CanvasModel />
      <Customizer /> */
}

export default App;
