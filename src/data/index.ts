import type { Publication, ResearchInterest, Experience, Education, Person, Project, Stat } from "@/types";

export const SITE_CONFIG = {
  name: "Mohammed Rakibul Hasan",
  title: "Mohammed Rakibul Hasan — Quantum & AI Researcher",
  description:
    "Incoming PhD student in Computer Engineering (Fall 2026) working on Quantum Communication, QKD, Radar Sensing, and AI-driven systems.",
  url: "https://rakibulhasan.dev",
  github: "https://github.com/r-hasan-c",
  linkedin: "https://www.linkedin.com/in/your-profile",
  twitter: "https://x.com/your-handle",
  email: "mailto:rakibul.hasan@example.com",
  googleScholar: "#",
  orcid: "#",
  cvUrl: "#",
  githubUsername: "r-hasan-c",
};

export const STATS: Stat[] = [
  { label: "Publications", value: 3, suffix: "+" },
  { label: "Research Projects", value: 6, suffix: "+" },
  { label: "Students Assisted", value: 20, suffix: "+" },
  { label: "Years of Experience", value: 2, suffix: "+" },
];

export const RESEARCH_INTERESTS: ResearchInterest[] = [
  {
    id: "qkd",
    title: "Quantum Key Distribution",
    description:
      "Designing and analyzing QKD protocols for unconditionally secure cryptographic key exchange, leveraging quantum mechanical principles.",
    technologies: ["BB84", "E91", "QKD Protocols", "Quantum Cryptography"],
    icon: "🔐",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: "quantum-comm",
    title: "Quantum Communication",
    description:
      "Exploring quantum entanglement and superposition for next-generation secure communication channels and quantum networks.",
    technologies: ["Entanglement", "Quantum Channels", "Photonic Systems"],
    icon: "⚛️",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "radar",
    title: "Radar Sensing",
    description:
      "Advancing radar signal processing and sensing techniques for target detection, classification, and tracking using AI-driven methods.",
    technologies: ["FMCW Radar", "SAR", "Signal Processing", "Deep Learning"],
    icon: "📡",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    description:
      "Developing intelligent systems that can learn, reason, and act — with applications spanning secure communications and scientific research.",
    technologies: ["Machine Learning", "Neural Networks", "Optimization"],
    icon: "🧠",
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    description:
      "Building advanced neural architectures for perception, generation, and reasoning in complex, high-dimensional domains.",
    technologies: ["CNN", "Transformer", "PyTorch", "TensorFlow"],
    icon: "🤖",
    color: "from-rose-500 to-pink-600",
  },
  {
    id: "cv",
    title: "Computer Vision",
    description:
      "Creating systems that perceive, interpret, and understand visual information — from disaster damage detection to medical imaging.",
    technologies: ["Object Detection", "Segmentation", "xBD", "Satellite Imagery"],
    icon: "👁️",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "rag",
    title: "Retrieval-Augmented Generation",
    description:
      "Enhancing LLM capabilities through dynamic retrieval mechanisms for factual grounding in knowledge-intensive tasks.",
    technologies: ["RAG", "LLMs", "Vector DB", "Semantic Search"],
    icon: "🔍",
    color: "from-sky-500 to-indigo-600",
  },
  {
    id: "secure-img",
    title: "Secure Image Transmission",
    description:
      "Combining quantum cryptography and chaos theory for provably secure transmission of sensitive image data.",
    technologies: ["Chaos Encryption", "QKD", "Steganography", "Image Security"],
    icon: "🖼️",
    color: "from-lime-500 to-green-600",
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "qsit-2025",
    title:
      "Quantum Secure Image Transmission: A Chaos-Assisted Quantum Key Distribution Approach Using Entanglement",
    venue: "IET Quantum Communication",
    year: 2025,
    status: "published",
    tags: ["QKD", "Quantum", "Cryptography", "Image Security"],
    type: "journal",
    paperUrl: "#",
    citeUrl: "#",
    abstract:
      "We propose a chaos-assisted QKD framework that leverages quantum entanglement to achieve unconditionally secure transmission of sensitive image data, demonstrating significant improvements in key generation rate and security against eavesdropping.",
  },
  {
    id: "rag-thesis-2023",
    title:
      "Toward Accurate AI-Driven Historical QA: A Retrieval-Augmented Model (92% accuracy)",
    venue: "Undergraduate Thesis",
    year: 2023,
    status: "thesis",
    tags: ["RAG", "NLP", "AI", "LLMs"],
    type: "thesis",
    paperUrl: "#",
    abstract:
      "A retrieval-augmented generation system tailored for historical question answering, achieving 92% accuracy through optimized dense retrieval and generative reasoning pipelines.",
  },
  {
    id: "bangla-vqa-2025",
    title:
      "Bangla-Bayanno: A 52K-Pair Bengali VQA Dataset with LLM-Assisted Translation Refinement",
    venue: "Language Resources and Evaluation — Springer (arXiv 2025)",
    year: 2025,
    status: "under-review",
    tags: ["NLP", "VQA", "Bengali", "Dataset"],
    type: "preprint",
    paperUrl: "#",
    abstract:
      "We introduce Bangla-Bayanno, a large-scale Bengali Visual Question Answering dataset of 52K image-question-answer triplets, constructed via LLM-assisted translation refinement to ensure linguistic fidelity.",
  },
  {
    id: "disaster-2026",
    title:
      "Estimating Damage Caused by Natural Disasters using Deep Learning Methods on the xBD Dataset",
    venue: "Cognitive Models and Artificial Intelligence Conference 2026 — Prague, Czech Republic (IEEE Supported)",
    year: 2026,
    status: "accepted",
    tags: ["Deep Learning", "Computer Vision", "Disaster", "xBD"],
    type: "conference",
    paperUrl: "#",
    abstract:
      "We present a deep learning approach for automated damage assessment from satellite imagery using the xBD dataset, contributing to rapid disaster response through AI-driven geospatial analysis.",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "uah-gra",
    company: "University of Alabama in Huntsville",
    role: "Graduate Research Assistant",
    period: "Aug 2026 – Present",
    location: "Huntsville, AL, USA",
    description:
      "Conducting research in quantum communication and AI-driven radar sensing under the supervision of Dr. Jonathan Blakely.",
    type: "academic",
    current: true,
    logo: "/images/uah.png",
    supervisor: "Dr. Jonathan Blakely",
    supervisorUrl: "https://www.uah.edu/eng/departments/ece/faculty-staff/jonathan-blakely",
  },
  {
    id: "ite-pm",
    company: "Innovative Technology & Engineering",
    role: "Project Manager",
    period: "May 2026 – June 2026",
    location: "Dhaka, Bangladesh",
    description:
      "Coordinating technical teams, and stakeholder communication.",
    type: "industry",
    current: false,
    logo: "/images/ite.png",
  },
  {
    id: "ite-ai",
    company: "Innovative Technology & Engineering",
    role: "AI Engineer",
    period: "Jun 2025 – May 2026",
    location: "Dhaka, Bangladesh",
    description:
      "Designed and deployed computer vision models and LLM-based applications.",
    type: "industry",
    logo: "/images/ite.png",
  },
  {
    id: "ite-junior",
    company: "Innovative Technology & Engineering",
    role: "Junior AI Engineer",
    period: "Jun 2024 – May 2025",
    location: "Dhaka, Bangladesh",
    description:
      "Developed machine learning models and contributed to AI research prototypes. ",
    type: "industry",
    logo: "/images/ite.png",
  },
  {
    id: "nsu-ra",
    company: "North South University",
    role: "Research Assistant",
    period: "Aug 2023 – Mar 2024",
    location: "Dhaka, Bangladesh",
    description:
      "Assisted academic research in AI and Information Retrieval. Supervised 20+ undergraduate students in research projects and technical coursework.",
    type: "academic",
    logo: "/images/nsu.png",
    supervisor: "Dr. Razib Hayat Khan",
  },
];

export const EDUCATION: Education[] = [
  {
    id: "phd",
    degree: "Doctor of Philosophy",
    field: "Computer Engineering",
    institution: "University of Alabama in Huntsville",
    period: "Fall 2026 – Present",
    location: "Huntsville, AL, USA",
    status: "current",
    supervisor: "Dr. Jonathan Blakely",
    supervisorUrl: "https://www.uah.edu/eng/departments/ece/faculty-staff/jonathan-blakely",
    logo: "/images/uah.png",
  },
  {
    id: "bsc",
    degree: "Bachelor of Science",
    field: "Computer Science and Engineering",
    institution: "North South University",
    period: "2019 – 2023",
    location: "Dhaka, Bangladesh",
    status: "completed",
    logo: "/images/nsu.png",
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate",
    field: "Science",
    institution: "Dhaka Residential Model College",
    period: "2017 – 2018",
    location: "Dhaka, Bangladesh",
    status: "completed",
    logo: "/images/DRMC.png",
  },
];

export const PEOPLE: Person[] = [
  /* ── Supervisors & Mentors ── */
  {
    id: "blakely",
    name: "Dr. Jonathan Blakely",
    role: "PhD Supervisor",
    affiliation: "University of Alabama in Huntsville",
    category: "supervisor",
    url: "https://scholar.google.com/citations?user=IDS4oKYAAAAJ&hl=en",
    imageUrl: "/images/jonathan.jpeg",
  },
  {
    id: "mahdy",
    name: "Dr. Mahdy Rahman Chowdhury",
    role: "Undergraduate Thesis Supervisor",
    affiliation: "North South University",
    category: "supervisor",
    url: "https://scholar.google.com/citations?user=PxNOguMAAAAJ&hl=en",
    imageUrl: "/images/mahdy.jpeg",
  },
  {
    id: "tanvir",
    name: "Mohammad Tanvir Parvez",
    role: "Chief Value Officer",
    affiliation: "Innovative Technology & Engineering",
    category: "supervisor",
    imageUrl: "/images/tanvir.jpeg",
  },

  /* ── Co-authors & Collaborators ── */
  {
    id: "raiyan",
    name: "Raiyan Rahman",
    role: "PhD Student",
    affiliation: "NC State University",
    category: "collaborator",
    url: "https://scholar.google.com/citations?user=QrDmxHwAAAAJ&hl=en",
    imageUrl: "/images/raiyan.jpeg",
  },
  {
    id: "shawmoon",
    name: "Md. Shawmoon Azad",
    role: "PhD Student",
    affiliation: "Cleveland State University",
    category: "collaborator",
    url: "https://scholar.google.com/citations?user=qiLaY-AAAAAJ&hl=en",
    imageUrl: "/images/shawmoon.jpeg",
  },
  {
    id: "shubha",
    name: "Syed Emad Uddin Shubha",
    role: "PhD Student",
    affiliation: "Louisiana State University",
    category: "collaborator",
    url: "https://scholar.google.com/citations?user=8EK8VJMAAAAJ&hl=en",
    imageUrl: "/images/syed.jpeg",
  },
  {
    id: "rafi",
    name: "Rafi Majid",
    role: "Teaching Assistant",
    affiliation: "North South University",
    category: "collaborator",
    url: "https://www.linkedin.com/in/rafi-majid-4454621a8/",
    imageUrl: "/images/rafi.jpeg",
  },
  {
    id: "rifat",
    name: "Md. Rifat Ahmed",
    role: "Master's Student",
    affiliation: "Adelaide University",
    category: "collaborator",
    url: "https://www.linkedin.com/in/rifatahmedri2/",
    imageUrl: "/images/rifat.jpeg",
  },
  {
    id: "rezwan",
    name: "Rezwan Ul Alam",
    role: "Master's Student",
    affiliation: "La Trobe University",
    category: "collaborator",
    url: "https://www.linkedin.com/in/rezwan-ul-alam-50b719243/",
    imageUrl: "/images/rezwan.jpeg",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "qkd-chaos",
    title: "Chaos-Assisted QKD System",
    description:
      "A quantum key distribution framework enhanced with chaotic encryption for secure image transmission over noisy quantum channels.",
    technologies: ["Python", "Qiskit", "NumPy", "Chaos Theory"],
    githubUrl: "#",
    tags: ["Quantum", "QKD", "Security"],
    featured: true,
    category: "quantum",
  },
  {
    id: "rag-historicalqa",
    title: "Historical QA — RAG System",
    description:
      "Retrieval-augmented generation pipeline for historical question answering with dense retrieval and generative reasoning, achieving 92% accuracy.",
    technologies: ["Python", "LangChain", "FAISS", "Transformers", "HuggingFace"],
    githubUrl: "#",
    tags: ["AI", "RAG", "NLP"],
    featured: true,
    category: "ai",
  },
  {
    id: "bangla-vqa",
    title: "Bangla-Bayanno VQA Dataset",
    description:
      "A 52K-pair Bengali Visual Question Answering dataset construction pipeline with LLM-assisted translation and quality refinement.",
    technologies: ["Python", "GPT-4", "CLIP", "Translation Models"],
    githubUrl: "#",
    tags: ["NLP", "Dataset", "Bengali"],
    featured: true,
    category: "ai",
  },
  {
    id: "xbd-disaster",
    title: "xBD Disaster Damage Detection",
    description:
      "Deep learning pipeline for automated building damage assessment from pre/post disaster satellite imagery using the xBD benchmark dataset.",
    technologies: ["PyTorch", "ResNet", "U-Net", "Satellite Imagery"],
    githubUrl: "#",
    tags: ["Computer Vision", "Deep Learning", "Disaster"],
    featured: true,
    category: "ai",
  },
  {
    id: "radar-ml",
    title: "AI-Driven Radar Target Classification",
    description:
      "Machine learning framework for automated radar target classification and tracking using FMCW radar signal features.",
    technologies: ["Python", "Scikit-learn", "Signal Processing", "FMCW"],
    githubUrl: "#",
    tags: ["Radar", "AI", "Signal Processing"],
    featured: false,
    category: "research",
  },
  {
    id: "quantum-sim",
    title: "Quantum Circuit Simulator",
    description:
      "Educational quantum circuit simulator supporting common gates, entanglement, and measurement visualization for QKD protocol studies.",
    technologies: ["Python", "Qiskit", "Matplotlib", "NumPy"],
    githubUrl: "#",
    tags: ["Quantum", "Education", "Simulation"],
    featured: false,
    category: "quantum",
  },
];

export const TYPING_PHRASES = [
  "Quantum Communication",
  "Quantum Key Distribution",
  "AI Systems",
  "Radar Sensing",
  "Research Engineering",
  "Deep Learning",
  "Secure Communications",
];

export const SKILLS = [
  { name: "Python", level: 95, category: "language" },
  { name: "C++", level: 75, category: "language" },
  { name: "PyTorch", level: 88, category: "ml" },
  { name: "TensorFlow", level: 82, category: "ml" },
  { name: "Qiskit", level: 72, category: "quantum" },
  { name: "Linux", level: 85, category: "system" },
  { name: "Docker", level: 70, category: "devops" },
  { name: "NLP / LLMs", level: 85, category: "ml" },
  { name: "Computer Vision", level: 80, category: "ml" },
  { name: "Quantum Computing", level: 70, category: "quantum" },
];
