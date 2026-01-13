import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Lesson from "./pages/Lesson";
import Reward from "./pages/Reward";
import CalmModeToggle from "./components/CalmModeToggle";

function App() {
  return (
    <BrowserRouter>
      <CalmModeToggle />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="/lesson/:type/:id" element={<Lesson />} />
        <Route path="/reward" element={<Reward />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
