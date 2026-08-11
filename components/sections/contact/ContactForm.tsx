"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { contactPage } from "@/lib/content";

const inputClass =
  "rounded-md border border-gold/30 bg-background px-3.5 py-3.5 text-sm text-foreground outline-none transition-colors duration-200 focus:border-gold";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to backend/CRM
    setSubmitted(true);
  }

  return (
    <div className="rounded-xl border border-gold/30 bg-card p-9">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-[30px] text-center"
          >
            <div className="mb-4 text-4xl">✅</div>
            <h3 className="mb-3 font-display text-2xl font-semibold">{contactPage.form.success.heading}</h3>
            <p className="text-[15px] leading-relaxed text-muted">{contactPage.form.success.body}</p>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 className="mb-6 font-display text-[22px] font-semibold">{contactPage.form.heading}</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                required
                type="text"
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className={inputClass}
              />
              <input
                required
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className={inputClass}
              />
              <textarea
                required
                placeholder="How can we help?"
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className={`${inputClass} resize-y`}
              />
              <button
                type="submit"
                className="mt-1.5 rounded-md bg-gradient-to-br from-gold-light to-gold py-[15px] text-[15px] font-bold text-on-gold transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
              >
                {contactPage.form.submitLabel}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
