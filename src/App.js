import { BrowserRouter, Route, Routes } from "react-router-dom";

import Feed from "./screens/Feed";
import About from "./screens/About";
import { useSelector } from "react-redux";
import Fav from "./screens/Fav";
import ResponsiveAppBar from "./components/navBar";

function App() {
  const heroesFav = useSelector((state) => state.heroes.heroesFav);
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <h1> My fav : {heroesFav?.length}</h1>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/fav" element={<Fav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
