import './Teacher.css';
import Image from 'next/image';

export default function Teacher() {
  return (
    <section id='teacher' className='teacher'>
        <div className="teacher-container">
            <h2>Преподаватель курса</h2>
            <div className='teacher-one'>
                <h3 className='teacher-one-text'>Опыт работы 6 лет</h3>
                <Image
                    src="/Vector13.svg"
                    width={60}
                    height={26}
                    alt="Линия"
                    className='teacher-one-arrow'
                />
                <Image
                    src="/chart.svg"
                    width={177}
                    height={150}
                    alt="Линия"
                    className='teacher-one-chart'
                />
            </div>
            <div className='teacher-block'>
                <Image
                  src="/IMG.png"
                  width={379}
                  height={460}
                  alt="Линия"
                />
                <h3 className='teacher-block-name'>Никольский Владислав</h3>
            </div>
            <div className='teacher-two'>
                <h3 className='teacher-one-text-one'>
                    Закончил МГТУ им. Н.Э. <br/>
                    Баумана.
                </h3>
                <Image
                    src="/Vector15.svg"
                    width={60}
                    height={26}
                    alt="Линия"
                    className='teacher-one-arrow-top'
                />
                <Image
                    src="/Vector14.svg"
                    width={50}
                    height={26}
                    alt="Линия"
                    className='teacher-one-arrow-bot'
                />
                <h3 className='teacher-one-text-two'>89 баллов - средний результат учеников на экзамене</h3>
            </div>
        </div>
    </section>
  );
}
