import React from 'react';
import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Benefits from './components/Benefits.jsx';
import Waitlist from './components/Waitlist.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <HowItWorks />
      <Benefits />
      <Waitlist />

      <footer className="border-t border-white/10 bg-black/60 py-10 text-sm text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
          <p>© {new Date().getFullYear()} Xanager — Own your day.</p>
          <p>
            Built for founders, creatives, and high-performers. Visit <a href="https://xanager.com" target="_blank" rel="noreferrer" className="text-white underline underline-offset-4">xanager.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
