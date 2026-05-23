/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AgeGate from './components/AgeGate';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrilogySection from './components/TrilogySection';
import SpecialEditions from './components/SpecialEditions';
import TimelineSection from './components/TimelineSection';
import ImpactSection from './components/ImpactSection';
import Footer from './components/Footer';
import TequilaDetail from './components/TequilaDetail';

function MainPage() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  return (
    <div className="relative min-h-screen bg-bone text-charcoal font-sans [overflow-x:clip]">
      <AgeGate onVerify={() => setIsAgeVerified(true)} />
      <div className={`transition-all duration-1000 ${isAgeVerified ? 'opacity-100' : 'opacity-20 pointer-events-none blur-sm'}`}>
        <Navbar />
        <main>
          <Hero />
          <TrilogySection />
          <SpecialEditions />
          <TimelineSection />
          <ImpactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tequila/:id" element={<TequilaDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
