import HomePage from "./pages/home";
import PricingPage from "./pages/pricing";

import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Contact from "./pages/contact";
import ServicesPage from "./pages/services";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
export default function App() {
  return (
<BrowserRouter>
<ScrollToTop/>
<Routes>
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/pricing" element={<PricingPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/contact" element={<Contact />} />
  </Route>
</Routes>
</BrowserRouter>
    
  );
}
