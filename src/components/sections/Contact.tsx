"use client";

import { useState, useCallback } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { profile } from "@/data/portfolio";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (data.subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters.";
  }

  if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: profile.linkedinDisplay,
    href: profile.linkedin,
  },
];

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [toast, setToast] = useState<string | null>(null);

  const handleChange = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = validateForm(formData);

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      // Open mailto link
      const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      window.open(mailtoUrl, "_blank");

      // Reset form and show toast
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setToast("Email client opened! Your message is ready to send.");
      setTimeout(() => setToast(null), 4000);
    },
    [formData]
  );

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind? Let's talk."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <GlowingCard>
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-lg bg-accent/10 p-2.5">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-sm text-zinc-300 mt-0.5 break-all">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                if (item.href) {
                  const isExternal = item.href.startsWith("http");
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="block rounded-lg p-2 -m-2 transition-colors hover:bg-white/5"
                    >
                      {content}
                    </a>
                  );
                }

                return <div key={item.label}>{content}</div>;
              })}
            </div>
          </GlowingCard>

          {/* Contact form */}
          <GlowingCard>
            <h3 className="text-lg font-semibold text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm text-zinc-400 mb-1.5"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] backdrop-blur-md px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:bg-white/[0.08] focus:outline-none transition-all"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    role="alert"
                    className="mt-1 flex items-center gap-1 text-xs text-red-400"
                  >
                    <AlertCircle className="h-3 w-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm text-zinc-400 mb-1.5"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] backdrop-blur-md px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:bg-white/[0.08] focus:outline-none transition-all"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    role="alert"
                    className="mt-1 flex items-center gap-1 text-xs text-red-400"
                  >
                    <AlertCircle className="h-3 w-3" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm text-zinc-400 mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] backdrop-blur-md px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:bg-white/[0.08] focus:outline-none transition-all"
                  placeholder="Project inquiry"
                  aria-invalid={!!errors.subject}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                />
                {errors.subject && (
                  <p
                    id="subject-error"
                    role="alert"
                    className="mt-1 flex items-center gap-1 text-xs text-red-400"
                  >
                    <AlertCircle className="h-3 w-3" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm text-zinc-400 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] backdrop-blur-md px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:bg-white/[0.08] focus:outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <p
                    id="message-error"
                    role="alert"
                    className="mt-1 flex items-center gap-1 text-xs text-red-400"
                  >
                    <AlertCircle className="h-3 w-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="apple-primary-btn w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-slate-950 tracking-wide transition-all"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>

            {/* Toast */}
            {toast && (
              <div
                role="status"
                aria-live="polite"
                className="mt-4 flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400"
              >
                <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                {toast}
              </div>
            )}
          </GlowingCard>
        </div>
      </div>
    </section>
  );
}
