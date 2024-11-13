'use client';
import { useEffect, useRef } from "react";
import './FreeCourse.css';
import Button from '../Button/Button';
import Image from 'next/image';

export default function FreeCourse() {
    const planeRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const planePosition = planeRef.current?.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (planePosition < screenPosition) {
                planeRef.current.classList.add("active");

                // Добавляем задержку для линии после активации самолета
                setTimeout(() => {
                    lineRef.current.classList.add("active");
                }, 2000); // Задержка 2 секунды
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id='free-course' className="free-course">
            <div className="container">
                <div className="free-course-container">
                    <Image
                        src="/paper.svg"
                        width={180}
                        height={170}
                        alt="qr code"
                        className='paper'
                        ref={planeRef}
                        unoptimized
                    />
                    <Image
                        src="/Line6.svg"
                        width={250}
                        height={250}
                        alt="qr code"
                        ref={lineRef}
                        className='line-six'
                    />
                    <div>
                        <h2>
                            Пройдите вводный курс <br />
                            по математике вместе с нами
                        </h2>
                        <p className='course-text'>
                            Первый бесплатный урок поможет вам лучше познакомиться <br />
                            с учебной платформой. Всего за 1 час вы научитесь решать <br />
                            все разновидности КИМ №4 из ЕГЭ по профильной математике.
                        </p>
                        <Button titleBtn='Пройти курс' />
                    </div>
                    <div className='course-rounds'>
                        <span className='course-big'></span>
                        <span className='course-small'></span>
                        <span className='course-small'></span>
                        <span className='course-small'></span>
                        <span className='course-small'></span>
                        <span className='course-small'></span>
                        <span className='course-small'></span>
                        <span className='course-small'></span>
                        <span className='course-small'></span>
                        <span className='course-small'></span>
                        <span className='course-big'></span>
                    </div>
                    <div className='course-qr'>
                        <h2>Бесплатно</h2>
                        <Image
                            src="/qr.png"
                            width={180}
                            height={180}
                            alt="qr code"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
