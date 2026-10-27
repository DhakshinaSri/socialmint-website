import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Analytics from './pages/Analytics.jsx';
import Industries from './pages/Industries.jsx';
import Why from './pages/Why.jsx';
import How from './pages/How.jsx';
import Faq from './pages/Faq.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="marketing-analytics" element={<Analytics />} />
        <Route path="industries" element={<Industries />} />
        <Route path="why-choose-socialmint" element={<Why />} />
        <Route path="how-we-work" element={<How />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
