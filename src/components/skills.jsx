import React, { useMemo } from "react";

// ✅ Correct icon imports
import {
  SiPython, SiJavascript, SiTypescript, SiC,
  SiHtml5, SiCss3, SiReact, SiTailwindcss,
  SiFastapi, SiFlask, SiNodedotjs, SiExpress, SiPostman,
  SiMongodb, SiPostgresql, SiMysql, SiSnowflake,
  SiDocker, SiGit, SiGithubactions, SiJira, SiLinux
} from "react-icons/si";
import { FaDatabase, FaJava, FaServer } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";

// ✅ Skill Categories
export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "Java", icon: <FaJava className="text-[#f89820]" /> },
      { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
      { name: "Redux", icon: <TbBrandRedux className="text-[#764ABC]" /> },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
      { name: "Flask", icon: <SiFlask className="text-gray-200" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-[#68A063]" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "Snowflake", icon: <SiSnowflake className="text-[#29B5E8]" /> },
      { name: "SQL", icon: <FaDatabase className="text-[#EAB308]" /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
    ],
  },
  {
    title: "CS Concepts",
    skills: [
      { name: "Operating Systems", icon: <SiLinux className="text-[#FCC624]" /> },
      { name: "Computer Networks", icon: <span className="text-xl">🌐</span> },
      { name: "OOPs", icon: <SiC className="text-[#A8B9CC]" /> },
      { name: "Design Patterns", icon: <SiPython className="text-[#3178C6]" /> },
    ],
  },
];
  

const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min * 15)) + min;

const makeDoodles = (count) =>
  new Array(count).fill(0).map((_, i) => ({
    id: `doodle-${i}`,
    left: `${randomBetween(2, 92)}%`,
    top: `${randomBetween(4, 92)}%`,
    size: `${randomBetween(8, 48)}px`,
    // pick type: "star", "planet", "ring"
    type: ["star", "planet", "ring"][Math.floor(Math.random() * 3)],
    // slight animation delay variety
    delay: `${Math.random() * 6}s`,
    // speed multiplier for drift
    speed: `${4 + Math.random() * 12}s`,
    opacity: 0.4 + Math.random() * 0.6,
  }));

const Skills = () => {
  // Medium density => ~12 doodles
  const doodles = useMemo(() => makeDoodles(12), []);
  // occasional shooting stars (dynamic): create a few with random start delays
  const shootingStars = useMemo(
    () =>
      new Array(3).fill(0).map((_, i) => ({
        id: `shoot-${i}`,
        top: `${randomBetween(8, 85)}%`,
        left: `${randomBetween(-10, 30)}%`,
        delay: `${randomBetween(2, 24)}s`,
        duration: `${3 + Math.random() * 3}s`,
      })),
    []
  );

  return (
    <div className="relative min-h-screen px-6 md:px-14 py-16
      bg-gradient-to-br from-[#05060a] via-[#0b1020] to-[#07030a] text-gray-100 overflow-hidden">
      {/* Galaxy overlay for subtle nebula */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-30 mix-blend-screen bg-[radial-gradient(ellipse_at_20%_30%,_rgba(139,92,246,0.15),_transparent_20%),radial-gradient(ellipse_at_80%_70%,_rgba(59,130,246,0.10),_transparent_20%)]" />
      </div>

      {/* Doodles scattered */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {doodles.map((d) => (
          <div
            key={d.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 doodle doodle-${d.type}`}
            style={{
              left: d.left,
              top: d.top,
              width: d.size,
              height: d.size,
              animationDelay: d.delay,
              animationDuration: d.speed,
              opacity: d.opacity,
            }}
            aria-hidden
          >
            {/* Star */}
            {d.type === "star" && (
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  d="M12 2l1.9 4.8L19 8l-4 3.1L16 16l-4-2.1L8 16l1-4.9L5 8l5.1-1.2L12 2z"
                  fill="url(#g1)"
                />
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0" stopColor="#fce88a" />
                    <stop offset="1" stopColor="#ffd1f0" />
                  </linearGradient>
                </defs>
              </svg>
            )}

            {/* Planet */}
            {d.type === "planet" && (
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="28" fill="url(#planetGrad)" />
                <ellipse cx="50" cy="60" rx="40" ry="12" fill="rgba(255,255,255,0.08)" />
                <defs>
                  <linearGradient id="planetGrad" x1="0" x2="1">
                    <stop offset="0" stopColor="#6ee7b7" />
                    <stop offset="1" stopColor="#60a5fa" />
                  </linearGradient>
                </defs>
              </svg>
            )}

            {/* Ring / Orbit doodle */}
            {d.type === "ring" && (
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="20" fill="#111827" />
                <ellipse cx="50" cy="50" rx="40" ry="18" fill="none" stroke="url(#ringGrad)" strokeWidth="3" />
                <defs>
                  <linearGradient id="ringGrad" x1="0" x2="1">
                    <stop offset="0" stopColor="#f472b6" />
                    <stop offset="1" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </div>
        ))}

        {/* Shooting stars */}
        {shootingStars.map((s) => (
          <div
            key={s.id}
            className="shooting-star"
            style={{
              top: s.top,
              left: s.left,
              animationDelay: s.delay,
              animationDuration: s.duration,
            }}
            aria-hidden
          >
            <svg viewBox="0 0 120 4" className="block w-48 h-2">
              <defs>
                <linearGradient id={`trail-${s.id}`} x1="0" x2="1">
                  <stop offset="0" stopColor="rgba(255,255,255,0.9)" />
                  <stop offset="1" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="120" height="4" fill={`url(#trail-${s.id})`} />
              <circle cx="8" cy="2" r="3" fill="white" />
            </svg>
          </div>
        ))}
      </div>

      {/* Page content */}
      <div className="relative z-20 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mt-8 mb-4 text-white drop-shadow-xl">
         Skills that I explore often
        </h2>

        <p className="text-gray-300 mb-10 max-w-3xl">
          A curated list of technologies and tools I build with — practical, current, and always evolving.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-tr from-[#0f1724] to-[#071025]/40 backdrop-blur-md border border-gray-700/40
                rounded-2xl p-6 shadow-[0_6px_30px_rgba(2,6,23,0.7)] hover:shadow-[0_8px_40px_rgba(99,102,241,0.08)]
                transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                  >
                    <span className="text-2xl opacity-90">{skill.icon}</span>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
