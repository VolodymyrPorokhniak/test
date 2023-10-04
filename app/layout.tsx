import './globals.css';
import type {Metadata} from 'next';
import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import QueryProvider from "@/utils/providers/QueryProvider";
import ThemeProvider from "@/utils/providers/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollUp from "@/components/Common/ScrollUp";

export const metadata: Metadata = {
    title: 'Cyber ICE Box',
    description: 'Platform for cyber security',
    viewport: 'width=device-width, initial-scale=1'
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="flex flex-col min-h-screen dark:bg-black">
        <ThemeProvider>
            <QueryProvider>
                <Header/>
                <main className="overflow-auto flex-grow">
                    <ScrollUp />
                    {children}
                </main>
                <Footer/>
                <ScrollToTop />
            </QueryProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}
