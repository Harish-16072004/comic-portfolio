import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, Code2, ExternalLink, Zap } from 'lucide-react';
import {type ProjectItem, ROLES } from '../data/portfolioData';

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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-[2px]"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div
                ref={modalCardRef}
                className="comic-panel relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-[#FAF6EE]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between border-b-[3px] border-[#111111] bg-[#FFE14D] px-5 py-3">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="font-comic text-xl tracking-wider">{project.issueNumber}</span>
                        {project.roles.map((r) => (
                            <span
                                key={r}
                                className={`border-2 border-[#111111] px-2 py-0.5 text-xs font-extrabold uppercase ${ROLES[r].badgeClass}`}
                            >
                {ROLES[r].shortLabel}
              </span>
                        ))}
                    </div>
                    <button
                        onClick={onClose}
                        className="comic-btn flex h-9 w-9 items-center justify-center bg-white"
                        aria-label="Close modal"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="space-y-5 p-6">
                    <div>
                        <h2 className="font-comic text-4xl leading-tight">{project.title}</h2>
                        <p className="mt-2 border-l-4 border-[#111111] bg-[#FFF4B8] px-3 py-2 text-sm font-medium">
                            {project.hook}
                        </p>
                    </div>

                    <div className="flex h-44 items-center justify-center border-[3px] border-[#111111] bg-white text-center text-sm font-bold text-neutral-500">
                        {project.thumbnailLabel}
                    </div>

                    <div className="border-2 border-[#111111] bg-white p-4">
                        <h3 className="font-comic text-xl">The Problem</h3>
                        <p className="mt-1 text-sm leading-relaxed text-neutral-800">{project.problem}</p>
                    </div>

                    <div className="border-2 border-[#111111] bg-white p-4">
                        <h3 className="font-comic text-xl">The Build</h3>
                        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-neutral-800">
                            {project.build.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-start gap-3 border-[3px] border-[#111111] bg-[#E0F7F5] p-4">
                        <Zap className="mt-0.5 h-5 w-5 shrink-0 fill-[#FFE14D]" />
                        <div>
                            <h3 className="font-comic text-xl leading-none">The Impact</h3>
                            <p className="mt-1 text-sm font-semibold text-[#111111]">{project.impact}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-comic text-xl">Tech Stack</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="border-2 border-[#111111] bg-white px-2.5 py-1 text-xs font-bold"
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
                            className="comic-btn inline-flex items-center gap-2 bg-[#111111] px-4 py-2.5 text-sm font-bold text-white"
                        >
                            <Code2 className="h-4 w-4" />
                            View on GitHub
                        </a>
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="comic-btn inline-flex items-center gap-2 bg-[#FFE14D] px-4 py-2.5 text-sm font-bold text-[#111111]"
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