import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import './globals.css';

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Mert Yıldız - Software Engineer | Frontend Developer',
    description:
        "I'm Mert --a software engineer, cinephile and gamer from Turkey. I graduated from the Software Engineering department of Gumushane University",
    creator: 'Mert Yıldız',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistMono.variable} antialiased`} suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
