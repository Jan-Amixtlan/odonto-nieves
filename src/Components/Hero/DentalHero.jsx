import React, { useState, useEffect } from 'react';
import './DentalHero.css';

const DentalHero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showAfter, setShowAfter] = useState(false);
    
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

    // Controlar la animación antes/después
    useEffect(() => {
        const interval = setInterval(() => {
            setShowAfter(prev => !prev);
        }, 3000); // Cambia cada 3 segundos

        return () => clearInterval(interval);
    }, []);

    // Activar animaciones después de que el componente se monte
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Cerrar menú con tecla Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMenu();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isMenuOpen]);

    // Prevenir scroll cuando el menú está abierto
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

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
                <div className="header-left">
                    <div className="logo">On</div>
                </div>
                
                {/* Desktop Navigation */}
                <nav className="navigation desktop-nav">
                    <a href="/">Inicio</a>
                    <a href="/about">Sobre Mi</a>
                    <a href="/services">Servicios</a>
                    <a href="/galery">Galería</a>
                    <a href="/contact">Contáctanos</a>
                </nav>

                <div className="header-right">
                    {/* Mobile Menu Button */}
                    <button 
                        className="mobile-menu-btn"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={isMenuOpen}
                    >
                        <span className={`hamburger-line line1 ${isMenuOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line line2 ${isMenuOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line line3 ${isMenuOpen ? 'open' : ''}`}></span>
                    </button>

                    <div className="header-actions">
                        <button className="whatsapp-btn">
                            <span className="whatsapp-icon">📱</span>
                            <span className="whatsapp-text">WhatsApp</span>
                        </button>
                        <div className="contact-icons">
                            <span title="Teléfono">�</span>
                            <span title="Email">✉️</span>
                            <span title="Ubicación">�</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div className="mobile-nav-overlay" onClick={closeMenu}></div>
            )}

            {/* Mobile Navigation Menu */}
            <nav className={`mobile-navigation ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav-header">
                    <div className="mobile-nav-logo">On</div>
                    <button 
                        className="mobile-close-btn"
                        onClick={closeMenu}
                        aria-label="Cerrar menú"
                    >
                        ×
                    </button>
                </div>
                <div className="mobile-nav-content">
                    <a href="/" onClick={closeMenu}>
                        <span className="nav-icon">🏠</span>
                        Inicio
                    </a>
                    <a href="/about" onClick={closeMenu}>
                        <span className="nav-icon">👨‍⚕️</span>
                        Sobre Mi
                    </a>
                    <a href="/services" onClick={closeMenu}>
                        <span className="nav-icon">🦷</span>
                        Servicios
                    </a>
                    <a href="/galery" onClick={closeMenu}>
                        <span className="nav-icon">📸</span>
                        Galería
                    </a>
                    <a href="/contact" onClick={closeMenu}>
                        <span className="nav-icon">📞</span>
                        Contáctanos
                    </a>
                </div>
                <div className="mobile-nav-footer">
                    <button className="mobile-whatsapp-btn" onClick={closeMenu}>
                        <span>📱</span>
                        Enviar WhatsApp
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="main-content">
                <div className={`text-section ${isLoaded ? 'loaded' : ''}`}>
                    <h1 className={`main-title ${isLoaded ? 'animate-in' : ''}`}>
                        <span className="title-line">Tu sonrisa es lo primordial,</span>
                        <span className="title-highlight">¡Sonríe!</span>
                    </h1>
                    <p className={`subtitle ${isLoaded ? 'animate-in' : ''}`}>
                        Nosotros te ayudaremos a tener ese cambio dental que necesitas en tu vida.
                    </p>
                    <button className={`cta-button ${isLoaded ? 'animate-in' : ''}`} onClick={() => {
                        const formSection = document.getElementById('appointment-form');
                        if (formSection) {
                            formSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}>
                        ¡Haz una cita!
                    </button>
                </div>

                <div className={`image-section ${isLoaded ? 'loaded' : ''}`}>
                    <div className="before-after-container">
                        <div className="comparison-image">
                            <div className="image-split">
                                <div className={`before-half ${showAfter ? 'reveal' : ''}`}>
                                    <img 
                                        src="/Before.png" 
                                        alt="Dientes antes del tratamiento"
                                        className="teeth-image before-teeth"
                                    />
                                </div>
                                <div className="after-half">
                                    <img 
                                        src="/After.png" 
                                        alt="Dientes después del tratamiento"
                                        className="teeth-image after-teeth"
                                    />
                                </div>
                            </div>
                            <div className={`center-divider ${showAfter ? 'moved' : ''}`}>
                                <div className="divider-line"></div>
                                <div className="center-label">
                                    <span className="dynamic-text">{showAfter ? 'DESPUÉS' : 'ANTES'}</span>
                                </div>
                            </div>
                            <div className="corner-labels">
                                <span className={`before-label ${showAfter ? 'hidden' : 'visible'}`}>BEFORE</span>
                                <span className={`after-label ${showAfter ? 'visible' : 'hidden'}`}>AFTER</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

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
