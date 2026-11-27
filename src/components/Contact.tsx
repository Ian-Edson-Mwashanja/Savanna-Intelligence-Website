import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Send,
} from "lucide-react";

import { services } from "../data";
import { SectionHeading, WhatsAppLink } from "./Brand";

export type Enquiry = {
  service: string;
  budget: string;
  description: string;
};

export function ContactSection({
  enquiry,
  setEnquiry,
}: {
  enquiry: Enquiry;
  setEnquiry: (value: Enquiry) => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitting) return;

    setError("");

    // Validate full name.
    if (name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    // Validate email.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    // Validate phone number if provided.
    if (phone && !/^[+\d\s()-]{7,20}$/.test(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    // Validate service.
    if (!enquiry.service) {
      setError("Please select the service you require.");
      return;
    }

    // Validate budget.
    if (!enquiry.budget) {
      setError("Please select your project budget.");
      return;
    }

    // Validate project description.
    if (enquiry.description.trim().length < 20) {
      setError(
        "Please describe your project in at least 20 characters."
      );
      return;
    }

    setSubmitting(true);

    try {
      // Get the actual form data.
      const formElement = event.currentTarget;
      const formData = new FormData(formElement);

      // Ensure Netlify receives the correct form name.
      formData.set("form-name", "contact");

      // Convert form data into URL-encoded format.
      const encodedData = new URLSearchParams();

      formData.forEach((value, key) => {
        if (typeof value === "string") {
          encodedData.append(key, value);
        }
      });

      // Submit to Netlify Forms.
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodedData.toString(),
      });

      if (!response.ok) {
        throw new Error(
          `Form submission failed with status ${response.status}`
        );
      }

      // Show success message.
      setSubmitted(true);

    } catch (err) {
      console.error("Contact form submission error:", err);

      setError(
        "Your enquiry could not be submitted. Please try again or contact us directly through WhatsApp or email."
      );

    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">

        {/* LEFT SIDE: COMPANY CONTACT INFORMATION */}

        <div>
          <SectionHeading
            eyebrow="YOUR NEXT CHAPTER STARTS HERE"
            title={
              <>
                Let&apos;s build something
                <br />
                <span className="muted-title">
                  great together.
                </span>
              </>
            }
            description="Have an idea, a business or a project that needs a digital solution? We would love to hear from you."
          />

          <div className="contact-details">

            <a href="tel:+263788050729">
              <span className="contact-icon">
                <Phone size={20} />
              </span>

              <div>
                <small>Give us a call</small>
                <strong>0788 050 729</strong>
              </div>

              <ArrowUpRight size={17} />
            </a>

            <a href="mailto:ianedson988@gmail.com">
              <span className="contact-icon">
                <Mail size={20} />
              </span>

              <div>
                <small>Drop us a line</small>
                <strong>ianedson988@gmail.com</strong>
              </div>

              <ArrowUpRight size={17} />
            </a>

            <div>
              <span className="contact-icon">
                <MapPin size={20} />
              </span>

              <div>
                <small>
                  Rooted in Africa. Building for the world.
                </small>
                <strong>Zimbabwe</strong>
              </div>
            </div>

          </div>

          <div className="contact-whatsapp">
            <span className="online-indicator" />
            Prefer a conversation?
            <WhatsAppLink />
          </div>

          <div className="contact-brand-note">
            <span>GOOD IDEAS DESERVE GREAT EXECUTION.</span>

            <p>
              Your Digital Dreams,
              <br />
              <em>Our Expertise!</em>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: CONTACT FORM */}

        <div className="contact-form-card">

          {submitted ? (

            /* SUCCESS MESSAGE */

            <div className="form-success" role="status">

              <span className="success-icon">
                <CheckCircle2 size={40} />
              </span>

              <span className="eyebrow">
                YOUR IDEA IS READY FOR THE NEXT STEP
              </span>

              <h3>
                Great things start
                <br />
                with a conversation.
              </h3>

              <p>
                Thank you, {name.split(" ")[0]}!
                Your project enquiry has been successfully submitted
                to Savanna Intelligence.
              </p>

              <p>
                We appreciate your interest in our services.
                We will get back to you using the contact details
                you provided.
              </p>

              <a
                className="button button-primary"
                href="mailto:ianedson988@gmail.com"
              >
                <Mail size={17} />
                Contact us by email
                <ArrowUpRight size={17} />
              </a>

              <WhatsAppLink />

              <button
                type="button"
                className="text-link"
                onClick={() => {
                  setSubmitted(false);
                  setName("");
                  setEmail("");
                  setPhone("");
                  setEnquiry({
                    service: "",
                    budget: "",
                    description: "",
                  });
                  setError("");
                }}
              >
                Submit another enquiry
                <ArrowRight size={16} />
              </button>

            </div>

          ) : (

            /* CONTACT FORM */

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={submit}
            >

              <input
                type="hidden"
                name="form-name"
                value="contact"
              />

              <h3>Tell us about your project.</h3>

              <p>
                A great partnership starts with a simple hello.
              </p>

              <div className="form-grid">

                {/* FULL NAME */}

                <label>
                  Full name <span>*</span>

                  <input
                    type="text"
                    name="fullName"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={100}
                  />
                </label>

                {/* EMAIL */}

                <label>
                  Email address <span>*</span>

                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={200}
                  />
                </label>

              </div>

              {/* PHONE NUMBER */}

              <label>
                Phone number <small>(optional)</small>

                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="+263 7XX XXX XXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={20}
                />
              </label>

              <div className="form-grid">

                {/* SERVICE REQUIRED */}

                <label>
                  Service required <span>*</span>

                  <select
                    name="service"
                    required
                    value={enquiry.service}
                    onChange={(e) =>
                      setEnquiry({
                        ...enquiry,
                        service: e.target.value,
                      })
                    }
                  >
                    <option value="">
                      Select a service
                    </option>

                    {services.map((s) => (
                      <option
                        key={s.title}
                        value={
                          s.title === "Mobile App Development"
                            ? "Mobile Application Development"
                            : s.title
                        }
                      >
                        {s.title === "Mobile App Development"
                          ? "Mobile Application Development"
                          : s.title}
                      </option>
                    ))}

                    <option value="Other">Other</option>

                  </select>
                </label>

                {/* PROJECT BUDGET */}

                <label>
                  Project budget <span>*</span>

                  <select
                    name="budget"
                    required
                    value={enquiry.budget}
                    onChange={(e) =>
                      setEnquiry({
                        ...enquiry,
                        budget: e.target.value,
                      })
                    }
                  >
                    <option value="">
                      Select your budget
                    </option>

                    <option value="$120 - $349">
                      $120 - $349
                    </option>

                    <option value="$350 - $599">
                      $350 - $599
                    </option>

                    <option value="$600+">
                      $600+
                    </option>

                    <option value="Let's discuss">
                      Let&apos;s discuss
                    </option>

                  </select>
                </label>

              </div>

              {/* PROJECT DESCRIPTION */}

              <label>
                Tell us about your project <span>*</span>

                <textarea
                  name="description"
                  required
                  minLength={20}
                  maxLength={5000}
                  rows={4}
                  placeholder="What would you like to build? Tell us about your idea, goals and any features you have in mind..."
                  value={enquiry.description}
                  onChange={(e) =>
                    setEnquiry({
                      ...enquiry,
                      description: e.target.value,
                    })
                  }
                />
              </label>

              {/* ERROR MESSAGE */}

              {error && (
                <p className="form-error" role="alert">
                  {error}
                </p>
              )}

              {/* SUBMIT BUTTON */}

              <button
                className="button button-primary submit-button"
                type="submit"
                disabled={submitting}
              >
                {submitting
                  ? "Sending enquiry..."
                  : "Submit request"}

                <Send size={17} />
              </button>

              {/* PRIVACY NOTICE */}

              <p className="form-notice">
                <ShieldCheck size={15} />

                Your enquiry will be submitted securely
                through our website&apos;s contact form service.
              </p>

            </form>

          )}

        </div>
      </div>
    </section>
  );
}