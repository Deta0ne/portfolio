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
            category: 'FinTech',
            year: '2024',
            imageSrc: '/images/carrio.png',
            tags: ['Web', 'Next.js', 'Supabase'],
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
            category: 'SaaS',
            year: '2024',
            imageSrc: '/images/code-crew.png',
            tags: ['Next.js', 'TypeScript', 'Supabase'],
            href: 'https://code-crew-olive.vercel.app/',
            priority: false,
            gradientFrom: '#111827',
            gradientTo: '#2563eb',
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
