import React, { useState } from 'react';
import './Contact.scss';
import { Slider } from 'antd';
import Button from '../Button/Button';
import antonjon from '../../assets/antonjon.jpeg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Contact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [region, setRegion] = useState('');
    const [check, setCheck] = useState('');
    const [clients, setClients] = useState(0);
    const [loading, setLoading] = useState(false); // Loading holatini boshqarish

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim() || !phone.trim() || !region.trim() || !check.trim()) {
            toast.error('Пожалуйста, заполните все поля.'); // Xato xabari
            return;
        }

        const messageText = `Имя: ${name}\nТелефон: ${phone}\nРегион: ${region}\nСредний чек: ${check}\nКлиенты: ${clients}`;
        const token = '7027326228:AAHE5ePNUpvgI5uSE6sL1Y4a61Xcw9GzC6Y'; // Tokeningizni bu yerga qo'ying
        const chatId = '6771255129'; // Chat ID'nizi bu yerga qo'ying
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        setLoading(true); // Loading holatini yoqish
        try {
            await axios.post(url, {
                chat_id: chatId,
                text: messageText
            });
            toast.success('Сообщение успешно отправлено!'); // Muvaffaqiyatli yuborish xabari
            // Inputlarni tozalash
            setName('');
            setPhone('');
            setRegion('');
            setCheck('');
            setClients(0);
        } catch (error) {
            console.error('Произошла ошибка:', error);
            toast.error('Ошибка при отправке сообщения.'); // Xato xabari
        } finally {
            setLoading(false); // Loading holatini o'chirish
        }
    };

    return (
        <div className="contact">
            <ToastContainer />
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-left">
                        <h1 className="contact-title">Есть конкретная цель?</h1>
                        <p className="contact-text">Заполняйте форму и укажите желаемое количество клиентов, а я предложу путь к достижению Ваших целей</p>
                        <div className="contact-form">
                            <form className='contact-formjon' onSubmit={handleSubmit}>
                                <input
                                    className='contact-input'
                                    type="text"
                                    placeholder="Имя"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                /> <br />
                                <input
                                    className='contact-input'
                                    type="number"
                                    placeholder="+380(99) 999-99-99"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                /> <br />
                                <input
                                    className='contact-input'
                                    type="text"
                                    placeholder="Регион продвижения"
                                    value={region}
                                    onChange={(e) => setRegion(e.target.value)}
                                    required
                                /> <br />
                                <input
                                    className='contact-input'
                                    type="text"
                                    placeholder="Средний чек"
                                    value={check}
                                    onChange={(e) => setCheck(e.target.value)}
                                    required
                                />
                                <h5 className='contact-subtitle'>Сколько клиентов необходимо до цели?</h5>
                                <Slider value={clients} onChange={(value) => setClients(value)} />
                                <Button name={loading ? "Отправка..." : "УЗНАТЬ РЕЗУЛЬТАТ"} loading={loading} />
                            </form>
                        </div>
                    </div>
                    <div className="contact-right">
                        <img className='antonjon' src={antonjon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
