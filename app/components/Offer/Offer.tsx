import './Offer.css'
import Image from 'next/image';

export default function Offer() {
  return (
    <>
    <section id='offer' className='offer'>
        <div className="container">
            <div className="offer-container">
                <Image
                  src="/Plane.svg"
                  width={168}
                  height={176}
                  alt="Линия"
                  className='offer-plane'
                />
                <Image
                  src="/trian.svg"
                  width={120}
                  height={120}
                  alt="Линия"
                  className='offer-trian'
                />
                <div className="offer-header">
                    <h2>Мы предлагаем</h2>
                    <p>программа курса</p>
                </div>
                <div className="offer-body">
                    <div className="offer-one">
                        <div className="offer-card">
                            <span>01</span>
                            <div>
                                <h3>8-10 уроков</h3>
                                <p>
                                Каждый урок в среднем 1,5 часа. Проходит на удобной платформе <br />
                                с онлайн досками, и возможностью задать неограниченное <br />
                                количество вопросов преподавателю.
                                </p>  
                            </div>
                        </div>
                        <div className="offer-card">
                            <span>03</span>
                            <div>
                                <h3>Материалы по подготовке</h3>
                                <p>
                                    Учебные материалы, конспекты, шпаргалки, тесты, примеры заданий, а также инструкции по выполнению упражнений.
                                </p>  
                            </div>
                        </div>
                        <div className="offer-card">
                            <span>05</span>
                            <div>
                                <h3>Анализ успеваемости</h3>
                                <p>
                                    Детальный отчет о текущих учебных достижениях, которые помогут определить прогресс <br />
                                    в изучении материала и обнаружить пробелы в знаниях.
                                </p>  
                            </div>
                        </div>
                    </div>
                    <div className="offer-two">
                        <Image
                          src="/way.svg"
                          width={83}
                          height={943}
                          alt="Линия"
                        />
                    </div>
                    <div className="offer-free">
                        <div className="offer-card">
                            <span>02</span>
                            <div>
                                <h3>Полный разбор всех материалов для ЕГЭ</h3>
                                <p>
                                Разберем каждую тему от «А» <br />
                                до «Я» трижды, не тратя время урока <br />
                                на проверку ДЗ. Его мы проверим  <br />
                                во внеурочное время!
                                </p>  
                            </div>
                        </div>
                        <div className="offer-card">
                            <span>04</span>
                            <div>
                                <h3>Помощь в решении домашек в школе</h3>
                                <p>
                                    Преподаватели оказывают индивидуальную помощь в решении задач, объясняют непонятные темы, дают подсказки и методические рекомендации для эффективного выполнения заданий.
                                </p>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}