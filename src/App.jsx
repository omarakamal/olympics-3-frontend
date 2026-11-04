import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import ZaidDetails from "./pages/ZaidDetails";
import createZaid from "./pages/CreateZaid";
import UpdateZaid from "./pages/UpdateZaid";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/zaids" element={<AllZaids />} />
        <Route path="/zaids/:zaidId" element={<ZaidDetails />} />
        <Route to="/zaids/create" element={<createZaid />} />
        <Route path="/zaids/:zaidId/edit" element={<UpdateZaid />} />

      </Routes>
    </div>
  );
}

export default App;
