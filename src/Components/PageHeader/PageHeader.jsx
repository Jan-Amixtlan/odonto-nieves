import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PageHeader.css';

const PageHeader = ({ title = "Sobre Mi", currentPage = "sobre-mi" }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigationItems = [
        { name: 'Inicio', href: '/', id: 'inicio' },
        { name: 'Sobre Mi', href: '/about', id: 'sobre-mi' },
        { name: 'Servicios', href: '/services', id: 'services' },
        { name: 'Galería', href: '/galery', id: 'galeria' },
        { name: 'Contáctanos', href: '#contactanos', id: 'contactanos' }
    ];

    const handleNavClick = (href, id) => {
        if (id === 'inicio') {
            navigate('/');
        } else if (id === 'sobre-mi') {
            navigate('/about');
        } else if (id === 'services') {
            navigate('/services');
        } else if (id === 'galeria') {
            navigate('/galery');
        } else if (id === 'contactanos') {
            navigate('/contact');
        } else {
            // Para navegación interna con anchors o SPA, puedes usar scroll o router
            const anchor = document.querySelector(href);
            if (anchor) {
                anchor.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5213317015391', '_blank');
    };

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

                {/* Mobile Navigation Overlay */}
                {isMenuOpen && (
                    <div className="mobile-nav-overlay" onClick={closeMenu}></div>
                )}

                {/* Mobile Navigation */}
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
                        {navigationItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                className={`mobile-nav-link ${currentPage === item.id ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href, item.id);
                                    closeMenu();
                                }}
                            >
                                <span className="nav-icon">
                                    {item.id === 'inicio' && '🏠'}
                                    {item.id === 'sobre-mi' && '👨‍⚕️'}
                                    {item.id === 'services' && '🦷'}
                                    {item.id === 'galeria' && '📸'}
                                    {item.id === 'contactanos' && '📞'}
                                </span>
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="mobile-nav-footer">
                        <button
                            className="mobile-whatsapp-btn"
                            onClick={() => {
                                handleWhatsAppClick();
                                closeMenu();
                            }}
                        >
                            <span>📱</span>
                            Enviar WhatsApp
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

