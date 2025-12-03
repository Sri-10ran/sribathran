/* data/data.js */

const resumeLinks = {
  view: "https://github.com/yourusername/yourrepo/blob/main/resume.pdf",
  download: "https://github.com/yourusername/yourrepo/raw/main/resume.pdf"
};

const experienceData = [
  {
    duration: "May 2024 – Present",
    title: "Full Stack Developer",
    subContent: "Web & Mobile Applications",
    details: "Built responsive web front-ends and Android apps, integrated third-party APIs, and designed MySQL-backed services; focused on reusable components and performance tuning."
  },
  {
    duration: "Jan 2023 – Apr 2024",
    title: "Junior Developer (Freelance)",
    subContent: "Academic & Client Projects",
    details: "Delivered student projects and freelance apps: e-commerce modules, admin dashboards, and invoice PDF generation using dompdf + PHP."
  }
];

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Java", logo: "assets/logos/java.png" },
      { name: "JavaScript", logo: "assets/logos/javascript.png" },
      { name: "Python", logo: "assets/logos/python.png" }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", logo: "assets/logos/mysql.png" },
      { name: "MongoDB", logo: "assets/logos/mongodb.png" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", logo: "assets/logos/react.png" },
      { name: "Bootstrap", logo: "assets/logos/bootstrap.png" }
    ]
  }
];

const projectData = [
  {
    title: "Laundryes — Customer Laundry Service App",
    techStack: ["Android", "Java", "Ola Maps API", "MySQL", "PHP"],
    links: {
      github: "https://github.com/yourusername/laundryes",
      live: "" // no live link available
    },
    paragraphs: [
      "Laundryes is a mobile application for scheduling laundry pickups and tracking status in real time.",
      "Features: location validation using Ola Maps API, PDF invoice generation, user authentication, and order management."
    ]
  },
  {
    title: "Smart Attendance System",
    techStack: ["HTML", "CSS", "JS", "Firebase"],
    links: {
      github: "https://github.com/yourusername/attendance",
      live: "https://your-live-attendance-app.example.com"
    },
    paragraphs: [
      "A cloud-based attendance app with QR scanning and real-time updates.",
      "It simplifies attendance management for schools and coaching centers."
    ]
  }
];
