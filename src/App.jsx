import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import InnovationsLab from "./pages/InnovationsLab";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import BlogDetail from "./components/sections/Blogs/BlogDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/innovations-lab" element={<InnovationsLab />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
