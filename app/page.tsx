import {USER_COLLETION} from "@/constaints";
import React from "react";
import Link from "next/link";
import BrandAvatar from "@/components/shared/BrandAvatar";
import useTabManager from "@/hooks/useTabManager";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col gap-5 pb-20">
            <h1>
                Привет, это моё выполненное тестовое
            </h1>
            <h5>
                Для лучшей имитации я использовал странички. Можно пройти ко всем пользователям
            </h5>
            <div className={'flex flex-wrap gap-10'}>
                {USER_COLLETION.map((user) => {
                    return (
                        <Link href={`/employee/${user.id}`}>
                            <div className={'flex flex-col justify-center items-center'}>
                                <BrandAvatar user={user} avatarClass={'avatar-96'}/>
                                <p>
                                    {user.firstName}
                                </p>
                                <p>
                                    {user.lastName}
                                </p>
                                {user?.surName &&
                                    <p>
                                        {user.surName}
                                    </p>
                                }
                            </div>
                        </Link>
                    )
                })}
            </div>
            <Link target={'_blank'} href={'https://github.com/Dmittru/test-web-page-26-06-24'} className={'underline hover:no-underline'}>
                <h3>
                    //Git Project
                </h3>
            </Link>
            <h5>
                Времени уделено на проект: ~12 часов<br/>
                При выполнении выполнил:
            </h5>
            <ul className={'list-disc'}>
                <li>
                    Настройку конфига tailwind под проект
                </li>
                <li>
                    Применил @apply и отдельные кастомные стили для UI в globals.css
                </li>
                <li>
                    Использовал самописный хук useTabManager
                </li>
                <li>
                    Создал дополнительную функцию для обработки цветов в загруженности сотрудника (объедена с конфигом tailwind)
                </li>
                <li>
                    Юзер пейджинг
                </li>
                <li>
                    Обработка на существующие данные юзера (BadUserFetched)
                </li>
                <li>
                    Использование типизированных кнопок с инвариациями из UI кита shadcn
                </li>
                <li>
                    Пара микрофишек, которые лежат в /lib/utils
                </li>
                <li>
                    Под Tabs выделен новый компонен, с badges и другими пропами, для полноценного реализа UI
                </li>
                <li>
                    В Input добавлены новые пропы, для редактирования и просмотра ввода поля
                </li>
                <li>
                    BrandAvatar и BrandAvatarCollection сделаны отдельными компонентами с пропами
                </li>
            </ul>
            <h5 className="mt-10">
                Стек
            </h5>
            <ul>
                <li>
                    Tailwind 3.4 (модули: Aspect-Ratio)
                </li>
                <li>
                    NextJs 14.2
                </li>
                <li>
                    TypeScript 5
                </li>
                <li>
                    React 18
                </li>
                <li>
                    (Modified) UI Kit: Shadcn <Link target={'_blank'} href={'https://ui.shadcn.com/'} className={'underline hover:no-underline'}>Shadcn website</Link>
                </li>
            </ul>
            <h6 className={'mt-10'}>
                Моя резюмба
            </h6>
            <Link target={'_blank'} className={'underline hover:no-underline'} href={'https://rostov.hh.ru/resume/03a51097ff0c52c96e0039ed1f344b52506c37'}>
                hh.ru
            </Link>
        </main>
    );
}
