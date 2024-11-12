import './Main.css'
import Image from 'next/image';

export default function Main() {
  return (
    <>
    <main className="main">
        <div className="container">
            <div className="main-container">
                <h1>Курс <br /> по математике</h1>
                <Image
                  src="/Line.svg"
                  width={100}
                  height={206}
                  alt="Линия"
                  className='line'
                />
                <Image
                  src="/Plane.svg"
                  width={168}
                  height={176}
                  alt="Самолет"
                  className='plane'
                />
                <Image
                  src="/Rectangle.svg"
                  width={146}
                  height={146}
                  alt="Параллелограм"
                  className='rectangle'
                />
                <h2>Подготовка к ЕГЭ с гарантией результата.</h2>
                <h3 className='h3-green'>учащимся 10-11 классов</h3>
                <div className="main-cards">
                    <div className="main-card">
                        <Image
                          src="/one.webp"
                          width={136}
                          height={136}
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
                          width={106}
                          height={106}
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
                          width={136}
                          height={136}
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
                          width={136}
                          height={136}
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