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
      stack: ["Python", "Flask", "HTML5", "CSS3 Modules", "Machine Learning Logic"],
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
      ],
      metrics: ["Reduces triage routing delay by 85%", "Multilingual string token processing", "Zero-dependency internal lookup arrays"]
    },
    {
      title: "Complaint Route AI",
      subtitle: "Enterprise AI Triage System",
      category: "AI & Full-Stack Development",
      shortDesc: "AI-powered resume screening and recruitment platform using Python, Flask, NLP, automated scoring, and candidate ranking. ",
      longDesc: "CareerSaathi is an AI-powered recruitment platform using Python, Flask, and NLP to analyze resumes, calculate quality scores, recommend careers, automate applicant screening, rank candidates, generate PDF feedback reports, and visualize resume performance through interactive dashboards, reducing manual recruitment effort and improving hiring efficiency.",
      stack: ["Python", "Flask", "HTML5", "CSS3 Modules", "Machine Learning Logic"],
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
      ],
      metrics: ["Reduces triage routing delay by 85%", "Multilingual string token processing", "Zero-dependency internal lookup arrays"]
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
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-10"></div>
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
              alt="Clean IDE window showing high complexity production source loops"
              className="rounded-xl border border-slate-800 object-cover shadow-2xl relative z-10 w-full aspect-[4/3] lg:aspect-square brightness-[0.8] contrast-[1.1]"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 block">Core Summary</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-snug">
                Turning Computational Logic Problems Into Polished Enterprise Architecture
              </h2>
            </div>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-normal">
              As a dedicated computer applications professional, I focus on clean object routing, explicit database constraints, and scalable modular logic. I build production-ready setups utilizing deep algorithmic pipelines, helping organizations streamline complex operations easily.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-xl font-bold text-white flex items-center gap-2"><FaLayerGroup className="text-cyan-400 text-sm" /> Full-Stack</div>
                <p className="text-[11px] text-slate-500 mt-1">Python, React & Database Schemas</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-xl font-bold text-white flex items-center gap-2"><FaServer className="text-blue-400 text-sm" /> Optimization</div>
                <p className="text-[11px] text-slate-500 mt-1">High-Throughput API Frameworks</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deep Competence Technology Matrix */}
      <section id="skills" className="py-24 bg-[#040710]/50 border-y border-slate-900 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-2 mb-16">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-400 block">Tech Capability</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Technical Competence Matrix</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 70, damping: 14, delay: index * 0.1 }}
                variants={cardHoverEffects}
                whileHover="hover"
                className={`bg-slate-900/30 backdrop-blur-md border border-slate-800 p-6 rounded-xl relative overflow-hidden transition-all duration-300 hover:border-slate-700 shadow-xl group ${item.glow}`}
              >
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${item.accent} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                <div className="text-xl text-cyan-400 mb-4 bg-[#02040a] w-12 h-12 rounded-lg flex items-center justify-center border border-slate-800 shadow-inner group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-base font-bold text-white mb-4">{item.category}</h3>
                
                <ul className="space-y-2.5">
                  {item.techs.map((tech) => (
                    <li key={tech} className="flex items-center gap-2.5 text-slate-400 text-xs font-medium">
                      <FaCheckCircle className="text-cyan-400/30 text-[10px] shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
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
                  <div className="h-56 md:h-72 w-full rounded-xl bg-slate-950 border border-slate-900 overflow-hidden relative group">
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



  {/* Network Mailbox Form (Contact Replaced with Social 3-Column Grid Matrix) */}
<section id="contact" className="py-24 px-4 sm:px-6 md:px-16 max-w-5xl mx-auto">
  <div className="text-center space-y-2 mb-12">
    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 block">Connection Hub</span>
    <h2 className="text-3xl font-black text-white tracking-tight">Initiate Interview Pipelines</h2>
    <p className="text-xs text-slate-500 font-mono max-w-md mx-auto">
      Select a communications endpoint or scan the protocol block to sync up on mobile.
    </p>
  </div>

  {/* Widened High-Fidelity Glassmorphic Dashboard Panel */}
  <div className="bg-slate-900/10 border border-slate-900 p-6 md:p-8 rounded-2xl shadow-2xl backdrop-blur-md">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      
      {/* LEFT SIDE: Social Endpoint Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-2">
        
        {/* LinkedIn Node */}
        <motion.a
          href="https://linkedin.com/in/vishal-l-shettigar"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.99 }}
          className="flex items-center gap-4 p-4 rounded-xl bg-[#02040a]/60 border border-slate-900 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-colors duration-300 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-cyan-950/40 border border-cyan-900/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
            <FaLinkedin className="text-lg" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">LinkedIn Protocol</span>
            <span className="text-xs font-semibold mt-0.5">vishal-l-shettigar</span>
          </div>
        </motion.a>

        {/* GitHub Node */}
        <motion.a
          href="https://github.com/VishalLShettigar"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.99 }}
          className="flex items-center gap-4 p-4 rounded-xl bg-[#02040a]/60 border border-slate-900 hover:border-slate-500/40 text-slate-300 hover:text-white transition-colors duration-300 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:bg-white group-hover:text-slate-950 transition-all duration-300 shadow-md">
            <FaGithub className="text-lg" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">GitHub Repository</span>
            <span className="text-xs font-semibold mt-0.5">VishalLShettigar</span>
          </div>
        </motion.a>

        {/* Email Link Node */}
        <motion.a
          href="https://mail.google.com/mail/u/0/#inbox"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.99 }}
          className="flex items-center gap-4 p-4 rounded-xl bg-[#02040a]/60 border border-slate-900 hover:border-blue-500/40 text-slate-300 hover:text-white transition-colors duration-300 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-blue-950/40 border border-blue-900/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
            <FaEnvelope className="text-lg" />
          </div>
          <div className="flex flex-col max-w-[180px] sm:max-w-none">
            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">Mail Terminal</span>
            <span className="text-xs font-semibold mt-0.5 truncate">lsvishalshettigar@gmail.com</span>
          </div>
        </motion.a>

        {/* Direct Line / Phone Node */}
        <motion.a
          href="tel:+919663135942"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.99 }}
          className="flex items-center gap-4 p-4 rounded-xl bg-[#02040a]/60 border border-slate-900 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-colors duration-300 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-emerald-950/40 border border-emerald-900/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
            <FaPhone className="text-base" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">Comms Relay (Phone)</span>
            <span className="text-xs font-semibold mt-0.5">+91 96631 35942</span>
          </div>
        </motion.a>

        {/* Instagram Node (Takes up the bottom full row of the left sub-grid) */}
        <motion.a
          href="https://instagram.com/_.vishalshettigar._"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.99 }}
          className="flex items-center gap-4 p-4 rounded-xl bg-[#02040a]/60 border border-slate-900 hover:border-pink-500/40 text-slate-300 hover:text-white transition-colors duration-300 group cursor-pointer sm:col-span-2"
        >
          <div className="w-10 h-10 rounded-lg bg-pink-950/40 border border-pink-900/30 flex items-center justify-center text-pink-400 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:via-pink-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-300 shadow-md">
            <FaInstagram className="text-lg" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">Visual Stream</span>
            <span className="text-xs font-semibold mt-0.5">@_.vishalshettigar._</span>
          </div>
        </motion.a>
      </div>

      {/* RIGHT SIDE: Dedicated 3-Row Height QR Code Panel Component */}
      <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-[#02040a]/80 border border-slate-900 text-center relative overflow-hidden group min-h-[260px] sm:col-span-2 lg:col-span-1">
        {/* Tech Ambient Radial Background Glow */}
        <div className="absolute -inset-10 bg-gradient-to-b from-cyan-500/5 to-transparent rounded-xl blur-xl pointer-events-none group-hover:scale-105 transition-transform duration-500"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center space-y-4 w-full">
          <div className="flex items-center justify-center gap-2 text-cyan-400">
            <FaMobileAlt className="text-sm animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase">Mobile Sync Protocol</span>
          </div>

          {/* Expanded Beautiful High-Contrast QR Code */}
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bg-white p-3 rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.1)] border border-cyan-500/10 cursor-pointer"
          >
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&color=02040a&bgcolor=ffffff&data=https://vishal-l-shettigar.vercel.app/" 
              alt="Portfolio Link Matrix"
              className="w-32 h-32 md:w-36 md:h-36 object-contain block"
            />
          </motion.div>

          <div className="space-y-1">
            <h4 className="text-xs font-bold text-slate-200">View on Smartphone</h4>
            <p className="text-[11px] text-slate-500 max-w-[180px] mx-auto leading-relaxed">
              Scan this encryption block to load the live environment instantly.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Footer Ecosystem */}
      <footer className="text-center py-8 border-t border-slate-900 bg-[#02040a] text-[10px] tracking-widest text-slate-600 font-mono">
        <p>© 2026 VISHAL L SHETTIGAR . ENGINEERING SYSTEM SPECIFICATIONS VERIFIED PRODUCTION OPTIMIZED.</p>
      </footer>
    </div>
  );
}