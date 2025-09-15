import React, { useState, useEffect } from 'react';
import './AppointmentContact.css';

const AppointmentContact = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        phone: '',
        email: '',
        service: 'Odontologia Preventiva',
        time: '10:00 AM - 11:00 AM',
        message: ''
    });

    const generateCalendar = () => {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());

        const calendar = [];
        const current = new Date(startDate);

        for (let week = 0; week < 6; week++) {
            const weekDays = [];
            for (let day = 0; day < 7; day++) {
                const date = new Date(current);
                const isCurrentMonth = date.getMonth() === currentMonth;
                const isToday = date.toDateString() === today.toDateString();
                const isPast = date < today;

                weekDays.push({
                    date: date.getDate(),
                    fullDate: new Date(date),
                    isCurrentMonth,
                    isToday,
                    isPast,
                    isAvailable: isCurrentMonth && !isPast
                });
                current.setDate(current.getDate() + 1);
            }
            calendar.push(weekDays);
        }
        return calendar;
    };

    const calendar = generateCalendar();
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const currentMonth = monthNames[new Date().getMonth()];
    const currentYear = new Date().getFullYear();

    const services = [
        "Odontologia Preventiva",
        "Blanqueamiento Dental",
        "Implantes Dentales",
        "Carillas Dentales",
        "Ortodoncia",
        "Endodoncia",
        "Cirugia Oral"
    ];

    const timeSlots = [
        "10:00 AM - 11:00 AM",
        "11:00 AM - 12:00 PM",
        "12:00 PM - 01:00 PM",
        "02:00 PM - 03:00 PM",
        "03:00 PM - 04:00 PM",
        "04:00 PM - 05:00 PM",
        "05:00 PM - 06:00 PM"
    ];

    const contactInfo = [
        {
            icon: <img src="/social.png" alt="WhatsApp" style={{ width: '1.3em', height: '1.3em', verticalAlign: 'middle' }} />,
            title: "WhatsApp:",
            info: "(33) 1701 5391",
            action: () => window.open('https://wa.me/5213317015391', '_blank')
        },
        {
            icon: <img src="/llamada-telefonica.png" alt="WhatsApp" style={{ width: '1.3em', height: '1.3em', verticalAlign: 'middle' }} />,
            title: "Consultorio:",
            info: <span><span>(33) 3616 4250</span><br /><span style={{ fontSize: '0.95em', color: '#faf8f8ff' }}>Teléfono 2: (33) 3616 2586</span></span>,
            action: () => window.open('tel:3336164250', '_blank')
        },
        {
             icon: <img src="/contacto-correo-electronico.png" alt="WhatsApp" style={{ width: '1.3em', height: '1.3em', verticalAlign: 'middle' }} />,
            title: "",
            info: "blancanieves@odontonieves.com",
            action: () => window.open('mailto:blancanieves@odontonieves.com', '_blank')
        },
        {
             icon: <img src="/marcador-de-posicion.png" alt="WhatsApp" style={{ width: '1.3em', height: '1.3em', verticalAlign: 'middle' }} />,
            title: "",
            info: "Av. Manuel Acuña #2755 Piso 2 Col. Providencia, C.P. 44680 Guadalajara, Jalisco.",
            action: () => window.open('https://maps.google.com/?q=Av.+Manuel+Acuña+2755+Guadalajara', '_blank')
        }
    ];

    const socialMedia = [
        {
            name: "Instagram",
            url: "instagram.com/odontonieves/",
             icon: <img src="/instagram.png" alt="Instagram" className="social-icon-img" />,
            action: () => window.open('https://instagram.com/odontonieves/', '_blank')
        },
        {
            name: "Facebook",
            url: "facebook.com/odontonieves/",
            icon: <img src="/facebook.png" alt="Facebook" className="social-icon-img" style={{ width: '2.2em', height: '2.2em', verticalAlign: 'middle' }} />,
            action: () => window.open('https://facebook.com/odontonieves/', '_blank')
        }
    ];

    const handleDateClick = (day) => {
        if (day.isAvailable) {
            setSelectedDate(day.fullDate);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', { ...formData, selectedDate });
        alert('¡Solicitud de cita enviada exitosamente!');
    };

    return (
        <section className="appointment-contact">
            <div className="appointment-contact-container">

                {/* Formulario de Cita */}
                <div className="appointment-form-section">
                    <div className="form-header">
                        <h2 className="form-title">Agendar Cita</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="appointment-form">

                        {/* Calendar */}
                        <div className="calendar-container">
                            <div className="calendar-header">
                                <span className="month-year">{currentMonth} {currentYear}</span>
                            </div>

                            <div className="calendar">
                                <div className="calendar-weekdays">
                                    {['LU', 'MA', 'MI', 'JU', 'VI', 'SA', 'DO'].map(day => (
                                        <div key={day} className="weekday">{day}</div>
                                    ))}
                                </div>

                                <div className="calendar-days">
                                    {calendar.map((week, weekIndex) =>
                                        week.map((day, dayIndex) => (
                                            <button
                                                key={`${weekIndex}-${dayIndex}`}
                                                type="button"
                                                className={`calendar-day ${!day.isCurrentMonth ? 'other-month' : ''
                                                    } ${day.isToday ? 'today' : ''} ${day.isPast ? 'past' : ''
                                                    } ${selectedDate && day.fullDate.toDateString() === selectedDate.toDateString()
                                                        ? 'selected' : ''
                                                    } ${day.isAvailable ? 'available' : ''}`}
                                                onClick={() => handleDateClick(day)}
                                                disabled={!day.isAvailable}
                                            >
                                                {day.date}
                                            </button>
                                        ))
                                    )}
                                </div>
                            </div>
                            <p className="powered-by">Powered by Booking Calendar</p>
                        </div>

                        {/* Form Fields */}
                        <div className="form-fields">

                            <div className="form-group">
                                <label htmlFor="fullName">Nombre Completo*</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="age">Edad*</label>
                                <input
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    min="1"
                                    max="120"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Número Teléfono*</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email*</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Seleccionar Servicio*</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    required
                                >
                                    {services.map(service => (
                                        <option key={service} value={service}>{service}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="time">Hora de la cita*</label>
                                <select
                                    id="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleInputChange}
                                    required
                                >
                                    {timeSlots.map(time => (
                                        <option key={time} value={time}>{time}</option>
                                    ))}
                                </select>
                            </div>

                        </div>

                        <button type="submit" className="submit-btn">
                            Solicitar Información
                        </button>

                    </form>
                </div>

                {/* Información de Contacto */}
                <div className="contact-info-section">
                    <div className="contact-content">

                        <div className="contact-header">
                            <h2 className="contact-title">¿Tienes Dudas?</h2>
                            <p className="contact-subtitle">
                                Responderemos todas tus dudas, en nuestros medios de comunicación. Haz una cita y con gusto te atenderemos.
                            </p>
                        </div>

                        <div className="contact-methods">
                            {contactInfo.map((contact, index) => (
                                <div
                                    key={index}
                                    className="contact-item"
                                    onClick={contact.action}
                                >
                                    <span className="contact-icon">{contact.icon}</span>
                                    <div className="contact-details">
                                        {contact.title && <span className="contact-type">{contact.title}</span>}
                                        <span className="contact-value" style={{ fontSize: '1.25em', fontWeight: 400 }}>{contact.info}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="social-media-section">
                            <h3 className="social-title">Síguenos en Redes Sociales</h3>

                            <div className="social-icon-container">
                                <div className="social-graphic">
                                    <img className="like-icon" src="/Contact.png" alt="Like" style={{ width: '90px', height: '90px' }} />
                                </div>
                            </div>

                            <div className="social-links">
                                {socialMedia.map((social, index) => (
                                    <div
                                        key={index}
                                        className="social-item"
                                        onClick={social.action}
                                    >
                                        <span className="social-icon">{social.icon}</span>
                                        <span className="social-url" style={{ fontSize: '1.15em', fontWeight: 500 }}>{social.url}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default AppointmentContact;