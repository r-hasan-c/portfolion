export interface NewsItem {
  id: string;
  date: string;           // e.g. "May 2026"
  dateISO: string;        // for sorting, e.g. "2026-05"
  content: string;
  link?: string;
  linkLabel?: string;
}

export const NEWS: NewsItem[] = [
  {
    id: "n1",
    date: "May 2026",
    dateISO: "2026-05",
    content:
      "Accepted as a Graduate Research Assistant (GRA) at the University of Alabama in Huntsville under Dr. Jonathan Blakely. Starting PhD in Computer Engineering — Fall 2026.",
    link: "https://www.uah.edu/eng/departments/ece/faculty-staff/jonathan-blakely",
    linkLabel: "advisor page",
  },
  {
    id: "n2",
    date: "Apr 2026",
    dateISO: "2026-04",
    content:
      "Paper accepted at the Cognitive Models and Artificial Intelligence Conference 2026 (IEEE supported), Prague — virtual oral presentation on deep learning methods for natural disaster damage estimation.",
  },
  {
    id: "n3",
    date: "Jan 2026",
    dateISO: "2026-01",
    content:
      "Bangla-Bayanno: A 52K-pair Bengali VQA dataset paper submitted for review at Language Resources and Evaluation (LRE), Springer.",
    link: "#",
    linkLabel: "arXiv",
  },
  {
    id: "n4",
    date: "Sep 2025",
    dateISO: "2025-09",
    content:
      'Chaos-assisted QKD image transmission paper published in IET Quantum Communication.',
    link: "#",
    linkLabel: "paper",
  },
  {
    id: "n5",
    date: "Jun 2025",
    dateISO: "2025-06",
    content:
      "Joined Card as AI Engineer, leading production NLP and computer vision pipeline development.",
  },
];
