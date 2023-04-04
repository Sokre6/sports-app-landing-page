import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="" element={<ComingSoon />} />
        {/* <Route path="" element={<Homepage />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
