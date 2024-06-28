'use client'
import React, {useState} from 'react';
import {IUser} from "@/lib/types";
import {PERSONAL_AREA_TABS, USER_COLLETION} from "@/constaints";
import BadUserFetched from "@/components/shared/BadUserFetched";
import BrandAvatar from "@/components/shared/BrandAvatar";
import useTabManager from "@/hooks/useTabManager";
import Tabs from "@/components/ui/tabs";

const EmployeePage = ({params: {id}}: { params: { id: string } }) => {
    const userDataRaw = USER_COLLETION.find((u) => String(u.id) === id)
    if (!userDataRaw) return <BadUserFetched/>
    const [userData, setUserData] = useState<IUser>(userDataRaw)
    const {currentTab, setTab} = useTabManager(PERSONAL_AREA_TABS, {user: userData});
    const handleTabClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const newTab = event.currentTarget.value || PERSONAL_AREA_TABS[0].title;
        setTab(newTab);
    };
    return (
        <div className={'w-full flex flex-col gap-y-4'}>
            <div className={'container-secondary overflow-hidden text-center lg:text-start'}>
                <div
                    className="w-full flex flex-col lg:flex-row justify-center lg:justify-start text-center lg:text-start items-center lg:items-start gap-x-[50px] gap-y-4">
                    <BrandAvatar user={userData} avatarClass={'avatar-160'}/>
                    <div className="flex flex-col gap-y-6 lg:gap-y-2">
                        <div className={'custom-headline-mobile lg:custom-headline'}>
                            <p>
                                {userData.firstName}
                            </p>
                            <p>
                                {userData.lastName} {userData.surName}
                            </p>
                        </div>
                        <div className="flex flex-col items-center lg:items-start gap-y-4 subtitle-1">
                            <p>
                                {userData.position}
                            </p>
                            <div className="flex items-center gap-x-2">
                                <p>
                                    {userData.county}, {userData.city}
                                </p>
                                <p className={'text-brand-text-tertiary animate-'}>
                                    •
                                </p>
                                <p className={'text-brand-text-tertiary'}>
                                    {userData.lastSign}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center mt-[52px] overflow-x-auto no-scrollbar">
                    {/*@ts-ignore*/}
                    <Tabs focus_underline={true} tabs={PERSONAL_AREA_TABS} onClick={handleTabClick}/>
                </div>
            </div>
            {currentTab.component}
        </div>
    )
};

export default EmployeePage;