"use client";

import { motion } from "framer-motion";

const GROUPS = [
  {
    label: "Research Tools",
    skills: ["Python", "Qiskit", "PyTorch", "NumPy / SciPy", "MATLAB", "Jupyter"],
  },
  {
    label: "ML / AI",
    skills: ["TensorFlow", "HuggingFace Transformers", "NLP / LLMs", "Computer Vision", "RAG Systems", "Scikit-learn"],
  },
  {
    label: "Quantum Computing",
    skills: ["Qiskit", "BB84 / E91 Protocols", "QKD Systems", "Quantum Cryptography", "Entanglement"],
  },
  {
    label: "Languages",
    skills: ["Python", "C++", "JavaScript / TypeScript", "MATLAB"],
  },
  {
    label: "Systems & DevOps",
    skills: ["Linux", "Docker", "Git / GitHub", "VS Code", "LaTeX"],
  },
];

export default function TechnicalSkills() {
  return (
    <section id="skills" className="section-gap bg-[var(--bg-alt)]">
      <div className="page-container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="space-y-6">
          {GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: gi * 0.06 }}
            >
              <p className="text-xs font-medium uppercase tracking-widest text-[var(--fg-faint)] mb-2.5">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="tag text-xs px-2.5 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
