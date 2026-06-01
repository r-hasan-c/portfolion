export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: number;
  status: "published" | "under-review" | "accepted" | "thesis";
  tags: string[];
  abstract?: string;
  paperUrl?: string;
  citeUrl?: string;
  type: "journal" | "conference" | "thesis" | "preprint";
}

export interface ResearchInterest {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  color: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  type: "industry" | "academic";
  current?: boolean;
  logo?: string;
  supervisor?: string;
  supervisorUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  location?: string;
  status: "completed" | "upcoming" | "current";
  supervisor?: string;
  supervisorUrl?: string;
  gpa?: string;
  logo?: string;
}

export interface Person {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  category: "supervisor" | "collaborator";
  url?: string;
  email?: string;
  imageUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  tags: string[];
  featured: boolean;
  category: "ai" | "quantum" | "research" | "software";
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: number;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}
