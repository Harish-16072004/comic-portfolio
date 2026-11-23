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
} from 'lucide-react';
import {
  PROFILE,
  ROLES,
  ORIGIN_STORY,
  SKILL_GROUPS,
  PROJECTS,
  type RoleId,
  type ProjectItem,
} from './data/portfolioData';
import { ProjectModal } from './components/ProjectModal';

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
        y: 26,
        opacity: 0,
        duration: 0.6,
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
          start: 'top 82%',
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
          start: 'top 82%',
          once: true,
        },
      });

      gsap.from('.project-panel', {
        y: 40,
        scale: 0.97,
        opacity: 0,
        duration: 0.55,
        stagger: 0.12,
        ease: 'power2.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: '.projects-section',
          start: 'top 82%',
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
        { scale: 0.75, rotate: -8 },
        { scale: 1, rotate: 2, duration: 0.3, ease: 'back.out(2)' }
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
      <div ref={pageRef} className="min-h-screen px-4 pb-12 pt-6 md:px-8 md:pt-8">
        {/* Top Scroll-Driven Reading Progress Bar */}
        <div className="fixed left-0 top-0 z-40 h-2.5 w-full border-b-2 border-[#111111] bg-white">
          <div
              ref={progressRef}
              className="h-full w-full origin-left scale-x-0 bg-[#FF6B6B]"
          />
        </div>

        <div className="mx-auto max-w-6xl space-y-12 pt-2">
          {/* ================= 1. THE COVER (HERO) ================= */}
          <header className="comic-panel hero-stagger overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-[#111111] bg-[#FFE14D] px-5 py-2 text-xs font-extrabold uppercase tracking-wider">
              <span>{PROFILE.issueTag}</span>
              <span
                  ref={sfxRef}
                  className="inline-block border-2 border-[#111111] bg-white px-2.5 py-0.5 font-comic text-sm tracking-wider"
              >
              {ROLES[activeRole].sfx}
            </span>
            </div>

            <div className="grid gap-8 p-6 md:grid-cols-12 md:p-10">
              <div className="flex flex-col justify-between space-y-6 md:col-span-8">
                <div className="hero-stagger">
                  <h1 className="font-comic text-5xl leading-none sm:text-6xl md:text-7xl">
                    {PROFILE.name}
                  </h1>
                  <p className="mt-4 border-l-4 border-[#111111] bg-[#FFF4B8] px-4 py-2.5 text-base font-semibold leading-snug">
                    {ROLES[activeRole].tagline}
                  </p>
                </div>

                <div className="hero-stagger rounded-2xl border-[3px] border-[#111111] bg-white px-5 py-3 text-sm font-medium shadow-[4px_4px_0px_0px_#111111]">
                  “{PROFILE.speechBubble}”
                </div>

                <div className="hero-stagger">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-neutral-600">
                      Interactive Role Lens:
                    </p>
                    {(activeRole !== 'ALL' || selectedSkill) && (
                        <button
                            onClick={resetFilters}
                            className="inline-flex items-center gap-1 text-xs font-extrabold uppercase underline decoration-2 underline-offset-4 hover:text-[#FF6B6B]"
                        >
                          <RotateCcw className="h-3.5 w-3.5" /> Reset Filters
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
                              className={`comic-btn px-3.5 py-2 text-xs font-extrabold uppercase tracking-wide ${
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

              <div className="hero-stagger flex items-center justify-center md:col-span-4">
                <div className="flex aspect-square w-full max-w-[260px] flex-col items-center justify-center border-[3px] border-[#111111] bg-[#FAF6EE] p-4 text-center shadow-[5px_5px_0px_0px_#111111]">
                <span className="font-comic text-2xl text-neutral-500">
                  {PROFILE.avatarPlaceholder}
                </span>
                  <span className="mt-2 text-xs font-semibold text-neutral-500">
                  Swap with an &lt;img /&gt; later
                </span>
                </div>
              </div>
            </div>
          </header>

          {/* ================= 2. ORIGIN STORY (ABOUT) ================= */}
          <section className="origin-section">
            <div className="mb-4 inline-block border-[3px] border-[#111111] bg-[#111111] px-4 py-1 text-white">
              <h2 className="font-comic text-2xl tracking-wider">ORIGIN STORY</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {ORIGIN_STORY.map((panel) => (
                  <div
                      key={panel.panelNum}
                      className="comic-panel origin-panel flex flex-col justify-between p-5"
                  >
                    <div>
                      <div className="mb-3 flex items-center justify-between border-b-2 border-[#111111] pb-2">
                    <span className="border-2 border-[#111111] bg-[#FFE14D] px-2 py-0.5 text-xs font-extrabold uppercase">
                      {panel.caption}
                    </span>
                        <span className="font-comic text-base text-[#FF6B6B]">{panel.sfx}!</span>
                      </div>
                      <p className="text-sm leading-relaxed text-neutral-800">{panel.text}</p>
                    </div>
                    <div className="mt-4 pt-2 text-right font-comic text-lg text-neutral-400">
                      PANEL #{panel.panelNum}
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* ================= 3. THE UTILITY BELT (SKILLS) ================= */}
          <section className="skills-section">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div className="inline-block border-[3px] border-[#111111] bg-[#111111] px-4 py-1 text-white">
                <h2 className="font-comic text-2xl tracking-wider">THE UTILITY BELT • SKILLS</h2>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase text-neutral-600">
              <Sparkles className="h-3.5 w-3.5" /> Click any skill to spotlight matching projects
            </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SKILL_GROUPS.map((group) => (
                  <div
                      key={group.title}
                      className="comic-panel skill-panel flex flex-col overflow-hidden"
                  >
                    <div className={`border-b-[3px] border-[#111111] px-4 py-2.5 ${group.accentBg}`}>
                      <h3 className="font-comic text-xl leading-none">{group.title}</h3>
                      <p className="mt-1 text-[11px] font-bold uppercase opacity-90">
                        {group.roleAlignment}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 p-4">
                      {group.items.map((skill) => {
                        const isSelected = selectedSkill === skill;
                        return (
                            <button
                                key={skill}
                                type="button"
                                onClick={() => handleSkillClick(skill)}
                                className={`comic-btn px-2.5 py-1 text-xs font-bold ${
                                    isSelected ? 'bg-[#FFE14D] text-[#111111]' : 'bg-[#FAF6EE] text-[#111111]'
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

          {/* ================= 4. FEATURED ISSUES (PROJECTS) ================= */}
          <section className="projects-section">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-block border-[3px] border-[#111111] bg-[#111111] px-4 py-1 text-white">
                  <h2 className="font-comic text-2xl tracking-wider">FEATURED ISSUES • PROJECTS</h2>
                </div>
                <span className="border-2 border-[#111111] bg-white px-2.5 py-0.5 text-xs font-extrabold uppercase">
                {matchingCount} of {PROJECTS.length} Matching
              </span>
                {selectedSkill && (
                    <span className="border-2 border-[#111111] bg-[#FFE14D] px-2.5 py-0.5 text-xs font-extrabold">
                  Skill: {selectedSkill}
                </span>
                )}
              </div>
              <span className="text-xs font-bold uppercase text-neutral-600">
              Click a panel to open details &amp; GitHub
            </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {PROJECTS.map((project) => {
                const highlighted = isProjectHighlighted(project);

                return (
                    <article
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className={`comic-panel-interactive project-panel flex cursor-pointer flex-col overflow-hidden ${
                            project.featured ? 'md:col-span-2' : ''
                        } ${highlighted ? 'opacity-100' : 'opacity-30 grayscale'}`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-[#111111] bg-[#FAF6EE] px-4 py-2.5">
                        <span className="font-comic text-lg">{project.issueNumber}</span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.roles.map((r) => (
                              <span
                                  key={r}
                                  className={`border-2 border-[#111111] px-2 py-0.5 text-[11px] font-extrabold uppercase ${ROLES[r].badgeClass}`}
                              >
                          {ROLES[r].shortLabel}
                        </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                        <div>
                          <h3 className="font-comic text-3xl leading-tight">{project.title}</h3>

                          <div className="mt-3 flex h-36 items-center justify-center border-2 border-dashed border-[#111111] bg-[#FAF6EE] px-4 text-center text-xs font-bold text-neutral-500">
                            {project.thumbnailLabel}
                          </div>

                          <p className="mt-3 border-2 border-[#111111] bg-[#FFF4B8] px-3 py-2 text-sm font-medium">
                            {project.hook}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                          <div className="flex flex-wrap gap-1.5">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className={`border-2 border-[#111111] px-2 py-0.5 text-[11px] font-bold ${
                                        selectedSkill === tech ? 'bg-[#FFE14D]' : 'bg-white'
                                    }`}
                                >
                            {tech}
                          </span>
                            ))}
                          </div>
                          <span className="inline-flex items-center gap-1 text-xs font-extrabold uppercase underline decoration-2 underline-offset-4">
                        Inspect Panel <ArrowUpRight className="h-4 w-4" />
                      </span>
                        </div>
                      </div>
                    </article>
                );
              })}
            </div>
          </section>

          {/* ================= 5. THE SIGNAL (CONTACT) ================= */}
          <footer className="comic-panel bg-[#FFE14D] p-6 md:p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="font-comic text-4xl leading-none">THE SIGNAL • LET&apos;S CONNECT</h2>
                <p className="mt-2 text-sm font-semibold">
                  Open to AI Software Engineering, Data Analyst, and Data Scientist roles.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="comic-btn inline-flex items-center gap-2 bg-white px-4 py-2.5 text-xs font-extrabold uppercase"
                >
                  <Code2 className="h-4 w-4" /> GitHub
                </a>
                <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="comic-btn inline-flex items-center gap-2 bg-white px-4 py-2.5 text-xs font-extrabold uppercase"
                >
                  <Briefcase className="h-4 w-4" /> LinkedIn
                </a>
                <a
                    href={`mailto:${PROFILE.email}`}
                    className="comic-btn inline-flex items-center gap-2 bg-white px-4 py-2.5 text-xs font-extrabold uppercase"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
                <a
                    href={PROFILE.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="comic-btn inline-flex items-center gap-2 bg-[#111111] px-4 py-2.5 text-xs font-extrabold uppercase text-white"
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