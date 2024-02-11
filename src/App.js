import { Route, Routes } from "react-router-dom";
import CatCard from "./components/CatCard/CatCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CatCard />} />
      </Routes>
    </>
  );
}

export default App;
