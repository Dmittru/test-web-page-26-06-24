import React, { useState, useMemo } from 'react';

interface Tab {
    title: string;
    component: (props: any) => React.ReactNode;
}

export default function useTabManager(tabs: Tab[], props: any) {
    const [activeTab, setActiveTab] = useState(tabs[0].title);

    const currentTabData = useMemo(
        () => tabs.find(tab => tab.title === activeTab)?.component(props),
        [activeTab, tabs, props]
    );

    const setTab = (title: string) => {
        setActiveTab(title);
    };

    const currentTab = {
        title: activeTab,
        component: currentTabData
    }

    return { currentTab, setTab };
}