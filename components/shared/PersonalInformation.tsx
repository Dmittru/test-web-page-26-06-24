'use client'
import React from 'react';
import {IUser} from "@/lib/types";
import {Input} from "@/components/ui/input";

const PersonalInformation = ({user}:{user:IUser}) => {
    return (
        <div className={'container-secondary flex flex-col gap-y-8 w-full lg:w-[820px]'}>
            <div className="flex justify-between items-center">
                <h5 className={'hidden lg:block'}>
                    Персональная информация
                </h5>
                <p className={'title-3 block lg:hidden'}>
                    Персональная информация
                </p>
                <p className={'subtitle-2 text-brand-text-tertiary'}>
                    Изменить
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Input
                    label_message={'Имя'}
                    addictIcons={false}
                    type="text"
                    placeholder={'Имя'}
                    value={user.firstName}
                    name={'firstName'}
                    className={''}
                />
                <Input
                    label_message={'Фамилия'}
                    addictIcons={false}
                    type="text"
                    placeholder={'Фамилия'}
                    value={user.lastName}
                    name={'lastName'}
                    className={''}
                />
                <Input
                    label_message={'Отчество'}
                    addictIcons={false}
                    type="text"
                    placeholder={'Отчество'}
                    value={user.surName}
                    name={'surName'}
                    className={'lg:col-span-2'}
                />
                <Input
                    label_message={'Дата рождения'}
                    addictIcons={false}
                    type="text"
                    placeholder={'Дата рождения'}
                    value={user.birth}
                    name={'birth'}
                    className={''}
                />
                <Input
                    label_message={'Дата трудоустройства'}
                    addictIcons={false}
                    type="text"
                    placeholder={'Дата трудоустройства'}
                    value={user.employed}
                    name={'employed'}
                    className={''}
                />
                <Input
                    label_message={'Страна'}
                    addictIcons={false}
                    type="text"
                    placeholder={'Страна'}
                    value={user.county}
                    name={'county'}
                    className={''}
                />
                <Input
                    label_message={'Город'}
                    addictIcons={false}
                    type="text"
                    placeholder={'Город'}
                    value={user.city}
                    name={'city'}
                    className={''}
                />
                <Input
                    label_message={'Должность'}
                    addictIcons={false}
                    type="text"
                    placeholder={'Должность'}
                    value={user.position}
                    name={'position'}
                    className={''}
                />
                <Input
                    label_message={'Электронная почта'}
                    addictIcons={false}
                    type="text"
                    placeholder={'Электронная почта'}
                    value={user.email}
                    name={'email'}
                    className={''}
                />
            </div>
        </div>
    );
};

export default PersonalInformation;