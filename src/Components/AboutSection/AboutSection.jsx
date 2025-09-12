import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutSection.css';

const AboutSection = () => {
    const navigate = useNavigate();
    const handleReadMore = () => {
        navigate('/about');
    };
    return (
        <section className="about-section">
            <div className="about-container">
                {/* Imagen de la doctora */}
                <div className="doctor-image-container">
                    <img
                        src="/ComponenteSobreMi.jpg"
                        alt="Dra. Blanca Nieves Rodríguez"
                        className="doctor-image"
                    />
                </div>

                {/* Contenido de texto */}
                <div className="about-content">
                    <div className="section-header">
                        <span className="section-tag">Sobre Mi</span>
                        <h2 className="main-title">
                            Especialista en<br />
                            Prostodoncia<br />
                            <span className="highlight-text">Odontología Estética</span>
                        </h2>
                    </div>

                    <div className="description">
                        <p>
                            Soy la <strong>Dra. Blanca Nieves Rodríguez</strong> catedrática en la{' '}
                            <strong>UDG</strong> con más de <strong>20 años de experiencia</strong>,
                            te invito a conocer un poco más de mi trayectoria...
                        </p>
                    </div>

                    <button className="read-more-btn" onClick={handleReadMore}>
                        Leer Más
                    </button>
                </div>
            </div>

            {/* Botón flotante de navegación */}
            <button className="floating-nav-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </section>
    );
};

export default AboutSection;