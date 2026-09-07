"use client";

import { motion } from "motion/react";
import {
  Globe, Smartphone, Code2, Boxes, Palette, Sparkles,
  Zap, Eye, BarChart3, ShieldCheck, Brain, Gauge,
} from "lucide-react";

const mainFeatures = [
  { icon: Globe, title: "Web Testing", desc: "Automate and validate your web applications with ease." },
  { icon: Smartphone, title: "Mobile Testing", desc: "Test across real devices and emulators." },
  { icon: Code2, title: "API Testing", desc: "Ensure backend reliability with automated API tests." },
  { icon: Boxes, title: "SDK", desc: "Integrate and extend with our SDKs." },
  { icon: Palette, title: "Design Compare", desc: "Compare implemented UI against your designs and catch visual differences." },
  { icon: Sparkles, title: "AI-Powered QA", desc: "Smarter test creation, self-healing and intelligent insights." },
];

const secondaryFeatures = [
  { icon: Zap, title: "Performance & Load Testing", desc: "Simulate real-world load and ensure peak performance." },
  { icon: Eye, title: "Runtime Observability", desc: "Gain deep visibility into your applications and tests." },
  { icon: BarChart3, title: "Quality Intelligence", desc: "Turn data into insights with AI-driven analysis." },
  { icon: ShieldCheck, title: "Release Intelligence", desc: "Validate before you ship with confidence." },
];

const benefits = [
  { icon: Zap, title: "Less manual testing", desc: "Automate the repetitive. Focus on what matters." },
  { icon: Brain, title: "Smarter automation", desc: "AI-powered, self-healing, always learning." },
  { icon: Gauge, title: "Faster feedback", desc: "Get results, insights and fixes sooner." },
  { icon: ShieldCheck, title: "Higher release confidence", desc: "Ship with quality, every time." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-violet-600">Features</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            One platform. Every quality workflow.
          </h2>
          <p className="mt-4 text-slate-600">
            From test creation to release intelligence, Noveqix covers your entire QA lifecycle.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {mainFeatures.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {secondaryFeatures.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              className="rounded-xl border border-slate-100 bg-slate-50/60 p-5 transition-colors hover:bg-slate-50"
            >
              <Icon className="h-5 w-5 text-violet-600" />
              <h3 className="mt-3 text-sm font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 grid gap-6 rounded-2xl bg-indigo-50/60 p-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={item} className="flex flex-col gap-2">
              <Icon className="h-6 w-6 text-indigo-600" />
              <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
              <p className="text-xs leading-relaxed text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
