import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Cats from "./components/Cats";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cats />} />
      </Routes>
    </>
  );
}

export default App;
