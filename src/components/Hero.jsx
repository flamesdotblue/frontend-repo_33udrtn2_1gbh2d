import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient vignette to increase contrast over the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center sm:pt-28">
        <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
          <Rocket className="mr-2 h-4 w-4 text-violet-300" />
          <span className="text-xs font-medium tracking-wide text-white/80">Launching soon on xanager.com</span>
        </div>

        <h1 className="text-balance bg-gradient-to-br from-white via-white to-white/80 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Own your day.
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
          Your AI manager for mornings, nights, and everything in between. Xanager wakes you up, plans your day, and keeps you accountable — automatically.
        </p>

        <div className="mt-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
          Join the waitlist at <span className="font-semibold text-white">xanager.com</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
