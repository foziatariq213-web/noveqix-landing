"use client";

import { motion } from "motion/react";
import { Rocket, Play, CheckCircle2, XCircle, Activity, Search, Bell } from "lucide-react";
import CountUp from "./CountUp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
        }}
      />
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-32 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2">
        <div>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-600"
          >
            AI-driven Quality Engineering
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl"
          >
            Universal QA Automation,{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Powered by AI.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-5 max-w-md text-lg leading-relaxed text-slate-600"
          >
            Noveqix brings testing, validation, observability and release
            intelligence into one platform — so you can build better software, faster.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-transform hover:-translate-y-0.5"
            >
              <Rocket className="h-4 w-4" /> Join the Beta
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              <Play className="h-4 w-4" /> Explore Platform
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-5 flex items-center gap-2 text-sm text-slate-500"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-500" /> Beta launching soon
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-violet-500/20 blur-2xl" />

          <div className="relative rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl shadow-indigo-500/10">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="ml-1 flex flex-1 items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5">
                <Search className="h-3.5 w-3.5 text-slate-400" />
                <span className="text-xs text-slate-400">Search tests, projects…</span>
              </div>
              <Bell className="h-4 w-4 text-slate-400" />
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                A
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Smarter Testing. Faster Results.</p>
                <p className="mt-1 text-xs text-slate-500">
                  Ask anything about your tests, get insights, and find issues.
                </p>
                <span className="mt-3 inline-block rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                  Start with AI
                </span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl border border-slate-100 p-4">
                <span className="text-2xl font-extrabold text-slate-900">
                  <CountUp end={92} suffix="%" />
                </span>
                <span className="text-[11px] text-slate-500">Quality Score</span>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-3">
              <Stat icon={<Activity className="h-4 w-4 text-indigo-500" />} value={<CountUp end={124} />} label="Total Tests" />
              <Stat icon={<CheckCircle2 className="h-4 w-4 text-green-500" />} value={<CountUp end={98} />} label="Passed" />
              <Stat icon={<XCircle className="h-4 w-4 text-red-500" />} value={<CountUp end={12} />} label="Failed" />
            </div>

            <div className="mt-3 flex h-20 items-end gap-2 rounded-xl border border-slate-100 p-3">
              {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 rounded-t bg-indigo-500"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="rounded-xl border border-slate-100 p-3">
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="text-lg font-bold text-slate-900">{value}</span>
      </div>
      <span className="text-[11px] text-slate-500">{label}</span>
    </div>
  );
}
