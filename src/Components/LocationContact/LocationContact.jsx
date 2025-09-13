import React, { useState } from 'react';
import './LocationContact.css';

const LocationContact = () => {
    const [hoveredElement, setHoveredElement] = useState(null);

    const handleGoogleMaps = () => {
        window.open('https://maps.google.com/?q=Av.+Manuel+Acuña+2755+Providencia+Guadalajara', '_blank');
    };

    const handleWaze = () => {
        window.open('https://waze.com/ul?q=Av.+Manuel+Acuña+2755+Providencia+Guadalajara', '_blank');
    };

    const handleMessage = () => {
        window.open('https://wa.me/523317015391?text=Buenos%20días,%20solicito%20información%20sobre%20su%20consultorio', '_blank');
    };

    return (
        <div className="elegant-location-container">
            <div className="location-card">
                <div className="card-header">
                    <h1 className="elegant-title">¡Estamos aquí, para ti!</h1>
                    <h2 className="subtitle-elegant">¿Donde estes, estaremos!</h2>
                </div>
                
                <div className="card-content">
                    <div className="info-section">
                        <p className="description-elegant">
                            Localízanos fácilmente en nuestro consultorio dental de vanguardia.
                            Nos enorgullece ofrecer servicios de la más alta calidad en un
                            ambiente de excelencia y distinción profesional.
                        </p>
                    </div>

                    <div className="visual-section">
                        {/* Mapa Elegante */}
                        <div className="map-showcase">
                            <div className="map-container">
                                <div className="map-base">
                                    <div className="street-network">
                                        <div className="street street-horizontal"></div>
                                        <div className="street street-horizontal"></div>
                                        <div className="street street-horizontal"></div>
                                        <div className="street street-vertical"></div>
                                        <div className="street street-vertical"></div>
                                        <div className="street street-vertical"></div>
                                    </div>
                                    <div className="landmarks">
                                        <div className="landmark"></div>
                                        <div className="landmark"></div>
                                        <div className="landmark"></div>
                                    </div>
                                </div>

                                {/* Pin de Ubicación Elegante */}
                                <div className="location-pin">
                                    <div className="pin-shadow"></div>
                                    <div className="pin-element">
                                        <div className="pin-body">
                                            <div className="pin-center">
                                                <div className="pin-dot"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="location-details">
                            <div className="address-section">
                                <h4 className="address-title">Dirección</h4>
                                <p className="address-content">
                                    Av. Manuel Acuña #2755 Piso 2<br />
                                    Col. Providencia, C.P. 44680<br />
                                    Guadalajara, Jalisco
                                </p>
                            </div>

                            <div className="navigation-menu">
                                <button
                                    className="nav-item"
                                    onClick={handleGoogleMaps}
                                    onMouseEnter={() => setHoveredElement('maps')}
                                    onMouseLeave={() => setHoveredElement(null)}
                                >
                                    <div className="nav-content">
                                        <span className="nav-icon">🗺</span>
                                        <span>Google Maps</span>
                                    </div>
                                    <span className="nav-arrow">→</span>
                                </button>

                                <button
                                    className="nav-item"
                                    onClick={handleWaze}
                                    onMouseEnter={() => setHoveredElement('waze')}
                                    onMouseLeave={() => setHoveredElement(null)}
                                >
                                    <div className="nav-content">
                                        <span className="nav-icon">🧭</span>
                                        <span>Waze</span>
                                    </div>
                                    <span className="nav-arrow">→</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card-footer">
                        <a
                            className="cta-button"
                                    href="https://web.whatsapp.com/send?phone=5213317015391&text=%C2%A1Hola!%20Estoy%20interesado%2Fa%20en%20agendar%20una%20cita%20o%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios%20dentales.%20%F0%9F%98%8A%20%F0%9F%91%8B"
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setHoveredElement('cta')}
                            onMouseLeave={() => setHoveredElement(null)}
                            aria-label="Enviar WhatsApp"
                        >
                            <span className="button-text">Enviar Mensaje</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationContact;