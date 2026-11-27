import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  LayoutGrid,
  Search,
  Bell,
  MoreHorizontal,
  Check,
  ShoppingBag,
  Leaf,
  GraduationCap,
} from "lucide-react";
import { projects, type Project } from "../data";
import { SectionHeading } from "./Brand";

export function ProjectMockup({ project }: { project: Project }) {
  const style = project.style;
  return (
    <div className={`project-mockup mockup-${style}`} aria-hidden="true">
      {style === "mobile" ? (
        <div className="phone-composition">
          <div className="mini-phone phone-back">
            <div className="phone-notch" />
            <span className="tiny-label">YOUR DAY, IN BALANCE</span>
            <h3>
              Make room
              <br />
              for what matters.
            </h3>
            <div className="app-orbit">
              <Leaf size={42} />
            </div>
            <span className="app-start">
              Let’s get started <ArrowRight size={12} />
            </span>
          </div>
          <div className="mini-phone phone-front">
            <div className="phone-notch" />
            <small>Good morning, Alex</small>
            <h3>
              A little progress.
              <br />
              Every day.
            </h3>
            <div className="progress-circle">
              75<small>%</small>
            </div>
            <b>Your daily focus</b>
            {["Move your body", "Take a quiet moment", "Learn something new"].map((t) => (
              <div className="mobile-task" key={t}>
                <span>
                  <Check size={9} />
                </span>
                {t}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="browser-mockup">
          <div className="browser-bar">
            <i />
            <i />
            <i />
            <span>
              {style === "dashboard"
                ? "app.studentsphere.demo"
                : style === "school"
                  ? "greenfield.demo"
                  : style === "commerce"
                    ? "formandfield.demo"
                    : style === "students"
                      ? "campus.demo"
                      : "nexus.demo"}
            </span>
            <MoreHorizontal size={10} />
          </div>
          {style === "dashboard" || style === "students" ? (
            <div className="dash-layout">
              <aside>
                <div className="dash-logo">
                  <GraduationCap size={16} />
                  {style === "dashboard" ? "StudentSphere" : "campus"}
                </div>
                {["Overview", "Students", "Courses", "Attendance", "Reports", "Settings"].map(
                  (n, i) => (
                    <div className={`dash-nav ${i === 0 ? "selected" : ""}`} key={n}>
                      <LayoutGrid size={9} />
                      {n}
                    </div>
                  ),
                )}
              </aside>
              <div className="dash-content">
                <div className="dash-top">
                  <span>Overview</span>
                  <div>
                    <Search size={10} />
                    <Bell size={10} />
                    <i>JD</i>
                  </div>
                </div>
                <h4>
                  {style === "dashboard" ? "Welcome back, James" : "Your school, at a glance."}
                </h4>
                <p>Here’s what’s happening on your campus today.</p>
                <div className="dash-stats">
                  {[
                    ["Total students", "1,248"],
                    ["Attendance", "96.4%"],
                    ["Active courses", "32"],
                  ].map(([label, num]) => (
                    <div key={label}>
                      <small>{label}</small>
                      <strong>{num}</strong>
                      <em>+ this term</em>
                    </div>
                  ))}
                </div>
                <div className="chart">
                  <b>Student activity</b>
                  <div className="bars">
                    {[32, 50, 43, 68, 55, 76, 60, 85, 71, 91, 77, 97].map((v, i) => (
                      <i key={i} style={{ height: `${v}%` }} />
                    ))}
                  </div>
                </div>
                <div className="dash-table">
                  <b>Recent student registrations</b>
                  {["T. Moyo", "R. Ndlovu", "C. Dube"].map((n, i) => (
                    <div key={n}>
                      <span className="avatar-tiny">{n[0]}</span>
                      <span>{n}</span>
                      <span>Year {i + 1}</span>
                      <em>Active</em>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : style === "school" ? (
            <div className="school-site">
              <div className="mini-nav">
                <b>
                  <GraduationCap size={17} /> Greenfield<span>ACADEMY</span>
                </b>
                <span>Our school　 Academics　 Admissions</span>
                <em>Apply now ↗</em>
              </div>
              <div className="school-hero">
                <div>
                  <small>A BRIGHTER TOMORROW STARTS HERE</small>
                  <h3>
                    Great minds.
                    <br />
                    Brighter futures.
                  </h3>
                  <p>
                    Inspiring curiosity. Nurturing potential.
                    <br />A world of possibility awaits.
                  </p>
                  <span className="mock-btn">Discover Greenfield →</span>
                </div>
                <div className="school-art">
                  <GraduationCap size={70} />
                  <span>
                    EST.
                    <br />
                    <b>2026</b>
                  </span>
                </div>
              </div>
              <div className="school-bottom">
                <span>
                  <strong>Learn.</strong> With curiosity.
                </span>
                <span>
                  <strong>Grow.</strong> With confidence.
                </span>
                <span>
                  <strong>Lead.</strong> With purpose.
                </span>
              </div>
            </div>
          ) : style === "commerce" ? (
            <div className="commerce-site">
              <div className="mini-nav">
                <b>form & field.</b>
                <span>Shop　 Our story　 Journal</span>
                <ShoppingBag size={13} />
              </div>
              <div className="commerce-hero">
                <div>
                  <small>THOUGHTFULLY MADE. EVERY DAY.</small>
                  <h3>
                    Less, but
                    <br />
                    better.
                  </h3>
                  <p>Objects for a considered life.</p>
                  <span className="mock-btn">Explore the collection →</span>
                </div>
                <div className="product-scene">
                  <div className="vase vase-one" />
                  <div className="vase vase-two" />
                  <div className="vase-stem" />
                </div>
              </div>
              <div className="commerce-bottom">
                GOOD DESIGN. NATURAL MATERIALS. LASTING QUALITY.
              </div>
            </div>
          ) : (
            <div className="business-site">
              <div className="mini-nav">
                <b>
                  nexus<span>.</span>
                </b>
                <span>Company　 Solutions　 Insights</span>
                <em>Let’s connect ↗</em>
              </div>
              <div className="business-hero">
                <small>PROGRESS, BY DESIGN.</small>
                <h3>
                  Ambitious ideas.
                  <br />
                  <i>Extraordinary impact.</i>
                </h3>
                <p>
                  We help forward-thinking businesses
                  <br />
                  find their next opportunity.
                </p>
                <span className="mock-btn">Discover what’s next ↗</span>
                <div className="architectural-shape">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="business-bottom">A NEW PERSPECTIVE ON WHAT’S POSSIBLE.</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function PortfolioSection({ onView }: { onView: (project: Project) => void }) {
  const [filter, setFilter] = useState("All Projects");
  const filtered = projects.filter(
    (p) =>
      filter === "All Projects" ||
      p.category === filter ||
      (filter === "UI/UX" && p.style === "mobile"),
  );
  return (
    <section id="work" className="section section-soft">
      <div className="container">
        <div className="heading-row">
          <SectionHeading
            eyebrow="A GLIMPSE OF WHAT’S POSSIBLE"
            title={
              <>
                Big ideas. <span className="muted-title">Real possibilities.</span>
              </>
            }
            description="A little imagination. A lot of potential. Explore our digital concepts."
          />
          <a className="text-link desktop-link" href="#contact">
            Have something in mind? <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="portfolio-toolbar">
          <div className="filters" aria-label="Filter portfolio">
            {["All Projects", "Websites", "Software", "Mobile Apps", "UI/UX"].map((f) => (
              <button
                key={f}
                className={filter === f ? "active" : ""}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <span className="concept-note">
            <span />
            Concept showcase · Not client projects
          </span>
        </div>
        <div className="project-grid">
          {filtered.map((p) => (
            <article className="project-card" key={p.id}>
              <button
                className="project-image-button"
                onClick={() => onView(p)}
                aria-label={`View ${p.name} concept`}
              >
                <ProjectMockup project={p} />
                <span className="mockup-badge">CONCEPT PROJECT</span>
                <span className="project-open">
                  <ArrowUpRight size={22} />
                </span>
              </button>
              <div className="project-info">
                <span className="project-category">{p.label}</span>
                <button onClick={() => onView(p)} className="project-title">
                  {p.title}
                  <ArrowUpRight size={20} />
                </button>
                <p>{p.name}</p>
                <div className="project-meta">
                  <div className="tech-tags">
                    {p.tech.slice(0, 2).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <button className="view-project" onClick={() => onView(p)}>
                    View project <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="portfolio-disclaimer">
          Designed to demonstrate our approach. All projects shown are illustrative concepts, not
          completed client work.
        </p>
      </div>
    </section>
  );
}
