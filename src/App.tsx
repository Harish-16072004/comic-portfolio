import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code2,
  Briefcase,
  Mail,
  FileText,
  ArrowUpRight,
  Sparkles,
  RotateCcw,
  Award,
} from 'lucide-react';
import {
  PROFILE,
  ROLES,
  ORIGIN_STORY,
  SKILL_GROUPS,
  PROJECTS,
  HONORS_AND_EDU,
  type RoleId,
  type ProjectItem,
} from './data/portfolioData';
import { ProjectModal } from './components/ProjectModal';
import { HeroComicEmblem, ProjectComicDiagram } from './components/ComicVisuals';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const sfxRef = useRef<HTMLSpanElement | null>(null);

  const [activeRole, setActiveRole] = useState<RoleId>('ALL');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const roleList: RoleId[] = ['ALL', 'AI', 'DA', 'DS'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (progressRef.current) {
        gsap.to(progressRef.current, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.2,
          },
        });
      }

      gsap.from('.hero-stagger', {
        y: 28,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'transform',
      });

      gsap.from('.origin-panel', {
        y: 36,
        rotate: -1.5,
        opacity: 0,
        duration: 0.55,
        stagger: 0.12,
        ease: 'back.out(1.4)',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: '.origin-section',
          start: 'top 84%',
          once: true,
        },
      });

      gsap.from('.skill-panel', {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: '.skills-section',
          start: 'top 84%',
          once: true,
        },
      });

      gsap.from('.honor-panel', {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: '.honors-section',
          start: 'top 86%',
          once: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!sfxRef.current) return;
    gsap.fromTo(
        sfxRef.current,
        { scale: 0.7, rotate: -10 },
        { scale: 1, rotate: 2, duration: 0.32, ease: 'back.out(2.2)' }
    );
  }, [activeRole]);

  const handleSkillClick = (skill: string) => {
    setSelectedSkill((prev) => (prev === skill ? null : skill));
  };

  const resetFilters = () => {
    setActiveRole('ALL');
    setSelectedSkill(null);
  };

  const isProjectHighlighted = (project: ProjectItem) => {
    const matchesRole = activeRole === 'ALL' || project.roles.includes(activeRole);
    const matchesSkill = !selectedSkill || project.techStack.includes(selectedSkill);
    return matchesRole && matchesSkill;
  };

  const matchingCount = PROJECTS.filter(isProjectHighlighted).length;

  return (
      <div ref={pageRef} className="min-h-screen pb-16">
        {/* Top Scroll-Driven Reading Progress Bar */}
        <div className="fixed left-0 top-0 z-50 h-2.5 w-full border-b-[3px] border-[#111111] bg-white">
          <div
              ref={progressRef}
              className="h-full w-full origin-left scale-x-0 bg-[#FF3B30]"
          />
        </div>

        {/* Sticky Comic Strip Navigation */}
        <nav className="sticky top-2.5 z-40 border-b-[3.5px] border-[#111111] bg-[#FFFDF7]/95 backdrop-blur-xs">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 md:px-8">
            <a href="#cover" className="flex items-center gap-2">
            <span className="border-2 border-[#111111] bg-[#FF3B30] px-2 py-0.5 font-comic-stamp text-xs text-white">
              HJ-01
            </span>
              <span className="font-comic-display text-2xl tracking-wider">{PROFILE.name}</span>
            </a>

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {[
                { label: 'ORIGIN', href: '#origin' },
                { label: 'ARSENAL', href: '#skills' },
                { label: 'ISSUES', href: '#projects' },
                { label: 'HONORS', href: '#honors' },
                { label: 'SIGNAL', href: '#contact' },
              ].map((nav) => (
                  <a
                      key={nav.label}
                      href={nav.href}
                      className="border-2 border-transparent px-2.5 py-1 font-comic-stamp text-[11px] hover:border-[#111111] hover:bg-[#FFE14D]"
                  >
                    {nav.label}
                  </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="mx-auto max-w-6xl space-y-14 px-4 pt-8 md:px-8">
          {/* ================= 1. THE COVER (COMIC BOOK MASTHEAD) ================= */}
          <header id="cover" className="comic-panel hero-stagger overflow-hidden bg-white">
            {/* Classic Comic Masthead Top Bar */}
            <div className="bg-halftone-yellow flex flex-wrap items-center justify-between gap-2 border-b-[3.5px] border-[#111111] px-5 py-2.5">
              <div className="flex flex-wrap items-center gap-2">
              <span className="border-2 border-[#111111] bg-[#111111] px-2.5 py-0.5 font-comic-stamp text-[11px] text-[#FFE14D]">
                {PROFILE.priceTag}
              </span>
                <span className="font-mono-tech text-xs font-extrabold uppercase tracking-wider">
                {PROFILE.issueTag}
              </span>
              </div>
              <span
                  ref={sfxRef}
                  className="inline-block border-[2.5px] border-[#111111] bg-white px-3 py-0.5 font-comic-display text-lg tracking-wider shadow-[3px_3px_0px_0px_#111111]"
              >
              {ROLES[activeRole].sfx}
            </span>
            </div>

            <div className="grid items-center gap-8 p-6 md:grid-cols-12 md:p-10">
              <div className="flex flex-col justify-between space-y-6 md:col-span-7 lg:col-span-8">
                <div className="hero-stagger">
                  <p className="font-comic-stamp text-xs tracking-widest text-[#FF3B30]">
                    ★ {PROFILE.superTitle} ★
                  </p>
                  <h1 className="font-comic-display comic-title-shadow mt-1 text-6xl leading-[0.95] text-[#FFE14D] sm:text-7xl md:text-8xl">
                    {PROFILE.name}
                  </h1>

                  {/* Dynamic Role Banner */}
                  <div className="mt-5 border-[3px] border-[#111111] bg-[#FFF4B8] px-4 py-3 shadow-[4px_4px_0px_0px_#111111]">
                    <p className="text-base font-bold leading-snug text-[#111111] sm:text-lg">
                      {ROLES[activeRole].tagline}
                    </p>
                  </div>
                </div>

                {/* Speech Bubble with Comic Pointer Tail */}
                <div className="hero-stagger pb-3">
                  <div className="speech-bubble max-w-2xl rounded-2xl px-5 py-3.5 text-base font-bold leading-snug">
                    “{PROFILE.speechBubble}”
                  </div>
                </div>

                {/* Hero Key Metrics Strip */}
                <div className="hero-stagger grid grid-cols-3 gap-2.5 pt-1 sm:max-w-lg">
                  {PROFILE.heroStats.map((stat) => (
                      <div
                          key={stat.label}
                          className="border-[2.5px] border-[#111111] bg-[#F5EFE0] px-3 py-2 text-center shadow-[3px_3px_0px_0px_#111111]"
                      >
                        <div className="font-comic-display text-xl leading-none text-[#FF3B30] sm:text-2xl">
                          {stat.value}
                        </div>
                        <div className="mt-1 font-mono-tech text-[10px] font-extrabold uppercase">
                          {stat.label}
                        </div>
                      </div>
                  ))}
                </div>

                {/* Interactive Role Lens Selector */}
                <div className="hero-stagger pt-1">
                  <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
                    <p className="font-comic-stamp text-xs uppercase text-neutral-700">
                      Switch Role Lens:
                    </p>
                    {(activeRole !== 'ALL' || selectedSkill) && (
                        <button
                            onClick={resetFilters}
                            className="inline-flex items-center gap-1 border-2 border-[#111111] bg-[#FFE14D] px-2.5 py-0.5 font-comic-stamp text-[11px] hover:bg-[#FF3B30] hover:text-white"
                        >
                          <RotateCcw className="h-3 w-3" /> Reset Filters
                        </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {roleList.map((roleId) => {
                      const role = ROLES[roleId];
                      const isActive = activeRole === roleId;
                      return (
                          <button
                              key={roleId}
                              onClick={() => setActiveRole(roleId)}
                              className={`comic-btn px-4 py-2 font-comic-stamp text-xs uppercase ${
                                  isActive ? role.badgeClass : 'bg-white text-[#111111]'
                              }`}
                          >
                            {role.label}
                          </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Custom Comic Book Emblem Illustration */}
              <div className="hero-stagger flex items-center justify-center md:col-span-5 lg:col-span-4">
                <HeroComicEmblem />
              </div>
            </div>
          </header>

          {/* ================= 2. ORIGIN STORY (3-PANEL COMIC STRIP) ================= */}
          <section id="origin" className="origin-section">
            <div className="mb-5 flex items-center gap-3">
              <div className="border-[3.5px] border-[#111111] bg-[#111111] px-4 py-1.5 text-white shadow-[4px_4px_0px_0px_#FF3B30]">
                <h2 className="font-comic-display text-3xl tracking-wider">CHAPTER 1 • ORIGIN STORY</h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {ORIGIN_STORY.map((panel) => (
                  <div
                      key={panel.panelNum}
                      className={`comic-panel origin-panel relative flex flex-col justify-between p-5 ${panel.bgClass}`}
                  >
                    <div>
                      <div className="mb-3 flex items-center justify-between border-b-[3px] border-[#111111] pb-2.5">
                    <span className="border-2 border-[#111111] bg-[#FFE14D] px-2.5 py-0.5 font-comic-stamp text-xs">
                      {panel.caption}
                    </span>
                        <span className="-rotate-3 border-2 border-[#111111] bg-[#FF3B30] px-2 py-0.5 font-comic-display text-base text-white">
                      {panel.sfx}
                    </span>
                      </div>
                      <p className="text-base font-bold leading-relaxed text-neutral-900">{panel.text}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t-2 border-dashed border-neutral-300 pt-2">
                  <span className="font-mono-tech text-[11px] font-bold text-neutral-500">
                    HARISH J • ARCHIVE
                  </span>
                      <span className="font-comic-display text-xl text-neutral-400">
                    #{panel.panelNum}
                  </span>
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* ================= 3. THE UTILITY BELT (INTERACTIVE SKILLS) ================= */}
          <section id="skills" className="skills-section">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div className="border-[3.5px] border-[#111111] bg-[#111111] px-4 py-1.5 text-white shadow-[4px_4px_0px_0px_#2EC4B6]">
                <h2 className="font-comic-display text-3xl tracking-wider">
                  CHAPTER 2 • THE UTILITY BELT
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 border-2 border-[#111111] bg-white px-3 py-1 font-comic-stamp text-[11px] shadow-[3px_3px_0px_0px_#111111]">
              <Sparkles className="h-4 w-4 text-[#FF3B30]" /> Click any skill to spotlight projects
            </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SKILL_GROUPS.map((group) => (
                  <div
                      key={group.title}
                      className="comic-panel skill-panel flex flex-col overflow-hidden"
                  >
                    <div className={`border-b-[3.5px] border-[#111111] px-4 py-3 ${group.accentBg}`}>
                      <div className="flex items-center justify-between">
                    <span className="font-mono-tech text-[10px] font-extrabold uppercase opacity-90">
                      {group.code}
                    </span>
                        <span className="border border-[#111111] bg-white/90 px-1.5 py-0.5 font-mono-tech text-[10px] font-extrabold text-[#111111]">
                      {group.roleAlignment}
                    </span>
                      </div>
                      <h3 className="font-comic-display mt-1.5 text-2xl leading-none">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 p-4">
                      {group.items.map((skill) => {
                        const isSelected = selectedSkill === skill;
                        return (
                            <button
                                key={skill}
                                type="button"
                                onClick={() => handleSkillClick(skill)}
                                className={`comic-btn px-2.5 py-1 font-mono-tech text-xs font-extrabold ${
                                    isSelected
                                        ? 'bg-[#FFE14D] text-[#111111]'
                                        : 'bg-[#F5EFE0] text-[#111111] hover:bg-white'
                                }`}
                            >
                              {skill}
                            </button>
                        );
                      })}
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* ================= 4. FEATURED ISSUES (PROJECTS + SVG BLUEPRINTS) ================= */}
          <section id="projects" className="projects-section">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <div className="border-[3.5px] border-[#111111] bg-[#111111] px-4 py-1.5 text-white shadow-[4px_4px_0px_0px_#FFE14D]">
                  <h2 className="font-comic-display text-3xl tracking-wider">
                    CHAPTER 3 • FEATURED ISSUES
                  </h2>
                </div>
                <span className="border-[2.5px] border-[#111111] bg-white px-3 py-1 font-comic-stamp text-xs shadow-[3px_3px_0px_0px_#111111]">
                {matchingCount} / {PROJECTS.length} ACTIVE
              </span>
                {selectedSkill && (
                    <span className="border-[2.5px] border-[#111111] bg-[#FFE14D] px-3 py-1 font-mono-tech text-xs font-extrabold shadow-[3px_3px_0px_0px_#111111]">
                  FILTER: {selectedSkill}
                </span>
                )}
              </div>
              <span className="font-comic-stamp text-xs text-neutral-700">
              Click any panel for full architecture &amp; GitHub →
            </span>
            </div>

            <div className="grid min-w-0 gap-7 md:grid-cols-2">
              {PROJECTS.map((project) => {
                const highlighted = isProjectHighlighted(project);

                return (
                    <article
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className={`comic-panel-interactive project-panel min-w-0 flex cursor-pointer flex-col overflow-hidden ${
                            project.featured ? 'md:col-span-2' : ''
                        } ${highlighted ? 'opacity-100' : 'opacity-30 grayscale'}`}
                    >
                      {/* Panel Header Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3.5px] border-[#111111] bg-[#F5EFE0] px-4 py-2.5">
                        <div className="flex items-center gap-2">
                      <span className="border-2 border-[#111111] bg-[#111111] px-2 py-0.5 font-comic-stamp text-[11px] text-white">
                        {project.issueNumber}
                      </span>
                          <span className="font-mono-tech text-xs font-extrabold text-neutral-700">
                        {project.dateTag}
                      </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-1.5">
                      <span className="border-2 border-[#111111] bg-[#FFE14D] px-2 py-0.5 font-mono-tech text-[10px] font-extrabold">
                        {project.impactBadge}
                      </span>
                          {project.roles.map((r) => (
                              <span
                                  key={r}
                                  className={`border-2 border-[#111111] px-2 py-0.5 font-comic-stamp text-[10px] uppercase ${ROLES[r].badgeClass}`}
                              >
                          {ROLES[r].shortLabel}
                        </span>
                          ))}
                        </div>
                      </div>

                      {/* Panel Content */}
                      <div className="flex flex-1 flex-col justify-between gap-4 p-5 sm:p-6">
                        <div>
                          <h3 className="font-comic-display text-3xl leading-none sm:text-4xl">
                            {project.title}
                          </h3>

                          {/* Illustrated Comic Architecture Diagram */}
                          <div className="mt-4 min-w-0 overflow-hidden border-[3px] border-[#111111] bg-[#FFFDF7] p-2 shadow-[4px_4px_0px_0px_#111111]">
                            <div className="h-32 w-full min-w-0 sm:h-36">
                              <ProjectComicDiagram type={project.visualType} />
                            </div>
                          </div>

                          {/* Yellow Comic Narration Box */}
                          <p className="mt-4 border-[2.5px] border-[#111111] bg-[#FFF4B8] px-3.5 py-2.5 text-base font-bold leading-snug">
                            {project.hook}
                          </p>
                        </div>

                        {/* Panel Footer */}
                        <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-neutral-200 pt-3">
                          <div className="flex flex-wrap gap-1.5">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className={`border-2 border-[#111111] px-2 py-0.5 font-mono-tech text-[11px] font-extrabold ${
                                        selectedSkill === tech ? 'bg-[#FFE14D]' : 'bg-white'
                                    }`}
                                >
                            {tech}
                          </span>
                            ))}
                          </div>
                          <span className="inline-flex items-center gap-1 border-2 border-[#111111] bg-[#111111] px-3 py-1 font-comic-stamp text-[11px] text-[#FFE14D]">
                        Open Issue <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                        </div>
                      </div>
                    </article>
                );
              })}
            </div>
          </section>

          {/* ================= 5. HONORS, CERTIFICATION & EDUCATION ================= */}
          <section id="honors" className="honors-section">
            <div className="mb-5 flex items-center gap-3">
              <div className="border-[3.5px] border-[#111111] bg-[#111111] px-4 py-1.5 text-white shadow-[4px_4px_0px_0px_#8B5CF6]">
                <h2 className="font-comic-display text-3xl tracking-wider">
                  CHAPTER 4 • CREDENTIALS &amp; ARENA
                </h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {HONORS_AND_EDU.map((item) => (
                  <div key={item.title} className="comic-panel honor-panel flex flex-col overflow-hidden">
                    <div className={`flex items-center justify-between border-b-[3px] border-[#111111] px-4 py-2 ${item.accent}`}>
                      <span className="font-comic-stamp text-xs">{item.badge}</span>
                      <Award className="h-4 w-4" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-comic-display text-2xl leading-tight">{item.title}</h3>
                      <p className="mt-1 font-mono-tech text-xs font-extrabold text-neutral-600">
                        {item.subtitle}
                      </p>
                      <p className="mt-3 text-base font-bold leading-relaxed text-neutral-900">
                        {item.detail}
                      </p>
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* ================= 6. THE SIGNAL (FOOTER CTA) ================= */}
          <footer id="contact" className="comic-panel bg-halftone-yellow p-6 md:p-9">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="border-[3px] border-[#111111] bg-white p-4 shadow-[5px_5px_0px_0px_#111111]">
              <span className="bg-[#FF3B30] px-2 py-0.5 font-comic-stamp text-[11px] text-white">
                NEXT ISSUE: YOUR TEAM
              </span>
                <h2 className="font-comic-display mt-1 text-4xl leading-none sm:text-5xl">
                  SEND THE SIGNAL • LET&apos;S BUILD
                </h2>
                <p className="mt-2 text-base font-bold">
                  Open to AI Software Engineer, Data Analyst, and Data Scientist roles in Chennai or Remote.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="comic-btn inline-flex items-center gap-2 bg-white px-4 py-3 font-comic-stamp text-xs"
                >
                  <Code2 className="h-4 w-4" /> GitHub
                </a>
                <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="comic-btn inline-flex items-center gap-2 bg-white px-4 py-3 font-comic-stamp text-xs"
                >
                  <Briefcase className="h-4 w-4" /> LinkedIn
                </a>
                <a
                    href={`mailto:${PROFILE.email}`}
                    className="comic-btn inline-flex items-center gap-2 bg-white px-4 py-3 font-comic-stamp text-xs"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
                <a
                    href={PROFILE.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="comic-btn inline-flex items-center gap-2 bg-[#111111] px-4 py-3 font-comic-stamp text-xs text-[#FFE14D]"
                >
                  <FileText className="h-4 w-4" /> Resume PDF
                </a>
              </div>
            </div>
          </footer>
        </div>

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
  );
}

export default App;