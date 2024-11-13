'use client';

import './Reviews.css';
import { useState, useRef } from 'react';
import ReviewCard from "@/app/components/ReviewCard/ReviewCard";

export default function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const reviews = [
        { id: 1, color: 'orange', name: 'Кулакова Елизавета', title: '11 класс',  text: "Прекрасная подготовка к Егэ. Супер преподаватель, обЪясняет все понятно, домашки проверяет. Очень удобная платформа и еще много всего хорошего про обучение и ее поступление в университет мечты." },
        { id: 2, color: 'yellow', name: 'Зазнобае Эдуард Валентинович', title: '10 класс',  text: "Все понятно.Хороший курс." },
        { id: 3, color: 'periwinkle', name: 'Артемов Алекснадр', title: '11 класс',  text: "Занимаюсь уже 3 месяца, все понятно, сразу повысилась оценка по математике." },
        { id: 4, color: 'orange', name: 'Докучаев Антон', title: '10 класс',  text: "Много полезных знаний!" },
        { id: 5, color: 'yellow', name: 'Сидорова Анастасия', title: '11 класс',  text: "Рекомендую всем!" },
    ];
    const sliderRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const translateX = useRef(0);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.clientX;
        sliderRef.current.style.cursor = "grabbing"; // Меняем курсор на "сжатую руку"
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        const diffX = e.clientX - startX.current;
        sliderRef.current.style.transform = `translateX(calc(-${currentIndex * 33.33}% + ${diffX}px))`;
        translateX.current = diffX;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        sliderRef.current.style.cursor = "grab"; // Возвращаем курсор к "руке"

        if (translateX.current < -50) {
            nextSlide();
        } else if (translateX.current > 50) {
            prevSlide();
        } else {
            sliderRef.current.style.transform = `translateX(-${currentIndex * 33.33}%)`;
        }
        translateX.current = 0;
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    return (
        <div id="reviews" className="reviews">
            <div className="">
                <div className="reviews-container">
                    <div className="reviews-header">
                        <h2>Отзывы о курсе</h2>
                    </div>
                    <div
                        className="reviews-body"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                        <div
                            ref={sliderRef}
                            className="reviews-slider"
                            style={{
                                transform: `translateX(-${currentIndex * 33.33}%)`
                            }}
                        >
                            {reviews.map((review) => (
                                <ReviewCard
                                    key={review.id}
                                    text={review.text}
                                    color={review.color}
                                    name={review.name}
                                    title={review.title}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="reviews-navigation">
                        {reviews.slice(0, 3).map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${currentIndex === index ? "active" : ""}`}
                                onClick={() => setCurrentIndex(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

