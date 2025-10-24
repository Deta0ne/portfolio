'use client';

import Link from 'next/link';
import { GL } from './gl/index';
import { Button } from './ui/Button';
import { useState } from 'react';

export function Hero() {
    const [hovering, setHovering] = useState(false);
    return (
        <div className="flex flex-col h-svh justify-between">
            <GL hovering={hovering} />

            <div className="pb-16 mt-auto text-center relative">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                    <i className="font-light">Mert Yıldız</i>
                </h1>
                <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[440px] mx-auto animate-fade-in-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                    I'm a software engineer with a passion for building web applications.
                </p>

                <Link className="contents max-sm:hidden" href="#contact">
                    <Button
                        className="mt-14 animate-fade-in-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]"
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                    >
                        [Contact Me]
                    </Button>
                </Link>
                <Link className="contents sm:hidden" href="#contact">
                    <Button
                        size="sm"
                        className="mt-14 animate-fade-in-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]"
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                    >
                        [Contact Me]
                    </Button>
                </Link>
            </div>
        </div>
    );
}
