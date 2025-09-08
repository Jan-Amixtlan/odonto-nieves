import React from 'react';
import './DentalHero.css';

const DentalHero = () => {
    return (
        <div className="dental-hero">
            {/* Header */}
            <header className="header">
                <div className="logo">On</div>
                <nav className="navigation">
                    <a href="#inicio">Inicio</a>
                    <a href="#sobre-mi">Sobre Mi</a>
                    <a href="#servicios">Servicios</a>
                    <a href="#galeria">Galería</a>
                    <a href="#contactanos">Contáctanos</a>
                </nav>
                <button className="whatsapp-btn">Enviar WhatsApp</button>
                <div className="contact-icons">
                    <span>📱</span>
                    <span>✉️</span>
                    <span>📞</span>
                    <span>📱</span>
                </div>
            </header>

            {/* Main Content */}
            <main className="main-content">
                <div className="text-section">
                    <h1 className="main-title">
                        Tu sonrisa es lo primordial, ¡Sonríe!
                    </h1>
                    <p className="subtitle">
                        Nosotros te ayudaremos a tener ese cambio dental que necesitas en tu vida.
                    </p>
                    <button className="cta-button">¡Haz una cita!</button>
                </div>

                <div className="image-section">
                    <div className="before-after-container">
                        <div className="image-placeholder">
                            <div className="before-side">
                                <span className="label">BEFORE</span>
                            </div>
                            <div className="after-side">
                                <span className="label">AFTER</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Scroll to top button */}
            <button className="scroll-top">↑</button>
        </div>
    );
};

export default DentalHero;