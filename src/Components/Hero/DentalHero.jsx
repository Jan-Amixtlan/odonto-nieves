import React, { useState, useEffect } from 'react';
import './DentalHero.css';

const DentalHero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const backgroundImages = [
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Dentista
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Sonrisa
        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Consultorio dental
        '/Hero2.jpg', // 
        '/Hero3.jpg',
        '/Hero5.jpg',
        '/Hero6.jpg',
        '/Hero8.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % backgroundImages.length
            );
        }, 5000); // Cambia cada 5 segundos

        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    return (
        <div className="dental-hero">
            {/* Dynamic Background Images */}
            <div className="background-images">
                {backgroundImages.map((image, index) => (
                    <div
                        key={index}
                        className={`background-image ${index === currentImageIndex ? 'active' : ''}`}
                        style={{
                            backgroundImage: `linear-gradient(135deg, 
                                rgba(79, 209, 199, 0.8) 0%, 
                                rgba(30, 58, 138, 0.5) 30%, 
                                rgba(32, 178, 170, 0.7) 60%, 
                                rgba(79, 209, 199, 0.8) 100%), 
                                url(${image})`
                        }}
                    />
                ))}
            </div>
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

            {/* Image Indicators */}
            <div className="image-indicators">
                {backgroundImages.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default DentalHero;