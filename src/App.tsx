import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  Menu,
  X,
  Check,
  ChevronDown,
  Mouse,
  Code2,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Lightbulb,
  Award,
  Fingerprint,
  Palette,
  Globe2,
  MapPin,
  MessageCircle,
  Quote,
  Plus,
  Minus,
  Mail,
  Phone,
} from "lucide-react";
import { navLinks, services, packages, steps, faqs, whatsappUrl, type Project } from "./data";
import {
  Logo,
  SectionHeading,
  WhatsAppLink,
  Facebook,
  Instagram,
  Linkedin,
} from "./components/Brand";
import { PortfolioSection, ProjectMockup } from "./components/Portfolio";
import { ContactSection, type Enquiry } from "./components/Contact";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-15% 0px -65% 0px" },
    );
    navLinks.forEach(([, id]) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Logo />
        <nav aria-label="Main navigation" className={open ? "nav-links is-open" : "nav-links"}>
          {navLinks.map(([label, id]) => (
            <a
              href={`#${id}`}
              key={id}
              className={active === id ? "active" : ""}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="button button-primary nav-cta"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Get a quote <ArrowUpRight size={16} />
          </a>
        </nav>
        <button
          className="mobile-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="container hero-main">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="online-indicator" /> YOUR VISION. OUR INNOVATION.
          </div>
          <h1>
            Transforming ideas
            <br />
            into{" "}
            <span>
              digital
              <br className="desktop-break" /> solutions.
            </span>
            <span className="heading-dot" />
          </h1>
          <p>
            We design and develop modern websites, intelligent software and digital experiences that
            help businesses and organisations grow in an increasingly connected world.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#services">
              Explore our services <ArrowUpRight size={18} />
            </a>
            <a className="button button-outline-light" href="#contact">
              Start your project <ArrowRight size={18} />
            </a>
          </div>
          <div className="hero-checks">
            {["Modern design", "Reliable solutions", "Client-focused"].map((t) => (
              <span key={t}>
                <Check size={14} />
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit" />
          <img
            src="/images/digital-devices.png"
            alt="Premium laptop and smartphone showing a modern, responsive website design"
            width="1536"
            height="1024"
            fetchPriority="high"
          />
          <div className="float-card card-code">
            <span className="float-icon">
              <Code2 size={23} />
            </span>
            <div>
              <strong>Built for your next big idea.</strong>
              <span>Thoughtful design. Powerful code.</span>
            </div>
          </div>
          <div className="float-card card-responsive">
            <span className="responsive-check">
              <Check size={16} />
            </span>
            <div>
              <strong>Beautiful on every screen</strong>
              <span>100% responsive experiences</span>
            </div>
          </div>
          <div className="visual-caption">
            <span /> IMAGINATION MEETS EXECUTION
          </div>
        </div>
      </div>
      <div className="container hero-bottom">
        <a href="#services" className="scroll-indicator">
          <Mouse size={19} />
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown size={13} />
        </a>
        <div className="hero-location">
          <MapPin size={15} />
          <span>
            Based in Zimbabwe. <strong>Building beyond borders.</strong>
          </span>
        </div>
        <WhatsAppLink>Let’s talk</WhatsAppLink>
      </div>
      <div className="hero-strip">
        <div className="container">
          <div>
            <Globe2 />
            <span>
              Rooted in Africa.<strong>Connected to the world.</strong>
            </span>
          </div>
          <div>
            <Code2 />
            <span>
              Thoughtful technology.<strong>Real-world solutions.</strong>
            </span>
          </div>
          <div>
            <HeartHandshake />
            <span>
              Your goals. Our commitment.<strong>One shared vision.</strong>
            </span>
          </div>
          <span className="strip-tagline">
            Innovate. Build. <em>Empower.</em>
            <ArrowUpRight size={27} />
          </span>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ onMore }: { onMore: (index: number) => void }) {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="heading-row">
          <SectionHeading
            eyebrow="WHAT WE BRING TO THE TABLE"
            title={
              <>
                Digital expertise.
                <br />
                <span className="muted-title">Endless possibilities.</span>
              </>
            }
          />
          <p className="heading-aside">
            From your first website to your next big platform,
            <br className="desktop-break" /> we build the digital tools that move you forward.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <article className="service-card" key={s.title}>
              <div className="service-card-top">
                <span className="service-icon">
                  <s.icon size={26} strokeWidth={1.6} />
                </span>
                <span className="card-number">0{i + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
              <button className="text-link" onClick={() => onMore(i)}>
                Learn more <ArrowUpRight size={17} />
              </button>
            </article>
          ))}
        </div>
        <div className="services-bottom">
          <p>
            Not sure where to start? <strong>Let’s find the right solution together.</strong>
          </p>
          <WhatsAppLink>Talk to us</WhatsAppLink>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const values = [
    ["Innovation", Lightbulb],
    ["Excellence", Award],
    ["Integrity", Fingerprint],
    ["Creativity", Palette],
    ["Reliability", ShieldCheck],
    ["Customer satisfaction", HeartHandshake],
  ] as const;
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-art">
            <div className="about-art-grid" />
            <span className="about-art-label">A NEW GENERATION OF AFRICAN INNOVATION</span>
            <div className="about-logo">
              <Logo light />
            </div>
            <svg viewBox="0 0 320 300" className="africa-art" aria-hidden="true">
              <defs>
                <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="4" cy="4" r="1.4" fill="#8ba0b8" />
                </pattern>
              </defs>
              <path
                d="M65 65L88 34L132 26L164 35L185 31L199 51L218 57L231 79L260 100L290 101L271 131L246 144L230 175L218 194L216 224L197 252L177 271L157 261L151 231L132 205L124 180L110 163L82 169L59 154L39 130L39 101Z"
                fill="url(#dots)"
              />
              <path d="M242 226L250 207L256 213L253 239L244 252L237 246Z" fill="#FF8A00" />
              <circle cx="189" cy="226" r="5" fill="#FF8A00" />
              <circle cx="189" cy="226" r="13" stroke="#FF8A00" strokeOpacity=".4" fill="none" />
              <circle cx="189" cy="226" r="23" stroke="#FF8A00" strokeOpacity=".15" fill="none" />
              <path
                d="M189 226Q110 70 65 88M189 226Q245 110 278 121M189 226Q182 96 165 53"
                stroke="#FF8A00"
                strokeWidth=".8"
                fill="none"
                strokeDasharray="4 5"
                opacity=".5"
              />
            </svg>
            <div className="about-art-bottom">
              <span className="online-indicator" /> BUILT IN ZIMBABWE. MADE FOR POSSIBILITY.
              <ArrowUpRight size={21} />
            </div>
            <div className="about-art-card">
              <span className="service-icon">
                <Sparkles size={22} />
              </span>
              <div>
                Big ambition.<strong>Meaningful impact.</strong>
              </div>
            </div>
          </div>
          <div className="about-copy">
            <SectionHeading
              eyebrow="THE PEOPLE BEHIND THE PIXELS"
              title={
                <>
                  Technology with purpose.
                  <br />
                  <span className="muted-title">Innovation without limits.</span>
                </>
              }
            />
            <p>
              We’re Savanna Intelligence — a digital technology company with a simple belief: great
              technology should open doors, not create barriers.
            </p>
            <p>
              We bring together website development, software engineering, digital design and
              technology solutions to help businesses, institutions and individuals build a stronger
              digital future.
            </p>
            <div className="mission-grid">
              <div>
                <span>01 / OUR MISSION</span>
                <p>
                  To empower businesses, institutions and individuals through accessible, innovative
                  and reliable technology solutions.
                </p>
              </div>
              <div>
                <span>02 / OUR VISION</span>
                <p>
                  To become a trusted technology partner driving digital transformation across
                  Africa and beyond.
                </p>
              </div>
            </div>
            <a href="#contact" className="text-link">
              Let’s create something meaningful <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="values-row">
          <span className="values-label">
            THE VALUES
            <br />
            <strong>THAT GUIDE US</strong>
          </span>
          {values.map(([label, Icon]) => (
            <div key={label} className="value">
              <Icon size={21} strokeWidth={1.5} />
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="why-us">
          <div>
            <span className="eyebrow">WHY PARTNER WITH US?</span>
            <h3>
              Good people.
              <br />
              Great digital experiences.
            </h3>
          </div>
          <div className="why-grid">
            {[
              "Modern, professional designs",
              "Affordable digital solutions",
              "Responsive & mobile-friendly",
              "Client-focused development",
              "Clear, reliable communication",
              "Continuous improvement & support",
            ].map((t) => (
              <span key={t}>
                <span className="check-circle">
                  <Check size={13} />
                </span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section process-section">
      <div className="container">
        <div className="heading-row">
          <SectionHeading
            light
            eyebrow="FROM THE FIRST HELLO TO THE FINAL LAUNCH"
            title={
              <>
                Great things don’t happen by chance.
                <br />
                <span>They happen by process.</span>
              </>
            }
          />
          <p className="heading-aside">
            Clear steps. Open communication.
            <br />A shared commitment to getting it right.
          </p>
        </div>
        <div className="process-grid">
          {steps.map(([title, description], i) => (
            <div className="process-step" key={title}>
              <div className="process-marker">
                <span>0{i + 1}</span>
                {i < 6 && <ArrowRight size={15} />}
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <div className="process-bottom">
          <ShieldCheck size={17} />
          <span>You’re part of the process. Every step of the way.</span>
          <a href="#contact">
            Let’s get started <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function PricingSection({ onSelect }: { onSelect: (index: number) => void }) {
  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <SectionHeading
          center
          eyebrow="BIG POSSIBILITIES. ACCESSIBLE STARTING POINTS."
          title={
            <>
              Your investment in <span className="muted-title">what’s next.</span>
            </>
          }
          description="Professional websites. Transparent starting prices. Built around your goals."
        />
        <div className="pricing-grid">
          {packages.map((p, i) => (
            <article key={p.name} className={`pricing-card ${i === 1 ? "featured" : ""}`}>
              {i === 1 && (
                <div className="popular-label">
                  <Sparkles size={13} /> THE GROWTH ESSENTIAL
                </div>
              )}
              <div className="package-heading">
                <span className="package-icon">
                  {i === 0 ? (
                    <Globe2 size={21} />
                  ) : i === 1 ? (
                    <Code2 size={21} />
                  ) : (
                    <Sparkles size={21} />
                  )}
                </span>
                <h3>{p.name}</h3>
              </div>
              <p className="package-description">{p.description}</p>
              <div className="price">
                <span>Starting from</span>
                <div>
                  <strong>${p.price}</strong>
                  <span>USD / project</span>
                </div>
              </div>
              <button
                className={`button ${i === 1 ? "button-primary" : "button-outline"}`}
                onClick={() => onSelect(i)}
              >
                Request this package <ArrowUpRight size={17} />
              </button>
              <div className="package-divider" />
              <span className="included-label">WHAT’S INCLUDED</span>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <Check size={15} />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="pricing-disclaimer">
          All prices are starting prices in USD. Final quotations depend on your project’s
          requirements and complexity.
          <br />
          Hosting, domains and third-party services are quoted separately where required.
        </p>
        <div className="custom-quote">
          <div>
            <h3>Need something different?</h3>
            <p>Every project is unique. Let’s tailor a quotation to your requirements.</p>
          </div>
          <a href="#contact" className="button button-dark">
            Request a custom quote <ArrowUpRight size={17} />
          </a>
          <WhatsAppLink>Let’s discuss</WhatsAppLink>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section section-soft testimonials-section">
      <div className="container">
        <div className="heading-row">
          <SectionHeading
            eyebrow="BUILDING RELATIONSHIPS, NOT JUST PRODUCTS"
            title={
              <>
                Your success.<span className="muted-title"> Our best story.</span>
              </>
            }
          />
          <span className="placeholder-note">
            <Quote size={15} /> TESTIMONIAL PREVIEW
          </span>
        </div>
        <p className="testimonial-intro">
          This space is reserved for the people and organisations we help. Until then, here’s what
          we aim to deliver.
        </p>
        <div className="testimonials-grid">
          {[
            [
              "A partnership, not just a project.",
              "Our aim is to make you feel heard, supported and confident at every stage — from your first idea to your final launch.",
              "For businesses",
            ],
            [
              "Technology that makes a difference.",
              "We want every digital solution to solve a real problem, save time and create meaningful opportunities for the people who use it.",
              "For institutions",
            ],
            [
              "Your vision, thoughtfully brought to life.",
              "Our goal is to turn your ambitions into digital experiences you are proud to share with the world.",
              "For individuals",
            ],
          ].map(([title, text, audience]) => (
            <article key={title} className="testimonial-card">
              <Quote className="quote-mark" size={27} />
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="testimonial-person">
                <span>
                  <HeartHandshake size={19} />
                </span>
                <div>
                  <strong>{audience}</strong>
                  <small>Our commitment · Not a client review</small>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="portfolio-disclaimer">
          Placeholder content — these are our service commitments, not genuine customer
          testimonials. Real feedback will be added with permission.
        </p>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section faq-section">
      <div className="container faq-grid">
        <div className="faq-intro">
          <SectionHeading
            eyebrow="A LITTLE CLARITY GOES A LONG WAY"
            title={
              <>
                Good questions.
                <br />
                <span className="muted-title">Honest answers.</span>
              </>
            }
            description="Everything you might be wondering before we start building together."
          />
          <div className="faq-help">
            <span className="contact-icon">
              <MessageCircle size={23} />
            </span>
            <h3>Still have a question?</h3>
            <p>We’re always happy to talk it through.</p>
            <WhatsAppLink>Ask us on WhatsApp</WhatsAppLink>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <div className={`faq-item ${open === i ? "open" : ""}`} key={q}>
              <h3>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="faq-number">{String(i + 1).padStart(2, "0")}</span>
                  <span>{q}</span>
                  {open === i ? <Minus size={17} /> : <Plus size={17} />}
                </button>
              </h3>
              <div id={`faq-answer-${i}`} className="faq-answer" hidden={open !== i}>
                <p>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo light />
            <p>Empowering businesses and individuals through innovative digital solutions.</p>
            <span className="footer-tagline">
              Innovate. Build. <em>Empower.</em>
            </span>
            <div className="social-links">
              {[
                [Facebook, "Facebook"],
                [Instagram, "Instagram"],
                [Linkedin, "LinkedIn"],
              ].map(([Icon, label]) => {
                const SocialIcon = Icon as typeof Facebook;
                return (
                  <span
                    key={String(label)}
                    title={`${label} — profile coming soon`}
                    aria-label={`${label} profile coming soon`}
                    className="social-placeholder"
                  >
                    <SocialIcon size={17} />
                  </span>
                );
              })}
              <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <MessageCircle size={17} />
              </a>
            </div>
            <small className="social-note">Social profiles coming soon.</small>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            {navLinks.map(([l, id]) => (
              <a key={id} href={`#${id}`}>
                {l}
              </a>
            ))}
          </div>
          <div className="footer-column">
            <h3>What we do</h3>
            {[
              "Website Development",
              "Software Development",
              "Mobile Applications",
              "UI/UX Design",
              "Database Development",
              "Digital Consultancy",
            ].map((s) => (
              <a href="#services" key={s}>
                {s}
              </a>
            ))}
          </div>
          <div className="footer-column footer-contact">
            <h3>Let’s connect</h3>
            <a href="tel:+263788050729">
              <Phone size={15} />
              0788050729
            </a>
            <a href="mailto:ianedson988@gmail.com">
              <Mail size={15} />
              ianedson988@gmail.com
            </a>
            <span>
              <MapPin size={15} />
              Zimbabwe
            </span>
            <a className="footer-cta" href="#contact">
              Have a project in mind?
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Savanna Intelligence. All Rights Reserved.</span>
          <span>
            Made with purpose. Built for possibility.
            <span className="orange-square" />
          </span>
          <a href="#home">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

function Modal({ content, onClose }: { content: ReactNode; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    d?.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = old;
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="detail-modal"
      aria-label="Project or service details"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button className="modal-close" onClick={onClose} aria-label="Close details">
        <X size={21} />
      </button>
      {content}
    </dialog>
  );
}

export default function App() {
  const [modal, setModal] = useState<
    { type: "service"; index: number } | { type: "project"; project: Project } | null
  >(null);
  const [enquiry, setEnquiry] = useState<Enquiry>({ service: "", budget: "", description: "" });
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const scroll = () => setShowTop(window.scrollY > 900);
    window.addEventListener("scroll", scroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(
        ".section-heading,.service-card,.about-art,.pricing-card,.process-step,.testimonial-card",
      )
      .forEach((el) => {
        el.classList.add("reveal");
        observer.observe(el);
      });
    return () => {
      window.removeEventListener("scroll", scroll);
      observer.disconnect();
    };
  }, []);
  const request = (service: string, budget = "", description = "") => {
    setEnquiry({ service, budget, description });
    setModal(null);
    window.setTimeout(
      () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
      50,
    );
  };
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <ServicesSection onMore={(index) => setModal({ type: "service", index })} />
        <PortfolioSection onView={(project) => setModal({ type: "project", project })} />
        <AboutSection />
        <ProcessSection />
        <PricingSection
          onSelect={(i) =>
            request(
              "Website Development",
              ["$120 – $349", "$350 – $599", "$600+"][i],
              `I am interested in the ${packages[i].name} package. Here is what I would like to build: `,
            )
          }
        />
        <TestimonialsSection />
        <FAQSection />
        <div className="cta-banner">
          <div className="container">
            <div>
              <span className="eyebrow">YOUR IDEAS DESERVE TO GO FURTHER</span>
              <h2>
                Let’s turn “what if” into <em>what’s next.</em>
              </h2>
            </div>
            <a href="#contact" className="button button-primary">
              Start your project <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
        <ContactSection enquiry={enquiry} setEnquiry={setEnquiry} />
      </main>
      <Footer />
      <div className="floating-controls">
        {showTop && (
          <a className="back-to-top" href="#home" aria-label="Back to top">
            <ArrowUp size={19} />
          </a>
        )}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="floating-whatsapp"
          aria-label="Chat with Savanna Intelligence on WhatsApp"
        >
          <MessageCircle size={26} />
          <span className="floating-tooltip">Let’s talk about your idea</span>
        </a>
      </div>
      {modal && (
        <Modal
          onClose={() => setModal(null)}
          content={
            modal.type === "service" ? (
              <div className="service-detail">
                <span className="service-icon">
                  {(() => {
                    const Icon = services[modal.index].icon;
                    return <Icon size={30} />;
                  })()}
                </span>
                <span className="eyebrow">OUR EXPERTISE / 0{modal.index + 1}</span>
                <h2>{services[modal.index].title}</h2>
                <p>{services[modal.index].description}</p>
                <h3>How we can help</h3>
                <ul>
                  {services[modal.index].features.map((f) => (
                    <li key={f}>
                      <Check size={16} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="button button-primary"
                  onClick={() =>
                    request(
                      services[modal.index].title === "Mobile App Development"
                        ? "Mobile Application Development"
                        : services[modal.index].title,
                    )
                  }
                >
                  Discuss this service <ArrowUpRight size={17} />
                </button>
                <WhatsAppLink />
              </div>
            ) : (
              <div className="project-detail">
                <ProjectMockup project={modal.project} />
                <div className="project-detail-copy">
                  <span className="eyebrow">ILLUSTRATIVE CONCEPT · NOT CLIENT WORK</span>
                  <h2>{modal.project.name}</h2>
                  <p>{modal.project.description}</p>
                  <div className="tech-tags">
                    {modal.project.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <p className="project-detail-note">
                    This is a visual concept showcasing a possible direction. It is not a live
                    product or completed client project; functionality and technologies would be
                    agreed during discovery.
                  </p>
                  <button
                    className="button button-primary"
                    onClick={() =>
                      request(
                        modal.project.category === "Software"
                          ? "Software Development"
                          : modal.project.category === "Mobile Apps"
                            ? "Mobile Application Development"
                            : "Website Development",
                        "",
                        "I would like to discuss a project inspired by your " +
                          modal.project.name +
                          " concept. ",
                      )
                    }
                  >
                    Build something like this <ArrowUpRight size={17} />
                  </button>
                </div>
              </div>
            )
          }
        />
      )}
    </>
  );
}
