import React from 'react';
import './LocationContact.css';

const LocationContact = () => {
    const handleGoogleMaps = () => {
        window.open('https://maps.google.com/?q=Av.+Manuel+Acuña+2755+Providencia+Guadalajara', '_blank');
    };

    const handleWaze = () => {
        window.open('https://waze.com/ul?q=Av.+Manuel+Acuña+2755+Providencia+Guadalajara', '_blank');
    };

    const handleMessage = () => {
        window.open('https://wa.me/523317015391?text=Hola,%20me%20interesa%20agendar%20una%20cita', '_blank');
    };

    return (
        <div className="location-container">
            <div className="content-wrapper">

                {/* Sección izquierda - Contenido principal */}
                <div className="left-section">
                    <div className="main-content">
                        <h1 className="main-title">
                            ¡Estamos<br />
                            aquí, para<br />
                            ti!
                        </h1>
                        <div className="title-divider"></div>

                        <div className="subtitle-section">
                            <h2 className="subtitle">
                                ¿Donde estes,<br />
                                estaremos!
                            </h2>
                            <p className="description">
                                Localízanos fácilmente en nuestro consultorio.
                            </p>
                        </div>

                        <button onClick={handleMessage} className="message-btn">
                            <span>Enviar mensaje</span>
                            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Sección derecha - Mapa 3D y ubicación */}
                <div className="right-section">

                    {/* Mapa 3D con pin */}
                    <div className="map-container">
                        <div className="map-base">
                            <div className="map-surface">
                                {/* Líneas del mapa */}
                                <div className="map-line horizontal line-1"></div>
                                <div className="map-line horizontal line-2"></div>
                                <div className="map-line horizontal line-3"></div>
                                <div className="map-line vertical line-4"></div>
                                <div className="map-line vertical line-5"></div>
                                <div className="map-line vertical line-6"></div>

                                {/* Áreas sombreadas */}
                                <div className="map-shadow shadow-1"></div>
                                <div className="map-shadow shadow-2"></div>
                            </div>
                        </div>

                        {/* Pin de ubicación 3D */}
                        <div className="location-pin">
                            <div className="pin-shadow"></div>
                            <div className="pin-body">
                                <div className="pin-inner">
                                    <div className="pin-center"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Panel de ubicación */}
                    <div className="location-panel">
                        <h3 className="panel-title">Ubicación</h3>
                        <div className="panel-divider"></div>

                        <div className="navigation-buttons">
                            <button onClick={handleGoogleMaps} className="nav-btn">
                                <span>Google Maps</span>
                                <svg className="nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            <button onClick={handleWaze} className="nav-btn">
                                <span>Waze</span>
                                <svg className="nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Elementos decorativos de fondo */}
            <div className="background-decorations">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
                <div className="decoration-circle circle-3"></div>
            </div>
        </div>
    );
};

export default LocationContact;