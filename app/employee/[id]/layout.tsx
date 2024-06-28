'use client'
import React from 'react';
import {Button} from "@/components/ui/button";
import {CHEVRON_LEFT} from "@/constaints";
import Link from "next/link";

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <div className="flex w-full gap-5">
                <Button
                    svgIcon={CHEVRON_LEFT}
                    svgPlace={'left'}
                    variant={'ghost_low'}
                    className={'text-brand-text-tertiary px-4 py-2 space-x-2'}
                >
                    <Link href={'/'}>
                        Вернуться к сотрудникам
                    </Link>
                </Button>
            </div>
            {children}
        </>
    );
};

export default Layout;