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
    role: "Software Developer",
    duration: "February 2026 - Present",
    location: "Abbotsford, Canada",
    type: "Contract",
    paragraphs: [
      "Serving as a Software Developer to engineer a robust multi-role e-commerce ecosystem. This centralized web architecture services real-time distributed flows across structural admin dashboards, storefront portals, secure cashier points of sale, and customer checkout streams.",
    ],
    mainPoints: [
      "Built and maintained a multi-role e-commerce platform for admin, store, cashier, and customer workflows",
      "Designed MongoDB schemas and aggregation pipelines for inventory, invoices, and store payouts",
      "Integrated Stripe, Clover, and ImageKit services for payments and media handling",
      "Implemented authentication, session management, caching, and fuzzy product search",
      "Added idempotency checks to prevent duplicate payment transactions",
      "Diagnosed and fixed OOM (Out Of Memory) and performance bottlenecks using Clinic.js and backend profiling tools",
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
      "As a Uniformed Asset Protection Personnel (UAPP) at Real Canadian Superstore, my primary responsibility is to maintain a safe and secure environment for customers, employees, and assets. I actively monitor the premises, conduct regular patrols, and respond promptly to any alarms or security concerns.",
      "A key aspect of my role is to deter and prevent theft by maintaining a visible presence and closely observing customer behavior. In the event of a shoplifting incident, I adhere strictly to company policies and protocols, ensuring the safety of all individuals involved, including myself.",
      "Additionally, I am responsible for preparing detailed and accurate reports on incidents, such as when shopping carts become immobilized or require attention. My role requires vigilance, attention to detail, and a strong commitment to upholding the store’s security standards while fostering a safe shopping experience for everyone.",
    ],
    mainPoints: [
      "Dealing with Angry Customers",
      "Standing for Long Periods of Time",
      "Monitoring the Area",
      "Responding to Alarms",
      "Writing Reports",
      "Preventing Theft",
      "Ensuring Safety",
      "Communication and Teamwork",
    ],
    links: [
    //   {
    //     label: "Letter of Employment (LoE)",
    //     url: "/RealCanadianSuperStore/LCL - Reference Letter 2025-02-12.pdf",
    //   },
    ],
  },
  {
    id: "digital-series",
    company: "Digital Series",
    companyUrl: "https://www.digitalseries.in/",
    role: "Digital Intern",
    duration: "April, 2023 - June, 2023 | Duration -: 3 Months",
    location: "Sector 34, Chandigarh",
    type: "Full-Time",
    paragraphs: [
      "I worked as an digital intern for Digital series, which was founded by Nitin Rai Chaudhary where I had to work in 3 major departments, which were Social media management (SMM), Search Engine Optimisation (SEO) and Website Management (WM). My reporting timing was from 10AM to 7PM and i reported directly to Ms Arshdeep Kaur Juneja",
      "Working in these fields has helped me a lot in order to advance my skills and know more about how a business runs and what applied skills that are required by companies. I started working in Website Management (WM), which improved my skills in WordPress and soon enough I grasped how it worked. My main role was to post albums/pictures, blogs, news, tables, etc for our clients (which were schools and Doctors). Some of my other roles included testing the websites for any bugs, testing the website for any broken links, and providing feedback.",
      "We keep working in different fields, and the next department that I was sent to was Search Engine Optimize (SEO). In this department, my main role was to create backlinks, website submissions, business listings, PPTs and PDF submissions, Creating Advertisements for our clients, crawling the website, improving the ranking of our website and Social bookmarking. This was my main department, where I worked for most of the time.",
      "Last, but not least, I worked in Social Media Management (SMM) where I had to manage the social media handles of our clients and keep updating them about the new albums and news. This helps to keep engagement and increase them steadily. I also made weekly reports and sent them to our clients, so that the client get weekly updates of what work has been done.",
    ],
    mainPoints: [
      'Received the "India’s Most Trusted Brand of the Year 2023" award during my tenure',
      "Enhancing SEO by creating backlinks which improved search ranking by 84% (Google Analytics)",
      "Posted daily on 20 high-traffic social bookmarking sites to boost visibility",
      "Submitted over 15 PowerPoint presentations daily",
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
  {
    id: "paragon-pmo",
    company: "Paragon PMO",
    companyUrl: "https://paragonpmo.com/home/",
    role: "Business Analyst",
    duration: "May 2023 - September 2023 | Duration -: 4 Months",
    location: "Online",
    type: "Full-Time",
    paragraphs: [
      "TechGear is a program in which we work with a foreign company and bring value to them. The client may require anything like a website or a mobile application. But for 2023 Techgear (UFV_India_Cohort3) I worked for a company named Paragon PMO, where we had to work with our coordinator Dhalie Patara and Ronel Alberts in order to develop an mobile application for our client Nicolas Mai, who is a professor at Camosun College",
      "We had to make an application for the First Nation population of Canada so that they can clear their Driving License test. It is very important to have a driving license in Canada since the distances are far apart and it is very hard to commute from one place to another without the help of any vehicle. To complete our objective we first have to make user stories. User stories are very important since it helps us make a blueprint of the whole application, for example, what our client wants and what features would our end user or admin users may require.",
      "My main role was as a Business Analyst (BA), which included asking clients for the details and making sure that the application was coded while keeping the requirements for both the user and the client.",
      "My secondary role was as a Tester (UI/UX Tester) and test the application for any sort of bugs and content errors. Needless to say, both roles go hand in hand since it makes it easier to point out any content errors and any other code-related errors.",
      "Some of my other works involved adding examination questions to the database, documentation, creating a user manual and creating privacy policy for the application.",
    ],
    mainPoints: [
      "Documenting and analyzing customer problems identifying area for improvements",
      "Created more than 60 user stories",
      "Maintained a database with 300+ examination queries",
      "Adhered to client requests, effectively communicating their needs to the software development team",
      "Collaborated seamlessly with four cross-functional teams (UI/UX, development, design, and database) to ensure efficient information flow and project alignment.",
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
];
