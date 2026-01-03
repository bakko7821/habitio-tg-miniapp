import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout.js";
import HabbitPage from "./pages/HabbitPage.js";
import '../styles/index.scss'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/habbit" element={<HabbitPage />} />
      </Route>
    </Routes>
  )  
}

export default App;
