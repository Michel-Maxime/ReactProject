import { BrowserRouter, Route, Routes } from "react-router-dom";

import Feed from "./screens/Feed";
import About from "./screens/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/about/:id" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
