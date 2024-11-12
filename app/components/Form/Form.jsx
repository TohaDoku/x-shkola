'use client';

import './Form.css';
import { useState } from 'react';
import Button from "@/app/components/Button/Button";
import Image from "next/image";

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });

    const formatPhoneNumber = (value) => {
        let formattedValue = value.replace(/\D/g, ''); // Убираем все нецифровые символы

        if (formattedValue.startsWith('8')) {
            formattedValue = '7' + formattedValue.slice(1);
        }

        if (formattedValue.startsWith('7')) {
            return '+7 ' + formattedValue.slice(1, 4) + ' ' + formattedValue.slice(4, 7) + '-' + formattedValue.slice(7, 9) + '-' + formattedValue.slice(9, 11);
        }

        return value;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'message') {
            setFormData({ ...formData, [name]: formatPhoneNumber(value) });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/sendToTelegram', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            alert('Сообщение отправлено!');
        } else {
            alert('Ошибка при отправке.');
        }
    };

    return (
        <section className="form">
            <div className="container">
                <form className='form-app' onSubmit={handleSubmit}>
                    <div className="form-header">
                        <span className="form-round"></span>
                        <span className="form-round"></span>
                        <span className="form-round"></span>
                        <span className="form-round"></span>
                        <span className="form-round"></span>
                        <span className="form-round"></span>
                        <span className="form-round"></span>
                        <span className="form-round"></span>
                        <span className="form-round"></span>
                        <span className="form-round"></span>
                        <span className="form-round"></span>
                        <span className="form-round"></span>
                    </div>
                    <h2>Оставьте заявку</h2>
                    <h3>и начните подготовку за 0₽ уже сейчас</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='form-input'
                    />
                    <input
                        type="tel"
                        name="message"
                        placeholder="Телефон"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className='form-input'
                    />
                    <p className='mini'>Ввод номера телефона подтверждает Ваше согласие c условиями передачи <br/> информации</p>
                    <Button type="submit" titleBtn="Записаться на курс" />
                    <Image
                        src="/white.png"
                        width={150}
                        height={156}
                        alt="Изображение карточки"
                        unoptimized
                    />
                </form>
            </div>
        </section>
    );
}
