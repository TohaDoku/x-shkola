'use client';

// components/AccordionItem.js
import { useState } from 'react';
import Image from "next/image";

export default function AccordionItem({ question, answer, img }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <button onClick={toggleAccordion} className="accordion-question">
                <span>
                    <Image width="36" height="36" src={img} alt="Изображение аккордеона" unoptimized />
                    <h3>{question}</h3>
                </span>
                <div>
                <Image
                    src={isOpen ? '/up.svg' : '/down.svg'}
                    alt={isOpen ? 'Закрыть' : 'Открыть'}
                    className="accordion-arrow"
                    width="24"
                    height="24"
                />
                </div>
            </button>
            {isOpen && (
                <div className="accordion-answer">
                    {answer}
                </div>
            )}
        </div>
    );
}
