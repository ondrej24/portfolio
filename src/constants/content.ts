import { Content } from "../types";

export const content: Content = {
  // =================
  // 🎯 HERO SECTION
  // =================
  hero: {
    name: "Ondřej",
    role: "QA Engineer",
    tagline: "Keep calm and ensure product's quality",
    avatarUrl: `${import.meta.env.BASE_URL}avatar.png`,
  },

  // =================
  // 📝 ABOUT SECTION
  // =================
  about: {
    summary: [
      "I am a QA Engineer who prioritizes business needs and focuses on the most critical issues first. My approach combines strategic risk assessment with hands-on testing across multiple domains - from automated E2E testing and API validation to performance testing and manual exploratory work.",
      "My background in Power Engineering equipped me with strong analytical thinking, problem-solving methodology, and most importantly, taught me how to learn effectively. These transferable skills enabled me to quickly transition into IT and master various testing tools and frameworks.",
    ],
    highlights: [
      "QA Engineer (3+ years)",
      "Curious about junior dev roles 🤷🏻‍♂️",
      "Remote | Ostrava, CZ",
      "Business impact over bug count",
      "Manual | Automated | Performance",
      "Engineering roots, analytical mindset",
    ],
  },

  // ==================
  // 💻 SKILLS SECTION
  // ==================
  skills: [
    {
      category: "Tech stack",
      items: [
        "Playwright",
        "Cypress",
        "Typescript",
        "Claude Code",
        "MCP",
        "Postman",
        "Git",
        "Grafana",
        "MongoDB",
        "JIRA",
        "Bitbucket",
        "CircleCI",
      ],
    },
    {
      category: "Testing Types",
      items: [
        "E2E Testing",
        "API Testing",
        "Integration Testing",
        "Performance Testing",
        "Manual Testing",
        "Regression Testing",
        "Visual Regression Testing",
        "Smoke Testing",
        "Mobile Testing",
      ],
    },
  ],

  // ======================
  // 💼 EXPERIENCE SECTION
  // ======================
  experience: [
    {
      role: "QA Engineer",
      company: "Freelancer",
      period: "03/2025 - Present",
      achievements: [
        "Lead end-to-end automation testing strategy",
        "Manage testing workload distribution and mentor juniors",
        "Set up automated tests on CI/CD and Grafana dashboards",
        "Analyze test metrics to identify quality trends",
        "Reduced test runtime by 40%",
        "Oversee technical onboarding of new clients",
        "Conduct bug triage based on business impact",
      ],
      technologies: [
        "TypeScript",
        "Cypress",
        "Playwright",
        "Postman",
        "SQL",
        "Git",
        "JIRA",
        "Grafana",
        "CircleCI",
        "Excel",
      ],
    },
    {
      role: "Junior Automation Tester",
      company: "Enmon Technologies s.r.o.",
      period: "01/2023 - 02/2025",
      achievements: [
        "Developed and maintained automated test suite",
        "Created test scenarios for automated tests",
        "Built 100+ automated E2E Cypress tests",
        "Set up automated tests on CI/CD",
        "Monitored test execution and application performance using Grafana",
        "Performed manual testing across web and mobile applications",
      ],
      technologies: [
        "TypeScript",
        "Cypress",
        "Postman",
        "SQL",
        "Git",
        "JIRA",
        "Grafana",
        "CircleCI",
      ],
    },
  ],

  // ====================
  // 🎓 EDUCATION SECTION
  // ====================
  education: [
    {
      degree: "Master Degree on Faculty of Mechanical Engineering",
      institution: "Brno University of Technology, Czechia",
      period: "2016 - 2022",

      details:
        "Bachelor's and Master's degrees in Mechanical Engineering with specialization in Power Engineering, focusing on energy systems, thermodynamics, and power generation",
    },
    {
      degree: "Erasmus on Faculty of Mechanical Engineering",
      institution: "University of Ljubljana, Slovenia",
      period: "2020 - 2021",
      details:
        "International exchange program with focus on energy systems and mechatronics, developing cross-cultural collaboration skills and broadening engineering perspectives",
    },
  ],

  // ==================
  // 📧 CONTACT SECTION
  // ==================
  contact: {
    email: "o.pollach@gmail.com",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ondrej-pollach/",
      },
      {
        name: "GitHub",
        url: "https://github.com/ondrej24",
      },
    ],
  },
};
