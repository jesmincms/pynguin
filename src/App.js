import HomePage from "./pages/home";
import PricingPage from "./pages/pricing";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicesPage from "./pages/services";
export default function App() {
  return (
<BrowserRouter>
<Routes>
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/pricing" element={<PricingPage />} />
    <Route path="/services" element={<ServicesPage />} />
  </Route>
</Routes>
</BrowserRouter>
    
  );
}
