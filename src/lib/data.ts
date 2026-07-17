export const personalInfo = {
  name: "Ashfak",
  fullName: "Ashfak Seinudeen",
  headline: "Software Engineering Intern",
  summary:
    "Full-stack developer building shipped products with React, Node.js, Java & Spring Boot. 3rd-year IT undergraduate at SLIIT, Sri Lanka.",
  tagline:
    "I build scalable web and mobile applications focused on clean architecture, performance, and great user experience.",
  email: "ashfakseinudeen@gmail.com",
  phone: "+94 786862100",
  location: "Kurunegala, Sri Lanka",
  github: "https://github.com/DevWith-Ashfak",
  linkedin: "https://linkedin.com/in/ashfak56",
  resumeUrl: "/Ashfak_Resume.pdf",
  available: true,
};

export const achievements = [
  { value: "5+", label: "Production Projects", desc: "Shipped & deployed" },
  { value: "15+", label: "Technologies", desc: "Across stacks" },
  { value: "2027", label: "Expected Graduation", desc: "BSc IT (Hons)" },
  { value: "100%", label: "Passion for Learning", desc: "Always growing" },
];

export const achievementsExtra = [
  "REST APIs",
  "Cross Platform Apps",
  "AI Projects",
];

export const aboutContent = {
  story: [
    "I discovered software engineering in my first year of university, and it immediately clicked. What started as curiosity about how websites work turned into a passion for building products that solve real problems.",
    "I enjoy the full stack — from designing database schemas and crafting REST APIs to building polished UIs. There's something deeply satisfying about taking an idea from concept to deployment and seeing people use what you've built.",
    "My goal is to work on impactful software that scales — whether it's optimizing a backend query, designing a clean API, or shipping a feature that improves someone's day. I believe great engineering is about clarity, maintainability, and understanding the problem before writing code.",
  ],
  photo: "/Profile_pic.png",
};

export const education = [
  {
    school: "SLIIT",
    degree: "Bachelor of Science Honours in Information Technology",
    year: "Year 3 Semester 1",
    period: "2024 - Present",
  },
  {
    school: "Kekunagolla National School",
    degree: "GCE A/L",
    year: "Physics B | Chemistry B | Biology C",
    period: "",
  },
];

export const techStack = {
  Languages: [
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 80 },
    { name: "TypeScript", level: 85 },
  ],
  Frontend: [
    { name: "React", level: 88 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
  ],
  Backend: [
    { name: "Spring Boot", level: 82 },
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
  ],
  Databases: [
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 78 },
    { name: "MSSQL", level: 75 },
  ],
  Mobile: [{ name: "React Native", level: 75 }],
  "Data Science & ML": [
    { name: "Scikit-learn", level: 78 },
    { name: "Pandas", level: 80 },
    { name: "NumPy", level: 80 },
    { name: "SciPy", level: 70 },
    { name: "Matplotlib", level: 78 },
    { name: "Seaborn", level: 75 },
    { name: "OpenCV", level: 65 },
  ],
  "Deep Learning": [
    { name: "TensorFlow", level: 70 },
    { name: "Keras", level: 70 },
  ],
  "Tools & Development": [
    { name: "Git", level: 88 },
    { name: "GitHub", level: 88 },
    { name: "VS Code", level: 92 },
    { name: "IntelliJ IDEA", level: 80 },
    { name: "Jupyter", level: 78 },
    { name: "Figma", level: 72 },
    { name: "Postman", level: 85 },
  ],
};

export const learningRoadmap = [
  { name: "Docker", description: "Containerization & orchestration" },
  { name: "AWS", description: "Cloud infrastructure & services" },
  { name: "CI/CD", description: "Automated deployment pipelines" },
  { name: "Microservices", description: "Distributed system architecture" },
  { name: "System Design", description: "Scalable system architecture" },
];

export const engineeringProcess = [
  {
    step: "Research",
    description:
      "I start by understanding the problem domain, user needs, and existing solutions. This phase involves gathering requirements, analyzing constraints, and identifying technical risks.",
  },
  {
    step: "Planning",
    description:
      "I break down the project into manageable milestones, define deliverables, and set up the development workflow with task tracking and version control.",
  },
  {
    step: "Design",
    description:
      "I create wireframes, component trees, and data flow diagrams. Focus on user experience, accessibility, and ensuring the design aligns with the problem we're solving.",
  },
  {
    step: "Architecture",
    description:
      "I design the system architecture — choosing the right stack, defining API contracts, planning the database schema, and establishing project structure for scalability.",
  },
  {
    step: "Development",
    description:
      "I build iteratively — implementing features one by one, writing clean and maintainable code, and integrating components as they mature. I prioritize working software early.",
  },
  {
    step: "Testing",
    description:
      "I test edge cases, validate API responses, ensure responsive layouts, and verify that the system handles errors gracefully. Quality is built in, not bolted on.",
  },
  {
    step: "Deployment",
    description:
      "I deploy to production, set up monitoring, and ensure the infrastructure is reliable. I believe shipping is the only way to truly learn whether you've built the right thing.",
  },
];

export const projects = [
  {
    slug: "resume-tailor",
    title: "Resume Tailor",
    subtitle: "AI Resume Tailoring Platform",
    description:
      "An AI-powered application that analyzes resumes against job descriptions, identifies skill gaps, recommends keywords, and generates tailored cover letters.",
    tech: ["Next.js", "Express", "TypeScript", "Tailwind", "Shadcn", "PDF Parsing", "Markdown"],
    features: [
      "Resume Analysis",
      "Keyword Matching",
      "Gap Analysis",
      "AI Suggestions",
      "Cover Letter Generation",
    ],
    github: "https://github.com/DevWith-Ashfak/Resume-Tailor-.git",
    live: null,
    hero: true,
    screenshots: [
      "/Projects/resume-tailor-1.png",
      "/Projects/resume-tailor-2.png",
      "/Projects/resume-tailor-3.png",
    ],
    details: {
      overview:
        "Resume Tailor is an intelligent platform that helps job seekers optimize their resumes for specific job applications. By leveraging AI, it analyzes the alignment between a candidate's resume and a job description, providing actionable insights to improve match rates.",
      problem:
        "Job seekers often struggle to tailor their resumes for each application. Studies show that tailored resumes are significantly more likely to pass through Applicant Tracking Systems (ATS) and catch recruiter attention. The manual process is time-consuming and inconsistent.",
      solution:
        "An AI-powered platform that accepts a resume (PDF) and a job description, then performs comprehensive analysis — keyword matching, skill gap identification, experience relevance scoring — and generates tailored suggestions and cover letters.",
      architecture: "Architecture",
      challenges: [
        "Accurately parsing PDF resumes with varied formats and structures",
        "Designing a prompt system that produces consistent, high-quality AI suggestions",
        "Handling large documents within API token limits efficiently",
      ],
      decisions: [
        "Used PDF parsing with fallback text extraction for maximum format compatibility",
        "Implemented chunked processing for handling large documents",
        "Built a multi-step analysis pipeline for thorough resume evaluation",
      ],
      apiDesign: "REST API with endpoints for resume upload, analysis, and cover letter generation.",
      folderStructure: "Next.js app with Express API routes, component-based UI, and utility modules for PDF processing and AI integration.",
      databaseDesign: "File-based storage for resumes with metadata tracking in a lightweight database.",
      lessons: [
        "PDF parsing is more nuanced than anticipated — different tools handle different formats",
        "Prompt engineering is critical for consistent AI-generated content quality",
        "User experience matters greatly in document-heavy workflows",
      ],
    },
  },
  {
    slug: "ceylon-explorer",
    title: "Ceylon Explorer",
    subtitle: "Tourism Super App",
    description:
      "An end-to-end tourism platform that supports travelers from airport arrival to departure through itinerary planning, cultural discovery, maps, and travel services.",
    tech: ["Spring Boot", "React", "JWT", "Leaflet Maps", "TypeScript"],
    features: [
      "Itinerary Planning",
      "Cultural Discovery",
      "Calendar Integration",
      "Interactive Maps",
      "Tourist Services",
    ],
    github: "https://github.com/DevWith-Ashfak/Ceylon-Explorer-.git",
    live: "https://worthy-exploration-production-afe2.up.railway.app/",
    hero: false,
    screenshots: [],
    details: {
      overview:
        "Ceylon Explorer is a comprehensive tourism platform designed to enhance the travel experience in Sri Lanka. It covers the entire travel journey from arrival to departure.",
      problem:
        "Travelers visiting Sri Lanka often face fragmented information sources, difficulty planning itineraries, and limited access to cultural insights and local services in one place.",
      solution:
        "A unified super app that provides itinerary planning, cultural discovery, interactive maps, and travel services — all integrated with a secure backend.",
      architecture: "Spring Boot backend with JWT authentication, React frontend with Leaflet maps integration",
      challenges: [
        "Integrating real-time map services with itinerary data",
        "Designing a flexible calendar system for travel planning",
        "Implementing secure authentication across the platform",
      ],
      decisions: [
        "Chose Spring Boot for robust backend architecture",
        "Used JWT for stateless authentication suitable for mobile/web",
        "Leaflet maps for open-source, lightweight mapping",
      ],
      apiDesign: "RESTful API with Spring Boot controllers, service layer, and JPA repositories",
      folderStructure: "Monorepo with separate frontend and backend directories",
      databaseDesign: "Relational database with entities for users, itineraries, bookings, and cultural sites",
      lessons: [
        "Planning a tourism platform requires understanding multiple user personas",
        "Map integration adds significant UX value but requires careful performance optimization",
        "Authentication and data security are critical for user trust",
      ],
    },
  },
  {
    slug: "lanka-eats",
    title: "Lanka Eats",
    subtitle: "Food Delivery App",
    description:
      "A food delivery platform with real-time tracking, order management, and a robust delivery module built with React Native and Node.js.",
    tech: ["Node.js", "React Native", "MongoDB", "Express"],
    features: [
      "Real-time Delivery Tracking",
      "Order Management",
      "Delivery Module",
      "Restaurant Integration",
      "Push Notifications",
    ],
    github: "https://github.com/DevWith-Ashfak/LankaEats.git",
    live: null,
    hero: false,
    screenshots: [
      "/Projects/lanka-eats-1.png",
      "/Projects/lanka-eats-2.png",
      "/Projects/lanka-eats-3.png",
      "/Projects/lanka-eats-4.png",
      "/Projects/lanka-eats-5.png",
    ],
    details: {
      overview:
        "Lanka Eats is a food delivery application connecting customers with local restaurants. I focused on the delivery module, real-time tracking, and backend infrastructure.",
      problem:
        "Food delivery platforms need reliable real-time tracking, efficient order management, and a seamless experience for customers, restaurants, and delivery partners.",
      solution:
        "A full-stack food delivery app with a React Native frontend, Node.js backend, and MongoDB for flexible data management. Special focus on delivery logic and real-time updates.",
      architecture: "Node.js/Express backend, React Native mobile app, MongoDB database, real-time WebSocket tracking",
      challenges: [
        "Implementing accurate real-time delivery tracking",
        "Designing an efficient order assignment and dispatch system",
        "Handling concurrent orders and delivery status transitions",
      ],
      decisions: [
        "MongoDB for flexible order schemas that evolve with requirements",
        "WebSocket-based real-time updates for live tracking",
        "Modular delivery logic separated from core order management",
      ],
      apiDesign: "RESTful API for CRUD operations with WebSocket endpoints for real-time tracking",
      folderStructure: "Backend: controllers, services, models, routes, middleware. Frontend: screens, components, navigation, services.",
      databaseDesign: "MongoDB collections for users, restaurants, orders, deliveries, and tracking events",
      lessons: [
        "Real-time features require careful state management on both client and server",
        "Delivery logistics are complex — zone-based assignment works well",
        "MongoDB's flexible schema is ideal for evolving order data structures",
      ],
    },
  },
  {
    slug: "customer-segmentation",
    title: "Customer Segmentation",
    subtitle: "ML Analytics Platform",
    description:
      "An unsupervised machine learning application that segments customers into meaningful groups using the K-Means clustering algorithm.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    features: [
      "Customer Segmentation",
      "K-Means Clustering",
      "Data Preprocessing",
      "Feature Engineering",
      "Behavior Analysis",
      "Data Visualization",
      "Business Insights",
    ],
    github: "https://github.com/DevWith-Ashfak/customer-segmentation-ML-analysis.git",
    live: null,
    hero: false,
    screenshots: [],
    details: {
      overview:
        "An unsupervised ML application that segments customers into meaningful groups using K-Means clustering, enabling targeted marketing strategies.",
      problem:
        "Businesses struggle to understand diverse customer behaviors and needs, leading to generic marketing that doesn't resonate with specific segments.",
      solution:
        "Applied K-Means clustering on customer data to identify distinct segments based on purchasing behavior, demographics, and engagement patterns.",
      architecture: "Python-based ML pipeline with Scikit-learn, Pandas for data processing, Matplotlib/Seaborn for visualization",
      challenges: [
        "Determining the optimal number of clusters using elbow method and silhouette analysis",
        "Handling mixed data types (numerical and categorical features)",
        "Interpreting cluster characteristics for actionable business insights",
      ],
      decisions: [
        "Used StandardScaler for feature normalization before clustering",
        "Applied PCA for dimensionality reduction and visualization",
        "Chose K-Means for its interpretability and scalability",
      ],
      apiDesign: "Jupyter Notebook-based analysis with modular Python scripts for reusable preprocessing",
      folderStructure: "Notebooks, data, src (preprocessing, clustering, visualization), outputs",
      databaseDesign: "CSV-based data storage with structured preprocessing pipeline",
      lessons: [
        "Feature scaling is critical for distance-based algorithms like K-Means",
        "Domain knowledge is essential for interpreting cluster results meaningfully",
        "Visualization is key to communicating ML insights to stakeholders",
      ],
    },
  },
  {
    slug: "student-depression",
    title: "Student Depression Prediction",
    subtitle: "Predictive ML System",
    description:
      "A supervised machine learning application that predicts the likelihood of student depression using academic, demographic, and lifestyle data.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    features: [
      "Depression Prediction",
      "Data Preprocessing",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Model Training",
      "Performance Evaluation",
      "Data Visualization",
    ],
    github: "https://github.com/DevWith-Ashfak/student-depression-prediction-ml.git",
    live: null,
    hero: false,
    screenshots: [],
    details: {
      overview:
        "A supervised ML system that predicts student depression risk using academic, demographic, and lifestyle factors, helping identify at-risk students early.",
      problem:
        "Student mental health is a growing concern, and early identification of at-risk students can enable timely intervention and support.",
      solution:
        "Built classification models using student data to predict depression likelihood, with comprehensive EDA and feature importance analysis.",
      architecture: "Python ML pipeline with Scikit-learn classifiers, Pandas data processing, and comprehensive visualization",
      challenges: [
        "Handling class imbalance in mental health data",
        "Selecting the most predictive features from diverse data sources",
        "Ensuring model interpretability for sensitive predictions",
      ],
      decisions: [
        "Used multiple classifiers (Logistic Regression, Random Forest, SVM) for comparison",
        "Applied SMOTE for handling class imbalance",
        "Prioritized recall to minimize false negatives in at-risk identification",
      ],
      apiDesign: "Modular Python scripts with Jupyter Notebooks for exploration and presentation",
      folderStructure: "data, notebooks, src (preprocessing, models, evaluation), outputs, reports",
      databaseDesign: "Structured CSV dataset with preprocessing pipeline for feature engineering",
      lessons: [
        "Class imbalance requires careful handling in medical/mental health predictions",
        "Model interpretability is crucial when predictions affect people's wellbeing",
        "Feature engineering from diverse data sources significantly impacts model performance",
      ],
    },
  },
];

export const certificates = [
  {
    title: "Google Certificate",
    issuer: "Google",
    url: "https://edu.google.accredible.com/5ac44173-af84-4cea-8ac9-eb27a831c0be",
    description: "Professional certification from Google",
  },
];

export const contactInfo = {
  name: "Ashfak",
  email: "ashfakseinudeen@gmail.com",
  phone: "+94 786862100",
  location: "Kurunegala, Sri Lanka",
  github: "https://github.com/DevWith-Ashfak",
  linkedin: "https://linkedin.com/in/ashfak56",
};
