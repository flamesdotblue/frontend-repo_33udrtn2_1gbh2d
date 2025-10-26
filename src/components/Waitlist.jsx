import React, { useState } from 'react';
import { Mail, User } from 'lucide-react';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSubmitting(true);

    // Demo UX: simulate success locally. Backend hookup can be added later.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setEmail('');
      setName('');
    }, 900);
  };

  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-fuchsia-500/10 to-orange-500/10" />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Join the Xanager waitlist</h2>
        <p className="mt-3 text-white/75">
          Be first to try the AI that calls you awake, plans your day, and checks in at night.
        </p>

        {!submitted ? (
          <form onSubmit={onSubmit} className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="relative sm:col-span-1">
              <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="h-12 w-full rounded-lg border border-white/10 bg-white/5 pl-10 pr-3 text-sm text-white placeholder:text-white/50 outline-none ring-violet-400/40 focus:ring"
              />
            </div>
            <div className="relative sm:col-span-1">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="h-12 w-full rounded-lg border border-white/10 bg-white/5 pl-10 pr-3 text-sm text-white placeholder:text-white/50 outline-none ring-violet-400/40 focus:ring"
                required
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="h-12 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 sm:col-span-1"
            >
              {submitting ? 'Joining…' : 'Join waitlist'}
            </button>
            {error && (
              <div className="sm:col-span-3">
                <p className="text-left text-sm text-red-300">{error}</p>
              </div>
            )}
          </form>
        ) : (
          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-left text-white/90">
              You’re in! We’ll email you at launch and send early access invites to select signups. In the meantime, add a reminder for <span className="font-semibold">xanager.com</span>.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
            >
              Add another email
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Waitlist;
