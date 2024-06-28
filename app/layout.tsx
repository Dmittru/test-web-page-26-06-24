import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import Topbar from "@/components/shared/Topbar";
import {Button} from "@/components/ui/button";
import {CHEVRON_LEFT} from "@/constaints";
import Link from "next/link";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: "Test Task",
    description: "Brand test task",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={cn('dark bg-brand-bg-primary flex flex-col items-center', poppins.className)}>
        <div className="flex flex-col items-center lg:px-[213px] pb-6 lg:pb-[92px] w-screen lg:aspect-[320/249] gap-y-2">
            <Topbar/>
            {children}
        </div>
        </body>
        </html>
    );
}
