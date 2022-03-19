import { BrowserRouter, Route, Routes } from "react-router-dom";

import Feed from "./screens/Feed";
import About from "./screens/About";
import Fav from "./screens/Fav";
import ResponsiveAppBar from "./components/navBar";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/fav" element={<Fav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
