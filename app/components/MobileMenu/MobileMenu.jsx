"use client";

import { useState } from 'react';
import Image from 'next/image';
import './MobileMenu.css';

export default function MobileMenu() {
    // Состояние для отслеживания состояния меню (открыто или закрыто)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Функция для переключения состояния меню
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <>
            {/* Условный рендеринг для отображения нужной иконки */}
            {isMenuOpen ? (
                <Image
                    src="/close.svg"
                    width={24}
                    height={24}
                    alt="Закрыть меню"
                    onClick={toggleMenu}
                    style={{ cursor: 'pointer' }}
                    className='mobile-menu-img'
                />
            ) : (
                <Image
                    src="/menu.svg"
                    width={24}
                    height={24}
                    alt="Открыть меню"
                    onClick={toggleMenu}
                    style={{ cursor: 'pointer' }}
                    className='mobile-menu-img'
                />
            )}

            {/* Условный рендеринг для отображения меню, если оно открыто */}
            {isMenuOpen && (
                <nav className='header-mobile-nav'>
                    <ul className='header-mobile-ul'>
                        <li className='header-mobile-li'><a className='header-mobile-li-a' href="#offer">Программа курса</a></li>
                        <li className='header-mobile-li'><a className='header-mobile-li-a' href="#teacher">Преподаватели</a></li>
                        <li className='header-mobile-li'><a className='header-mobile-li-a' href="#free-course">Бесплатное занятие</a></li>
                    </ul>
                    <Image
                        src="/Rectangle.svg"
                        width={71}
                        height={71}
                        alt="Открыть меню"
                        onClick={toggleMenu}
                    />
                </nav>
            )}
        </>
    );
}
