import React, { useState, useEffect } from 'react';
import './PageHeader.css';

const PageHeader = ({ title = "Sobre Mi", currentPage = "sobre-mi" }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigationItems = [
        { name: 'Inicio', href: '#inicio', id: 'inicio' },
        { name: 'Sobre Mi', href: '#sobre-mi', id: 'sobre-mi' },
        { name: 'Servicios', href: '#servicios', id: 'servicios' },
        { name: 'Galería', href: '#galeria', id: 'galeria' },
        { name: 'Contáctanos', href: '#contactanos', id: 'contactanos' }
    ];

    const handleNavClick = (href, id) => {
        console.log(`Navegando a: ${href}`);
        // Aquí implementarías la navegación real
    };

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5213317015391', '_blank');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`page-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">

                {/* Top Bar with Contact Info */}
                <div className="header-top">
                    <div className="contact-info">
                        <span className="contact-item">📱 (33) 1701-5391</span>
                        <span className="contact-item">📧 contacto@odontonieves.com</span>
                        <span className="contact-item">📍 Guadalajara, Jal.</span>
                    </div>
                </div>

                {/* Main Navigation */}
                <div className="header-main">

                    {/* Logo */}
                    <div className="logo-container">
                        <span className="logo">On</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav">
                        {navigationItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href, item.id);
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* WhatsApp Button */}
                    <button
                        className="whatsapp-btn"
                        onClick={handleWhatsAppClick}
                    >
                        💬 Enviar WhatsApp
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    </button>

                </div>

                {/* Mobile Navigation */}
                <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-nav-content">
                        {navigationItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                className={`mobile-nav-link ${currentPage === item.id ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href, item.id);
                                    setIsMenuOpen(false);
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                        <button
                            className="mobile-whatsapp-btn"
                            onClick={() => {
                                handleWhatsAppClick();
                                setIsMenuOpen(false);
                            }}
                        >
                            💬 Enviar WhatsApp
                        </button>
                    </div>
                </nav>

            </div>

            {/* Page Title Section */}
            <div className="title-section">
                <div className="title-container">
                    <h1 className="page-title">{title}</h1>
                </div>
            </div>

        </header>
    );
};

export default PageHeader;

