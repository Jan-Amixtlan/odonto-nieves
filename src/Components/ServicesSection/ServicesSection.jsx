import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            title: "Blanqueamiento Dental",
            image: "/Services.jpg",
            description: "Tratamiento profesional para dientes más blancos",
            alt: "Blanqueamiento dental antes y después",
            detailedInfo: {
                question: "¿Qué es?",
                answer: "El blanqueamiento dental es uno de los métodos más comunes para tratar la decoloración de los dientes."
            }
        },
        {
            id: 2,
            title: "Implante Dental",
            image: "/Services2.jpg",
            description: "Reemplazo permanente para dientes perdidos",
            alt: "Modelo de implante dental",
            detailedInfo: {
                question: "¿Qué es?",
                answer: "Un implante con un tornillo de titanio fijado en el hueso reemplazando las raíces de los dientes, sobre el cual se atornilla la prótesis dental (diente faltante)."
            }
        },
        {
            id: 3,
            title: "Carillas Dentales",
            image: "/Services3.jpg",
            description: "Mejora estética para tu sonrisa perfecta",
            alt: "Sonrisa con carillas dentales",
            detailedInfo: {
                question: "¿Qué es?",
                answer: "Las carillas son restauraciones que cubren toda la cara frontal del diente. Estas imitan a la perfección la forma y el color de los dientes naturales, cuya finalidad es casi siempre estética."
            }
        }
    ];

    return (
        <section className="services-section">
            <div className="services-container">

                {/* Header de la sección */}
                <div className="services-header">
                    <span className="section-tag">Nuestros Servicios</span>
                    <h2 className="services-title">
                        Todo lo esencial para tu sonrisa
                    </h2>
                </div>

                {/* Grid de servicios */}
                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="card-content">
                                <h3 className="service-title">{service.title}</h3>

                                <div className="image-container">
                                    <img
                                        src={service.image}
                                        alt={service.alt}
                                        className="service-image"
                                    />
                                    
                                    {/* Overlay con información detallada */}
                                    <div className="service-overlay">
                                        <div className="overlay-content">
                                            <h4 className="overlay-question">{service.detailedInfo.question}</h4>
                                            <p className="overlay-answer">{service.detailedInfo.answer}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <span className="brand-logo">On</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botón ver más servicios */}
                <div className="services-footer">
                    <button className="view-more-btn">
                        Ver más servicios
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;