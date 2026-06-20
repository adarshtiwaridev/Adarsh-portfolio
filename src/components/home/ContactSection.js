"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Github, Linkedin, Mail, MapPin } from "lucide-react";








function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactSection({ profile, socialLinks }) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [phone, setPhone] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [lastSubmittedAt, setLastSubmittedAt] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");

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

  const handleChange = (field, value) => {
    setFormValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const handlePhoneChange = (val) => {
    setPhone(val);
    setErrors((current) => ({ ...current, phone: "" }));
  };

  const validate = () => {
    const nextErrors = {};

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

    if (phone.trim()) {
      const p = phone.trim();
      if (!/^[0-9+()\-\s]{6,32}$/.test(p)) {
        nextErrors.phone = "Please enter a valid phone number.";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prevent rapid resubmits from the same client
    if (lastSubmittedAt && Date.now() - lastSubmittedAt < 5000) {
      setStatus("error");
      setServerMessage("Please wait a moment before submitting again.");
      return;
    }

    if (!validate()) {
      setStatus("error");
      return;
    }

    if (honeypot) {
      setStatus("error");
      setServerMessage("Spam detected");
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formValues.name.trim(),
          email: formValues.email.trim(),
          phone: phone.trim(),
          subject: formValues.subject.trim(),
          message: formValues.message.trim(),
          honeypot: honeypot.trim(),
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
    finally {
      setLastSubmittedAt(Date.now());
    }
  };

  return (
    React.createElement('section', { id: "contact", 'aria-labelledby': "contact-title", className: "section-space overflow-hidden" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 158}}
      , React.createElement(motion.div, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "grid-shell", __self: this, __source: {fileName: _jsxFileName, lineNumber: 159}}

        , React.createElement('div', { className: "grid gap-8 lg:grid-cols-[0.95fr_1.05fr]"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 165}}
          , React.createElement(motion.div, {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.55, delay: 0.1 },
            className: "contact-panel rounded-[2rem] bg-[rgba(255,255,255,0.82)] p-8 shadow-[0_32px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 backdrop-blur-xl"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 166}}

            , React.createElement('p', { className: "font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-slate-500"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 172}}, "Contact"

            )
            , React.createElement('h2', { id: "contact-title", className: "mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 175}}, "Let's Build Something Amazing"

            )
            , React.createElement('p', { className: "mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 178}}, "Open for internships, freelance work, collaborations, and full-time opportunities."

            )

            , React.createElement('div', { className: "mt-8 grid gap-4 sm:grid-cols-2"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 182}}
              , contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  React.createElement(motion.a, {
                    key: item.label,
                    href: item.href,
                    target: item.href.startsWith("http") ? "_blank" : undefined,
                    rel: item.href.startsWith("http") ? "noreferrer" : undefined,
                    whileHover: { y: -4 },
                    transition: { type: "spring", stiffness: 260, damping: 20 },
                    className: "group rounded-[1.5rem] border border-slate-200/80 bg-white/70 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 186}}

                    , React.createElement('div', { className: "flex items-center gap-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 195}}
                      , React.createElement('span', { className: "grid h-11 w-11 place-items-center rounded-2xl bg-cyan-100 text-cyan-700 transition group-hover:bg-cyan-200"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 196}}
                        , React.createElement(Icon, { className: "size-5", 'aria-hidden': "true", __self: this, __source: {fileName: _jsxFileName, lineNumber: 197}} )
                      )
                      , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 199}}
                        , React.createElement('p', { className: "text-sm font-semibold text-slate-900"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 200}}, item.label)
                        , React.createElement('p', { className: "mt-1 text-sm text-slate-600"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 201}}, item.value)
                      )
                    )
                  )
                );
              })
            )

            , React.createElement('div', { className: "mt-8 rounded-[1.75rem] border border-slate-200/80 bg-slate-50/80 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)] dark:bg-slate-950/80"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 209}}
              , React.createElement('p', { className: "font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-slate-500"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 210}}, "Elsewhere"

              )
              , React.createElement('div', { className: "mt-4 flex flex-wrap gap-3"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 213}}
                , socialLinks.map((link) => (
                  React.createElement('a', {
                    key: link.href,
                    href: link.href,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "inline-flex rounded-full border border-slate-200/80 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-cyan-300/40 hover:bg-cyan-50"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 215}}

                    , link.label
                  )
                ))
              )

              , React.createElement('div', { className: "grid gap-4 sm:grid-cols-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 227}}
                , React.createElement('div', { className: "form-field", __self: this, __source: {fileName: _jsxFileName, lineNumber: 228}}
                  , React.createElement('input', {
                    id: "phone",
                    type: "tel",
                    value: phone,
                    onChange: (e) => handlePhoneChange(e.target.value),
                    className: `form-input peer ${errors.phone ? "input-error" : ""}`,
                    placeholder: " " ,
                    'aria-invalid': Boolean(errors.phone),
                    'aria-describedby': `phone-error`,
                    maxLength: 32, __self: this, __source: {fileName: _jsxFileName, lineNumber: 229}}
                  )
                  , React.createElement('label', { htmlFor: "phone", className: "floating-label", __self: this, __source: {fileName: _jsxFileName, lineNumber: 240}}, "Phone (optional)"

                  )
                  , React.createElement(AnimatePresence, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 243}}
                    , errors.phone ? (
                      React.createElement(motion.p, {
                        id: `phone-error`,
                        initial: { opacity: 0, y: 6 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: 6 },
                        className: "mt-2 text-sm text-rose-600"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 245}}

                        , errors.phone
                      )
                    ) : null
                  )
                )

                , React.createElement('div', { className: "form-field", __self: this, __source: {fileName: _jsxFileName, lineNumber: 258}}
                  , React.createElement('select', {
                    id: "subject",
                    value: formValues.subject,
                    onChange: (e) => handleChange("subject", e.target.value),
                    className: `form-input peer ${errors.subject ? "input-error" : ""}`,
                    'aria-invalid': Boolean(errors.subject),
                    'aria-describedby': `subject-error`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 259}}

                    , React.createElement('option', { value: "", __self: this, __source: {fileName: _jsxFileName, lineNumber: 267}}, "Select subject..." )
                    , React.createElement('option', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 268}}, "Job Opportunity" )
                    , React.createElement('option', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 269}}, "Internship / Freelance"  )
                    , React.createElement('option', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 270}}, "Project Collaboration" )
                    , React.createElement('option', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 271}}, "Technical Query" )
                    , React.createElement('option', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 272}}, "General Inquiry" )
                  )
                  , React.createElement('label', { htmlFor: "subject", className: "floating-label", __self: this, __source: {fileName: _jsxFileName, lineNumber: 274}}, "Subject"

                  )
                  , React.createElement(AnimatePresence, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 277}}
                    , errors.subject ? (
                      React.createElement(motion.p, {
                        id: `subject-error`,
                        initial: { opacity: 0, y: 6 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: 6 },
                        className: "mt-2 text-sm text-rose-600"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 279}}

                        , errors.subject
                      )
                    ) : null
                  )
                )
              )

              /* Honeypot field to trap bots - keep hidden */
              , React.createElement('input', {
                type: "text",
                name: "website",
                value: honeypot,
                onChange: (e) => setHoneypot(e.target.value),
                className: "hidden",
                'aria-hidden': "true",
                tabIndex: -1, __self: this, __source: {fileName: _jsxFileName, lineNumber: 294}}
              )
            )
          )

          , React.createElement(motion.div, {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.55, delay: 0.15 },
            className: "contact-panel rounded-[2rem] bg-[rgba(255,255,255,0.82)] p-8 shadow-[0_32px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 backdrop-blur-xl"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 306}}

            , React.createElement('div', { className: "flex items-start justify-between gap-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 312}}
              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 313}}
                , React.createElement('p', { className: "font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-slate-500"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 314}}, "Message me"

                )
                , React.createElement('h3', { className: "mt-3 text-2xl font-semibold text-slate-950"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 317}}, "Premium contact form for recruiter inquiries."     )
              )
              , React.createElement('div', { className: "rounded-3xl bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 319}}
                , profile.role
              )
            )

            , React.createElement('form', { className: "mt-8 space-y-6" , onSubmit: handleSubmit, noValidate: true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 324}}
              , React.createElement('div', { className: "grid gap-4 sm:grid-cols-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 325}}
                , [
                  { id: "name", label: "Full Name", type: "text", field: "name"  },
                  { id: "email", label: "Email", type: "email", field: "email"  },
                ].map((input) => (
                  React.createElement('div', { key: input.id, className: "form-field", __self: this, __source: {fileName: _jsxFileName, lineNumber: 330}}
                    , React.createElement('input', {
                      id: input.id,
                      type: input.type,
                      value: formValues[input.field],
                      onChange: (event) => handleChange(input.field, event.target.value),
                      className: `form-input peer ${errors[input.field] ? "input-error" : ""}`,
                      placeholder: " " ,
                      'aria-invalid': Boolean(errors[input.field]),
                      'aria-describedby': `${input.id}-error`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 331}}
                    )
                    , React.createElement('label', { htmlFor: input.id, className: "floating-label", __self: this, __source: {fileName: _jsxFileName, lineNumber: 341}}
                      , input.label
                    )
                    , React.createElement(AnimatePresence, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 344}}
                      , errors[input.field] ? (
                        React.createElement(motion.p, {
                          id: `${input.id}-error`,
                          initial: { opacity: 0, y: 6 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: 6 },
                          className: "mt-2 text-sm text-rose-600"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 346}}

                          , errors[input.field]
                        )
                      ) : null
                    )
                  )
                ))
              )

              , React.createElement('div', { className: "form-field", __self: this, __source: {fileName: _jsxFileName, lineNumber: 361}}
                , React.createElement('textarea', {
                  id: "message",
                  value: formValues.message,
                  onChange: (event) => handleChange("message", event.target.value),
                  className: `form-input h-36 resize-none pt-6 pb-3 text-base leading-7 ${errors.message ? "input-error" : ""}`,
                  placeholder: " " ,
                  'aria-invalid': Boolean(errors.message),
                  'aria-describedby': "message-error", __self: this, __source: {fileName: _jsxFileName, lineNumber: 362}}
                )
                , React.createElement('label', { htmlFor: "message", className: "floating-label", __self: this, __source: {fileName: _jsxFileName, lineNumber: 371}}, "Message"

                )
                , React.createElement(AnimatePresence, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 374}}
                  , errors.message ? (
                    React.createElement(motion.p, {
                      id: "message-error",
                      initial: { opacity: 0, y: 6 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: 6 },
                      className: "mt-2 text-sm text-rose-600"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 376}}

                      , errors.message
                    )
                  ) : null
                )
              )

              , React.createElement('div', { className: "space-y-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 389}}
                , React.createElement(motion.button, {
                  type: "submit",
                  whileHover: { scale: 1.01 },
                  whileTap: { scale: 0.98 },
                  className: "primary-button inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(14,165,233,0.24)]"           ,
                  disabled: status === "loading", __self: this, __source: {fileName: _jsxFileName, lineNumber: 390}}

                  , status === "loading" ? "Sending..." : status === "success" ? "Message Sent Successfully" : "Send Message"
                  , status === "success" ? React.createElement(CheckCircle2, { className: "size-4", 'aria-hidden': "true", __self: this, __source: {fileName: _jsxFileName, lineNumber: 398}} ) : null
                )

                , React.createElement(AnimatePresence, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 401}}
                  , status === "success" && serverMessage ? (
                    React.createElement(motion.div, {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: 10 },
                      className: "rounded-3xl border border-emerald-200/80 bg-emerald-50/80 px-4 py-3 text-sm text-emerald-900"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 403}}

                      , serverMessage
                    )
                  ) : null
                )

                , React.createElement(AnimatePresence, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 414}}
                  , status === "error" && serverMessage ? (
                    React.createElement(motion.div, {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: 10 },
                      className: "rounded-3xl border border-rose-200/80 bg-rose-50/80 px-4 py-3 text-sm text-rose-900"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 416}}

                      , serverMessage
                    )
                  ) : null
                )
              )
            )
          )
        )
      )
    )
  );
}
