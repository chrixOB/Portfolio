'use client';

import Link from 'next/link';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaCheckCircle,
  FaDownload,
  FaEnvelope,
  FaExclamationCircle,
  FaLock,
  FaPaperPlane,
  FaPenNib,
  FaPhoneAlt,
  FaUser,
} from 'react-icons/fa';
import AnimatedSlogan from '@/components/AnimatedSlogan';
import AnimatedCounter from '@/components/AnimatedCounter';
import TechStack from '@/components/TechStack';
import Workflow from '@/components/Workflow';

const highlights = ['Frontend Development', 'React & Next.js', 'UI/UX Focus'];

const projects = [
  {
    title: 'EggXellence',
    description: 'An all-in-one platform for poultry farmers to manage their operations efficiently.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL'],
    status: 'Completed',
    hosted: true,
    url: 'https://github.com/chrixob',
  },
  {
    title: 'Adei Foundation website',
    description: "A charity organization's website that showcases their projects, donations and other activities.",
    stack: ['React', 'Material UI'],
    status: 'Completed',
    hosted: true,
    url: 'https://adeipurityfoundation1.netlify.app/',
  },
  {
    title: 'PyGuide',
    description: 'An interactive e-learning platform for learning python.',
    stack: ['React', 'firebase'],
    status: 'Ongoing',
    hosted: false,
    url: 'https://github.com/chrixob',
  },
];

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

type FormState = typeof initialFormState;
type FormErrors = Partial<Record<keyof FormState, string>>;

const validateField = (name: keyof FormState, value: string) => {
  const trimmedValue = value.trim();

  switch (name) {
    case 'name':
      if (!trimmedValue) return 'Please enter your name.';
      if (trimmedValue.length < 2) return 'Name must be at least 2 characters long.';
      return '';
    case 'email':
      if (!trimmedValue) return 'Please enter your email address.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
        return 'Please enter a valid email address.';
      }
      return '';
    case 'phone':
      if (!trimmedValue) return 'Please enter your contact number.';
      if (!/^\d{10}$/.test(trimmedValue)) {
        return 'Phone number must be exactly 10 digits.';
      }
      return '';
    case 'subject':
      if (!trimmedValue) return 'Please enter a subject.';
      if (trimmedValue.length < 5) return 'Subject should be at least 5 characters long.';
      return '';
    case 'message':
      if (!trimmedValue) return 'Please enter your message.';
      if (trimmedValue.length < 10) return 'Message should be at least 10 characters long.';
      return '';
    default:
      return '';
  }
};

const validateForm = (data: FormState) => {
  const nextErrors: FormErrors = {};

  (Object.keys(data) as Array<keyof FormState>).forEach((field) => {
    const fieldError = validateField(field, data[field]);
    if (fieldError) {
      nextErrors[field] = fieldError;
    }
  });

  return nextErrors;
};

export default function Home() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  });

  const isFormValid =
    Object.values(formData).every((value) => value.trim() !== '') &&
    Object.values(validateForm(formData)).every((message) => !message);

  useEffect(() => {
    if (status.type !== 'success') return;

    const timer = window.setTimeout(() => {
      setStatus({ type: 'idle', message: '' });
    }, 7000);

    return () => window.clearTimeout(timer);
  }, [status.type]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const fieldName = name as keyof FormState;

    const nextValue = fieldName === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value;

    const nextData = {
      ...formData,
      [fieldName]: nextValue,
    };

    setFormData(nextData);
    setErrors((current) => ({
      ...current,
      [fieldName]: validateField(fieldName, nextValue),
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus({ type: 'error', message: 'Please correct the highlighted fields before sending your message.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/chrisobodai40@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully. I will get back to you soon.',
      });
      setFormData(initialFormState);
      setErrors({});
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending your message. Please email me directly at chrisobodai40@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 sm:py-16">
      {/* Hero Section */}
      <section id="home" className="py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#f3f7fb]">Christian obodai Anang</h2>
        <p className="uppercase tracking-widest text-[#5eead4] text-sm font-semibold mt-2">Web Developer</p>
        <AnimatedSlogan />
        <p className="text-[#9fb0c0] mt-4 text-lg max-w-2xl">
          I create fast, modern, and user-friendly websites that help businesses stand out.
        </p>
        <div className="flex gap-4 mt-8">
          <Link
            href="#contact"
            className="btn btn-primary inline-flex items-center gap-2 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(94,234,212,0.22)]"
          >
            <FaDownload aria-hidden="true" />
            <span>Download resume</span>
          </Link>
          <Link
            href="#projects"
            className="btn btn-secondary inline-flex items-center gap-2 transition duration-200 hover:-translate-y-0.5 hover:border-[#5eead4] hover:text-[#f3f7fb] hover:shadow-[0_0_18px_rgba(94,234,212,0.14)]"
            aria-label="View projects section"
          >
            <span>View work</span>
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className="flex gap-16 mt-12 font-semibold text-[#f3f7fb]">
          <AnimatedCounter target={4} label="Years experience" />
          <AnimatedCounter target={7} label="Projects completed" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#102235] rounded-2xl p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-[#f3f7fb]">About</h2>
            <p className="text-[#9fb0c0] text-lg leading-relaxed">
              Hi there, I&apos;m just a cool dev who loves to explore.
              <br />
              I&apos;m a frontend-focused developer who enjoys turning ideas into responsive, accessible, and polished digital experiences. I care about clean interfaces, thoughtful user interactions, and writing maintainable code. I&apos;m also gradually learning backend development so I can grow into a well-rounded full-stack developer.
            </p>
          </div>
          <Workflow />
        </div>
      </section>

      <TechStack />

      {/* Projects Section */}
      <section id="projects" className="bg-[#102235] rounded-2xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-[#f3f7fb]">Projects</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-56 flex-col border border-[#27435a] rounded-lg p-5 bg-[#0b1a2a] transition hover:-translate-y-1 hover:border-[#5eead4]"
            >
              <div className="flex flex-wrap justify-end gap-2">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded border border-[#34536a] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#5eead4]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#f3f7fb]">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#9fb0c0]">{project.description}</p>
              <div className="mt-auto flex items-end justify-between pt-8">
                <span
                  className={`rounded border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                    project.status === 'Completed'
                      ? 'border-[#2f8f6b] bg-[#123a32] text-[#6ee7b7]'
                      : 'border-[#3972aa] bg-[#102d4a] text-[#7db8f2]'
                  }`}
                >
                  {project.status}
                </span>
                {project.hosted ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title}`}
                    title={`View ${project.title}`}
                    className="project-link inline-flex items-center gap-2 rounded border border-[#34536a] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#5eead4] transition"
                  >
                    <span>View site</span>
                    <FaArrowRight className="project-arrow" aria-hidden="true" />
                  </a>
                ) : (
                  <span
                    aria-label="PyGuide is not hosted yet"
                    title="Not hosted yet"
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded border border-[#4a5966] bg-[#1b2732] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#81909d]"
                  >
                    <FaLock aria-hidden="true" />
                    <span>Not hosted yet</span>
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#102235] rounded-2xl p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#f3f7fb]">Contact</h2>
          <p className="mt-2 text-[#9fb0c0]">Let&apos;s build something great together.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4 text-[#9fb0c0]">
            <p>
              Email: <span className="text-[#f3f7fb]">chrisobodai40@gmail.com</span>
            </p>
            <p>
              GitHub: <span className="text-[#f3f7fb]">github.com/chrixob</span>
            </p>
            <p>
              LinkedIn: <span className="text-[#f3f7fb]">www.linkedin.com/in/christian-anang-825b42388</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-[#27435a] bg-[#091827] p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-[#c7d6e4]">
                <span className="mb-2 block">Name</span>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#5eead4]">
                    <FaUser aria-hidden="true" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    className={`w-full rounded-xl border bg-[#0b1a2a] px-3 py-2.5 pl-10 text-[#f3f7fb] outline-none transition placeholder:text-[#708396] ${
                      errors.name ? 'border-red-400 focus:border-red-400' : 'border-[#34536a] focus:border-[#5eead4]'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-[#fda4af]">
                    <FaExclamationCircle aria-hidden="true" />
                    {errors.name}
                  </p>
                )}
              </label>

              <label className="block text-sm text-[#c7d6e4]">
                <span className="mb-2 block">Contact Number</span>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#5eead4]">
                    <FaPhoneAlt aria-hidden="true" />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    aria-invalid={Boolean(errors.phone)}
                    className={`w-full rounded-xl border bg-[#0b1a2a] px-3 py-2.5 pl-10 text-[#f3f7fb] outline-none transition placeholder:text-[#708396] ${
                      errors.phone ? 'border-red-400 focus:border-red-400' : 'border-[#34536a] focus:border-[#5eead4]'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-[#fda4af]">
                    <FaExclamationCircle aria-hidden="true" />
                    {errors.phone}
                  </p>
                )}
              </label>
            </div>

            <label className="block text-sm text-[#c7d6e4]">
              <span className="mb-2 block">Email Address</span>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#5eead4]">
                  <FaEnvelope aria-hidden="true" />
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  className={`w-full rounded-xl border bg-[#0b1a2a] px-3 py-2.5 pl-10 text-[#f3f7fb] outline-none transition placeholder:text-[#708396] ${
                    errors.email ? 'border-red-400 focus:border-red-400' : 'border-[#34536a] focus:border-[#5eead4]'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-1 flex items-center gap-1 text-xs text-[#fda4af]">
                  <FaExclamationCircle aria-hidden="true" />
                  {errors.email}
                </p>
              )}
            </label>

            <label className="block text-sm text-[#c7d6e4]">
              <span className="mb-2 block">Subject</span>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#5eead4]">
                  <FaPenNib aria-hidden="true" />
                </span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  aria-invalid={Boolean(errors.subject)}
                  className={`w-full rounded-xl border bg-[#0b1a2a] px-3 py-2.5 pl-10 text-[#f3f7fb] outline-none transition placeholder:text-[#708396] ${
                    errors.subject ? 'border-red-400 focus:border-red-400' : 'border-[#34536a] focus:border-[#5eead4]'
                  }`}
                />
              </div>
              {errors.subject && (
                <p className="mt-1 flex items-center gap-1 text-xs text-[#fda4af]">
                  <FaExclamationCircle aria-hidden="true" />
                  {errors.subject}
                </p>
              )}
            </label>

            <label className="block text-sm text-[#c7d6e4]">
              <span className="mb-2 block">Message</span>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-3 text-[#5eead4]">
                  <FaPaperPlane aria-hidden="true" />
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  aria-invalid={Boolean(errors.message)}
                  className={`w-full resize-none rounded-xl border bg-[#0b1a2a] px-3 py-2.5 pl-10 text-[#f3f7fb] outline-none transition placeholder:text-[#708396] ${
                    errors.message ? 'border-red-400 focus:border-red-400' : 'border-[#34536a] focus:border-[#5eead4]'
                  }`}
                />
              </div>
              {errors.message && (
                <p className="mt-1 flex items-center gap-1 text-xs text-[#fda4af]">
                  <FaExclamationCircle aria-hidden="true" />
                  {errors.message}
                </p>
              )}
            </label>

            {status.message ? (
              <p
                className={`flex items-center gap-2 text-sm ${
                  status.type === 'success' ? 'text-[#6ee7b7]' : 'text-[#fda4af]'
                }`}
              >
                {status.type === 'success' ? <FaCheckCircle aria-hidden="true" /> : <FaExclamationCircle aria-hidden="true" />}
                {status.message}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="btn btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
