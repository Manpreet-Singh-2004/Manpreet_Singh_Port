export interface LinkItem {
  label: string;
  url: string;
  downloadName?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  duration: string;
  location: string;
  type: "Full-Time" | "Part-Time" | "Contract";
  paragraphs: string[];
  mainPoints: string[];
  links: LinkItem[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "candians-cart",
    company: "Candian's Cart",
    companyUrl: "https://www.canadianscart.ca/",
    role: "Software Developer",
    duration: "February 2026 - Present",
    location: "Abbotsford, Canada",
    type: "Contract",
    paragraphs: [
      "Serving as a Software Developer building and maintaining a multi-role e-commerce platform supporting administrators, vendors, cashiers, and customers. The platform powers inventory management, payment processing, order fulfillment, and point-of-sale workflows.",
      "Responsible for designing scalable MongoDB schemas, aggregation pipelines, and backend services powering inventory tracking, invoice generation, and automated store payout calculations. Integrated third-party services including Stripe, Clover, and ImageKit while implementing authentication, caching, session management, and fuzzy product search.",
      "Focused on improving platform reliability and scalability by introducing idempotent payment processing, diagnosing memory leaks and Out-of-Memory issues using Clinic.js, and optimizing backend performance through profiling and architecture improvements.",
    ],
    mainPoints: [
      "Built and maintained a multi-role e-commerce platform for admin, store, cashier, and customer workflows",
      "Designed MongoDB schemas and aggregation pipelines for inventory, invoices, and store payouts",
      "Integrated Stripe, Clover, and ImageKit APIs for payment processing, POS synchronization, and media optimization",
      "Implemented authentication, session management, caching, and fuzzy product search",
      "Implemented idempotent payment processing to eliminate duplicate payment transactions",
      "Diagnosed and resolved memory leaks and Out-of-Memory (OOM) issues using Clinic.js and backend profiling tools",
    ],
    links: [],
  },
  {
    id: "loblaw-companies",
    company: "Loblaw Companies Limited",
    role: "Uniformed Asset Protection Personnel (UAPP)",
    duration: "November 2024 - Present",
    location: "Real Canadian Superstore (Gladwin Road, Abbotsford)",
    type: "Part-Time",
    paragraphs: [
      "Responsible for maintaining a safe and secure shopping environment by monitoring store activity, conducting patrols, responding to security incidents, and documenting investigations in accordance with company procedures.",
      "Regularly assessed potential risks, de-escalated confrontational situations, collaborated with store leadership, and prepared detailed incident reports while ensuring compliance with company policies.",
    ],
    mainPoints: [
      "Conflict de-escalation",
      "Report writing and documentation",
      "Risk assessment",
      "Preventing Theft",
      "Incident investigation",
      "Communication under pressure",
      "Team collaboration",
    ],
    links: [
      //   {
      //     label: "Letter of Employment (LoE)",
      //     url: "/RealCanadianSuperStore/LCL - Reference Letter 2025-02-12.pdf",
      //   },
    ],
  },
  {
    id: "paragon-pmo",
    company: "Paragon PMO",
    companyUrl: "https://paragonpmo.com/home/",
    role: "Business Analyst",
    duration: "May 2023 - October 2023 | Duration -: 6 Months",
    location: "Abbotsford, Canada",
    type: "Full-Time",
    paragraphs: [
      "Collaborated with an international cross-functional team to develop a mobile application helping First Nations communities prepare for the Canadian driving knowledge test.",
      "Served primarily as a Business Analyst responsible for gathering client requirements, creating user stories, documenting functional specifications, and ensuring development aligned with stakeholder expectations.",
      "Also contributed to application testing, database population, documentation, user manuals, and privacy policy development.",
    ],
    mainPoints: [
      "Analyzed client requirements and identified opportunities for product improvements",
      "Created more than 60 user stories",
      "Maintained a database with 300+ examination queries",
      "Translated client requirements into actionable development tasks",
      "Collaborated with cross-functional teams including UI/UX, development, design, and database engineering",
      "Directly engaged with clients to understand their needs and deliver tailored solutions that met or exceeded expectations",
    ],
    links: [
      //   {
      //     label: "Download App (v1.0 APK)",
      //     url: "/TechGear/Roadschool.apk",
      //     downloadName: "Roadschool",
      //   },
      //   {
      //     label: "GitHub Source Code",
      //     url: "https://github.com/saranshahuja/roadschool",
      //   },
      //   {
      //     label: "Employment Credentials",
      //     url: "/TechGear/Techgear-Confirmation.jpg",
      //     downloadName: "Techgear Confirmation",
      //   },
    ],
  },
  {
    id: "digital-series",
    company: "Digital Series",
    companyUrl: "https://www.digitalseries.in/",
    role: "Digital Intern",
    duration: "April, 2023 - June, 2023 | Duration -: 3 Months",
    location: "Chandigarh, India",
    type: "Full-Time",
    paragraphs: [
      "Completed a three-month internship supporting digital marketing initiatives across Search Engine Optimization (SEO), Website Management, and Social Media Management. Worked with cross-functional teams to improve online visibility and client engagement.",
      "Managed WordPress websites, published client content, performed website quality assurance, executed SEO campaigns through backlink generation and business listings, and coordinated social media content while preparing weekly client performance reports.",
      "Lastly, I worked within the Social Media Management (SMM) team, managing clients' social media presence by publishing content, updates, and announcements to improve audience engagement. Additionally, I prepared and presented weekly performance reports, ensuring clients remained informed about completed tasks, campaign progress, and ongoing digital marketing efforts.",
    ],
    mainPoints: [
      'Received the "India’s Most Trusted Brand of the Year 2023" award during my tenure',
      "Enhancing SEO by creating backlinks which improved search ranking by 84% (Google Analytics)",
      "Executed off-page SEO campaigns through backlink creation and authority-building submissions",
      "Created and submitted SEO assets including presentations, business listings, and content submissions to improve search visibility.",
      "Maintained and updated websites daily per client needs.",
      "Created weekly reports for clients to ensure satisfaction",
      "Posted 3 daily social media videos to maintain relevancy",
    ],
    links: [
      //   {
      //     label: "Email Confirmation",
      //     url: "/DigitalSeries/Re_ [EXTERNAL]Experience Confirmation of Manpreet Singh.eml",
      //     downloadName: "Email Confirmation",
      //   },
    ],
  },
];
