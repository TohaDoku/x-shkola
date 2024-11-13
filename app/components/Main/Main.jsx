'use client';

'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import './Main.css';

export default function Main() {
    const planeRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        // Анимация самолёта
        setTimeout(() => {
            planeRef.current.classList.add('active');
        }, 300);

        // Анимация линии после окончания анимации самолёта
        setTimeout(() => {
            lineRef.current.classList.add('active');
        }, 2300); // Задержка, чтобы дождаться завершения анимации самолёта (примерно 2 секунды)
    }, []);

    return (
        <>
            <main className="main">
                <div className="container">
                    <div className="main-container">
                        <Image
                            src="/Line.svg"
                            width={100}
                            height={206}
                            alt="Линия"
                            className="line"
                            ref={lineRef}
                        />
                        <Image
                            src="/Plane.svg"
                            width={138}
                            height={176}
                            alt="Самолет"
                            className="plane"
                            ref={planeRef}
                        />
                        <div className="main-block">
                            <span>
                                <h1>Курс <br /> по математике</h1>
                                <h2>Подготовка к ЕГЭ с гарантией <br /> результата.</h2>
                                <h3 className="h3-green">учащимся 10-11 классов</h3>
                            </span>
                            <Image
                                src="/main.png"
                                width={420}
                                height={460}
                                alt="Самолет"
                                unoptimized
                            />
                        </div>

                        <div className="main-cards">
                            <div className="main-card">
                                <Image
                                    src="/one.webp"
                                    width={100}
                                    height={100}
                                    alt="Параллелограм"
                                    unoptimized
                                />
                                <h3>
                                    Поднимем уровень
                                    школьных знаний
                                </h3>
                            </div>
                            <div className="main-card">
                                <Image
                                    src="/two.webp"
                                    width={100}
                                    height={100}
                                    alt="Параллелограм"
                                    unoptimized
                                />
                                <h3>
                                    Пройдем все этапы ЕГЭ вместе
                                </h3>
                            </div>
                            <div className="main-card">
                                <Image
                                    src="/free.webp"
                                    width={100}
                                    height={100}
                                    alt="Параллелограм"
                                    unoptimized
                                />
                                <h3>
                                    Поможем в решении домашек в школе
                                </h3>
                            </div>
                            <div className="main-card">
                                <Image
                                    src="/four.webp"
                                    width={100}
                                    height={100}
                                    alt="Параллелограм"
                                    unoptimized
                                />
                                <h3>
                                    Отработаем пробник <br />
                                    и разберем ошибки
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
