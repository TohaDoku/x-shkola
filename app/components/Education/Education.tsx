import './Education.css'
import Image from 'next/image';

export default function Education() {
  return (
    <>
    <section className='education'>
        
            <div className="education-container">
                <div className="education-header">
                    <span className="education-round"></span>
                    <span className="education-round"></span>
                    <span className="education-round"></span>
                    <span className="education-round"></span>
                    <span className="education-round"></span>
                    <span className="education-round"></span>
                    <span className="education-round"></span>
                    <span className="education-round"></span>
                    <span className="education-round"></span>
                    <span className="education-round"></span>
                    <span className="education-round"></span>
                    <span className="education-round"></span>
                    <span className="education-round"></span>
                    <span className="education-round"></span>
                </div>
                <h2 className='education-title'>Как проходит обучение?</h2>
                <div className="education-body">
                    <div>
                        <div className="education-one">
                            <h3>Удобная платформа</h3>
                            <p>
                                Интуитивно понятная платформа 
                                с возможностью проходить обучение <br />
                                в онлайн формате с любого устройства: телефона, планшета <br />
                                или компьютера. Доступ ко всем материалам 24/7.
                            </p>
                            <div className="img">
                                <Image
                                    src="/white.png"
                                    width={164}
                                    height={164}
                                    alt="Изображение карточки"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>
                    <div className='education-card-group'>
                        <div className="education-two">
                            <h3>
                                Закрепление материала 
                                и разбор пробников
                            </h3>
                            <p>
                                Проходите тесты для закрепления материала и выполняйте практические работы с проверкой <br />
                                от преподавателя.
                            </p>
                        </div>
                        <div className="education-free">
                            <h3>
                                Персональный менеджер
                            </h3>
                            <p>
                                Мы на связи с вами каждый будний день. Поможем даже с домашкой <br />
                                в школе.
                            </p>
                        </div>
                        <div className="education-four">
                            <div className='four-rounds'>
                                <span className="four-round"></span>
                                <span className="four-round"></span>
                                <span className="four-round"></span>
                                <span className="four-round"></span>
                                <span className="four-round"></span>
                                <span className="four-round"></span>
                                <span className="four-round"></span>
                                <span className="four-round"></span>
                            </div>
                            <div className="education-four-text">
                                <h3>Система рейтингов и мотивации</h3>
                                <p>
                                    Бонусы и плюшки, которые делают процесс обучения более увлекательным и ориентированным на достижение <br /> поставленных целей.
                                </p>
                            </div>
                            <div className="education-four-img">
                                <Image
                                    src="/comp.png"
                                    width={120}
                                    height={120}
                                    alt="Компьютер"
                                    unoptimized
                                />
                            </div>  
                            
                        </div>
                    </div>         
                </div>
            </div>
        
    </section>
    </>
  );
}