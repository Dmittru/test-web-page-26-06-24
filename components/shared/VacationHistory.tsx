'use client'
import React, {useState} from 'react';
import {IUser, IVacation} from "@/lib/types";
import {cn} from "@/lib/utils";

interface MetaIVacantion extends IVacation {
    metaField: string,
}

const VacationHistory = ({user}: { user: IUser }) => {
    const [vacations, setVacations] = useState<MetaIVacantion[]>([...(user.vacation.planned).map((q) => {
        return {...q, metaField: "planned"}
    }), ...(user.vacation.used).map((q) => {
        return {...q, metaField: "used"}
        //     @ts-ignore
    })].sort((a, b) => b.started - a.started))

    return (
        <div className={'container-secondary flex flex-col gap-y-4 lg:w-[962px]'}>
            <div className="flex justify-between items-center">
                <h5 className={'hidden lg:block'}>
                    История отпусков
                </h5>
                <p className={'block lg:hidden title-3'}>
                    История отпусков
                </p>
                <p className={'subtitle-2 text-brand-text-tertiary'}>
                    Посмотреть все
                </p>
            </div>
            <div className="flex flex-col subtitle-1">
                <div className="hidden w-full lg:grid grid-cols-12 px-2 py-4 border-b border-brand-border-primary">
                    <div className="col-span-5">
                        <p>
                            Тип
                        </p>
                    </div>
                    <div className="col-span-4">
                        <p>
                            Даты отпуска
                        </p>
                    </div>
                    <div className="col-span-3 text-end">
                        <p>
                            Количество дней
                        </p>
                    </div>
                </div>
                {vacations.map((vac,key) => {
                    return (
                        <div className={cn("w-full grid grid-cols-12 gap-y-4 lg:gap-y-0 px-2 py-4", {'border-b border-b-brand-border-primary': vacations.length-1 !== key})}>
                            <div className="col-span-12 lg:col-span-5 space-y-2">
                                <p className={'block lg:hidden subtitle-1 text-brand-text-tertiary'}>
                                    Тип
                                </p>
                                <p>
                                    {vac.vacationType}
                                </p>
                            </div>
                            <div className="col-span-12 lg:col-span-4 flex flex-col lg:flex-row gap-2 lg:items-center space-y-2">
                                <p className={'block lg:hidden subtitle-1 text-brand-text-tertiary'}>
                                    Даты отпуска
                                </p>
                                <div className={'flex gap-2 items-center text-brand-text-secondary'}>
                                    <p>
                                        {vac.started || 'Неизвестно начало'}
                                    </p>
                                    {vac.metaField === 'planned' ?
                                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893L17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071C9.90237 13.3166 9.90237 12.6834 10.2929 12.2929L14.5858 8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H14.5858L10.2929 1.70711C9.90237 1.31658 9.90237 0.683417 10.2929 0.292893Z"
                                                  fill="#FFB649"/>
                                        </svg> :
                                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893L17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071C9.90237 13.3166 9.90237 12.6834 10.2929 12.2929L14.5858 8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H14.5858L10.2929 1.70711C9.90237 1.31658 9.90237 0.683417 10.2929 0.292893Z"
                                                  fill="#DB4546"/>
                                        </svg>
                                    }
                                    <p>
                                        {vac.ended || 'Неизвестен конец'}
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-3 lg:text-end space-y-2">
                                <p className={'block lg:hidden subtitle-1 text-brand-text-tertiary'}>
                                    Количество дней
                                </p>
                                <p>
                                    {vac.days}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default VacationHistory;