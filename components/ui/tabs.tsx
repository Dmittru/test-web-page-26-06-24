import React, {useState} from 'react';
import {ITabs} from "@/lib/types";
import {Button} from "@/components/ui/button";

const Tabs: React.FC<ITabs> = ({tabs, focus_underline = false, onClick, ...props}) => {
    const [activeTab, setActiveTab] = useState(tabs[0].title);

    const handleClick = (tabSign: string, event: React.MouseEvent<HTMLButtonElement>) => {
        setActiveTab(tabSign);
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <>
            {tabs.map((tabSign) => (
                <Button
                    variant="tab"
                    size="tab"
                    className={`${activeTab === tabSign.title ? focus_underline ? 'after:w-full after:h-[2px] after:bg-brand-border-accent after:bottom-0 after:content-[""] after:absolute' : 'text-brand-text-primary' : ''} relative`}
                    key={tabSign.title}
                    onClick={(event) => handleClick(tabSign.title, event)}
                    {...props}
                    value={tabSign.title}
                >
                    <span>{tabSign.title}</span>
                    {tabSign?.badge && tabSign.badge &&
                        <span className={'px-2 py-[2px] bg-brand-bg-accent rounded-[30px] font-normal text-brand-caption ml-2'}>{tabSign.badge}</span>
                    }
                </Button>
            ))}
        </>
    );
};

export default Tabs;
