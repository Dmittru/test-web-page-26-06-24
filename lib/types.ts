import * as React from "react";

export interface IBrandAvatarCollection {
    users: IUser[],
    avatarClass: string,
    maxIcons: number,
    className?: string | undefined,
}

export interface IBrandAvatar {
    user: IUser,
    avatarClass: string,
    change?: boolean,
}

export interface IVacation {
    started: string,
    ended: string,
    days: number,
    vacationType: string,
}

export interface ITabs extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    tabs: [{
        title: string,
        badge: string,
    }],
    focus_underline?: boolean,
}

export interface IUser {
    id: number,
    image: string,
    firstName: string,
    lastName: string,
    surName?: string,
    position: string,
    birth: string,
    county: string,
    city: string,
    employed: string,
    email: string,
    activity: number,
    project: string,
    lastSign: string,
    vacation: {
        planned: IVacation[],
        used: IVacation[]
    }
}

export interface IProject {
    title: string,
    projectType: string,
    employees: {
        responsible: number[],
        team: number[],
    },
    deadlines: string[]
}