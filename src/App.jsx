import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaCertificate,
  FaCheckCircle,
  FaArrowRight,
  FaTerminal,
  FaTimes,
  FaArrowLeft,
  FaServer,
  FaLayerGroup,
  FaTrophy,
  FaMedal,
  FaAward,
  FaPhone, FaInstagram
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { FaMobileAlt } from 'react-icons/fa';

// Premium High-Performance Spring Animations
const faderUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  }
};

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const cardHoverEffects = {
  hover: {
    y: -6,
    scale: 1.015,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [showAllCerts, setShowAllCerts] = useState(false);
const [showAllAchievements, setShowAllAchievements] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);

  const aboutImages = [
  "/Photos/Profile/photo2.jpeg",
  "/Photos/Profile/photo1.jpeg",
  "/Photos/Profile/photo3.jpeg",
  "/Photos/Profile/photo6.jpeg",
  "/Photos/Profile/photo7.jpeg"
  
];

const [aboutIndex, setAboutIndex] = useState(0);

  const skillsData = [
    {
      category: "Frontend Architecture",
      icon: <FaLaptopCode />,
      techs: ["React.js", "Vite Engine", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 & CSS3"],
      accent: "from-cyan-400 to-blue-500",
      glow: "group-hover:shadow-cyan-500/10"
    },
    {
      category: "Backend & Databases",
      icon: <FaDatabase />,
      techs: ["Python", "Flask", "Java Frameworks", "ASP.NET Core", "MySQL Schemas"],
      accent: "from-blue-500 to-indigo-600",
      glow: "group-hover:shadow-blue-500/10"
    },
    {
      category: "AI & Automation Tools",
      icon: <FaCode />,
      techs: ["Computer Vision Arrays", "OpenCV Library", "TensorFlow Basics", "Git & GitHub Automation"],
      accent: "from-indigo-400 to-cyan-400",
      glow: "group-hover:shadow-indigo-500/10"
    }
  ];

  const projectData = [
    {
      title: "CareerSaathi",
      subtitle: "AI Resume Analyzer & Job Portal",
      category: "AI & Full-Stack Development",
      shortDesc: "AI-powered resume screening and recruitment platform using Python, Flask, NLP, automated scoring, and candidate ranking. ",
      longDesc: "CareerSaathi is an AI-powered recruitment platform using Python, Flask, and NLP to analyze resumes, calculate quality scores, recommend careers, automate applicant screening, rank candidates, generate PDF feedback reports, and visualize resume performance through interactive dashboards, reducing manual recruitment effort and improving hiring efficiency.",
      stack: ["Python", "Flask", "HTML5", "CSS3 Modules", "Machine Learning Logic","SQLite"],
      images: [
        "../public/Photos/CareerSaathi/CareerSaathi1.png",
        "../public/Photos/CareerSaathi/CareerSaathi2.png",
        "../public/Photos/CareerSaathi/CareerSaathi3.png",
        "../public/Photos/CareerSaathi/CareerSaathi4.png",
        "../public/Photos/CareerSaathi/CareerSaathi5.png",
        "../public/Photos/CareerSaathi/CareerSaathi6.png",
        "../public/Photos/CareerSaathi/CareerSaathi7.png",
        "../public/Photos/CareerSaathi/CareerSaathi8.png",
        "../public/Photos/CareerSaathi/CareerSaathi9.png",
        "../public/Photos/CareerSaathi/CareerSaathi10.png",
        "../public/Photos/CareerSaathi/CareerSaathi11.png",
        "../public/Photos/CareerSaathi/CareerSaathi12.png"
      ],
      metrics: ["AI-powered resume scoring and ranking system","Automated PDF/DOCX resume parsing accuracy","Instant recruiter-side applicant screening","Interactive analytics and resume visualization","Reduced manual recruitment processing time"]
    },
    {
      title: "Complaint Route AI",
      subtitle: "Enterprise AI Triage System",
      category: "Flask-Based Mini Project",
      shortDesc: "AI-powered resume screening and recruitment platform using Python, Flask, NLP, automated scoring, and candidate ranking. ",
      longDesc: "CareerSaathi is an AI-powered recruitment platform using Python, Flask, and NLP to analyze resumes, calculate quality scores, recommend careers, automate applicant screening, rank candidates, generate PDF feedback reports, and visualize resume performance through interactive dashboards, reducing manual recruitment effort and improving hiring efficiency.",
      stack: ["Python", "Flask", "HTML5", "CSS3 Modules", "Machine Learning Logic"],
      images: [
        "../public/Photos/Complaint-Routing/Complaint-Route1.png",
        "../public/Photos/Complaint-Routing/Complaint-Route2.png",
        "../public/Photos/Complaint-Routing/Complaint-Route3.png",
        "../public/Photos/Complaint-Routing/Complaint-Route4.png"
      ],
      metrics: ["Automated multi-department ticket assignment","Structured communication record parsing","24/7 intelligent request routing workflow","Reduced organizational response latency","Responsive real-time support interface"]
    },
    {
      title: "Traffic Sign Classifier & Search",
      subtitle: "Intelligent Traffic Sign Detection and Search Platform",
      category: "Machine Learning Mini Project",
      shortDesc: "AI-powered traffic sign classification and search platform using CNN, multilingual support, and online information retrieval.",
      longDesc: "Traffic Sign Classifier & Search is an AI-powered web application using CNN and Flask to classify traffic signs, search sign information online, provide multilingual support, fetch Google and Wikipedia data, and email prediction results, promoting driver education, traffic monitoring, and road safety awareness.",
      stack: ["Python", "CSS", "HTML", "Flask", "Google Custom Search API","Tensorflow"],
      images: [
        "../public/Photos/Traffic-Sign/traffic1.png",
        "../public/Photos/Traffic-Sign/traffic2.png",
        "../public/Photos/Traffic-Sign/traffic3.png"
      ],
      metrics: ["43-class CNN-based traffic sign prediction","Real-time image classification processing","Integrated multilingual sign information retrieval","Fast Google and Wikipedia data fetching","Improved road safety awareness assistance"]
    },
    {
      title: "PatraVision",
      subtitle: "AI-Powered Vision for Plant Health",
      category: "AI & Machine Learning Mini Project",
      shortDesc: "High-fidelity real-world web application built to enforce absolute state integrity and bulletproof voter metric tracking.",
      longDesc: "A complete software engineering package built from scratch to modernize democratic workflows. It utilizes structured database constraints to guarantee single-vote validation protocols, instant localized tallies, and high-performance interactive component screens that adapt seamlessly across devices.",
      stack: ["Python", "CSS", "HTML", "Flask", "Machine Learning","Tensorflow"],
      images: [
        "../public/Photos/PatraVision/PatraVision-Image1.png",
        "../public/Photos/PatraVision/PatraVision-Image2.png",
        "../public/Photos/PatraVision/PatraVision-Image3.png",
        "../public/Photos/PatraVision/PatraVision-Image4.png",
        "../public/Photos/PatraVision/PatraVision-Image5.png"
      ],
      metrics: ["38-class plant disease recognition model","High-speed leaf image prediction system","AI-powered crop disease identification","Automated agricultural health monitoring","Interactive disease detection visualization"]
    },
    {
      title: "Online Voting Portal",
      subtitle: "Secure Real-Time Election Engine",
      category: "Full-Stack Web Application",
      shortDesc: "High-fidelity real-world web application built to enforce absolute state integrity and bulletproof voter metric tracking.",
      longDesc: "A complete software engineering package built from scratch to modernize democratic workflows. It utilizes structured database constraints to guarantee single-vote validation protocols, instant localized tallies, and high-performance interactive component screens that adapt seamlessly across devices.",
      stack: ["React.js", "Tailwind CSS", "Node.js", "MySQL", "State Management Layer"],
      images: [
        "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
      ],
      metrics: ["100% accurate database transaction parsing", "Zero state manipulation risk arrays", "Sub-millisecond interface updates"]
    },
    {
      title: "Matadaan",
      subtitle: "Secure Real-Time Election Engine",
      category: "Full-Stack Web Application",
      shortDesc: "Secure college online voting system with authentication, candidate management, and real-time transparent election monitoring.",
      longDesc: "Matadaan is a secure online college voting system using HTML, CSS, JavaScript, and Microsoft Access to enable authenticated digital elections, candidate management, real-time result monitoring, and transparent voting processes while providing an interactive and user-friendly interface for students and administrators.",
      stack: ["HTML", "CSS", "JavaScript", "ASP.NET", "Microsoft Access"],
      images: [ 
        "/Photos/Matadaan/Matadaan1.png",
        "/Photos/Matadaan/Matadaan2.png",
        "/Photos/Matadaan/Matadaan3.png",
        "/Photos/Matadaan/Matadaan4.png",
        "/Photos/Matadaan/Matadaan5.png",
        "/Photos/Matadaan/Matadaan6.png",
        "/Photos/Matadaan/Matadaan7.png",
      ],
      metrics: ["Secure authenticated online voting workflow","Real-time election result management","Transparent digital vote processing system","Fast candidate and voter administration","Reliable database-driven election monitoring"]
    }
  ];

  const certificationData = [
    {
      title: "Certification Program in Python Programming",
      issuer: "EduBridge Learning",
      id: "EBEONO9251229703",
      date: "November 2025",
      icon: <FaCertificate className="text-cyan-400" />,
      link: 'https://www.edubridgeindia.com/certificate-detail?enrollment_number=EBEON09251229703',

    },
    {
      title: "Fundamentals of Java Full Stack Program",
      issuer: "nasscom",
      id: "FSP/2025/11/10246164",
      date: "November 2025",
      icon: <FaAward className="text-blue-400" />,
    link: 'https://inspiration-fun-7467.my.salesforce-sites.com/CDACcertificatePage2?id=a02Vy00000bciPrIAI',
    },
    {
      title: "Graphic Design",
      issuer: "Adobe",
      id: "L3GVNRFM2T73L",
      date: "October 2025",
      icon: <FaMedal className="text-indigo-400" />,
    link: 'https://www.coursera.org/account/accomplishments/verify/L3GVNRFM2T73',
    },
     {
      title: "Generative AI Content Creation",
      issuer: "Adobe",
      id: "A5VV4QD5GCTW",
      date: "September 2025",
      icon: <FaMedal className="text-indigo-400" />,
    link: 'https://www.coursera.org/account/accomplishments/records/A5VV4QD5GCTW',
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      id: "AUTH-7721-SQL",
      date: "August 2025",
      icon: <FaMedal className="text-indigo-400" />,
    link: 'https://www.credly.com/badges/f322eb78-edf2-40a0-8a3e-2f1174fa0f04/linked_in_profile',
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "IBM",
      id: "PLAN-4FB8400F05FC",
      date: "August 2025",
      icon: <FaMedal className="text-indigo-400" />,
    link: 'https://www.credly.com/badges/68d3a639-2572-4021-80e2-8af1c3f476b4/linked_in_profile',
    },
    {
      title: "Tata - Data Visualisation: Empowering Business with Effective Insights Job Simulation",
      issuer: "Forage",
      id: "4uZwGNaGxDy46heCg",
      date: "August 2025",
      icon: <FaMedal className="text-indigo-400" />,
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_L6zcAyqQr2Wmn7Eki_1755708032256_completion_certificate.pdf',
    },
    {
      title: "Web Development Fundamentals",
      issuer: "IBM",
      id: "PLAN-8749C02A78EC",
      date: "July 2025",
      icon: <FaMedal className="text-indigo-400" />,
    link: 'https://www.credly.com/badges/e557e392-81df-4709-8d04-1ddd63a0d17c/linked_in_profile',
    },
    {
      title: "Tata - Cybersecurity Analyst Job Simulation",
      issuer: "Forage",
      id: "hG8EyM8xNrYFHM5dj",
      date: "August 2025",
      icon: <FaMedal className="text-indigo-400" />,
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_L6zcAyqQr2Wmn7Eki_1754661637975_completion_certificate.pdf',
    }
  ];

  const achievementData = [
    {
      metric: "Rank #1",
      title: "Inter-Collegiate Systems Hackathon",
      desc: "Architected a high-throughput real-time resource routing platform within an absolute 36-hour sprint restriction.",
      icon: <FaTrophy className="text-amber-400" />
    },
    {
      metric: "9.52 CGPA",
      title: "Academic Excellence Track (BCA)",
      desc: "Ranked among top tier graduates for consistent execution across Object-Oriented Logic and Mathematical Modeling fields.",
      icon: <FaGraduationCap className="text-cyan-400" />
    },{
      metric: "9.52 CGPA",
      title: "Academic Excellence Track (BCA)",
      desc: "Ranked among top tier graduates for consistent execution across Object-Oriented Logic and Mathematical Modeling fields.",
      icon: <FaGraduationCap className="text-cyan-400" />
    },{
      metric: "9.52 CGPA",
      title: "Academic Excellence Track (BCA)",
      desc: "Ranked among top tier graduates for consistent execution across Object-Oriented Logic and Mathematical Modeling fields.",
      icon: <FaGraduationCap className="text-cyan-400" />
    }
  ];

  const educationTimeline = [
    { degree: "Master of Computer Applications (MCA)", inst: "Canara College, Mangaluru", board: "Mangalore University", dates: "2024 — 2025", score: "CGPA: 8.92", focus: "Advanced System Scalability & Full-Stack Deployment Modules" },
    { degree: "Bachelor of Computer Application (BCA)", inst: "Govinda Dasa College, Surathkal", board: "Mangalore University", dates: "2020 — 2023", score: "CGPA: 9.52", focus: "Object-Oriented Architecture, Data Schemas & Mathematical Logic" },
    { degree: "Pre-University Course (PUC)", inst: "Shri Durga Parameshwari Pre-University College, Kateel", board: "Department of PUE, Karnataka", dates: "2018 — 2020", score: "96.67% BASC", focus: "Analytical Computation & Advanced Algorithmic Basics" },
    { degree: "Secondary School Leaving Certificate (SSLC)", inst: "Vidyadayinee High School, Mangaluru", board: "KSEEB, Karnataka", dates: "Completed 2018", score: "90.56% 560/625", focus: "Foundational Logic, Mathematical Analysis & Basic Sciences" }
  ];

  const openProjectModal = (proj) => {
    setSelectedProject(proj);
    setCurrentImgIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentImgIndex(0); // Clear layout index to fix thumbnail tracks
    document.body.style.overflow = "unset";
  };

  return (
    <div className="bg-[#02040a] text-slate-100 selection:bg-cyan-400 selection:text-black antialiased relative min-h-screen font-sans tracking-normal overflow-x-hidden">
      
      {/* Premium Cinematic Cosmic Mesh Background */}
      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[70vw] h-[70vw] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12)_0%,transparent_65%)] blur-[60px] animate-pulse duration-[8s]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[65vw] h-[65vw] bg-[radial-gradient(circle_at_center,rgba(29,78,216,0.15)_0%,transparent_70%)] blur-[80px] animate-pulse duration-[12s]"></div>
        <div className="absolute top-[35%] left-[20%] w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06)_0%,transparent_60%)] blur-[50px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#0f172a_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-75"></div>
      </div>

      {/* Floating Glassmorphic Top Bar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-between items-center px-6 md:px-16 py-4 sticky top-0 backdrop-blur-xl bg-[#02040a]/70 border-b border-slate-900 z-40"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span>
          <span className="text-sm font-black tracking-[0.2em] text-white uppercase font-mono">
            Vishal<span className="text-cyan-400">_L</span><span className="text-green-400">_Shettigar</span>
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
          {["about", "skills", "projects", "credentials", "education"].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="hover:text-cyan-400 transition-colors relative group py-1">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Interactive Terminal Hero Area */}
      <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center px-4 max-w-6xl mx-auto relative pt-8">
        
        <motion.div
  initial={{ scale: 0.8, opacity: 0, y: 15 }}
  animate={{ scale: 1, opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.05 }}
  className="relative mb-8 group cursor-pointer"
>
  {/* Cosmic background ambient glow - expands and brightens on hover */}
  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 group-hover:scale-115 transition-all duration-500"></div>
  
  {/* High-fidelity outer gradient ring border - enlarged to w-44 and scales/rotates on hover */}
  <div className="w-44 h-44 rounded-full p-[3px] bg-gradient-to-b from-cyan-400 via-slate-800 to-blue-600 relative z-10 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 overflow-hidden">
    <div className="w-full h-full rounded-full bg-[#05070f] relative overflow-hidden border border-slate-900/50">
      
      {/* Your Profile Image Asset - zooms and sharpens on hover */}
      <img 
        src="/Profile.jpeg" 
        alt="Vishal L Shettigar Profile"
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-[-2px] brightness-[0.95] hover:brightness-105 contrast-[1.05]"
      />

      {/* Futuristic "LIVE_CORE" overlay grid anchor at the bottom */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#02040a] via-[#05070f]/95 to-transparent pt-5 pb-2.5 flex flex-col items-center justify-center border-t border-slate-900/40 backdrop-blur-[1px] z-20">
        <span className="text-[8px] font-mono font-black text-cyan-400 tracking-[0.2em] uppercase flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          LIVE_CORE
        </span>
      </div>

    </div>
  </div>
</motion.div>


        <motion.div 
          variants={containerStagger}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={faderUp} className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-1.5 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
            <span className="text-[10px] font-mono font-extrabold text-slate-300 tracking-wider uppercase">Open for Software Engineering Positions</span>
          </motion.div>

          <motion.h1 variants={faderUp} className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.1] font-sans">
            Architecting Modern, <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              High-Integrity Systems
            </span>
          </motion.h1>

          <motion.p variants={faderUp} className="max-w-3xl mx-auto text-slate-400 text-sm sm:text-lg font-normal leading-relaxed">
            Highly motivated Computer Applications graduate ready for a core Software Developer role. Skilled in building full-stack web architectures, optimizing database lookups, and applying computer vision frameworks.
          </motion.p>
        </motion.div>

        <motion.div
          variants={faderUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto px-6 z-10"
        >
          <motion.a 
  href="/Vishal_L_Shettigar_CV.pdf" // Path relative to your public directory
  download="Vishal_L_Shettigar_Resume.pdf" // Suggests the file name to save as
  whileHover={{ scale: 1.03, y: -2 }}
  whileTap={{ scale: 0.98 }}
  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-xs tracking-wider uppercase px-8 py-4 rounded-xl shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20 transition duration-200 flex items-center justify-center gap-3 cursor-pointer"
>
  <FaDownload /> Download Engineering Profile
</motion.a>

          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="border border-slate-800 bg-slate-900/30 text-slate-300 hover:text-white text-xs tracking-wider uppercase px-8 py-4 rounded-xl font-bold transition duration-200 flex items-center justify-center gap-2 hover:bg-slate-800/40"
          >
            Review Project Registry <FaArrowRight className="text-xs text-cyan-400" />
          </motion.a>
        </motion.div>
      </section>


{/* Structural Biography Section */}
<section id="about" className="py-24 px-6 md:px-16 max-w-6xl mx-auto border-t border-slate-900/60">
  <div className="grid lg:grid-cols-12 gap-12 items-center">

    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 16,
      }}
      className="lg:col-span-5 relative"
    >

      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-indigo-500/20 rounded-3xl blur-2xl"></div>

      {/* Main Image Container */}
<div className="
  relative overflow-hidden

  rounded-3xl

  border border-white/10

  bg-white/[0.03]

  backdrop-blur-xl

  shadow-[0_0_40px_rgba(34,211,238,0.08)]

  group
">

  {/* IMAGE */}
  <motion.img

    key={aboutIndex}

    initial={{
      opacity: 0,
      scale: 1.08,
      x: 80,
    }}

    animate={{
      opacity: 1,
      scale: 1,
      x: 0,
    }}

    transition={{
      duration: 0.7,
      ease: "easeInOut",
    }}

    src={aboutImages[aboutIndex]}

    alt="Portfolio showcase"

    drag="x"

    dragConstraints={{
      left: 0,
      right: 0,
    }}

    onDragEnd={(event, info) => {

      if (info.offset.x < -100) {

        setAboutIndex(
          aboutIndex === aboutImages.length - 1
            ? 0
            : aboutIndex + 1
        );

      }

      if (info.offset.x > 100) {

        setAboutIndex(
          aboutIndex === 0
            ? aboutImages.length - 1
            : aboutIndex - 1
        );

      }

    }}

    className="
      w-full
      aspect-[4/3]
      lg:aspect-square

      object-cover

      brightness-[0.92]
      contrast-[1.05]

      cursor-grab
      active:cursor-grabbing

      group-hover:scale-105

      transition duration-700
    "
  />

  {/* LEFT BUTTON */}
  <motion.button

    whileHover={{
      scale: 1.12,
      x: -2,
    }}

    whileTap={{
      scale: 0.92,
    }}

    onClick={() =>
      setAboutIndex(
        aboutIndex === 0
          ? aboutImages.length - 1
          : aboutIndex - 1
      )
    }

    className="
      absolute left-4 top-1/2 -translate-y-1/2 z-20

      w-11 h-11

      rounded-2xl

      bg-black/40
      backdrop-blur-xl

      border border-white/10

      text-white text-lg

      flex items-center justify-center

      opacity-0
      group-hover:opacity-100

      hover:bg-cyan-500
      hover:text-black
      hover:border-cyan-400

      hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]

      transition-all duration-300
    "
  >
    ❮
  </motion.button>

  {/* RIGHT BUTTON */}
  <motion.button

    whileHover={{
      scale: 1.12,
      x: 2,
    }}

    whileTap={{
      scale: 0.92,
    }}

    onClick={() =>
      setAboutIndex(
        aboutIndex === aboutImages.length - 1
          ? 0
          : aboutIndex + 1
      )
    }

    className="
      absolute right-4 top-1/2 -translate-y-1/2 z-20

      w-11 h-11

      rounded-2xl

      bg-black/40
      backdrop-blur-xl

      border border-white/10

      text-white text-lg

      flex items-center justify-center

      opacity-0
      group-hover:opacity-100

      hover:bg-cyan-500
      hover:text-black
      hover:border-cyan-400

      hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]

      transition-all duration-300
    "
  >
    ❯
  </motion.button>

  {/* OVERLAY */}
  <div className="
    absolute bottom-0 inset-x-0 h-32

    bg-gradient-to-t
    from-[#020617]
    via-[#020617]/60
    to-transparent
  "></div>

  {/* FLOATING GLOW */}
  <div className="
    absolute inset-0

    bg-gradient-to-tr
    from-cyan-500/0
    via-cyan-500/0
    to-blue-500/0

    group-hover:from-cyan-500/5
    group-hover:to-blue-500/10

    transition-all duration-700
  "></div>

  {/* NAME */}
  <div className="absolute bottom-5 left-5 z-10">

    <motion.span

      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}

      className="
        text-[10px]

        uppercase

        tracking-[0.2em]

        font-mono
        font-bold

        text-cyan-400

        bg-black/40
        backdrop-blur-md

        px-4 py-2

        rounded-full

        border border-cyan-500/20

        shadow-[0_0_20px_rgba(34,211,238,0.12)]
      "
    >
      VISHAL L SHETTIGAR
    </motion.span>

  </div>
</div>

      {/* BUTTON */}
      <motion.button

        whileHover={{
          scale: 1.03,
          y: -3,
        }}

        whileTap={{
          scale: 0.96,
        }}

        onClick={() => setShowProfileCard(true)}

        className="
          mt-6
          w-full

          py-4 rounded-2xl

          bg-gradient-to-r
          from-cyan-500/10
          via-blue-500/10
          to-indigo-500/10

          border border-cyan-500/20

          text-cyan-400

          text-xs
          font-bold
          font-mono
          uppercase
          tracking-[0.25em]

          backdrop-blur-xl

          transition-all duration-500

          hover:bg-cyan-500
          hover:text-black
          hover:border-cyan-400

          hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
        "
      >
        More Information
      </motion.button>

      {/* MODAL CARD */}
      <AnimatePresence>

        {showProfileCard && (

          <motion.div

            initial={{
              opacity: 0,
              scale: 0.85,
              y: 40,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}

            transition={{
              duration: 0.45,
            }}

            className="
              fixed inset-0 z-[999]

              flex items-center justify-center

              bg-black/70
              backdrop-blur-md

              p-5
            "
          >

           {/* MAIN CARD */}
<motion.div

  initial={{ y: 30, scale: 0.92 }}
  animate={{ y: 0, scale: 1 }}

  className="
    relative

    w-full
    max-w-3xl

    rounded-[2rem]

    border border-cyan-500/20

    bg-[#060816]/95

    overflow-y-auto
    max-h-[90vh]

    shadow-[0_0_60px_rgba(34,211,238,0.18)]

    p-6 md:p-8
  "
>

  {/* TOP GLOW */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"></div>

  {/* CLOSE BUTTON */}
  <button

    onClick={() => setShowProfileCard(false)}

    className="
      absolute top-4 right-4 z-50

      w-10 h-10

      rounded-xl

      border border-slate-700

      bg-slate-900/80

      text-slate-400

      flex items-center justify-center

      hover:bg-cyan-500
      hover:text-black
      hover:rotate-90

      transition-all duration-300
    "
  >
    ✕
  </button>

  {/* HEADER */}
  <div className="mb-8">

    <p className="text-cyan-400 text-[10px] uppercase tracking-[0.35em] font-mono mb-3">
      Professional Profile
    </p>

    <h2 className="text-3xl md:text-4xl font-black text-white">
      Vishal L Shettigar
    </h2>

    <p className="text-slate-400 mt-4 text-sm leading-relaxed max-w-xl">
      MCA graduate passionate about Full Stack Development,
      AI systems, futuristic UI engineering, and modern
      digital experiences.
    </p>

  </div>

  {/* GRID */}
  <div className="grid lg:grid-cols-2 gap-8">

    {/* LEFT SIDE */}
    <div className="space-y-4">

      {[
        {
          title: "Education",
          value: "Master of Computer Applications",
          icon: "🎓",
        },

        {
          title: "Specialization",
          value: "Full Stack & AI",
          icon: "💻",
        },

        {
          title: "Location",
          value: "Karnataka, India",
          icon: "📍",
        },

        {
          title: "Goal",
          value: "Software Engineer",
          icon: "🚀",
        },

      ].map((item, index) => (

        <motion.div

          key={index}

          whileHover={{
            y: -4,
            scale: 1.02,
          }}

          transition={{
            type: "spring",
            stiffness: 200,
          }}

          className="
            group

            rounded-2xl

            border border-slate-800

            bg-slate-900/40

            p-4

            transition-all duration-300

            hover:border-cyan-500/30
            hover:bg-slate-900/70
            hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]
          "
        >

          <div className="flex items-start gap-4">

            {/* ICON */}
            <div className="
              w-11 h-11

              rounded-xl

              bg-cyan-500/10

              border border-cyan-500/20

              flex items-center justify-center

              text-xl

              group-hover:scale-110
              group-hover:rotate-6

              transition-all duration-300
            ">
              {item.icon}
            </div>

            {/* TEXT */}
            <div>

              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-mono mb-1">
                {item.title}
              </p>

              <h4 className="text-white text-sm font-semibold leading-relaxed">
                {item.value}
              </h4>

            </div>
          </div>

        </motion.div>

      ))}
    </div>

    {/* RIGHT SIDE */}
    <div>

      <div className="mb-6">

        <p className="text-cyan-400 text-[10px] uppercase tracking-[0.3em] font-mono mb-3">
          Languages Known
        </p>

        <h3 className="text-2xl font-bold text-white">
          Communication Skills
        </h3>

      </div>

      {/* DONUT GRID */}
      <div className="grid grid-cols-2 gap-5">

        {[
          {
            name: "English",
            percent: 82,
            color: "#22d3ee",
          },

          {
            name: "Kannada",
            percent: 98,
            color: "#3b82f6",
          },

          {
            name: "Hindi",
            percent: 72,
            color: "#818cf8",
          },

          {
            name: "Tulu",
            percent: 90,
            color: "#06b6d4",
          },

        ].map((lang, index) => {

          const radius = 48;
          const stroke = 9;
          const normalizedRadius = radius - stroke * 0.5;

          const circumference =
            normalizedRadius * 2 * Math.PI;

          const strokeDashoffset =
            circumference -
            (lang.percent / 100) * circumference;

          return (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                scale: 0.8,
                y: 20,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}

              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}

              whileHover={{
                y: -6,
                scale: 1.05,
              }}

              className="
                group

                relative overflow-hidden

                rounded-3xl

                border border-slate-800

                bg-slate-900/40

                p-4

                flex flex-col items-center

                transition-all duration-300

                hover:border-cyan-500/30
                hover:bg-slate-900/70
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
              "
            >

              {/* CARD GLOW */}
              <div className="
                absolute inset-0

                bg-gradient-to-br
                from-cyan-500/5
                to-blue-500/5

                opacity-0
                group-hover:opacity-100

                transition-all duration-500
              "></div>

              {/* DONUT */}
              <div className="relative w-28 h-28">

                <svg
                  height={radius * 2}
                  width={radius * 2}
                  className="rotate-[-90deg]"
                >

                  {/* BG */}
                  <circle
                    stroke="#1e293b"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                  />

                  {/* PROGRESS */}
                  <motion.circle

                    initial={{
                      strokeDashoffset: circumference,
                    }}

                    animate={{
                      strokeDashoffset,
                    }}

                    transition={{
                      duration: 2,
                      delay: index * 0.2,
                    }}

                    strokeLinecap="round"

                    stroke={lang.color}

                    fill="transparent"

                    strokeWidth={stroke}

                    strokeDasharray={`${circumference} ${circumference}`}

                    style={{
                      strokeDashoffset,
                      filter: `drop-shadow(0px 0px 8px ${lang.color})`,
                    }}

                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                  />

                </svg>

                {/* CENTER TEXT */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <span className="text-2xl font-black text-white group-hover:scale-110 transition-transform duration-300">
                    {lang.percent}%
                  </span>

                </div>
              </div>

              {/* LANGUAGE */}
              <h4 className="mt-4 text-white font-bold tracking-wide">
                {lang.name}
              </h4>

            </motion.div>

          );

        })}

      </div>
    </div>
  </div>
</motion.div>
          </motion.div>

        )}

      </AnimatePresence>

    </motion.div>

    
          <motion.div

  initial={{ opacity: 0, x: 40 }}

  whileInView={{ opacity: 1, x: 0 }}

  viewport={{ once: true, margin: "-100px" }}

  transition={{
    type: "spring",
    stiffness: 60,
    damping: 15
  }}

  className="lg:col-span-7 relative"
>

  {/* BACKGROUND GLOW */}
  <div className="
    absolute -top-10 -right-10

    w-72 h-72

    bg-cyan-500/10

    blur-3xl

    rounded-full
  "></div>

  <div className="relative z-10 space-y-8">

    {/* HEADER */}
    <div className="space-y-4">

      {/* TOP TAG */}
      <motion.span

        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}

        transition={{ delay: 0.1 }}

        className="
          inline-flex items-center gap-2

          text-[10px]

          font-mono
          font-bold

          uppercase
          tracking-[0.3em]

          text-cyan-400

          bg-cyan-500/5

          border border-cyan-500/20

          px-4 py-2

          rounded-full

          backdrop-blur-md
        "
      >

        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>

        Core Summary

      </motion.span>

      {/* TITLE */}
      <motion.h2

        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}

        transition={{ delay: 0.2 }}

        className="
          text-4xl md:text-5xl

          font-black

          tracking-tight

          leading-tight

          text-white
        "
      >

        Engineering Intelligent

        <span className="
          block

          bg-gradient-to-r
          from-cyan-400
          via-blue-400
          to-indigo-400

          bg-clip-text
          text-transparent
        ">

          Digital Experiences

        </span>

      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p

        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}

        transition={{ delay: 0.3 }}

        className="
          text-slate-400

          text-sm md:text-base

          leading-relaxed

          max-w-3xl
        "
      >
        I am an MCA graduate and Full Stack Developer passionate about
        building scalable web applications, AI-powered systems, and
        modern responsive interfaces. My focus is on creating clean,
        efficient, and production-ready solutions with strong backend
        architecture and seamless user experiences.
      </motion.p>

    </div>

    {/* FEATURE GRID */}
    <div className="grid md:grid-cols-2 gap-5">

      {/* CARD 1 */}
      <motion.div

        whileHover={{
          y: -8,
          scale: 1.02,
        }}

        transition={{
          type: "spring",
          stiffness: 200,
        }}

        className="
          group

          relative overflow-hidden

          p-6

          rounded-3xl

          bg-slate-900/40

          border border-slate-800/80

          backdrop-blur-xl

          transition-all duration-500

          hover:border-cyan-500/30

          hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]
        "
      >

        {/* GLOW */}
        <div className="
          absolute inset-0

          bg-gradient-to-br
          from-cyan-500/5
          to-blue-500/5

          opacity-0
          group-hover:opacity-100

          transition-all duration-500
        "></div>

        <div className="relative z-10">

          {/* ICON */}
          <div className="
            w-14 h-14

            rounded-2xl

            bg-cyan-500/10

            border border-cyan-500/20

            flex items-center justify-center

            mb-5

            text-cyan-400 text-xl

            group-hover:scale-110
            group-hover:rotate-6

            transition-all duration-500
          ">
            <FaLayerGroup />
          </div>

          {/* TITLE */}
          <h3 className="text-2xl font-bold text-white">
            Full Stack Development
          </h3>

          {/* TEXT */}
          <p className="text-sm text-slate-400 leading-relaxed mt-3">
            Developing scalable applications using Python, Flask,
            React, SQL databases, and responsive frontend
            architectures for modern enterprise systems.
          </p>

        </div>
      </motion.div>

      {/* CARD 2 */}
      <motion.div

        whileHover={{
          y: -8,
          scale: 1.02,
        }}

        transition={{
          type: "spring",
          stiffness: 200,
        }}

        className="
          group

          relative overflow-hidden

          p-6

          rounded-3xl

          bg-slate-900/40

          border border-slate-800/80

          backdrop-blur-xl

          transition-all duration-500

          hover:border-blue-500/30

          hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]
        "
      >

        {/* GLOW */}
        <div className="
          absolute inset-0

          bg-gradient-to-br
          from-blue-500/5
          to-indigo-500/5

          opacity-0
          group-hover:opacity-100

          transition-all duration-500
        "></div>

        <div className="relative z-10">

          {/* ICON */}
          <div className="
            w-14 h-14

            rounded-2xl

            bg-blue-500/10

            border border-blue-500/20

            flex items-center justify-center

            mb-5

            text-blue-400 text-xl

            group-hover:scale-110
            group-hover:-rotate-6

            transition-all duration-500
          ">
            <FaServer />
          </div>

          {/* TITLE */}
          <h3 className="text-2xl font-bold text-white">
            AI & Backend Systems
          </h3>

          {/* TEXT */}
          <p className="text-sm text-slate-400 leading-relaxed mt-3">
            Creating intelligent systems with optimized APIs,
            automation workflows, resume analyzers, AI integrations,
            and structured database management solutions.
          </p>

        </div>
      </motion.div>

    </div>

    {/* BOTTOM STATS */}
    <motion.div

      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}

      transition={{ delay: 0.4 }}

      className="
        flex flex-wrap gap-4 pt-2
      "
    >

      {[
        "Responsive UI",
        "AI Integration",
        "Database Design",
        "REST APIs",
        "Modern Web Apps"
      ].map((item, index) => (

        <span

          key={index}

          className="
            px-4 py-2

            rounded-full

            text-xs

            font-mono
            font-semibold

            text-slate-300

            border border-slate-800

            bg-slate-900/40

            hover:border-cyan-500/30
            hover:text-cyan-400

            transition-all duration-300

            cursor-default
          "
        >
          {item}
        </span>

      ))}

    </motion.div>

  </div>
</motion.div>
        </div>
      </section>

     {/* Deep Competence Technology Matrix */}
<section
  id="skills"

  className="
    relative overflow-hidden

    py-28

    bg-[#040710]/70

    border-y border-slate-900

    px-6 md:px-16
  "
>

  {/* BACKGROUND GLOW */}
  <div className="
    absolute top-0 left-0

    w-96 h-96

    bg-cyan-500/10

    blur-3xl

    rounded-full
  "></div>

  <div className="
    absolute bottom-0 right-0

    w-[30rem] h-[30rem]

    bg-blue-500/10

    blur-3xl

    rounded-full
  "></div>

  <div className="max-w-6xl mx-auto relative z-10">

    {/* HEADER */}
    <div className="text-center space-y-5 mb-20">

      {/* TOP TAG */}
      <motion.span

        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.5 }}

        className="
          inline-flex items-center gap-2

          text-[10px]

          font-mono
          font-bold

          uppercase
          tracking-[0.3em]

          text-cyan-400

          px-5 py-2

          rounded-full

          border border-cyan-500/20

          bg-cyan-500/5

          backdrop-blur-md
        "
      >

        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>

        Tech Capability

      </motion.span>

      {/* TITLE */}
      <motion.h2

        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}

        transition={{ delay: 0.1 }}

        className="
          text-4xl md:text-5xl

          font-black

          tracking-tight

          text-white
        "
      >

        Technical Competence

        <span className="
          block

          mt-2

          bg-gradient-to-r
          from-cyan-400
          via-blue-400
          to-indigo-400

          bg-clip-text
          text-transparent
        ">

          Matrix

        </span>

      </motion.h2>

      {/* SUBTEXT */}
      <motion.p

        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}

        transition={{ delay: 0.2 }}

        className="
          text-slate-400

          max-w-2xl mx-auto

          text-sm md:text-base

          leading-relaxed
        "
      >
        A strong combination of Full Stack Development,
        AI technologies, scalable backend systems,
        database architecture, and modern frontend engineering.
      </motion.p>

    </div>

    {/* SKILL GRID */}
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {skillsData.map((item, index) => (

        <motion.div

          key={index}

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{ once: true }}

          transition={{
            type: "spring",
            stiffness: 80,
            damping: 14,
            delay: index * 0.1,
          }}

          whileHover={{
            y: -10,
            scale: 1.02,
          }}

          className={`
            group

            relative overflow-hidden

            rounded-[2rem]

            border border-slate-800/80

            bg-slate-900/40

            backdrop-blur-2xl

            p-7

            transition-all duration-500

            hover:border-cyan-500/30

            hover:shadow-[0_0_50px_rgba(34,211,238,0.14)]

            ${item.glow}
          `}
        >

          {/* ANIMATED TOP LINE */}
          <div className={`
            absolute top-0 left-0

            w-full h-[3px]

            bg-gradient-to-r ${item.accent}

            scale-x-0 origin-left

            group-hover:scale-x-100

            transition-transform duration-700
          `}></div>

          {/* HOVER GLOW */}
          <div className="
            absolute inset-0

            bg-gradient-to-br
            from-cyan-500/5
            via-transparent
            to-blue-500/5

            opacity-0

            group-hover:opacity-100

            transition-all duration-700
          "></div>

          {/* FLOATING BLUR */}
          <div className="
            absolute -top-10 -right-10

            w-32 h-32

            bg-cyan-500/10

            blur-3xl

            rounded-full

            opacity-0

            group-hover:opacity-100

            transition-all duration-700
          "></div>

          <div className="relative z-10">

            {/* ICON */}
            <motion.div

              whileHover={{
                rotate: 8,
                scale: 1.12,
              }}

              className="
                w-16 h-16

                rounded-2xl

                bg-[#02040a]

                border border-slate-800

                flex items-center justify-center

                text-2xl text-cyan-400

                shadow-inner

                mb-6

                transition-all duration-500

                group-hover:border-cyan-500/30
                group-hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
              "
            >
              {item.icon}
            </motion.div>

            {/* CATEGORY */}
            <h3 className="
              text-xl

              font-bold

              text-white

              mb-5

              group-hover:text-cyan-400

              transition-colors duration-300
            ">
              {item.category}
            </h3>

            {/* TECH LIST */}
            <ul className="space-y-3">

              {item.techs.map((tech, techIndex) => (

                <motion.li

                  key={tech}

                  initial={{
                    opacity: 0,
                    x: -10,
                  }}

                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}

                  transition={{
                    delay: techIndex * 0.05,
                  }}

                  className="
                    flex items-center gap-3

                    text-sm

                    text-slate-400

                    font-medium

                    group/item
                  "
                >

                  {/* CHECK ICON */}
                  <div className="
                    w-5 h-5

                    rounded-full

                    bg-cyan-500/10

                    border border-cyan-500/20

                    flex items-center justify-center

                    shrink-0

                    group-hover/item:scale-110

                    transition-transform duration-300
                  ">

                    <FaCheckCircle className="text-cyan-400 text-[10px]" />

                  </div>

                  {/* TECH */}
                  <span className="
                    group-hover/item:text-slate-200

                    transition-colors duration-300
                  ">
                    {tech}
                  </span>

                </motion.li>

              ))}

            </ul>

          </div>

        </motion.div>

      ))}

    </div>

  </div>
</section>

      {/* Full-Stack Interactive Project Explorer Registry */}
<section
  id="projects"
  className="py-24 px-6 md:px-16 border-b border-slate-900/60 max-w-6xl mx-auto"
>
  {/* Heading */}
  <div className="text-center space-y-2 mb-16">
    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 block">
      Assembled Systems
    </span>

    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
      Real-World Software Assets
    </h2>
  </div>

  {/* Header Row */}
  <div className="flex items-center justify-between flex-wrap gap-4 mb-10">

    <div>
      <h3 className="text-sm font-mono font-extrabold uppercase tracking-[0.15em] text-slate-400 flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
        Production Registries
      </h3>
    </div>

    {/* VIEW ALL BUTTON */}
    {projectData.length > 3 && (
      <button
        onClick={() => setShowAllProjects(!showAllProjects)}
        className="text-[10px] font-mono font-bold uppercase tracking-wider px-4 py-2 rounded-lg border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300"
      >
        {showAllProjects
          ? "Show Less"
          : `View All (${projectData.length})`}
      </button>
    )}
  </div>

  {/* PROJECT GRID */}
  <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">

    {(showAllProjects
      ? projectData
      : projectData.slice(0, 3)
    ).map((project, idx) => (

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 14,
          delay: idx * 0.1
        }}
        variants={cardHoverEffects}
        whileHover="hover"
        key={idx}
        className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-xl flex flex-col justify-between overflow-hidden shadow-2xl hover:border-slate-700/80 transition group"
      >

        <div className="p-6 space-y-3">

          <span className="text-[9px] font-mono font-extrabold uppercase tracking-wider px-2.5 py-1 bg-[#02040a] text-cyan-400 border border-slate-800 rounded inline-block">
            {project.category}
          </span>

          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-[11px] font-mono text-slate-500 mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-normal pt-2">
            {project.shortDesc}
          </p>
        </div>

        <div className="px-6 pb-6 pt-2 space-y-4">

          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono text-slate-400 bg-[#02040a] px-2 py-0.5 rounded border border-slate-900"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-900">
            <button
              onClick={() => openProjectModal(project)}
              className="w-full py-3 rounded-lg bg-[#02040a] hover:bg-slate-800 text-xs font-bold tracking-wider text-center text-slate-200 border border-slate-800 flex items-center justify-center gap-2 transition"
            >
              Explore System Blueprint

              <FaExternalLinkAlt className="text-[9px] text-cyan-400" />
            </button>
          </div>

        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* NEW: Achievements & Certifications Section */}
<section
  id="credentials"
  className="py-24 bg-[#03060e]/40 border-b border-slate-900/80 px-6 md:px-16"
>
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center space-y-2 mb-16">
      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-400 block">
        System Validation
      </span>

      <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
        Achievements & Certifications
      </h2>
    </div>

    <div className="grid lg:grid-cols-12 gap-10 items-start">

      {/* LEFT SIDE */}
<div className="lg:col-span-7 space-y-5">

  {/* HEADER */}
  <div className="flex items-center justify-between flex-wrap gap-4">

    <h3 className="text-sm font-mono font-extrabold uppercase tracking-[0.15em] text-slate-400 flex items-center gap-2">
      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
      Industry Verifications
    </h3>

    {/* VIEW ALL BUTTON */}
    {certificationData.length > 3 && (
      <button
        onClick={() => setShowAllCerts(!showAllCerts)}
        className="
          text-[10px] font-mono font-bold uppercase tracking-wider
          px-4 py-2 rounded-lg
          border border-cyan-500/20
          bg-cyan-500/5
          text-cyan-400
          hover:bg-cyan-500
          hover:text-black
          hover:border-cyan-400
          hover:shadow-[0_0_15px_rgba(34,211,238,0.45)]
          transition-all duration-300
        "
      >
        {showAllCerts
          ? "Show Less"
          : `View All (${certificationData.length})`}
      </button>
    )}
  </div>

  {/* CERTIFICATION CARDS */}
  <div className="space-y-4">

    {(showAllCerts
      ? certificationData
      : certificationData.slice(0, 3)
    ).map((cert, index) => (

      <motion.div
        key={index}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
          delay: index * 0.08
        }}

        whileHover={{
          x: 6,
          scale: 1.01,
          borderLeftColor: "#22d3ee"
        }}

        className="
          p-5 rounded-xl
          bg-slate-900/20
          border-l-2 border-transparent
          border border-slate-800/60
          backdrop-blur-sm
          flex gap-4 items-center justify-between
          group
          transition-all duration-300
          hover:bg-slate-900/40
          hover:border-cyan-500/20
        "
      >

        {/* LEFT CONTENT */}
        <div className="flex gap-4 items-center">

          {/* ICON */}
          <div className="
            w-11 h-11 rounded-lg
            bg-[#02040a]
            border border-slate-800
            flex items-center justify-center
            text-lg shrink-0
            shadow-inner
            group-hover:scale-110
            transition-transform duration-300
          ">
            {cert.icon}
          </div>

          {/* TEXT */}
          <div>
            <h4 className="
              text-sm md:text-base
              font-bold text-white
              group-hover:text-cyan-400
              transition-colors duration-200
            ">
              {cert.title}
            </h4>

            <p className="text-xs text-slate-400 mt-0.5">
              {cert.issuer}

              <span className="text-slate-600 mx-2">
                •
              </span>

              <span className="font-mono text-slate-500">
                {cert.id}
              </span>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-end gap-2 shrink-0">

          {/* DATE */}
          <span className="
            text-xs font-mono font-bold
            text-slate-500
            bg-slate-900
            px-2.5 py-1
            rounded border border-slate-800
          ">
            {cert.date}
          </span>

          {/* VIEW CERTIFICATE BUTTON */}
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/btn
              inline-flex items-center gap-1.5

              text-[10px]
              font-mono font-bold uppercase tracking-wider

              px-3 py-2 rounded-lg

              border border-cyan-500/20
              bg-cyan-500/5
              text-cyan-400

              backdrop-blur-md

              transition-all duration-300

              hover:bg-cyan-500
              hover:text-black
              hover:border-cyan-400
              hover:shadow-[0_0_18px_rgba(34,211,238,0.45)]
              hover:scale-105

              active:scale-95
            "
          >

            {/* ICON */}
            <span className="
              group-hover/btn:rotate-12
              transition-transform duration-300
            ">
              📜
            </span>

            View
          </a>

        </div>

      </motion.div>

    ))}
  </div>
</div>

      {/* RIGHT SIDE */}
      <div className="lg:col-span-5 space-y-5">

        <div className="flex items-center justify-between flex-wrap gap-4">

          <h3 className="text-sm font-mono font-extrabold uppercase tracking-[0.15em] text-slate-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
            Competitive Performance
          </h3>

          {/* VIEW ALL BUTTON */}
          {achievementData.length > 2 && (
            <button
              onClick={() =>
                setShowAllAchievements(!showAllAchievements)
              }
              className="text-[10px] font-mono font-bold uppercase tracking-wider px-4 py-2 rounded-lg border border-blue-500/20 bg-blue-500/5 text-blue-400 hover:bg-blue-500 hover:text-black transition-all duration-300"
            >
              {showAllAchievements
                ? "Show Less"
                : `View All (${achievementData.length})`}
            </button>
          )}
        </div>

        {/* ACHIEVEMENT CARDS */}
        <div className="space-y-4">
          {(showAllAchievements
            ? achievementData
            : achievementData.slice(0, 2)
          ).map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: index * 0.1
              }}
              whileHover={{
                y: -4,
                scale: 1.02
              }}
              className="p-6 rounded-xl bg-gradient-to-br from-slate-900/40 to-slate-950/20 border border-slate-800 relative overflow-hidden group shadow-xl hover:border-cyan-500/20 transition-all duration-300"
            >

              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all text-6xl pointer-events-none">
                {ach.icon}
              </div>

              <div className="flex items-start gap-4">

                <div className="text-xl mt-1">
                  {ach.icon}
                </div>

                <div className="space-y-2">

                  <span className="text-[10px] font-mono font-black text-cyan-400 tracking-wider uppercase bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10 inline-block">
                    {ach.metric}
                  </span>

                  <h4 className="text-base font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                    {ach.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {ach.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Dynamic Immersive Project Modal Blueprint Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectModal}
            className="fixed inset-0 bg-[#02040a]/95 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              onClick={(e) => e.stopPropagation()} // Stop propagation here
              className="bg-[#070b12] border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Sticky Close Button */}
              <button 
                onClick={closeProjectModal}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition"
              >
                <FaTimes />
              </button>

              <div className="grid md:grid-cols-12 gap-6 p-6 md:p-8">
                
                {/* Visual Slide Frame Panel */}
                <div className="md:col-span-6 space-y-3">
                  <div className="h-56 md:h-100 w-full rounded-xl bg-slate-950 border border-slate-900 overflow-hidden relative group">
                    <img 
                      src={selectedProject.images[currentImgIndex]} 
                      alt="Production deployment subsystem interface capture frame" 
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    
                    {/* Sliding Carousel Overlays with propagation block fixed */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation(); // FIXED Propagation block
                        setCurrentImgIndex(prev => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-800 transition z-10"
                    >
                      <FaArrowLeft className="text-xs" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation(); // FIXED Propagation block
                        setCurrentImgIndex(prev => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-800 transition z-10"
                    >
                      <FaArrowRight className="text-xs" />
                    </button>
                  </div>

                  {/* Thumbnail Track indicators */}
                  <div className="flex gap-2 justify-center">
                    {selectedProject.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImgIndex(idx);
                        }}
                        className={`w-3 h-3 rounded-full border transition-all ${currentImgIndex === idx ? "bg-cyan-400 border-cyan-400 w-6" : "bg-slate-800 border-transparent"}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Conceptual Blueprint Description Panel */}
                <div className="md:col-span-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div>
                      <span className="text-[9px] font-mono font-bold text-cyan-400 tracking-wider uppercase bg-cyan-500/5 border border-cyan-500/20 px-2 py-0.5 rounded">{selectedProject.category}</span>
                      <h3 className="text-2xl font-black text-white pt-2">{selectedProject.title}</h3>
                      <p className="text-xs font-mono text-slate-500">{selectedProject.subtitle}</p>
                    </div>

                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-normal">{selectedProject.longDesc}</p>
                    
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">System Integration Metrics</h4>
                      <ul className="space-y-1.5">
                        {selectedProject.metrics.map((m, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shrink-0"></span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-900">
                    {selectedProject.stack.map(t => (
                      <span key={t} className="text-[10px] font-mono bg-slate-950 text-slate-400 px-2.5 py-1 rounded border border-slate-800">{t}</span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Structural Chronological Education Timeline Track */}
      <section id="education" className="py-24 bg-[#040710]/30 border-t border-slate-900 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-20">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-400 block">Verified Record</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Academic Foundations</h2>
          </div>

          <div className="relative border-l-2 border-slate-800 pl-6 ml-2 md:pl-8 md:ml-4 space-y-10">
            {educationTimeline.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 70, damping: 14 }}
                className="relative group"
              >
                {/* Node indicator */}
                <div className="absolute left-[-33px] md:left-[-41px] top-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#02040a] border-2 border-slate-800 flex items-center justify-center group-hover:border-cyan-400 transition-colors duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-cyan-400 transition-colors"></div>
                </div>

                <div className="bg-slate-900/10 border border-slate-900/60 group-hover:border-slate-800 p-5 md:p-6 rounded-xl transition duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{edu.degree}</h3>
                    <span className="text-xs font-mono font-bold text-slate-500">{edu.dates}</span>
                  </div>
                  
                  <p className="text-slate-300 text-xs md:text-sm font-semibold">{edu.inst}</p>
                  <p className="text-slate-500 text-[10px] tracking-wide font-medium mt-0.5">{edu.board}</p>
                  <p className="text-xs text-slate-400 leading-relaxed mt-3 pt-3 border-t border-slate-900/40 font-normal">{edu.focus}</p>

                  <div className="mt-3 pt-2">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/5 px-2.5 py-1 rounded border border-cyan-500/10">{edu.score}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



  {/* Network Mailbox Form */}
<section
  id="contact"

  className="
    relative overflow-hidden

    py-28

    px-4 sm:px-6 md:px-16

    max-w-6xl mx-auto
  "
>

  {/* BACKGROUND GLOW */}
  <div className="
    absolute top-0 left-0

    w-96 h-96

    bg-cyan-500/10

    rounded-full

    blur-3xl
  "></div>

  <div className="
    absolute bottom-0 right-0

    w-[28rem] h-[28rem]

    bg-blue-500/10

    rounded-full

    blur-3xl
  "></div>

  {/* HEADER */}
  <div className="relative z-10 text-center space-y-5 mb-16">

    <motion.span

      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}

      className="
        inline-flex items-center gap-2

        text-[10px]

        font-mono font-bold

        uppercase tracking-[0.3em]

        text-cyan-400

        px-5 py-2

        rounded-full

        border border-cyan-500/20

        bg-cyan-500/5

        backdrop-blur-md
      "
    >

      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>

      Connection Hub

    </motion.span>

    <motion.h2

      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}

      transition={{ delay: 0.1 }}

      className="
        text-4xl md:text-5xl

        font-black

        tracking-tight

        text-white
      "
    >

      Let’s Build Something

      <span className="
        block mt-2

        bg-gradient-to-r
        from-cyan-400
        via-blue-400
        to-indigo-400

        bg-clip-text
        text-transparent
      ">
        Amazing Together
      </span>

    </motion.h2>

    <motion.p

      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}

      transition={{ delay: 0.2 }}

      className="
        text-sm

        text-slate-400

        max-w-xl mx-auto

        leading-relaxed
      "
    >
      Open to internships, full-time opportunities,
      collaborations, and innovative software projects.
      Connect through any preferred communication channel.
    </motion.p>

  </div>

  {/* MAIN PANEL */}
  <div className="
    relative z-10

    rounded-[2rem]

    border border-slate-800/80

    bg-slate-900/30

    backdrop-blur-2xl

    p-6 md:p-8

    shadow-[0_0_50px_rgba(15,23,42,0.5)]
  ">

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* SOCIAL LINKS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:col-span-2">

        {[
          {
            icon: <FaLinkedin />,
            title: "LinkedIn",
            value: "vishal-l-shettigar",
            href: "https://linkedin.com/in/vishal-l-shettigar",
            glow: "hover:border-cyan-500/40",
            iconBg: "group-hover:bg-cyan-500",
            iconText: "text-cyan-400",
          },

          {
            icon: <FaGithub />,
            title: "GitHub",
            value: "VishalLShettigar",
            href: "https://github.com/VishalLShettigar",
            glow: "hover:border-white/20",
            iconBg: "group-hover:bg-white",
            iconText: "text-slate-300",
          },

          {
            icon: <FaEnvelope />,
            title: "Email",
            value: "lsvishalshettigar@gmail.com",
            href: "mailto:lsvishalshettigar@gmail.com",
            glow: "hover:border-blue-500/40",
            iconBg: "group-hover:bg-blue-500",
            iconText: "text-blue-400",
          },

          {
            icon: <FaPhone />,
            title: "Phone",
            value: "+91 96631 35942",
            href: "tel:+919663135942",
            glow: "hover:border-emerald-500/40",
            iconBg: "group-hover:bg-emerald-500",
            iconText: "text-emerald-400",
          },

        ].map((item, index) => (

          <motion.a

            key={index}

            href={item.href}

            target="_blank"

            rel="noopener noreferrer"

            whileHover={{
              y: -8,
              scale: 1.02,
            }}

            whileTap={{
              scale: 0.98,
            }}

            initial={{
              opacity: 0,
              y: 20,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: index * 0.08,
            }}

            className={`
              group

              relative overflow-hidden

              flex items-center gap-4

              p-5

              rounded-3xl

              border border-slate-800

              bg-[#02040a]/70

              backdrop-blur-xl

              transition-all duration-500

              ${item.glow}

              hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
            `}
          >

            {/* GLOW */}
            <div className="
              absolute inset-0

              bg-gradient-to-br
              from-cyan-500/5
              to-blue-500/5

              opacity-0

              group-hover:opacity-100

              transition-all duration-500
            "></div>

            {/* ICON */}
            <div className={`
              relative z-10

              w-14 h-14

              rounded-2xl

              border border-slate-800

              bg-slate-900/70

              flex items-center justify-center

              text-xl

              ${item.iconText}

              ${item.iconBg}

              group-hover:text-black

              transition-all duration-500

              shadow-lg
            `}>
              {item.icon}
            </div>

            {/* TEXT */}
            <div className="relative z-10 flex flex-col">

              <span className="
                text-[10px]

                font-mono font-bold

                uppercase tracking-[0.25em]

                text-slate-500
              ">
                {item.title}
              </span>

              <span className="
                text-sm

                font-semibold

                text-slate-200

                mt-1

                break-all
              ">
                {item.value}
              </span>

            </div>

          </motion.a>

        ))}

        {/* INSTAGRAM */}
        <motion.a

          href="https://instagram.com/_.vishalshettigar._"

          target="_blank"

          rel="noopener noreferrer"

          whileHover={{
            y: -8,
            scale: 1.02,
          }}

          whileTap={{
            scale: 0.98,
          }}

          className="
            group

            relative overflow-hidden

            sm:col-span-2

            flex items-center gap-4

            p-5

            rounded-3xl

            border border-slate-800

            bg-[#02040a]/70

            backdrop-blur-xl

            hover:border-pink-500/40

            hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]

            transition-all duration-500
          "
        >

          {/* GLOW */}
          <div className="
            absolute inset-0

            bg-gradient-to-r
            from-pink-500/5
            via-purple-500/5
            to-orange-500/5

            opacity-0

            group-hover:opacity-100

            transition-all duration-500
          "></div>

          {/* ICON */}
          <div className="
            relative z-10

            w-14 h-14

            rounded-2xl

            border border-slate-800

            bg-slate-900/70

            flex items-center justify-center

            text-pink-400 text-xl

            group-hover:bg-gradient-to-br
            group-hover:from-yellow-400
            group-hover:via-pink-500
            group-hover:to-purple-600

            group-hover:text-white

            transition-all duration-500
          ">
            <FaInstagram />
          </div>

          {/* TEXT */}
          <div className="relative z-10 flex flex-col">

            <span className="
              text-[10px]

              font-mono font-bold

              uppercase tracking-[0.25em]

              text-slate-500
            ">
              Instagram
            </span>

            <span className="
              text-sm

              font-semibold

              text-slate-200

              mt-1
            ">
              @_.vishalshettigar._
            </span>

          </div>

        </motion.a>

      </div>

      {/* QR PANEL */}
      <motion.div

        initial={{
          opacity: 0,
          scale: 0.9,
        }}

        whileInView={{
          opacity: 1,
          scale: 1,
        }}

        transition={{
          delay: 0.3,
        }}

        whileHover={{
          y: -5,
        }}

        className="
          relative overflow-hidden

          rounded-[2rem]

          border border-slate-800

          bg-[#02040a]/80

          backdrop-blur-2xl

          p-8

          flex flex-col items-center justify-center

          text-center

          min-h-[320px]

          hover:border-cyan-500/30

          hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]

          transition-all duration-500
        "
      >

        {/* BACKGROUND GLOW */}
        <div className="
          absolute inset-0

          bg-gradient-to-b
          from-cyan-500/5
          to-transparent

          opacity-0

          hover:opacity-100
        "></div>

        {/* TOP */}
        <div className="
          relative z-10

          flex items-center gap-2

          text-cyan-400

          mb-5
        ">

          <FaMobileAlt className="animate-pulse" />

          <span className="
            text-[10px]

            font-mono font-bold

            uppercase tracking-[0.25em]
          ">
            Mobile Access
          </span>

        </div>

        {/* QR */}
        <motion.div

          whileHover={{
            scale: 1.05,
            rotate: 2,
          }}

          className="
            relative z-10

            bg-white

            p-4

            rounded-2xl

            shadow-[0_0_40px_rgba(34,211,238,0.18)]
          "
        >

          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&color=02040a&bgcolor=ffffff&data=https://vishal-l-shettigar.vercel.app/"
            alt="Portfolio QR"

            className="
              w-40 h-40

              object-contain
            "
          />

        </motion.div>

        {/* TEXT */}
        <div className="relative z-10 mt-6 space-y-2">

          <h4 className="
            text-sm

            font-bold

            text-white
          ">
            Open Portfolio on Mobile
          </h4>

          <p className="
            text-xs

            text-slate-500

            leading-relaxed
          ">
            Scan the QR code to instantly
            access the live portfolio experience.
          </p>

        </div>

      </motion.div>

    </div>

  </div>
</section>

    {/* Premium Footer */}
<footer
  className="
    relative overflow-hidden

    border-t border-slate-800/70

    bg-[#02040a]

    py-12 px-6
  "
>

  {/* TOP GLOW LINE */}
  <div className="
    absolute top-0 left-0

    h-[1px] w-full

    bg-gradient-to-r
    from-transparent
    via-cyan-400/40
    to-transparent
  "></div>

  {/* AMBIENT GLOW */}
  <div className="
    absolute left-1/2 top-0

    -translate-x-1/2

    w-[35rem] h-[14rem]

    bg-cyan-500/10

    blur-3xl

    rounded-full
  "></div>

  {/* GRID OVERLAY */}
  <div className="
    absolute inset-0

    opacity-[0.03]

    bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]

    bg-[size:40px_40px]
  "></div>

  <div className="
    relative z-10

    max-w-6xl mx-auto

    flex flex-col items-center justify-center

    text-center
  ">

    {/* BRAND TITLE */}
    <motion.div

      initial={{
        opacity: 0,
        y: 20,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.6,
      }}

      className="space-y-4"
    >

      <h2 className="
        text-2xl md:text-4xl

        font-black

        tracking-tight

        bg-gradient-to-r
        from-cyan-400
        via-blue-400
        to-indigo-400

        bg-clip-text
        text-transparent
      ">
        Vishal L Shettigar
      </h2>

      {/* SUBTITLE */}
      <p className="
        text-[10px]

        uppercase

        tracking-[0.35em]

        font-mono

        text-slate-500
      ">
        Full Stack Developer • AI Systems Engineer • MCA Graduate
      </p>

    </motion.div>

    {/* DIVIDER */}
    <motion.div

      initial={{
        width: 0,
        opacity: 0,
      }}

      whileInView={{
        width: "220px",
        opacity: 1,
      }}

      transition={{
        delay: 0.2,
        duration: 0.8,
      }}

      className="
        h-[1px]

        my-8

        bg-gradient-to-r
        from-transparent
        via-cyan-500/40
        to-transparent
      "
    ></motion.div>

    {/* DESCRIPTION */}
    <motion.p

      initial={{
        opacity: 0,
        y: 15,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        delay: 0.3,
      }}

      className="
        text-sm

        text-slate-500

        leading-relaxed

        max-w-2xl
      "
    >
      Passionate about building scalable web applications,
      AI-powered systems, and visually polished digital
      experiences with modern technologies and clean architecture.
    </motion.p>

    {/* TECH STACK BADGES */}
    <motion.div

      initial={{
        opacity: 0,
        y: 15,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        delay: 0.4,
      }}

      className="
        flex flex-wrap items-center justify-center gap-3

        mt-8
      "
    >

      {[
        "React",
        "Flask",
        "Tailwind CSS",
        "Framer Motion",
        "Python",
        "AI Systems"
      ].map((item, index) => (

        <span

          key={index}

          className="
            px-4 py-2

            rounded-full

            text-[10px]

            uppercase

            tracking-wider

            font-mono font-bold

            text-slate-400

            border border-slate-800

            bg-slate-900/40

            hover:border-cyan-500/30
            hover:text-cyan-400

            transition-all duration-300
          "
        >
          {item}
        </span>

      ))}

    </motion.div>

    {/* BOTTOM COPYRIGHT */}
    <motion.div

      initial={{
        opacity: 0,
      }}

      whileInView={{
        opacity: 1,
      }}

      transition={{
        delay: 0.5,
      }}

      className="
        mt-10

        space-y-2
      "
    >

      <p className="
        text-[10px]

        tracking-[0.3em]

        uppercase

        font-mono

        text-slate-600
      ">
        © 2026 Vishal L Shettigar
      </p>

      <p className="
        text-[11px]

        text-slate-700
      ">
        Designed & Engineered with Precision • Production Optimized
      </p>

    </motion.div>

  </div>
</footer>
    </div>
  );
}