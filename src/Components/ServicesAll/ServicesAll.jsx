import React from 'react';
import './ServicesAll.css';

const ServicesAll = () => {
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
        },
        {
            id: 4,
            title: "Odontología Preventiva",
            image: "/Services4.jpg",
            description: "Mejora estética para tu sonrisa perfecta",
            alt: "Sonrisa con carillas dentales",
            detailedInfo: {
                question: "¿Qué es?",
                answer: "Es el tipo de odontología que se encarga de prevenir cualquier enfermedad en el medio bucal del paciente."
            }
        },
        {
            id: 5,
            title: "Prótesis Total",
            image: "/Services5.jpg",
            description: "Mejora estética para tu sonrisa perfecta",
            alt: "Sonrisa con carillas dentales",
            detailedInfo: {
                question: "¿Qué es?",
                answer: "Sustituto de los dientes perdidos, para un paciente desdentado o para la colocación inmediata al extraer los dientes naturales."
            }
        },
        {
            id: 6,
            title: "Limpieza Dental",
            image: "/Services6.jpg",
            description: "Mejora estética para tu sonrisa perfecta",
            alt: "Sonrisa con carillas dentales",
            detailedInfo: {
                question: "¿Qué es?",
                answer: "La limpieza se realiza con un aparato ultrasónico por el surco de los dientes retirando el sarro y manchas en la superficie del diente."
            }
        }

    ];

    return (
        <section className="services-all-section">
            <div className="services-all-container">

                {/* Header de la sección */}
                <div className="services-all-header">
                    
                    <h2 className="services-all-title">
                        Todos los servicios en un solo lugar
                    </h2>
                </div>

                {/* Grid de servicios */}
                <div className="services-all-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-all-card">
                            <div className="all-card-content">
                                <div className="all-image-container">
                                    <img
                                        src={service.image}
                                        alt={service.alt}
                                        className="service-all-image"
                                    />

                                    {/* Overlay con información detallada */}
                                    <div className="service-all-overlay">
                                        <div className="all-overlay-content">
                                            <h4 className="all-overlay-question">{service.detailedInfo.question}</h4>
                                            <p className="all-overlay-answer">{service.detailedInfo.answer}</p>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="service-all-title">{service.title}</h3>
                                
                                <button className="schedule-appointment-btn" onClick={() => {
                                    if (window.location.pathname === '/' || window.location.pathname === '/') {
                                        const formSection = document.getElementById('appointment-form');
                                        if (formSection) {
                                            formSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    } else {
                                        localStorage.setItem('scrollToAppointment', 'true');
                                        window.location.href = '/';
                                    }
                                }}>
                                    Agendar cita
                                </button>

                                <div className="all-card-footer">
                                    <span className="all-brand-logo">On</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                

            </div>
        </section>
    );
};

export default ServicesAll;