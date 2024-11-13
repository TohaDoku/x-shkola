'use client';
import { useEffect, useRef } from "react";
import './Footer.css'
import Image from "next/image";

export default function Footer() {

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
        <>
            <div className="footer">

                <div className="footer-container">

                    <Image
                        src="/paper.svg"
                        width={115}
                        height={98}
                        alt="qr code"
                        className="footer-plane"
                        ref={planeRef}
                        unoptimized
                    />
                    <Image
                        src="/footer-line.svg"
                        width={300}
                        height={120}
                        alt="qr code"
                        className="footer-line"
                        ref={lineRef}
                        unoptimized
                    />

                    <div className="container">
                        <h2 className="footer-h2">X-SHKOLA</h2>
                        <div className="footer-body">
                            <nav>
                                <ul>
                                    <li><a href="#free-course">Бесплатное занятие</a></li>
                                    <li><a href="#offer">Этапы обучения</a></li>
                                    <li><a href="#offer">Программа курса</a></li>
                                    <li><a href="#teacher">Преподаватели</a></li>
                                    <li><a href="#reviews">Отзывы</a></li>
                                </ul>
                            </nav>
                            <div className='footer-qr'>
                                <p>
                                    Отстались вопросы? <br/>
                                    Отсканируй qr-код и получи <br/>
                                    консультацию в Тelegram
                                </p>
                                <Image
                                    src="/qr.png"
                                    width={129}
                                    height={129}
                                    alt="qr code"
                                    unoptimized
                                />
                            </div>
                            <div className='footer-contacts'>
                                <span>
                                    <p>Контакты</p>
                                    <p>+7 495 487 01 77</p>
                                </span>
                                <span>
                                    <a className='mini' href="">Договор публичной оферты</a> <br/>
                                    <a className='mini' href="">Политика конфиденциальности</a>
                                </span>
                            </div>
                        </div>
                        <div className="footer-end">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}