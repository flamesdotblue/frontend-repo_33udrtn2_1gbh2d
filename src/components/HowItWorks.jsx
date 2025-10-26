import React from 'react';
import { PhoneCall, Calendar, CheckCircle2, Moon } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Wake-up Call, Not an Alarm',
    desc:
      'Instead of a jarring alarm, Xanager gives you a personalized call. It greets you, checks your energy, and helps you set a focus for the day.',
  },
  {
    icon: Calendar,
    title: 'Understands Your Schedule',
    desc:
      'Learns from your calendar, habits, and energy patterns to find your real availability. Tasks are created to fit your windows — no overload.',
  },
  {
    icon: CheckCircle2,
    title: 'Creates and Manages Tasks',
    desc:
      'Based on your goals and conversations, Xanager generates a simple, achievable list. Each task is actionable, time-aware, and tied to your routine.',
  },
  {
    icon: Moon,
    title: 'End-of-Day Review Call',
    desc:
      'At bedtime, Xanager checks in: what got done, what’s pending, and how you felt. Together, you close the loop and prep tomorrow.',
  },
];

const HowItWorks = () => {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold sm:text-4xl">How Xanager Works</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Stop snoozing. Start achieving. Xanager replaces your alarm with an AI that calls you awake, organizes your tasks, and tracks your progress — so your day starts and ends with purpose.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30">
                <Icon className="h-5 w-5 text-violet-200" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
