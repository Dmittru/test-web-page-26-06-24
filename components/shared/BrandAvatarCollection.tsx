'use client'
import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {IBrandAvatarCollection} from "@/lib/types";
import {cn} from "@/lib/utils";
import {Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger} from "@/components/ui/dialog";
import BrandAvatar from "@/components/shared/BrandAvatar";


const BrandAvatarCollection = ({users, maxIcons = 11, avatarClass, className}: IBrandAvatarCollection) => {
    if (!users || users.length === 0) {
        console.error('No such passed users in BrandAvatar component')
        return;
    }
    return (
        <div className={cn("flex items-center text-brand-text-primary", className)}>
            <div className={'flex items-center -space-x-[24px] sm:-space-x-[12px] lg:-space-x-[38px] 2xl:-space-x-[12px]'}>
                {
                    users.map((user, key) => {
                        if (key > maxIcons) {
                            return
                        }
                        return (
                            <Avatar key={user.id} className={avatarClass}>
                                <AvatarImage src={user.image} className={'select-none'} alt={user.firstName}/>
                                <AvatarFallback>
                                    {user.firstName[0]}{user.lastName[0]}
                                </AvatarFallback>
                            </Avatar>
                        )
                    })
                }
            </div>
            {users.length > maxIcons &&
                <Dialog>
                    <DialogTrigger>
                        <span className={'body-1 ml-[8px]'}>+{users.length - maxIcons}</span>
                    </DialogTrigger>
                    <DialogContent>
                        <div className={'p-8 flex flex-col gap-10'}>
                            <div className="flex items-center justify-between">
                                <h4 className={'hidden lg:block'}>
                                    Команда
                                </h4>
                                <p className={'block lg:hidden title-3'}>
                                    Команда
                                </p>
                                <DialogClose asChild>
                                    <div className="flex flex-col h-6 w-6 items-center justify-center">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                                                  fill="#B0B1B6"/>
                                        </svg>
                                    </div>
                                </DialogClose>
                            </div>
                            <div className="flex flex-col gap-4 items-start">
                                {users.map((user) => {
                                    return (
                                        <div className={'flex gap-2'}>
                                            <BrandAvatar user={user} avatarClass={'avatar-48'}/>
                                            <div className="flex flex-col subtitle-1">
                                                <p>
                                                    {user.firstName} {user.lastName}
                                                </p>
                                                <p className={'text-brand-text-secondary'}>
                                                    {user.position}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>

            }
        </div>
    );
};

export default BrandAvatarCollection;