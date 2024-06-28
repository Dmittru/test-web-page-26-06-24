'use client'
import React from 'react';
import {IUser} from "@/lib/types";
import PersonalInformation from "@/components/shared/PersonalInformation";
import EmploeeWork from "@/components/shared/EmploeeWork";

const UserInformation = ({user}:{user:IUser}) => {
    return (
        <div className={'flex flex-col lg:flex-row gap-4 w-full items-start'}>
            <PersonalInformation user={user}/>
            <EmploeeWork user={user}/>
        </div>
    );
};

export default UserInformation;