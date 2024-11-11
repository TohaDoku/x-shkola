import './Teacher.css';
import Image from 'next/image';

export default function Teacher() {
  return (
    <section className='teacher'>
        <div className="teacher-container">
            <h2>Преподаватель курса</h2>
            <div className='teacher-one'>
                <h3>Опыт работы 6 лет</h3>
            </div>
            <div className='teacher-block'>
                <Image
                  src="/IMG.png"
                  width={290}
                  height={396}
                  alt="Линия"
                />
                <div className="teacher-block-after">
                    
                </div>
            </div>
            <div className='teacher-two'>
                <h3>Закончил МГТУ им. Н.Э. Баумана.</h3>

                <h3>89 баллов - средний результат учеников на экзамене</h3>
            </div>
        </div>
    </section>
  );
}
