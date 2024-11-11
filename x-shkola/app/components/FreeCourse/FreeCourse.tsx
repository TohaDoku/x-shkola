import './FreeCourse.css';
import Button from '../Button/Button';
import Image from 'next/image';

export default function FreeCourse() {
  return (
    <>
    <div className="free-course">
        <div className="container">
            <div className="free-course-container">
                <Image
                  src="/paper.svg"
                  width={180}
                  height={170}
                  alt="qr code"
                  className='paper'
                />
                <Image
                  src="/Line6.svg"
                  width={250}
                  height={250}
                  alt="qr code"
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
                      
                    />
                </div>
            </div>
        </div>
    </div>
    </>
  );
}