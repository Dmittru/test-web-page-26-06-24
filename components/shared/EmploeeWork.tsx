'use client'
import React from 'react';
import {IProject, IUser} from "@/lib/types";
import {calculateUserActivity, cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {COMPANY_PROJECTS, USER_COLLETION} from "@/constaints";
import BrandAvatar from "@/components/shared/BrandAvatar";
import BrandAvatarCollection from "@/components/shared/BrandAvatarCollection";

const EmploeeWork = ({user}: { user: IUser }) => {
    const activityColor = calculateUserActivity(user.activity)
    // @ts-ignore
    const userProject: IProject = COMPANY_PROJECTS[user.project]
    // @ts-ignore
    const responsibleRoom: IUser[] = userProject.employees?.responsible.length > 0 && userProject.employees.responsible.map((u) => USER_COLLETION.find((uc) => uc.id === u))
    // @ts-ignore
    const teamRoom: IUser[] = userProject.employees?.team.length > 0 && userProject.employees.team.map((u) => USER_COLLETION.find((uc) => uc.id === u))

    return (
        <div className={'container-secondary flex flex-col gap-y-10 w-full lg:w-[658px]'}>
            <div className="flex justify-between items-center">
                <h5 className={'hidden lg:block'}>
                    Загрузка сотрудника
                </h5>
                <p className={'title-3 block lg:hidden'}>
                    Загрузка сотрудника
                </p>
                <Button
                    // MAKE AS FIGMA
                    variant={'none'}
                    className={cn('subtitle-2', activityColor)}
                >
                    {user.activity}%
                </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-10 gap-x-5">
                <div className="flex flex-col gap-2 subtitle-1">
                    <p className={'text-brand-text-tertiary'}>
                        Название проекта
                    </p>
                    <p className={'whitespace-nowrap truncate'}>
                        {userProject?.title || 'Неизвестен'}
                    </p>
                </div>
                <div className="flex flex-col gap-2 subtitle-1 lg:col-span-2">
                    <p className={'text-brand-text-tertiary'}>
                        Тип проекта
                    </p>
                    <p className={'whitespace-nowrap truncate'}>
                        {userProject?.projectType || 'Неизвестен'}
                    </p>
                </div>
                <div className="flex flex-col gap-2 subtitle-1">
                    <p className={'text-brand-text-tertiary'}>
                        Ответственный
                    </p>
                    <div>
                        {responsibleRoom && responsibleRoom.length > 0 ?
                            <div className={'flex flex-col gap-2 truncate whitespace-nowrap'}>
                                {responsibleRoom.map((responsibleUser) => {
                                    return (
                                        <div className="flex items-center gap-2"
                                             key={`responsibleByProj${responsibleUser.id}`}>
                                            <BrandAvatar user={responsibleUser} avatarClass={'avatar-48'}/>
                                            <p>
                                                {responsibleUser.firstName} {responsibleUser.lastName}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div> :
                            <p>
                                Неизвестен
                            </p>
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-2 subtitle-1 lg:col-span-2">
                    <p className={'text-brand-text-tertiary'}>
                        Команда
                    </p>
                    <div className={'truncate whitespace-nowrap'}>
                        {teamRoom && teamRoom.length > 0 ?
                            <div>
                                <BrandAvatarCollection users={teamRoom} avatarClass={'avatar-48'} maxIcons={7}/>
                            </div> :
                            <p>
                                Неизвестны
                            </p>
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-2 subtitle-1 lg:col-span-3">
                    <p className={'text-brand-text-tertiary'}>
                        Сроки работы
                    </p>
                    <div className={'flex items-center gap-2 text-brand-text-secondary truncate whitespace-nowrap'}>
                        <p>
                            {userProject.deadlines[0] || 'Неизвестно начало'}
                        </p>
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893L17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071C9.90237 13.3166 9.90237 12.6834 10.2929 12.2929L14.5858 8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H14.5858L10.2929 1.70711C9.90237 1.31658 9.90237 0.683417 10.2929 0.292893Z"
                                  fill="#0047BB"/>
                        </svg>
                        <p>
                            {userProject.deadlines[1] || 'Неизвестно окончание'}
                        </p>
                    </div>
                </div>
            </div>
            <Button
                className={'w-full py-[10px] px-[59.5px] lg:px-4'}
            >
                Посмотреть всю загрузку
            </Button>
        </div>
    );
};

export default EmploeeWork;