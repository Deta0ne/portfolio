'use client';
import { Hero } from '@/components/hero';
import { Leva } from 'leva';
import { PortfolioSection } from '@/components/portfolio-section';

export default function Home() {
    const projects = [
        {
            id: 1,
            title: 'Carrio — Job Tracker',
            description:
                'Carrio App is a modern job application tracking system that helps candidates organize, visualize, and optimize their job search. Built with Next.js 15, Supabase, and shadcn/ui, it offers secure authentication, responsive dashboards, reminders, statistics, and document storage—all wrapped in a clean, accessible UI with dark mode. ',
            category: 'Web',
            year: '2025',
            imageSrc: '/images/carrio.png',
            tags: ['Next.js', 'TypeScript', 'Supabase'],
            href: 'https://carrio-app.vercel.app/',
            priority: true,
            gradientFrom: '#16a34a',
            gradientTo: '#1a241e',
        },
        {
            id: 2,
            title: 'Code Crew — Find Teammates',
            description:
                'Code Crew is a modern platform that helps developers and beginners find teammates for side projects. Built with Next.js and TypeScript, it features a clean UI, fast performance, and a simple way to connect, collaborate, and ship ideas.',
            category: 'Web',
            year: '2025',
            imageSrc: '/images/code-crew.png',
            tags: ['Next.js', 'TypeScript', 'Supabase'],
            href: 'https://code-crew-olive.vercel.app/',
            priority: false,
            gradientFrom: '#f5f5f5',
            gradientTo: '#2563eb',
        },
        {
            id: 3,
            title: 'Critical Path Visualizer — Project Management',
            description:
                'A comprehensive project management tool that combines PERT (Program Evaluation and Review Technique) analysis with interactive Gantt charts and network diagrams.',
            category: 'Web',
            year: '2024',
            imageSrc: '/images/critical-path.png',
            tags: ['React', 'TypeScript', 'd3.js'],
            href: 'https://critical-path-visualizer-deta0nes-projects.vercel.app',
            priority: false,
            gradientFrom: '#f5f5f5',
            gradientTo: '#E76E50',
        },
        {
            id: 4,
            title: 'My Personal Website',
            description: 'My personal website built with Next.js and Tailwind CSS.',
            category: 'Web',
            year: '2025',
            imageSrc: '/images/personal-site.png',
            tags: ['Next.js', 'TypeScript', 'Sanity'],
            href: 'https://mertyildiz.dev',
            priority: false,
            gradientFrom: '#644A40',
            gradientTo: '#fff',
        },
    ];

    return (
        <main className="bg-black text-white">
            <Hero />
            <Leva hidden />
            <PortfolioSection projects={projects} />
        </main>
    );
}
