import { Route, Routes } from 'react-router'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import HomePage from './pages/HomePage.jsx'
import IndustriesPage from './pages/IndustriesPage.jsx'
import UseCasesPage from './pages/UseCasesPage.jsx'
import WhatWeBuildPage from './pages/WhatWeBuildPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import { ContactPage, NotFoundPage } from './pages/SimplePages.jsx'

export default function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/what-we-build" element={<WhatWeBuildPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/use-cases" element={<UseCasesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
