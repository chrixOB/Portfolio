import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/chrixob', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/christian-anang-825b42388', icon: FaLinkedinIn },
  { label: 'WhatsApp', href: 'https://wa.me/?text=Hello%20Christian', icon: FaWhatsapp },
];

function WorkstationIllustration() {
  return (
    <div className="workstation" aria-label="Animated illustration of a developer working at a computer" role="img">
      <div className="workstation-glow" />
      <div className="workstation-monitor">
        <div className="workstation-camera" />
        <div className="workstation-screen">
          <div className="workstation-code-dots"><i /><i /><i /></div>
          <span />
          <span />
          <span />
        </div>
        <div className="workstation-stand" />
      </div>
      <div className="workstation-person">
        <div className="workstation-head"><i /><i /></div>
        <div className="workstation-body" />
        <div className="workstation-arm workstation-arm-left" />
        <div className="workstation-arm workstation-arm-right" />
      </div>
      <div className="workstation-keyboard" />
      <div className="workstation-mug"><i /></div>
      <div className="workstation-desk" />
      <div className="workstation-chair" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[#1d354a] bg-[#091827] px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5eead4]">Let&apos;s build something</p>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#9fb0c0] sm:mx-0">
            Available for thoughtful digital projects and collaborative work.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 sm:justify-start">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="social-link"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
            <a
              href="mailto:chrisobodai40@gmail.com"
              aria-label="Email"
              title="Email"
              className="social-link"
            >
              <FaEnvelope aria-hidden="true" />
            </a>
          </div>
          <p className="mt-8 text-md text-[#708396]">
            &copy; {new Date().getFullYear()} Christian Obodai Anang. All rights reserved.
          </p>
        </div>
        <div className="self-center sm:self-auto">
          <WorkstationIllustration />
        </div>
      </div>
    </footer>
  );
}