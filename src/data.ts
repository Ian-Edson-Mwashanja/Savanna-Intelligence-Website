import { Globe2, Code2, Smartphone, PenTool, Database, Compass } from "lucide-react";

export const whatsappUrl = `https://wa.me/263788050729?text=${encodeURIComponent("Hello Savanna Intelligence, I am interested in your services. I would like to discuss a project.")}`;
export const navLinks = [
  ["Home", "home"],
  ["About Us", "about"],
  ["Services", "services"],
  ["Our Work", "work"],
  ["Pricing", "pricing"],
  ["Contact", "contact"],
];

export const services = [
  {
    title: "Website Development",
    icon: Globe2,
    short:
      "Your next chapter starts online. Beautiful, fast websites built to make a lasting impression.",
    description:
      "We design and develop modern, responsive and professional websites that help businesses and organisations establish a strong online presence.",
    features: [
      "Business websites",
      "School websites",
      "Church websites",
      "Personal portfolio websites",
      "Corporate websites",
      "Landing pages",
    ],
  },
  {
    title: "Software Development",
    icon: Code2,
    short: "Smarter systems. Smoother operations. Custom software that works the way you do.",
    description:
      "We develop customised software solutions designed to simplify processes, improve productivity and solve organisational challenges.",
    features: [
      "Student management systems",
      "School management systems",
      "Business management systems",
      "Inventory management systems",
      "Custom management applications",
    ],
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    short: "Put your business in their hands with intuitive, engaging mobile experiences.",
    description:
      "We develop modern mobile application solutions that connect businesses with their customers and improve everyday experiences.",
    features: [
      "Android applications",
      "Business applications",
      "Educational applications",
      "Custom mobile solutions",
    ],
  },
  {
    title: "UI/UX Design",
    icon: PenTool,
    short: "Thoughtfully designed experiences that look exceptional and feel effortless.",
    description:
      "We create attractive, user-friendly and intuitive digital experiences that combine creativity with functionality.",
    features: [
      "Website interface design",
      "Mobile application design",
      "Wireframing",
      "Interactive prototypes",
      "User experience design",
    ],
  },
  {
    title: "Database Development",
    icon: Database,
    short: "A strong foundation for your data. Secure, organised, and ready to grow.",
    description:
      "We design, develop and manage structured database solutions that help organisations securely store, manage and access information.",
    features: [
      "Database design",
      "SQL database development",
      "Database management",
      "Data organisation",
    ],
  },
  {
    title: "Digital Consultancy",
    icon: Compass,
    short: "Clarity in a digital world. Expert guidance to move your ideas forward.",
    description:
      "We help individuals and organisations identify suitable technology solutions to improve their operations and digital presence.",
    features: [
      "Digital transformation guidance",
      "Technology consultation",
      "System planning",
      "Technical support",
    ],
  },
];

export const projects = [
  {
    id: "school",
    title: "Learning, without limits.",
    name: "School Management Website",
    category: "Websites",
    label: "EDUCATION · WEBSITE",
    description:
      "A welcoming digital campus concept, connecting prospective students, families and educators through accessible information and clear navigation.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    style: "school",
  },
  {
    id: "sphere",
    title: "Student life. Simplified.",
    name: "StudentSphere – Student Profile Management System",
    category: "Software",
    label: "EDUCATION · SOFTWARE",
    description:
      "A student profile management concept bringing academic records, student information and day-to-day administration into one thoughtful dashboard.",
    tech: ["React", "TypeScript", "SQL concept"],
    style: "dashboard",
  },
  {
    id: "business",
    title: "Built for a bold future.",
    name: "Business Website",
    category: "Websites",
    label: "BUSINESS · WEBSITE",
    description:
      "An elegant, conversion-focused corporate website concept that gives a growing business a confident and credible digital presence.",
    tech: ["React", "Tailwind CSS", "Responsive design"],
    style: "business",
  },
  {
    id: "commerce",
    title: "A better way to shop.",
    name: "E-commerce Website",
    category: "Websites",
    label: "COMMERCE · WEBSITE",
    description:
      "An editorial storefront concept with considered product discovery, warm visual storytelling and a streamlined mobile-first shopping experience.",
    tech: ["React", "TypeScript", "UI design"],
    style: "commerce",
  },
  {
    id: "students",
    title: "Less admin. More impact.",
    name: "Student Management System",
    category: "Software",
    label: "EDUCATION · SOFTWARE",
    description:
      "An administrative system concept for managing student enrolment, attendance and results through a clear and organised interface.",
    tech: ["React", "SQL concept", "Dashboard design"],
    style: "students",
  },
  {
    id: "mobile",
    title: "Everyday, made easier.",
    name: "Mobile Application Interface",
    category: "Mobile Apps",
    label: "LIFESTYLE · MOBILE UI/UX",
    description:
      "A mobile interface concept exploring intuitive navigation, clear task management and friendly interactions. A design study, not a released application.",
    tech: ["UI/UX", "Prototyping", "Mobile design"],
    style: "mobile",
  },
];
export type Project = (typeof projects)[number];

export const packages = [
  {
    name: "Starter",
    price: 120,
    description: "A confident first step online.",
    features: [
      "Basic website, up to 3 pages",
      "Responsive design",
      "Contact information",
      "Basic SEO setup",
      "Social media integration",
    ],
  },
  {
    name: "Professional",
    price: 350,
    description: "More possibilities for a growing business.",
    features: [
      "Up to 7 pages",
      "Modern professional design",
      "Mobile responsiveness",
      "Contact forms",
      "Advanced UI design",
      "Basic SEO",
      "Social media integration",
      "Deployment assistance",
    ],
  },
  {
    name: "Premium",
    price: 600,
    description: "A complete, tailored digital experience.",
    features: [
      "Custom design, up to 12 pages",
      "Advanced functionality",
      "Database integration where required",
      "Admin dashboard where applicable",
      "Advanced responsive design",
      "SEO setup",
      "Deployment assistance",
      "Post-launch support",
    ],
  },
];

export const steps = [
  ["Discovery", "We understand your business, goals, requirements and challenges."],
  ["Planning", "We map the structure, features, technologies and approach."],
  ["Design", "We shape your ideas into modern interfaces and prototypes."],
  ["Development", "We turn the designs into functional digital solutions."],
  ["Testing", "We check quality, responsiveness and reliability."],
  ["Deployment", "We launch your project and connect it with your audience."],
  ["Support", "We provide ongoing assistance and improvements where agreed."],
];

export const faqs = [
  [
    "What services does Savanna Intelligence offer?",
    "We offer website development, custom software, mobile application development, UI/UX design, database development and digital consultancy for businesses, schools, churches, organisations and individuals.",
  ],
  [
    "How much does it cost to develop a website?",
    "Our website packages start from $120 for Starter, $350 for Professional and $600 for Premium. These are starting prices in USD. Your final quotation depends on the pages, features, integrations and complexity of your project.",
  ],
  [
    "How long does website development take?",
    "Timelines depend on scope, content readiness and feedback. We will agree a realistic delivery schedule with you after our discovery conversation, before development begins.",
  ],
  [
    "Can you develop websites for schools and churches?",
    "Yes. We create websites for schools, churches and other institutions, with features tailored to the information and services their communities need.",
  ],
  [
    "Do you develop custom software?",
    "Yes. We design custom management applications, including student, school, business and inventory management systems, around your specific workflows.",
  ],
  [
    "Will my website work on mobile phones?",
    "Yes. Responsive design is included in every website package. We design for readable, easy-to-use experiences on phones, tablets and desktop computers.",
  ],
  [
    "Can I request changes after the website is completed?",
    "Yes. We can discuss updates and additional features after launch. The scope, timeline and any additional costs will be agreed with you before work starts.",
  ],
  [
    "Do you provide website maintenance?",
    "Maintenance and ongoing technical support can be arranged based on your needs. We will clarify what is included in your package and quote separately for any additional ongoing work.",
  ],
  [
    "How can I request a quotation?",
    "Choose a package, complete the project enquiry form, or contact us directly by WhatsApp or email. Share your goals, required features and budget so we can prepare a tailored quotation. The website form is currently a prototype; use WhatsApp or email to send your enquiry.",
  ],
  [
    "How do I get started?",
    "Tell us about your idea. We will discuss your goals, recommend an approach and provide a clear quotation. Once the scope and terms are agreed, we can begin planning your project.",
  ],
];
