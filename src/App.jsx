import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import CoachDetails from "./Pages/CoachDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coach/:id" element={<CoachDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;