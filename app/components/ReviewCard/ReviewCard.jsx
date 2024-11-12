// ReviewCard.js
'use client';

import Image from "next/image";

export default function ReviewCard({ color, name, title, text  }) {
    return (
        <div className={`review review-${color}`}>
            <div className="review-ratings">
                <Image
                    src="/review-star.svg"
                    width={20}
                    height={20}
                    alt="Звезда рейтинга"
                />
                <Image
                    src="/review-star.svg"
                    width={20}
                    height={20}
                    alt="Звезда рейтинга"
                />
                <Image
                    src="/review-star.svg"
                    width={20}
                    height={20}
                    alt="Звезда рейтинга"
                />
                <Image
                    src="/review-star.svg"
                    width={20}
                    height={20}
                    alt="Звезда рейтинга"
                />
                <Image
                    src="/review-star.svg"
                    width={20}
                    height={20}
                    alt="Звезда рейтинга"
                />
            </div>
            <h3>{name}</h3>
            <p>{title}</p>
            <p>{text}</p>
        </div>
    );
}
