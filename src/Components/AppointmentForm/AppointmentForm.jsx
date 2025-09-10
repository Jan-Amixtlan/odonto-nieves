import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        phone: '',
        email: '',
        service: '',
        time: '',
        message: ''
    });

    // Imágenes de fondo
    const backgroundImages = [
        '/FormularioFondo.jpg', // Imagen de consultorio dental
        '/FormularioFondo2.jpg', // Imagen de equipo dental
        '/FormularioFondo3.jpg', // Imagen de sonrisa
        '/FormularioFondo4.jpg'  // Imagen de tratamiento
    ];

    // Cambiar imagen cada 5 segundos
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % backgroundImages.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    // Generar calendario del mes actual
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
        "Prótesis Dental",
        "Implante Dental",
        "Carillas Dentales",
        "Blanqueamiento Dental",
        "Limpieza Dental",
        "Otro"
    ];

    const timeSlots = [
        "09:00 AM - 10:00 AM",
        "10:00 AM - 11:00 AM",
        "11:00 AM - 12:00 PM",
        "02:00 PM - 03:00 PM",
        "03:00 PM - 04:00 PM",
        "04:00 PM - 05:00 PM",
        "05:00 PM - 06:00 PM"
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
        // Aquí implementarías la lógica de envío
        alert('¡Cita solicitada exitosamente!');
    };

    return (
        <section className="appointment-section">
            {/* Imágenes de fondo con transiciones */}
            <div className="background-images">
                {backgroundImages.map((image, index) => (
                    <div
                        key={index}
                        className={`background-image ${index === currentImageIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ))}
            </div>

            <div className="appointment-container">

                <div className="appointment-header">
                    <h2 className="appointment-title">Agendar Cita</h2>
                    <p className="appointment-subtitle">
                        Reserva tu consulta dental de manera fácil y rápida
                    </p>
                </div>

                <div className="appointment-content">

                    {/* Calendario */}
                    <div className="calendar-section">
                        <div className="calendar-header">
                            <h3 className="calendar-title">Selecciona una fecha</h3>
                            <div className="month-year">{currentMonth} {currentYear}</div>
                        </div>

                        <div className="calendar">
                            <div className="calendar-weekdays">
                                {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
                                    <div key={day} className="weekday">{day}</div>
                                ))}
                            </div>

                            <div className="calendar-days">
                                {calendar.map((week, weekIndex) =>
                                    week.map((day, dayIndex) => (
                                        <button
                                            key={`${weekIndex}-${dayIndex}`}
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

                        {selectedDate && (
                            <div className="selected-date">
                                <span className="selected-date-label">Fecha seleccionada:</span>
                                <span className="selected-date-value">
                                    {selectedDate.toLocaleDateString('es-ES', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Formulario */}
                    <div className="form-section">
                        <form onSubmit={handleSubmit} className="appointment-form">

                            <div className="form-group-row">
                                <div className="form-group">
                                    <label htmlFor="fullName">Nombre Completo *</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Ingresa tu nombre completo"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="age">Edad *</label>
                                    <input
                                        type="number"
                                        id="age"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleInputChange}
                                        placeholder="Tu edad"
                                        min="1"
                                        max="120"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Teléfono *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+52 (123) 456-7890"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="tu@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group-row">
                                <div className="form-group">
                                    <label htmlFor="service">Servicio *</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Selecciona un servicio</option>
                                        {services.map(service => (
                                            <option key={service} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="time">Hora de la cita *</label>
                                    <select
                                        id="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Selecciona un horario</option>
                                        {timeSlots.map(time => (
                                            <option key={time} value={time}>{time}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Mensaje adicional (opcional)</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Cuéntanos sobre tu consulta o alguna preocupación específica..."
                                    rows="3"
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-button">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M8 12L10.5 14.5L16 9"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Solicitar Cita
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AppointmentForm;