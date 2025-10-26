'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GL } from './gl/index';
import { Button } from './ui/Button';
import { useState } from 'react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        },
    },
};

export function Hero() {
    const [hovering, setHovering] = useState(false);
    return (
        <div className="flex flex-col h-svh justify-between">
            <GL hovering={hovering} />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="pb-16 mt-auto text-center relative z-10"
            >
                <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-sentient">
                    <i className="font-light">Mert Yıldız</i>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[440px] mx-auto"
                >
                    I'm a software engineer with a passion for building web applications.
                </motion.p>

                <motion.div variants={itemVariants}>
                    <Link className="contents max-sm:hidden" href="#contact">
                        <Button
                            className="mt-14"
                            onMouseEnter={() => setHovering(true)}
                            onMouseLeave={() => setHovering(false)}
                        >
                            [Contact Me]
                        </Button>
                    </Link>
                    <Link className="contents sm:hidden" href="#contact">
                        <Button
                            size="sm"
                            className="mt-14"
                            onMouseEnter={() => setHovering(true)}
                            onMouseLeave={() => setHovering(false)}
                        >
                            [Contact Me]
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
