import React from 'react';
import './Footer.css';

const Footer = () => {
    const quickAccess = [
        { name: 'Tratamientos', href: '#tratamientos' },
        { name: 'Galería', href: '#galeria' },
        { name: 'Haz una cita', href: '#cita' },
        { name: 'Contáctanos', href: '#contacto' },
        { name: 'Tel: (33) 1701-5391', href: 'tel:3317015391', isPhone: true }
    ];

    const services = [
        'Blanqueamiento Dental',
        'Odontología preventiva',
        'Prótesis total',
        'Implante dental',
        'Carillas dentales',
        'Otros servicios'
    ];

    const schedule = [
        { day: 'Lunes a Viernes:', time: '10:00 a 14:00' },
        { day: '', time: 'y 16:00 a 20:00' },
        { day: 'Sábado:', time: '10:00 a 14:00' },
        { day: 'Domingo:', time: 'Cerrado' }
    ];

    const handleLinkClick = (href, isPhone = false) => {
        if (isPhone) {
            window.open(href);
        } else {
            console.log(`Navegando a: ${href}`);
            // Aquí implementarías la navegación real
        }
    };

    return (
        <footer className="site-footer">
            <div className="footer-container">

                {/* Logo y Tagline */}
                <div className="footer-brand">
                    <div className="brand-logo-large">On</div>
                    <p className="brand-tagline">
                        Ponte modo «On» en odontonieves.com
                    </p>
                </div>

                {/* Footer Content Grid */}
                <div className="footer-content">

                    {/* Acceso Rápido */}
                    <div className="footer-column">
                        <h3 className="column-title">Acceso Rápido</h3>
                        <ul className="footer-links">
                            {quickAccess.map((item, index) => (
                                <li key={index}>
                                    {item.name === 'Tratamientos' ? (
                                        <a
                                            href="/services"
                                            className="footer-link"
                                            onClick={e => {
                                                e.preventDefault();
                                                window.location.href = '/services';
                                            }}
                                        >
                                            {item.name}
                                        </a>
                                    ) : item.name === 'Galería' ? (
                                        <a
                                            href="/#galeria"
                                            className="footer-link"
                                            onClick={e => {
                                                e.preventDefault();
                                                window.location.href = '/galery';
                                            }}
                                        >
                                            {item.name}
                                        </a>
                                    ) : item.name === 'Contáctanos' ? (
                                        <a
                                            href="/#contacto"
                                            className="footer-link"
                                            onClick={e => {
                                                e.preventDefault();
                                                window.location.href = '/contact';
                                            }}
                                        >
                                            {item.name}
                                        </a>
                                    ) : item.name === 'Haz una cita' ? (
                                        <a
                                            href="/"
                                            className="footer-link"
                                            onClick={e => {
                                                e.preventDefault();
                                                localStorage.setItem('scrollToAppointment', 'true');
                                                window.location.href = '/';
                                            }}
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className={`footer-link ${item.isPhone ? 'phone-link' : ''}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleLinkClick(item.href, item.isPhone);
                                            }}
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Servicios */}
                    <div className="footer-column">
                        <h3 className="column-title">Servicios</h3>
                        <ul className="footer-links">
                            {services.map((service, index) => (
                                <li key={index}>
                                    {service === 'Blanqueamiento Dental' ? (
                                        <a
                                            href="/services-all#blanqueamiento-dental"
                                            className="footer-link"
                                            onClick={e => {
                                                e.preventDefault();
                                                localStorage.setItem('scrollToService', 'blanqueamiento-dental');
                                                window.location.href = '/services';
                                            }}
                                        >
                                            {service}
                                        </a>
                                    ) : service === 'Odontología preventiva' ? (
                                        <a
                                            href="/services-all#odontologia-preventiva"
                                            className="footer-link"
                                            onClick={e => {
                                                e.preventDefault();
                                                localStorage.setItem('scrollToService', 'odontologia-preventiva');
                                                window.location.href = '/services';
                                            }}
                                        >
                                            {service}
                                        </a>
                                    ) : service === 'Prótesis total' ? (
                                        <a
                                            href="/services-all#protesis-total"
                                            className="footer-link"
                                            onClick={e => {
                                                e.preventDefault();
                                                localStorage.setItem('scrollToService', 'protesis-total');
                                                window.location.href = '/services';
                                            }}
                                        >
                                            {service}
                                        </a>
                                    ) : service === 'Implante dental' ? (
                                        <a
                                            href="/services-all#implante-dental"
                                            className="footer-link"
                                            onClick={e => {
                                                e.preventDefault();
                                                localStorage.setItem('scrollToService', 'implante-dental');
                                                window.location.href = '/services';
                                            }}
                                        >
                                            {service}
                                        </a>
                                    ) : service === 'Carillas dentales' ? (
                                        <a
                                            href="/services-all#carillas-dentales"
                                            className="footer-link"
                                            onClick={e => {
                                                e.preventDefault();
                                                localStorage.setItem('scrollToService', 'carillas-dentales');
                                                window.location.href = '/services';
                                            }}
                                        >
                                            {service}
                                        </a>
                                    ) : service === 'Otros servicios' ? (
                                        <a
                                            href="/services"
                                            className="footer-link"
                                            onClick={e => {
                                                e.preventDefault();
                                                window.location.href = '/services';
                                            }}
                                        >
                                            {service}
                                        </a>
                                    ) : (
                                        <span className="footer-link">{service}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Horario de Consulta */}
                    <div className="footer-column">
                        <h3 className="column-title">Horario de Consulta</h3>
                        <ul className="footer-schedule">
                            {schedule.map((item, index) => (
                                <li key={index} className="schedule-item">
                                    {item.day && <span className="schedule-day">{item.day}</span>}
                                    <span className="schedule-time">{item.time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <div className="footer-container">
                    <p className="copyright">
                        Copyright © 2024 Odontonieves | Powered by Osdens Digital Group
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;