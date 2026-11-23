import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, Code2, ExternalLink, Zap, Layers } from 'lucide-react';
import { type ProjectItem, ROLES } from '../data/portfolioData';
import { ProjectComicDiagram } from './ComicVisuals';

interface ProjectModalProps {
    project: ProjectItem | null;
    onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    const modalCardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (project) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';

            if (modalCardRef.current) {
                gsap.fromTo(
                    modalCardRef.current,
                    { scale: 0.9, y: 24, rotate: -1, opacity: 0 },
                    { scale: 1, y: 0, rotate: 0, opacity: 1, duration: 0.28, ease: 'back.out(1.6)' }
                );
            }
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [project, onClose]);

    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-[2px]"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div
                ref={modalCardRef}
                className="comic-panel relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-[#F5EFE0]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Top Comic Header Strip */}
                <div className="bg-halftone-yellow flex items-center justify-between border-b-[3.5px] border-[#111111] px-5 py-3">
                    <div className="flex flex-wrap items-center gap-2">
            <span className="border-2 border-[#111111] bg-[#111111] px-2.5 py-0.5 font-comic-stamp text-xs text-white">
              {project.issueNumber} • {project.dateTag}
            </span>
                        {project.roles.map((r) => (
                            <span
                                key={r}
                                className={`border-2 border-[#111111] px-2.5 py-0.5 font-comic-stamp text-[11px] uppercase ${ROLES[r].badgeClass}`}
                            >
                {ROLES[r].shortLabel}
              </span>
                        ))}
                    </div>
                    <button
                        onClick={onClose}
                        className="comic-btn flex h-9 w-9 items-center justify-center bg-[#FF3B30] text-white"
                        aria-label="Close modal"
                    >
                        <X className="h-5 w-5 stroke-[3]" />
                    </button>
                </div>

                <div className="space-y-5 p-6">
                    <div>
                        <h2 className="font-comic-display text-4xl leading-none sm:text-5xl">{project.title}</h2>
                        <p className="mt-3 border-[3px] border-[#111111] bg-[#FFF4B8] px-4 py-2.5 text-base font-bold leading-snug shadow-[4px_4px_0px_0px_#111111]">
                            {project.hook}
                        </p>
                    </div>

                    {/* Interactive SVG System Diagram */}
                    <div className="overflow-hidden border-[3px] border-[#111111] bg-white shadow-[5px_5px_0px_0px_#111111]">
                        <div className="flex items-center justify-between border-b-2 border-[#111111] bg-[#111111] px-3 py-1 text-white">
              <span className="inline-flex items-center gap-1.5 font-mono-tech text-[11px] font-bold uppercase">
                <Layers className="h-3.5 w-3.5 text-[#FFE14D]" /> System Blueprint
              </span>
                            <span className="font-mono-tech text-[11px] font-bold text-[#FFE14D]">
                {project.impactBadge}
              </span>
                        </div>
                        <div className="h-40 w-full p-2">
                            <ProjectComicDiagram type={project.visualType} />
                        </div>
                    </div>

                    <div className="comic-panel-sm p-4">
            <span className="inline-block border-2 border-[#111111] bg-[#FF3B30] px-2 py-0.5 font-comic-stamp text-[11px] text-white">
              01 • THE CHALLENGE
            </span>
                        <p className="mt-2 text-base font-bold leading-relaxed text-neutral-900">{project.problem}</p>
                    </div>

                    <div className="comic-panel-sm p-4">
            <span className="inline-block border-2 border-[#111111] bg-[#2EC4B6] px-2 py-0.5 font-comic-stamp text-[11px] text-[#111111]">
              02 • ENGINEERING BUILD
            </span>
                        <ul className="mt-2.5 list-disc space-y-2 pl-5 text-base font-bold leading-relaxed text-neutral-900">
                            {project.build.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-halftone-cyan flex items-start gap-3 border-[3px] border-[#111111] p-4 shadow-[5px_5px_0px_0px_#111111]">
                        <Zap className="mt-0.5 h-6 w-6 shrink-0 fill-[#FFE14D] stroke-[#111111] stroke-[2.5]" />
                        <div>
                            <h3 className="font-comic-stamp text-sm uppercase">03 • Verified Impact</h3>
                            <p className="mt-1 text-base font-bold text-[#111111]">{project.impact}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-comic-stamp text-xs uppercase text-neutral-700">Tech Stack</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="border-2 border-[#111111] bg-white px-2.5 py-1 font-mono-tech text-xs font-extrabold shadow-[2px_2px_0px_0px_#111111]"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="comic-btn inline-flex items-center gap-2 bg-[#111111] px-5 py-3 font-comic-stamp text-xs text-white"
                        >
                            <Code2 className="h-4 w-4 text-[#FFE14D]" />
                            View on GitHub
                        </a>
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="comic-btn inline-flex items-center gap-2 bg-[#FFE14D] px-5 py-3 font-comic-stamp text-xs text-[#111111]"
                            >
                                <ExternalLink className="h-4 w-4" />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}