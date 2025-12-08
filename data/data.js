/* =====================================
   RESUME 
===================================== */
const experienceData = [

  {
    duration: "Aug 2025 - Present",
    title: "Freelancer",
    subContent: "Web & Mobile App Projects",
    details: "Delivered real-world client work including domain purchase, hosting, deployment and user validation. Completed Vel Crackers as the first freelance project and gained experience in client communication, requirement gathering and production deployment."
  },

  {
    duration: "Nov 2024 - Dec 2024",
    title: "Zoho Cliqtrix 2025",
    subContent: "Bot Development Contest",
    details: "Built 'Vroomie', a car service bot with my teammate Manikandan. Integrated Google Mail API (NodeMailer), Google Calendar API, and text processing using regex. Also explored Facebook post automation and Wikipedia result summarization."
  },

  {
    duration: "May 2024 - Jun 2024",
    title: "Summer Internship",
    subContent: "MERN Stack Intern - Anjana Infotech",
    details: "Learned fundamentals of HTML, CSS, and JavaScript. Worked with functional components and developed a landing page for 'Laundryes'."
  },

  {
    duration: "Sep 2023 - May 2024",
    title: "Diploma in Computer Hardware & Networking",
    subContent: "Ayya Nadar Janaki Ammal College",
    details: "Completed one-year diploma covering hardware, networking fundamentals and Linux basics."
  },

  {
    duration: "Jul 2022 - May 2025",
    title: "B.Sc. Computer Science",
    subContent: "Ayya Nadar Janaki Ammal College",
    details: "Pursued undergraduate degree in Computer Science and secured above 6 CGPA."
  },

  {
    duration: "Jun 2020 - May 2022",
    title: "SSLC & HSC",
    subContent: "Lord P.C.A.A Lions Matric Higher Secondary School",
    details: "Secured 93% in SSLC and 90% in HSC."
  }

];



/*=======================
SKILLS
========================*/
const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", logo: "assets/logos/html.svg" },
      { name: "CSS", logo: "assets/logos/css.svg" },
      { name: "Javascript", logo: "assets/logos/javascript.svg" },
      { name: "React", logo:"assets/logos/react.svg"}
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "PHP", logo: "assets/logos/php.png" },
      { name: "NodeJS", logo: "assets/logos/node.png" }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", logo: "assets/logos/mysql.svg" },
      { name: "Firebase", logo: "assets/logos/firebase.png" }
    ]
  },
  {
    category: "Android",
    skills: [
      { name: "Kotlin", logo: "assets/logos/kotlin.svg" },
      { name: "Java ME", logo: "assets/logos/java.png" }
    ]
  },
  {
    category: "Frameworks",
    skills: [
      { name: "Jetpack Compose", logo: "assets/logos/jetpackcompose.webp" },
      { name: "Bootstrap", logo: "assets/logos/bootstrap.webp" }
    ]
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "C", logo: "assets/logos/c.webp" },
      { name: "Java", logo: "assets/logos/java.png" }
    ]
  },
  // {
  //   category: "Scripting languages",
  //   skills: [
  //     { name: "Bash script", logo: "assets/logos/bash.webp" }
  //   ]
  // },
  {
    category: "CI / CD",
    skills: [
      { name: "Git", logo: "assets/logos/git.webp" },
      { name: "Github", logo: "assets/logos/github.webp" }
    ]
  },
  {
    category: "Hosting platforms",
    skills: [
      { name: "Netlify", logo: "assets/logos/netlify.webp" },
      { name: "Render", logo: "assets/logos/render.png" }
    ]
  }
];


/*==============================
PROJECTS
=============================*/

const projectData = [
  {
    title: "Laundryes app",
    techStack: ["Kotlin", "Jetpack Compose", "Java", "XML","MVVM", "Firestore", "Ola Map API", "Numverify API","Razorpay" ],
    paragraphs: [
      "Laundryes is an android application that allows users to place laundry orders, schedule pickup and delivery and track their order history in one place. The app includes a categorized list of items with pricing, easy date and time selection and clear order details for transparency. Users can view their previous orders, manage their profile, browse FAQs and reach support through dedicated contact and complaint screens. Laundryes also features a simple admin/delivery interface where staff can access and manage pending orders. It offers a smooth, organized experience that makes traditional laundry services more convenient and accessible on mobile."
    ],
    links: {
      github: "https://github.com/Sri-10ran/LaundryesAndroid"
    }
  },
  {
    title: "Laundryes website",
    techStack: ["HTML", "CSS", "JS", "Bootstrap" ,"ReactJS"],
    paragraphs: [
      "Laundryes is a responsive single-page React website designed for a laundry service business. The landing page includes a hero section with phone, email, and working hours, an About Us section highlighting experience and USPs, and a services area describing available laundry options. It features a four-step pickup and delivery process carousel, a detailed FAQ, testimonials for trust, and a contact footer with address and quick links. Inspired by an Evanto laundry template, this project adapts those ideas in a React structure to provide smooth navigation without page reloads."   ],
    links: {
      github: "https://github.com/Sri-10ran/React-project",
      live: "https://laundryes.netlify.app/"
    }
  }
];
