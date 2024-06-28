'use client'
import React from 'react';
import {IUser} from "@/lib/types";
import { dateRuLangEnds} from "@/lib/utils";
import {MAX_VACATION_DAYS} from "@/constaints";
import {Tooltip} from "react-tooltip";

const VacationStats = ({user}: { user: IUser }) => {
    const plannedDays = user.vacation.planned.reduce((acc, day)=> acc + day.days, 0)
    const usedDays = user.vacation.used.reduce((acc, day)=> acc + day.days, 0)
    const metaAvailable = MAX_VACATION_DAYS - plannedDays - usedDays;
    const availableVacations = metaAvailable >= 0 ? metaAvailable : 0;
    const dateRuString = dateRuLangEnds(availableVacations);
    return (
        <div className={'container-secondary flex flex-col w-full lg:w-auto gap-y-4'}>
            <div className="flex gap-x-2 items-center">
                <h5 className={'hidden lg:block'}>
                    Статистика
                </h5>
                <p className={'block lg:hidden title-3'}>
                    Статистика
                </p>
                <svg className={'focus:ring-0'} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-tooltip-content="1 раб. месяц = 3 дня отпуска" data-tooltip-id='tooltip-stats'>
                    <path
                        d="M11 10C11.5523 10 12 10.4477 12 11V15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15V11C10 10.4477 10.4477 10 11 10Z"
                        fill="#B0B1B6"/>
                    <path
                        d="M11 6C10.4477 6 10 6.44772 10 7C10 7.55228 10.4477 8 11 8H11.01C11.5623 8 12.01 7.55228 12.01 7C12.01 6.44772 11.5623 6 11.01 6H11Z"
                        fill="#B0B1B6"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M3.22183 3.22183C5.28473 1.15893 8.08262 0 11 0C13.9174 0 16.7153 1.15893 18.7782 3.22183C20.8411 5.28473 22 8.08262 22 11C22 13.9174 20.8411 16.7153 18.7782 18.7782C16.7153 20.8411 13.9174 22 11 22C8.08262 22 5.28473 20.8411 3.22183 18.7782C1.15893 16.7153 0 13.9174 0 11C0 8.08262 1.15893 5.28473 3.22183 3.22183ZM11 2C8.61305 2 6.32387 2.94821 4.63604 4.63604C2.94821 6.32387 2 8.61305 2 11C2 13.3869 2.94821 15.6761 4.63604 17.364C6.32387 19.0518 8.61305 20 11 20C13.3869 20 15.6761 19.0518 17.364 17.364C19.0518 15.6761 20 13.3869 20 11C20 8.61305 19.0518 6.32387 17.364 4.63604C15.6761 2.94821 13.3869 2 11 2Z"
                          fill="#B0B1B6"/>
                </svg>
                <Tooltip className={'subtitle-2 bg-brand-bg-modal !important'} id='tooltip-stats' place={'right'}/>
            </div>
            <div className="flex items-center justify-center relative lg:px-[148px]">
                <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M35.9161 140.676C45.4914 147.633 56.5773 152.225 68.2674 154.077C79.9575 155.928 91.9198 154.987 103.176 151.329C114.433 147.672 124.664 141.402 133.033 133.033C141.402 124.664 147.672 114.433 151.329 103.176C154.987 91.9198 155.928 79.9575 154.077 68.2674C152.225 56.5774 147.633 45.4915 140.676 35.9161C133.719 26.3408 124.595 18.5478 114.049 13.1745C103.504 7.80118 91.8358 5 80 4.99999"
                        stroke="#25824F" strokeWidth="10"/>
                    <path
                        d="M80 4.99999C68.1643 4.99999 56.4965 7.80116 45.9507 13.1745C35.405 18.5478 26.2806 26.3407 19.3237 35.9161C12.3668 45.4914 7.77491 56.5773 5.92338 68.2674C4.07186 79.9575 5.01331 91.9198 8.67076 103.176"
                        stroke="#FFB649" strokeWidth="10"/>
                    <path d="M8.67075 103.176C13.5651 118.239 23.1025 131.367 35.9161 140.676" stroke="#DB4546"
                          strokeWidth="10"/>
                </svg>
                <div className="absolute text-center">
                    <h4>
                        {availableVacations}
                    </h4>
                    <p className={'subtitle-2 text-brand-text-tertiary'}>
                        {dateRuString}
                    </p>
                </div>
            </div>
            <div className={'flex flex-col gap-y-2'}>
                <div className="flex justify-between items-center px-[9px] py-[11px] w-full subtitle-1 border border-brand-border-primary hover:border-brand-text-primary rounded-2xl transition-all">
                    <div className="flex gap-2 items-center">
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="5" height="5" rx="2.5" fill="#25824F"/>
                            <rect x="0.5" y="0.5" width="5" height="5" rx="2.5" stroke="#25824F"/>
                        </svg>
                        <p>
                            Доступно сейчас
                        </p>
                    </div>
                    <p>
                        {availableVacations} {dateRuString}
                    </p>
                </div>
                <div className="flex justify-between items-center px-[9px] py-[11px] w-full subtitle-1 border border-brand-border-primary hover:border-brand-text-primary rounded-2xl transition-all">
                    <div className="flex gap-2 items-center">
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="6" height="6" rx="3" fill="#FFB649"/>
                        </svg>
                        <p>
                            Запланировано
                        </p>
                    </div>
                    <p>
                        {plannedDays} {dateRuLangEnds(plannedDays)}
                    </p>
                </div>
                <div className="flex justify-between items-center px-[9px] py-[11px] w-full subtitle-1 border border-brand-border-primary hover:border-brand-text-primary rounded-2xl transition-all">
                    <div className="flex gap-2 items-center">
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="5" height="5" rx="2.5" fill="#DB4546"/>
                            <rect x="0.5" y="0.5" width="5" height="5" rx="2.5" stroke="#DB4546"/>
                        </svg>
                        <p>
                            Использовано/недоступно
                        </p>
                    </div>
                    <p>
                        {usedDays} {dateRuLangEnds(usedDays)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VacationStats;