import { Routes, Route } from "react-router-dom";
import DetailedReport from "./pages/DetailedReport";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DetailedReport />} />
    </Routes>
  );
}
export default App;
