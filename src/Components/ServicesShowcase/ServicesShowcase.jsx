import React, { useEffect, useRef, useState } from 'react';
import './ServicesShowcase.css';

const ServicesShowcase = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const services = [
        {
            id: 1,
            title: "Carillas Dentales",
            description: "Transformación completa de tu sonrisa",
            image: "ServiciosUtilizados.jpg",
            alt: "Sonrisa perfecta con carillas dentales",
            category: "Estética"
        },
        {
            id: 2,
            title: "Limpieza Dental",
            description: "Higiene profunda y preventiva",
            image: "ServiciosUtilizados2.jpg",
            alt: "Procedimiento de limpieza dental profesional",
            category: "Preventiva"
        }
    ];

    const handleAppointmentClick = (serviceName) => {
        if (window.location.pathname === '/' || window.location.pathname === '/') {
            const formSection = document.getElementById('appointment-form');
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            localStorage.setItem('scrollToAppointment', 'true');
            window.location.href = '/';
        }
    };

    return (
        <section className="services-showcase" ref={sectionRef}>
            <div className="showcase-container">

                {/* Header */}
                <div className={`showcase-header ${isVisible ? 'animate-in' : ''}`}>
                    <h2 className="showcase-title">
                        Servicios utilizados para este resultado
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="services-showcase-grid">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`service-showcase-card ${isVisible ? 'animate-in' : ''}`}
                            style={{ animationDelay: `${index * 0.3}s` }}
                        >
                            <div className="card-wrapper">

                                {/* Image Container */}
                                <div className="service-image-container">
                                    <img
                                        src={service.image}
                                        alt={service.alt}
                                        className="service-showcase-image"
                                    />
                                    <div className="image-overlay"></div>

                                    {/* Category Badge */}
                                    <div className="category-badge">
                                        {service.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="service-content">
                                    <h3 className="service-showcase-title">
                                        {service.title}
                                    </h3>

                                    <p className="service-description">
                                        {service.description}
                                    </p>

                                    {/* Logo */}
                                    <div className="service-logo">
                                        <span className="logo-text">On</span>
                                    </div>

                                    {/* CTA Button */}
                                    <button
                                        className="service-cta-button"
                                        onClick={() => handleAppointmentClick(service.title)}
                                    >
                                        <span className="button-text">Haz una Cita</span>
                                        <span className="button-arrow">→</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className={`showcase-footer ${isVisible ? 'animate-in' : ''}`}>
                    <p className="footer-text">
                        Cada tratamiento es personalizado según las necesidades específicas de cada paciente.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ServicesShowcase;