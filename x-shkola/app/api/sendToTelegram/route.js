import fetch from 'node-fetch';

export async function POST(req) {
    const { name, message } = await req.json();
    const telegramToken = '8065844239:AAF-Nxe9LhluVAxqq5sPnfg0xrqCFe9nTy0'; // храните токен в переменных окружения
    const chatId = '-4540987276';// замените на ваш chat_id

    const text = `Внимание! \nПоступила новая заявка:\nИмя: ${name}\nТелефон: ${message}`;
    const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    try {
        const response = await fetch(telegramUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
            }),
        });

        if (response.ok) {
            return new Response(JSON.stringify({ message: 'Заявка оставлена! Менеджер свяжется с Вами в ближайшее время!' }), { status: 200 });
        } else {
            return new Response(JSON.stringify({ error: 'Ошибка при отправке в Telegram' }), { status: response.status });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Ошибка сервера' }), { status: 500 });
    }
}
