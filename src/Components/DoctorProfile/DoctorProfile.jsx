import React, { useEffect, useRef } from 'react';
import './DoctorProfile.css';

const DoctorProfile = () => {
    const sectionRef = useRef(null);
    const cardRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        if (cardRef.current) observer.observe(cardRef.current);
        if (contentRef.current) observer.observe(contentRef.current);

        return () => observer.disconnect();
    }, []);

    const credentials = [
        "Catedrática de la UDG",
        "Especialista en Prostodoncia",
        "20 Años de Experiencia"
    ];

    const handleAppointmentClick = () => {
        const formSection = document.getElementById('appointment-form');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="doctor-profile-section" ref={sectionRef}>
            <div className="doctor-profile-container">

                {/* Título principal */}
                <div className="profile-header">
                    <h2 className="main-title">
                        <span className="title-line">Tus dientes pueden contar</span>
                        <span className="title-line">cosas sobre ti...</span>
                        <span className="title-highlight">¡Hazlos lucir!</span>
                    </h2>
                </div>

                <div className="profile-content">

                    {/* Tarjeta de la doctora */}
                    <div className="doctor-card" ref={cardRef}>
                        <div className="card-inner">
                            <div className="doctor-image-container">
                                <img
                                    src="/DoctoraPerfil.png"
                                    alt="Dra. Blanca Nieves Rodríguez"
                                    className="doctor-image"
                                />
                                <div className="image-border"></div>
                            </div>
                        </div>
                    </div>

                    {/* Información de la doctora */}
                    <div className="doctor-info" ref={contentRef}>
                        <div className="info-content">

                            <h3 className="doctor-name">
                                Conoce a la Dra. Blanca Nieves
                            </h3>

                            <div className="credentials-list">
                                {credentials.map((credential, index) => (
                                    <div
                                        key={index}
                                        className="credential-item"
                                        style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                                    >
                                        <div className="check-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M9 12L11 14L15 10"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <span className="credential-text">{credential}</span>
                                    </div>
                                ))}
                            </div>

                            <blockquote className="inspirational-quote">
                                <p className="quote-text">
                                    "La paz comienza con una sonrisa"
                                </p>
                                <cite className="quote-author">– Madre Teresa de Calcuta</cite>
                            </blockquote>

                            <button
                                className="appointment-cta"
                                onClick={handleAppointmentClick}
                            >
                                Haz tu cita aquí
                            </button>

                        </div>
                    </div>

                </div>

                {/* Elementos decorativos */}
                <div className="decorative-elements">
                    <div className="floating-element element-1"></div>
                    <div className="floating-element element-2"></div>
                    <div className="floating-element element-3"></div>
                </div>

            </div>
        </section>
    );
};

export default DoctorProfile;