import './Math.css'
import Image from 'next/image';

export default function Math() {
  return (
    <>
    <div className="math">
        <div className="container">
            <div className="math-container">
                <h2>Кому подойдет курс?</h2>
                <Image
                    src="/Mask_group.png"
                    width={213}
                    height={82}
                    alt="Формула"
                />
                <Image
                    src="/Vector1.svg"
                    width={74}
                    height={26}
                    alt="Стрелка влево"
                    className='math-left'
                />
                <Image
                    src="/Vector2.svg"
                    width={74}
                    height={26}
                    alt="Стрелка вправо"
                    className='math-right'
                />
                <div className="math-cards">
                    <div className="math-card">
                        <div className="math-card-img">
                            <Image
                                src="/free.webp"
                                width={136}
                                height={136}
                                alt="Стрелка вправо"
                            />
                            <span>01</span>
                        </div>
                        <h3>Сдаете «Базовую математику»</h3>
                        <p>
                            Восполним школьные знания и подготовимся <br />
                            к тестированию.
                        </p>
                    </div>
                    <div className="math-card">
                        <div className="math-card-img">
                            <Image
                                src="/one.webp"
                                width={136}
                                height={136}
                                alt="Стрелка вправо"
                            />
                            <span>02</span>
                        </div>
                        <h3>Сдаете «Профильную математику»</h3>
                        <p>
                            Разберем все блоки ЦТ, в том числе задания <br />
                            со звездочкой.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}