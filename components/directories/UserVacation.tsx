'use client'
import React from 'react';
import {IUser} from "@/lib/types";
import VacationStats from "@/components/shared/VacationStats";
import VacationHistory from "@/components/shared/VacationHistory";

const UserVacation = ({user}:{user:IUser}) => {
    return (
        <div className={'flex flex-col lg:flex-row gap-4 w-full items-start'}>
            <VacationStats user={user}/>
            <VacationHistory user={user}/>
        </div>
    );
};

export default UserVacation;