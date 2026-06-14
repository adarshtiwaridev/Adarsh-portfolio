"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Github, Linkedin, Mail, MapPin } from "lucide-react";

import type { ContactFormValues, Profile, SocialLink } from "@/types/home";

type ContactSectionProps = {
  profile: Profile;
  socialLinks: SocialLink[];
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactSection({ profile, socialLinks }: ContactSectionProps) {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  const contactItems = [
    {
      label: "Email",
      value: profile.email,
      icon: Mail,
      href: `mailto:${profile.email}`,
    },
    {
      label: "LinkedIn",
      value: "View profile",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/adarshtiwaridev",
    },
    {
      label: "GitHub",
      value: "Open repository",
      icon: Github,
      href: "https://github.com/adarshtiwaridev",
    },
    {
      label: "Location",
      value: "India · Remote-ready",
      icon: MapPin,
      href: "#contact",
    },
  ];

  const handleChange = (field: keyof ContactFormValues, value: string) => {
    setFormValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!formValues.name.trim()) {
      nextErrors.name = "Full name is required.";
    }

    if (!validateEmail(formValues.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formValues.subject.trim()) {
      nextErrors.subject = "Subject is required.";
    }

    if (!formValues.message.trim()) {
      nextErrors.message = "Message cannot be empty.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formValues.name.trim(),
          email: formValues.email.trim(),
          subject: formValues.subject.trim(),
          message: formValues.message.trim(),
        }),
      });

      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload.message || "Unable to send message.");
      }

      setStatus("success");
      setServerMessage("Message Sent Successfully");
      setFormValues({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      setStatus("error");
      setServerMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-space overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid-shell"
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="contact-panel rounded-[2rem] bg-[rgba(255,255,255,0.82)] p-8 shadow-[0_32px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 backdrop-blur-xl"
          >
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-slate-500">
              Contact
            </p>
            <h2 id="contact-title" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Let's Build Something Amazing
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Open for internships, freelance work, collaborations, and full-time opportunities.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="group rounded-[1.5rem] border border-slate-200/80 bg-white/70 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white"
                  >
                    <div className="flex items-center gap-4">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-100 text-cyan-700 transition group-hover:bg-cyan-200">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                        <p className="mt-1 text-sm text-slate-600">{item.value}</p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-slate-200/80 bg-slate-50/80 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)] dark:bg-slate-950/80">
              <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-slate-500">
                Elsewhere
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-slate-200/80 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-cyan-300/40 hover:bg-cyan-50"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="contact-panel rounded-[2rem] bg-[rgba(255,255,255,0.82)] p-8 shadow-[0_32px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-slate-500">
                  Message me
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">Premium contact form for recruiter inquiries.</h3>
              </div>
              <div className="rounded-3xl bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                {profile.role}
              </div>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { id: "name", label: "Full Name", type: "text", field: "name" as const },
                  { id: "email", label: "Email", type: "email", field: "email" as const },
                ].map((input) => (
                  <div key={input.id} className="form-field">
                    <input
                      id={input.id}
                      type={input.type}
                      value={formValues[input.field]}
                      onChange={(event) => handleChange(input.field, event.target.value)}
                      className={`form-input peer ${errors[input.field] ? "input-error" : ""}`}
                      placeholder=" "
                      aria-invalid={Boolean(errors[input.field])}
                      aria-describedby={`${input.id}-error`}
                    />
                    <label htmlFor={input.id} className="floating-label">
                      {input.label}
                    </label>
                    <AnimatePresence>
                      {errors[input.field] ? (
                        <motion.p
                          id={`${input.id}-error`}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          className="mt-2 text-sm text-rose-600"
                        >
                          {errors[input.field]}
                        </motion.p>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="form-field">
                <textarea
                  id="message"
                  value={formValues.message}
                  onChange={(event) => handleChange("message", event.target.value)}
                  className={`form-input h-36 resize-none pt-6 pb-3 text-base leading-7 ${errors.message ? "input-error" : ""}`}
                  placeholder=" "
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby="message-error"
                />
                <label htmlFor="message" className="floating-label">
                  Message
                </label>
                <AnimatePresence>
                  {errors.message ? (
                    <motion.p
                      id="message-error"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="mt-2 text-sm text-rose-600"
                    >
                      {errors.message}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>

              <div className="space-y-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="primary-button inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(14,165,233,0.24)]"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : status === "success" ? "Message Sent Successfully" : "Send Message"}
                  {status === "success" ? <CheckCircle2 className="size-4" aria-hidden="true" /> : null}
                </motion.button>

                <AnimatePresence>
                  {status === "success" && serverMessage ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="rounded-3xl border border-emerald-200/80 bg-emerald-50/80 px-4 py-3 text-sm text-emerald-900"
                    >
                      {serverMessage}
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <AnimatePresence>
                  {status === "error" && serverMessage ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="rounded-3xl border border-rose-200/80 bg-rose-50/80 px-4 py-3 text-sm text-rose-900"
                    >
                      {serverMessage}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
