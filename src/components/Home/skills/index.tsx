'use client';

import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Element } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

type Skill = {
  name: string;
  level: string;
  percent: number;
};

type SkillGroup = {
  title: string;
  color: string;
  icon: string;
  skills: Skill[];
};

const SkillBar = ({
  name,
  level,
  percent,
  color,
}: Skill & { color: string }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-4 text-sm text-black">
      <div className="flex items-center gap-2">
        <CheckCircle className="text-green-500" size={16} />
        <span>{name}</span>
      </div>
      <span>{level}</span>
    </div>
    <div className="w-full bg-gray-200 h-1.5 rounded-full">
      <div
        className={`${color} h-1.5 rounded-full transition-all duration-500`}
        style={{ width: `${percent}%` }}
      />
    </div>
  </div>
);

const skillsData: SkillGroup[] = [
  {
    title: 'Frontend Technologies',
    color: 'bg-blue-500',
    icon: '<>',
    skills: [
      { name: 'HTML', level: 'Experienced', percent: 90 },
      { name: 'CSS', level: 'Experienced', percent: 85 },
      { name: 'JavaScript', level: 'Intermediate', percent: 80 },
      { name: 'React', level: 'Experienced', percent: 85 },
      { name: 'TypeScript', level: 'Intermediate', percent: 75 },
      { name: 'Tailwind CSS', level: 'Intermediate', percent: 75 },
    ],
  },
  {
    title: 'Backend Technologies',
    color: 'bg-pink-500',
    icon: '{}',
    skills: [
      { name: 'Node.js', level: 'Intermediate', percent: 75 },
      { name: 'Express.js', level: 'Intermediate', percent: 70 },
      { name: 'MongoDB', level: 'Intermediate', percent: 75 },
      { name: 'SQL', level: 'Intermediate', percent: 70 },
      { name: 'RESTful APIs', level: 'Intermediate', percent: 70 },
      { name: 'Git/GitHub', level: 'Experienced', percent: 80 },
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <Element name="experience">
      <section
        ref={sectionRef}
        className="bg-[rgb(253,241,206)] text-black py-20 px-4 scroll-mt-20"
      >
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold mb-2">Explore My</h3>
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <p className="font-bold max-w-xl mx-auto">
            Here&apos;s a comprehensive overview of my technical skills and expertise in modern web development technologies
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((group) => (
            <div
              key={group.title}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-300"
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span
                  className={`${group.color} text-white px-2 py-1 rounded-full text-sm`}
                >
                  {group.icon}
                </span>
                {group.title}
              </h3>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} color={group.color} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
}
