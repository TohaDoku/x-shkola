// components/QA.js
import './QA.css';
import AccordionItem from '../AccordionItem/AccordionItem';
import Image from "next/image";

export default function QA() {
    const questionsAnswers = [
        {
            question: 'Как я получу доступ к курсу?',
            answer: 'Сразу после оплаты вам будет предоставлен доступ к курсу. Письмо \n' +
                'с необходимой информацией будет отправлено на указанный вами\n' +
                ' email-адрес.',
            img: '/one.webp'
        },
        {
            question: 'Как можно оплатить курс?',
            answer: 'Для оплаты доступа к курсу, пожалуйста, нажмите на кнопку «Записаться». Оплату можно совершить банковской картой, либо одним из предложенных на странице платежа способом.',
            img: '/two.webp'
        },
        {
            question: 'Как будет проходить обучение?',
            answer: 'После оплаты вы получите доступ к личному кабинету на платформе Skillspace, через который вы сможете в любое время и с любого устройства получать доступ к приобретенным курсам.',
            img: '/free.webp'
        },
        {
            question: 'Можно ли проходить курс не имея компьютера?',
            answer: 'Да, у нас есть мобильное приложение для Android и IOS. С него можно полностью проходить курс и пользоваться всеми возможностями сервиса.',
            img: '/four.webp'
        },
    ];

    return (
        <section className="QA">
            <div className="container">
                <div className="QA-container">
                    <h2>Часто задаваемые вопросы</h2>
                    {questionsAnswers.map((item, index) => (
                        <AccordionItem
                            key={index}
                            img={item.img}
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}

                    <Image
                        src='/formula.svg'
                        width={214}
                        height={54}
                        alt="Линия"
                        className='formula'
                    />

                    <Image
                        src='/pen.svg'
                        width={174}
                        height={187}
                        alt="Линия"
                        className='pen'
                    />
                </div>
            </div>
        </section>
    );
}
