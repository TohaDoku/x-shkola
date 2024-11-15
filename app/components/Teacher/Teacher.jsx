import './Teacher.css';
import Image from 'next/image';

export default function Teacher() {
  return (
      <section id='teacher' className='teacher'>
          <h2>Преподаватель курса</h2>
          <div className="teacher-container">
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
                      unoptimized
                  />
                  <h3 className='teacher-block-name'>Никольский Владислав</h3>
              </div>
              <div className='teacher-two'>
                  <h3 className='teacher-one-text-one'>
                      Закончил <br className="tablet-br"/> МГТУ им. Н.Э. <br/>
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
                  <Image
                      src="/Vector13.svg"
                      width={40}
                      height={26}
                      alt="Линия"
                      className='teacher-one-arrow-bot-mobile'
                  />
                  <h3 className='teacher-one-text-two'>89 баллов - средний результат учеников <br
                      className="tablet-br"/> на экзамене</h3>
              </div>
          </div>
      </section>
  );
}
