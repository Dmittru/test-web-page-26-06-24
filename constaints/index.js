import * as React from "react";
import UserInformation from "../components/directories/UserInformation";
import UserVacation from "../components/directories/UserVacation";

export const USER_COLLETION = [
    {
        id: 1,
        image: 'https://preview.redd.it/what-avatar-frame-goes-well-with-this-profile-picture-v0-ysklz8dfmn6a1.jpg?auto=webp&s=d93611aa090a77e09e438da983bd0bb63ea48089',
        firstName: 'Steven',
        lastName: 'Ember',
        surName: '',
        position: 'UI/UX Дизайнер',
        birth: '12.02.1995',
        county: 'Румыния',
        city: 'Бухарест',
        employed: '09.09.2023',
        email: 'stevenember@gmail.com',
        activity: 100,
        project: 'MEDPOINT',
        lastSign: '09:41',
        vacation: {
            planned: [
                {
                    started: '10 марта 2023',
                    ended: '20 марта 2023',
                    days: 10,
                    vacationType: 'Отпуск',
                },
            ],
            used: [
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
            ]
        }
    },
    {
        id: 2,
        image: 'https://cdn2.f-cdn.com/contestentries/1366909/28870354/5b47057dd991d_thumb900.jpg',
        firstName: 'Иван',
        lastName: 'Иванов',
        surName: 'Иванович',
        position: 'DevOps Инженер',
        birth: '12.12.1990',
        county: 'Россия',
        city: 'Москва',
        employed: '06.03.2022',
        email: 'Ivanov1990@mail.ru',
        activity: 0,
        project: 'MEDPOINT',
        lastSign: '09:41',
        vacation: {
            planned: [
                {
                    started: '10 марта 2023',
                    ended: '20 марта 2023',
                    days: 10,
                    vacationType: 'Отпуск',
                },
            ],
            used: [
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
            ]
        }
    },
    {
        id: 3,
        image: 'https://hips.hearstapps.com/hmg-prod/images/1-tanya-gupta-1654632756.jpeg',
        firstName: 'Мария',
        lastName: 'Степанова',
        surName: 'Витальевна',
        position: 'Дизайнер',
        birth: '06.12.1989',
        county: 'Россия',
        city: 'Краснодар',
        employed: '01.01.2024',
        email: 'MStepanovna@yahoo.com',
        activity: 20,
        project: 'MEDPOINT',
        lastSign: '09:41',
        vacation: {
            planned: [
                {
                    started: '10 марта 2023',
                    ended: '20 марта 2023',
                    days: 10,
                    vacationType: 'Отпуск',
                },
            ],
            used: [
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
            ]
        }
    },
    {
        id: 4,
        image: 'https://img.freepik.com/free-photo/portrait-ethnic-curly-young-woman-colored-background_23-2148183326.jpg',
        firstName: 'Helen',
        lastName: 'Jackson',
        surName: '',
        position: 'Backend Разработчик',
        birth: '10.11.2000',
        county: 'Соединённые штаты',
        city: 'Даллас',
        employed: '09.12.2021',
        email: 'Emayolo@gmail.com',
        activity: 16,
        project: 'MEDPOINT',
        lastSign: '09:41',
        vacation: {
            planned: [
                {
                    started: '10 марта 2023',
                    ended: '20 марта 2023',
                    days: 10,
                    vacationType: 'Отпуск',
                },
            ],
            used: [
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
            ]
        }
    },
    {
        id: 5,
        image: 'https://i.pinimg.com/736x/42/d8/0e/42d80ec0ec78ca6b8dfce39ccf682f64.jpg',
        firstName: 'Ryan',
        lastName: 'Eldin',
        surName: '',
        position: 'Frontend Разработчик',
        birth: '16.11.1994',
        county: 'Канада',
        city: 'Ванкувер',
        employed: '08.01.2020',
        email: 'Rrrrrryyyaaannn@outlook.com',
        activity: 27,
        project: 'MEDPOINT',
        lastSign: '09:41',
        vacation: {
            planned: [
                {
                    started: '10 марта 2023',
                    ended: '20 марта 2023',
                    days: 10,
                    vacationType: 'Отпуск',
                },
            ],
            used: [
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
            ]
        }
    },
    {
        id: 6,
        image: 'https://pbs.twimg.com/profile_images/1593691909251268612/l-o8DfS4_400x400.jpg',
        firstName: 'Michael',
        lastName: 'Jackson',
        surName: '',
        position: 'Sound-Producer',
        birth: '29.08.1958',
        county: 'Соединённые штаты',
        city: 'Нью-Йорк',
        employed: '06.06.2018',
        email: 'MichaelJK@gmail.com',
        activity: 39,
        project: 'MEDPOINT',
        lastSign: '09:41',
        vacation: {
            planned: [
                {
                    started: '10 марта 2023',
                    ended: '20 марта 2023',
                    days: 10,
                    vacationType: 'Отпуск',
                },
            ],
            used: [
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
            ]
        }
    },
    {
        id: 7,
        image: 'https://i.kym-cdn.com/entries/icons/original/000/042/928/cover6.jpg',
        firstName: 'MrBeast',
        lastName: 'Donaldson',
        surName: 'Jimmy',
        position: 'Блогер',
        birth: '07.03.1998',
        county: 'Соединённые штаты',
        city: 'Канзас',
        employed: '10.10.2016',
        email: 'mrbuisiness@gmail.com',
        activity: 87,
        project: 'MEDPOINT',
        lastSign: '09:41',
        vacation: {
            planned: [
                {
                    started: '10 марта 2023',
                    ended: '20 марта 2023',
                    days: 10,
                    vacationType: 'Отпуск',
                },
            ],
            used: [
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Снимал видео 100 тонн тротилла'
                },
            ]
        }
    },
    {
        id: 8,
        image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
        firstName: 'Dmitry',
        lastName: 'Link',
        surName: '',
        position: 'Frontend Разработчик',
        birth: '31.12.2001',
        county: 'Казахстан',
        city: 'Астана',
        employed: '12.03.2011',
        email: 'labRoar@mail.ru',
        activity: 50,
        project: 'MEDPOINT',
        lastSign: '09:41',
        vacation: {
            planned: [
                {
                    started: '10 марта 2023',
                    ended: '20 марта 2023',
                    days: 10,
                    vacationType: 'Отпуск',
                },
            ],
            used: [
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
            ]
        }
    },
    {
        id: 9,
        image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        firstName: 'Bob',
        lastName: 'Dyllan',
        surName: '',
        position: 'Data Science Инженер',
        birth: '01.01.2001',
        county: 'Австралия',
        city: 'Канберра',
        employed: '09.12.2021',
        email: 'BobDyllanAustralia@gmail.com',
        activity: 60,
        project: 'MEDPOINT',
        lastSign: '09:41',
        vacation: {
            planned: [
                {
                    started: '10 марта 2023',
                    ended: '20 марта 2023',
                    days: 10,
                    vacationType: 'Отпуск',
                },
            ],
            used: [
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
            ]
        }
    },
    {
        id: 10,
        image: 'https://i.pinimg.com/736x/a3/fc/98/a3fc98cd46931905114589e2e8abdc49.jpg',
        firstName: 'Hue',
        lastName: 'Madson',
        surName: '',
        position: 'TechLead',
        birth: '22.02.1993',
        county: 'Великобритания',
        city: 'Лондон',
        employed: '27.09.2019',
        email: 'MadFromLondon@outlook.com',
        activity: 43,
        project: 'MEDPOINT',
        lastSign: '09:41',
        vacation: {
            planned: [

            ],
            used: [
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
            ]
        }
    },
    {
        id: 11,
        image: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?cs=srgb&dl=pexels-pixabay-39866.jpg&fm=jpg',
        firstName: 'Alex',
        lastName: 'Grampson',
        surName: '',
        position: 'FullStack Разработчик',
        birth: '10.11.2000',
        county: 'Италия',
        city: 'Рим',
        employed: '09.09.2023',
        email: 'AlexG@gmail.com',
        activity: 98,
        project: 'MEDPOINT',
        lastSign: '09:41',
        vacation: {
            planned: [
                {
                    started: '10 марта 2023',
                    ended: '20 марта 2023',
                    days: 10,
                    vacationType: 'Отпуск',
                },
            ],
            used: [
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
            ]
        }
    },
    {
        id: 12,
        image: 'https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf//960x0.jpg?format=jpg&width=960',
        firstName: 'Влад',
        lastName: 'Яковенко',
        surName: 'Олегович',
        position: 'Тестировщик',
        birth: '15.03.2003',
        county: 'Россия',
        city: 'Санкт-Петербург',
        employed: '10.10.2019',
        email: 'Vladdddddd111@mail.ru',
        activity: 88,
        project: 'MEDPOINT',
        lastSign: '09:41',
        vacation: {
            planned: [

            ],
            used: [
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
            ]
        }
    },
    {
        id: 13,
        image: 'https://people.com/thmb/CmROfB5Fw4H3oJmGwr7qJTGDCGg=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(509x0:511x2)/people-headshot-lindsay-kimble-9855440283c440159d1684a4befaa97d.jpg',
        firstName: 'Emily',
        lastName: 'Ram',
        surName: '',
        position: 'QA Инженер',
        birth: '19.05.1998',
        county: 'Арабские Эмираты',
        city: 'Абу-Даби',
        employed: '01.03.2024',
        email: 'EmilyRAMMMs@gmail.com',
        activity: 22,
        project: 'MEDPOINT',
        lastSign: '09:41',
        vacation: {
            planned: [
                {
                    started: '10 марта 2023',
                    ended: '20 марта 2023',
                    days: 10,
                    vacationType: 'Отпуск',
                },
            ],
            used: [

            ]
        }
    },
    {
        id: 14,
        image: 'https://www.usmagazine.com/wp-content/uploads/2020/09/Who-Is-Paul-Mescal-5-Things-Know-About-Normal-People-Star-Landing.jpg?quality=86&strip=all',
        firstName: 'Zeu',
        lastName: 'Gnode',
        surName: '',
        position: 'CEO',
        birth: '03.03.1980',
        county: 'Чили',
        city: 'Сантьяго',
        employed: '11.12.2010',
        email: 'Zoeoeo@gmail.com',
        activity: 11,
        project: 'MEDPOINT',
        lastSign: '09:41',
        vacation: {
            planned: [
                {
                    started: '10 марта 2023',
                    ended: '20 марта 2023',
                    days: 10,
                    vacationType: 'Отпуск',
                },
            ],
            used: [
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
                {
                    started: '3 марта 2023',
                    ended: '7 марта 2023',
                    days: 4,
                    vacationType: 'Отгул'
                },
            ]
        }
    },
    {
        id: 15,
        image: 'https://static.bangkokpost.com/media/content/20200619/c1_1937552_200619122619.jpg',
        firstName: 'Kim',
        lastName: 'Seuoga',
        surName: '',
        position: 'Тестировщик',
        birth: '19.03.2000',
        county: 'Южная корея',
        city: 'Сеул',
        employed: '15.10.2020',
        email: 'Kimimimaachiu@gmail.com',
        activity: 1,
        project: 'MEDPOINT',
        lastSign: '09:41',
        vacation: {
            planned: [

            ],
            used: [

            ]
        }
    },
]

export const COMPANY_PROJECTS = {
    'MEDPOINT': {
        title: 'MedPoint 24',
        projectType: 'Коммерческий',
        employees: {
            responsible: [14],
            team: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        },
        deadlines: ['03 марта 2023', '23 марта 2023']
    },
}

export const MAX_VACATION_DAYS = 44;

export const ICON_PLUS = <svg className='flex' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd"
          d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z"
          fill="#E1E3E6"/>
</svg>

export const CHEVRON_LEFT = <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z" fill="#76787A"/>
</svg>

export const PERSONAL_AREA_TABS = [
    {
        title: 'Основная информация',
        badge: '',
        component: (props) => <UserInformation {...props} />
    },
    {
        title: 'Отпуск',
        badge: '1',
        component: (props) => <UserVacation {...props} />
    }
]