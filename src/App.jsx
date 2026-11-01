import { useState } from 'react';
import './portfolio.css';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [ready, setReady] = useState(false);
  return (
    <div className={ready ? 'ready' : ''}>
      <Loader onDone={() => setReady(true)} />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
