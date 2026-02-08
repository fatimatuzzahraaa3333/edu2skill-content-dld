import Link from "next/link";

export const metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-10">
            Have questions, suggestions, or collaboration ideas?  
            Feel free to reach out through any of the platforms below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <ContactItem
              icon={MailIcon}
              title="Email"
              value="m.abobakar.aslam@gmail.com"
              link="mailto:m.abobakar.aslam@gmail.com"
            />

            <ContactItem
              icon={LocationIcon}
              title="Location"
              value="Gujrat, Pakistan"
            />

            <ContactItem
              icon={WhatsAppIcon}
              title="WhatsApp"
              value="+92 313 5369068"
              link="https://wa.me/923135369068"
            />
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-semibold mb-6">
              Connect on Social Media
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <SocialLink
                href="https://github.com/abobakaraslam"
                icon={GitHubIcon}
                label="GitHub"
              />

              <SocialLink
                href="https://www.youtube.com/@learningwithabobakar"
                icon={YouTubeIcon}
                label="YouTube"
              />

              <SocialLink
                href="https://www.linkedin.com/"
                icon={LinkedInIcon}
                label="LinkedIn"
              />

              <SocialLink
                href="https://twitter.com/"
                icon={TwitterIcon}
                label="Twitter"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =======================
   Reusable Components
======================= */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ContactItem({ icon: Icon, title, value, link }: any) {
  const Wrapper = link ? Link : "div";

  return (
    <Wrapper
      href={link || "#"}
      className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50 transition"
    >
      <Icon />
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-600 text-sm">{value}</p>
      </div>
    </Wrapper>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SocialLink({ href, icon: Icon, label }: any) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 transition"
    >
      <Icon />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}

/* =======================
   SVG Icons
======================= */

const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6M3 7h18v10H3z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.33 7-11a7 7 0 10-14 0c0 5.67 7 11 7 11z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2a10 10 0 00-8.74 14.9L2 22l5.25-1.38A10 10 0 1012.04 2z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 00-3.16 19.48c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34a2.65 2.65 0 00-1.11-1.46c-.9-.62.07-.6.07-.6a2.1 2.1 0 011.54 1.03 2.13 2.13 0 002.92.83 2.13 2.13 0 01.63-1.34c-2.22-.25-4.56-1.11-4.56-4.95a3.9 3.9 0 011.03-2.7 3.6 3.6 0 01.1-2.66s.84-.27 2.75 1.03a9.5 9.5 0 015 0c1.9-1.3 2.74-1.03 2.74-1.03a3.6 3.6 0 01.1 2.66 3.9 3.9 0 011.03 2.7c0 3.85-2.34 4.7-4.57 4.95a2.4 2.4 0 01.68 1.86v2.76c0 .26.18.59.69.48A10 10 0 0012 2z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5 6.5s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C17.7 2.8 12 2.8 12 2.8h0s-5.7 0-8.6.3c-.4.1-1.3.1-2.1 1C.7 4.8.5 6.5.5 6.5S0 8.4 0 10.3v1.4c0 1.9.5 3.8.5 3.8s.2 1.7.8 2.4c.8.9 1.9.9 2.4 1 1.7.2 7.3.3 7.3.3s5.7 0 8.6-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.5-1.9.5-3.8v-1.4c0-1.9-.5-3.8-.5-3.8zM9.75 14.5v-5l5 2.5-5 2.5z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h3.96V21H3zM9.5 8.98H13v1.64h.05c.49-.93 1.7-1.9 3.5-1.9 3.75 0 4.45 2.47 4.45 5.68V21h-3.96v-5.4c0-1.29-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.85V21H9.5z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.6 8.6 0 01-2.72 1.04A4.28 4.28 0 0016.1 4a4.3 4.3 0 00-4.29 4.29c0 .34.04.67.11.98A12.2 12.2 0 013 5.1a4.3 4.3 0 001.33 5.72 4.2 4.2 0 01-1.94-.54v.06a4.3 4.3 0 003.44 4.22 4.3 4.3 0 01-1.93.07 4.3 4.3 0 004.01 2.98A8.6 8.6 0 012 19.54a12.1 12.1 0 006.56 1.92c7.87 0 12.18-6.52 12.18-12.18v-.55A8.6 8.6 0 0022.46 6z" />
  </svg>
);
