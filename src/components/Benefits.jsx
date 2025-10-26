import React from 'react';
import { Sparkles, BarChart3, Clock, Check } from 'lucide-react';

const points = [
  {
    icon: Sparkles,
    title: 'Wake up on purpose',
    desc: 'A calm AI call replaces chaotic alarms, so you start centered and intentional.',
  },
  {
    icon: Clock,
    title: 'Smart time-awareness',
    desc: 'Tasks are created around your real availability. No more cramming or wishful planning.',
  },
  {
    icon: Check,
    title: 'Effortless productivity',
    desc: 'Your day plans itself through dialogue — not endless typing and fiddling.',
  },
  {
    icon: BarChart3,
    title: 'Visible progress',
    desc: 'Weekly and monthly visualizations help you see consistency, habits, and growth.',
  },
];

const Benefits = () => {
  return (
    <section className="w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Why people need Xanager</h2>
            <p className="mt-3 text-white/70">
              Snoozing is a global productivity killer. Planners get abandoned. Self-accountability is hard. No other tool connects sleep, wake-up, and productivity — until now.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {points.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-orange-400/30">
                    <Icon className="h-5 w-5 text-fuchsia-100" />
                  </div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-white/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/10 to-orange-500/10 p-6">
            <h3 className="text-xl font-semibold">Who it’s for</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>• Founders, creatives, and high-performers who want structure without overwhelm.</li>
              <li>• People who snooze through alarms and drift into their days.</li>
              <li>• Anyone tired of downloading productivity apps that collect dust.</li>
            </ul>
            <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/70">
              <p className="font-medium text-white">Taglines</p>
              <ul className="mt-2 space-y-1">
                <li>“Your alarm, your planner, your accountability coach — in one AI call.”</li>
                <li>“Wake up to purpose. Sleep with progress.”</li>
                <li>“The AI that calls you awake, plans your day, and checks in at night.”</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
