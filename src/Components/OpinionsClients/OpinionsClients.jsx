import React, { useEffect, useRef, useState } from 'react';
import './OpinionsClients.css';

const OpinionsClients = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const testimonials = [
        {
            id: 1,
            text: "Hola estimada LCD Blanca Nieves Rodríguez, me permito manifestarle mi pleno reconocimiento y agradecimiento por eficiente atención Odontológica que tuvo a bien brindarme con toda ética, humanismo, amabilidad y responsabilidad.",
            name: "Dr. Héctor Alfredo Gómez Vidrio",
            title: "Médico Especialista",
            avatar: "Testimonio.jpg",
            rating: 5
        },
        {
            id: 2,
            text: "Recomiendo ampliamente a la Dra. Blanca Nieves. El trato que tiene con sus pacientes es excelente, explica muy bien el diagnóstico y el procedimiento a realizar, le tengo mucha confianza porque es sincera y solo realiza procedimientos cuando es necesario.",
            name: "Karla Patricia Vázquez Núñez",
            title: "Paciente Satisfecha",
            avatar: "/Testimonio2.jpg",
            rating: 5
        },
        {
            id: 3,
            text: "Dra. Blanca Nieves; desde que llegue con ella me explico muy bien mi procedimiento a realizar. Es muy profesional y solo realiza tratamientos cuando son necesarios. Contrario a malas experiencias que tuve. Excelente el trabajo que realiza.",
            name: "Veronica Cardenas Nava",
            title: "Paciente Satisfecha",
            avatar: "/Testimonio3.jpg",
            rating: 5
        },
        {
            id: 4,
            text: "He sido paciente de la Dra. Blanca desde hace 11 años, al igual que mi esposo, mi suegra y demás integrantes de mi familia. Su manera de explicar el diagnóstico y tratamiento es algo que he visto en muy pocos dentistas, pues tiene la paciencia para ir realizando cada procedimiento y no es nada sencillo acudir con un dentista. Su trabajo habla por sí solo, es una excelente doctora!",
            name: "María Guadalupe Montes Navarro",
            title: "Paciente Satisfecha",
            avatar: "/OpinionClients.jpg",
            rating: 5
        },
        {
            id: 5,
            text: "Excelente atención de la Dra. Nieves, me explicó a detalle el procedimiento a que ibamos a realizar, muy recomendable para los que quieran hacer un cambio de calidad en su sonrisa, gracias por su paciencia y dedicación.",
            name: "Diana Peñuelas",
            title: "Paciente Satisfecha",
            avatar: "/OpinionClients2.jpg",
            rating: 5
        },
        {
            id: 6,
            text: "Encontrar profesionalismo y trato humano en un Dentista es un desafío, pero lo encontré en la Dra Blanca Nieves , es difícil expresar mi agradecimiento y satisfacción por el servicio y el trato recibido en mi proceso , la doctora es una profesional que desarrolla un trabajo impecable. Ahora sonreír es más fácil.",
            name: "Leticia Leyva",
            title: "Paciente Satisfecha",
            avatar: "/OpinionClients3.jpg",
            rating: 5
        }
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <svg
                key={index}
                className={`star ${index < rating ? 'filled' : ''}`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill={index < rating ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="1"
                />
            </svg>
        ));
    };

    return (
        <section className="testimonials-section" ref={sectionRef}>
            <div className="testimonials-container">

                {/* Header */}
                <div className={`testimonials-header ${isVisible ? 'animate-in' : ''}`}>
                    <h2 className="testimonials-title">
                        ¿Qué opinan nuestros clientes?
                    </h2>
                    <div className="title-decorations">
                        <div className="decoration-dot"></div>
                        <div className="decoration-dot"></div>
                        <div className="decoration-dot"></div>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`testimonial-card ${isVisible ? 'animate-in' : ''}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="card-content">

                                {/* Quote Icon */}
                                <div className="quote-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M14.017 21V9.01L23.013 9V7.013C23.013 4.239 21.018 1 19 1S14.017 4.239 14.017 7.013L14.017 9.01L14.017 21ZM1.013 21V9.01L10.01 9V7.013C10.01 4.239 8.015 1 5.997 1S1.013 4.239 1.013 7.013L1.013 9.01L1.013 21Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>

                                {/* Testimonial Text */}
                                <div className="testimonial-text">
                                    <p>{testimonial.text}</p>
                                </div>

                                {/* Rating */}
                                <div className="rating">
                                    {renderStars(testimonial.rating)}
                                </div>

                                {/* Client Info */}
                                <div className="client-info">
                                    <div className="avatar-container">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="client-avatar"
                                        />
                                        <div className="avatar-ring"></div>
                                    </div>
                                    <div className="client-details">
                                        <h4 className="client-name">{testimonial.name}</h4>
                                        <p className="client-title">{testimonial.title}</p>
                                    </div>
                                </div>

                            </div>

                            {/* Hover Effect Background */}
                            <div className="card-hover-bg"></div>
                        </div>
                    ))}
                </div>

                {/* Decorative Elements */}
                <div className="decorative-background">
                    <div className="bg-circle circle-1"></div>
                    <div className="bg-circle circle-2"></div>
                    <div className="bg-circle circle-3"></div>
                </div>

            </div>
        </section>
    );
};

export default OpinionsClients;