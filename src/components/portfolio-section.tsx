'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import ProjectCard from './project-card';

interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    year: string;
    imageSrc: string;
    tags: string[];
    href: string;
    priority: boolean;
    gradientFrom: string;
    gradientTo: string;
}

interface PortfolioSectionProps {
    projects: Project[];
}

export function PortfolioSection({ projects }: PortfolioSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const scrollPosition = window.scrollY;
            const containerTop = containerRef.current.offsetTop;
            const windowHeight = window.innerHeight;

            const relativeScroll = scrollPosition - containerTop + windowHeight / 2;
            const sectionHeight = windowHeight * 0.9;
            const index = Math.floor(relativeScroll / sectionHeight);

            const clampedIndex = Math.max(0, Math.min(projects.length - 1, index));
            setActiveIndex(clampedIndex);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, [projects.length]);

    return (
        <section ref={containerRef} className="relative z-10 bg-background">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="px-4 py-16 md:py-24"
            >
                <div className="mb-12 md:mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-sentient mb-6"
                    >
                        Portfolio <i className="font-light">Highlights</i>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="font-mono text-sm md:text-base text-foreground/60 max-w-2xl mx-auto"
                    >
                        Transforming ideas into exceptional digital experiences
                    </motion.p>
                </div>

                <div className="relative" style={{ minHeight: `${projects.length * 80}vh` }}>
                    <div className="sticky top-4 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-4">
                        {/* Left Side - Project Details (Sticky) */}
                        <aside className="relative h-[400px] lg:h-[calc(100vh-2rem)] p-6 lg:p-8 rounded-3xl border border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden">
                            <AnimatePresence mode="wait">
                                {projects.map(
                                    (project, index) =>
                                        activeIndex === index && (
                                            <motion.div
                                                key={project.id}
                                                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                                exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                                                transition={{
                                                    duration: 0.5,
                                                    ease: [0.25, 0.1, 0.25, 1],
                                                }}
                                                className="absolute inset-6 lg:inset-8 space-y-4 lg:space-y-6 flex flex-col justify-center"
                                            >
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.1 }}
                                                    className="flex items-center gap-4 font-mono text-xs md:text-sm text-foreground/60"
                                                >
                                                    <span className="text-primary">
                                                        [{String(project.id).padStart(2, '0')}]
                                                    </span>
                                                    <span>{project.category}</span>
                                                    <span>•</span>
                                                    <span>{project.year}</span>
                                                </motion.div>

                                                <motion.h3
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.15 }}
                                                    className="text-2xl md:text-3xl lg:text-4xl font-sentient leading-tight"
                                                >
                                                    {project.title}
                                                </motion.h3>

                                                <motion.p
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.2 }}
                                                    className="text-sm md:text-base text-foreground/80 leading-relaxed"
                                                >
                                                    {project.description}
                                                </motion.p>

                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.25 }}
                                                    className="flex flex-wrap gap-2"
                                                >
                                                    {project.tags.map((tag, idx) => (
                                                        <motion.span
                                                            key={tag}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                                                            className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70"
                                                        >
                                                            {tag}
                                                        </motion.span>
                                                    ))}
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.35 }}
                                                    className="pt-2"
                                                >
                                                    <Button
                                                        size="sm"
                                                        className="group"
                                                        onClick={() => window.open(project.href, '_blank')}
                                                    >
                                                        View Case Study
                                                        <span className="ml-2 transition-transform group-hover:translate-x-1">
                                                            →
                                                        </span>
                                                    </Button>
                                                </motion.div>
                                            </motion.div>
                                        ),
                                )}
                            </AnimatePresence>
                        </aside>

                        {/* Right Side - Project Cards (Sticky) */}
                        <div className="relative h-[500px] lg:h-[calc(100vh-2rem)]">
                            <AnimatePresence mode="wait">
                                {projects.map(
                                    (project, index) =>
                                        activeIndex === index && (
                                            <motion.div
                                                key={project.id}
                                                initial={{ opacity: 0, scale: 0.95, rotateY: -5 }}
                                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                                exit={{ opacity: 0, scale: 0.95, rotateY: 5 }}
                                                transition={{
                                                    duration: 0.6,
                                                    ease: [0.25, 0.1, 0.25, 1],
                                                }}
                                                className="absolute inset-0"
                                            >
                                                <ProjectCard
                                                    title={project.title}
                                                    subtitle={`${project.category} • ${project.year}`}
                                                    imageSrc={project.imageSrc}
                                                    tags={project.tags}
                                                    href={project.href}
                                                    priority={project.priority}
                                                    gradientFrom={project.gradientFrom}
                                                    gradientTo={project.gradientTo}
                                                    imageContainerClassName="lg:h-full"
                                                    containerClassName="h-full"
                                                    revealDelay={0}
                                                />
                                            </motion.div>
                                        ),
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
