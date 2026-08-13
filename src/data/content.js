export const profile = {
  name: "Prathmesh Nitin Gite",
  tagline:
    "Computer Science student focused on Applied AI, ML pipelines, and backend engineering",
  email: "prathmesh.gite4@gmail.com",
  location: "Corvallis, OR",
  phone: "541-286-0596",
  linkedin: "linkedin.com/in/prathmesh-gite",
  linkedinUrl: "https://linkedin.com/in/prathmesh-gite",
  github: "github.com/PNG5042",
  githubUrl: "https://github.com/PNG5042",
  resumeUrl: "/resume.pdf",
};

export const about = {
  paragraph:
    "International Honors B.S. in Computer Science (Applied AI focus) at Oregon State University, expected graduation 2026. Interests span ML pipeline development, backend/REST API engineering, and applying technical skills to real-world operational problems — including hands-on exposure to distribution/logistics operations through family business experience.",
};

export const skills = [
  {
    title: "Languages / Tools",
    tags: ["Python", "C++", "Java", "SQL", "Git", "REST APIs", "Docker (basic)"],
  },
  {
    title: "ML / Data",
    tags: ["scikit-learn", "PySINDy", "pandas", "NumPy", "ML pipeline development"],
  },
  {
    title: "Professional",
    tags: [
      "Software automation",
      "Data-driven decision making",
      "Technical documentation",
      "Cross-functional collaboration",
      "Independent execution",
    ],
  },
];

export const projects = [
  {
    title: "Sparse Identification of Nonlinear Dynamic Systems",
    org: "Oregon State University",
    period: "Fall 2025 – Spring 2026",
    summary:
      "End-to-end ML pipeline predicting high-temperature rupture behavior of Alloy 617 and SS316H using sparse regression and Larson–Miller modeling.",
    bullets: [
      "Recovered specimen records across inconsistent formats (900°C, 1173K, 100MPa, 14.5ksi) by building a data-ingestion pipeline using cascading fallback parsing logic.",
      "Discovered the symbolic stress–LMP relationship by implementing PySINDy sparse regression, automating C-parameter selection via grid search with 5-fold cross-validation.",
      "Caught pipeline regressions automatically by developing a 7-scenario workflow driver covering batch prediction, sensitivity analysis, and design-curve generation that doubles as an integration test suite.",
      "Made every data exclusion traceable for domain engineers by producing diagnostic outputs actual-vs-predicted plots, stress–rupture diagrams, and a per-run Excel diagnostics sheet.",
    ],
    stack: ["Python", "PySINDy", "scikit-learn", "pandas", "NumPy", "matplotlib", "openpyxl"],
    repo: "https://github.com/PNG5042/Sparse-Identification-of-Nonlinear-Dynamic-Systems",
  },
  {
    title: "Spryntax",
    org: "Oregon State University",
    period: "Jan 2025 – Mar 2025",
    summary:
      "A typing-practice web app that teaches programming syntax by having users type real algorithms across multiple languages, combining LeetCode-style code exposure with Monkey Type-style speed/accuracy stats and competitive leaderboards.",
    bullets: [
      "Built the site's core typing-practice interface in JavaScript, implementing client-side logic that rendered algorithm code, captured user keystrokes in real time, and displayed post-session accuracy/WPM stats.",
      "Contributed frontend work within a microservices architecture, separate services for user stats, leaderboards, and favorites through coordinating with backend teammates on the API contracts consumed by the UI.",
      "Worked as one of two Frontend Developers on a 7-engineer team following MVC design, coordinating with backend teammates on the API contracts consumed by the UI.",
    ],
    stack: ["JavaScript", "MVC"],
    repo: "https://github.com/peytonju/team-5-spryntax",
  },
];

export const experience = [
  {
    role: "IT Service Desk",
    org: "Oregon State University",
    period: "Sep 2022 – Present",
    bullets: [
      "Accelerated issue resolution for 50+ users per week, as measured by eliminated manual ticket-routing effort, by developing Python automation scripts that triaged and categorized incoming support requests.",
      "Improved cross-team workflow consistency across a 200+ user engineering department, as measured by trackable resolution outcomes over 3+ years, by designing structured data-logging processes and coordinating technical solutions with senior engineers.",
      "Reduced recurring software issues, as measured by adoption of the runbooks across the entire support team, by authoring detailed debugging documentation that became the standard root-cause reference.",
      "Maintained zero service disruptions during critical events, as measured by consistent uptime under time pressure, by applying analytical thinking to diagnose and resolve complex operating-system, toolchain, and version-control issues within a multidisciplinary team.",
    ],
  },
  {
    role: "Math Tutor / College of Science Learning Assistant",
    org: "Oregon State University",
    period: "Sep 2022 – Mar 2023",
    bullets: [
      "Improved outcomes for 20+ weekly students, as measured by consistent progress on course material, by designing structured problem-solving sessions and applying iterative feedback to break down complex mathematical and computational concepts.",
      "Sustained zero missed commitments across two concurrent technical roles, as measured by escalation-free delivery, by independently managing competing priorities and proactively communicating with stakeholders.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "ESDS Software Solution Pvt. Ltd.",
    period: "Apr 2020 – May 2020",
    bullets: [
      "Automated a previously manual data-retrieval workflow, as measured by improved client data accessibility, by designing and deploying a web-based tool that integrated front-end interfaces with cloud-hosted backend services alongside a team of software engineers.",
      "Standardized cross-team implementation, as measured by adoption across both engineering and product teams, by authoring technical specifications that translated complex system requirements into clear developer guidelines.",
      "Cut engineering overhead, as measured by consistent resolution of recurring issues across the organization, by building a structured knowledge base of reusable automation procedures and debugging protocols.",
      ],
  },
  {
    role: "Engineering Intern",
    org: "Aura Opto Electronics Pvt. Ltd.",
    period: "Oct 2018 – Dec 2019",
    bullets: [
      "Contributed to a 5% production output improvement, as measured by manufacturing process data analysis, by partnering with the engineering team to identify inefficiencies and prototype optimized workflows.",
      "Built foundational systems-debugging intuition, as measured by successful implementation of tested electronic system designs, by working alongside licensed electrical engineers using structured, iterative refinement methods analogous to software development.",
    ],
  },
];

export const education = {
  school: "Oregon State University",
  location: "Corvallis, OR",
  degree: "International Honors B.S. in Computer Science, Applied AI focus",
  period: "Graduated 2026",
};

export const navItems = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "education", label: "education" },
  { id: "contact", label: "contact" },
];
