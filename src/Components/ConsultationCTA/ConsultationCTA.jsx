import React, { useEffect, useRef } from 'react';
import './ConsultationCTA.css';

const ConsultationCTA = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        if (textRef.current) observer.observe(textRef.current);
        if (imageRef.current) observer.observe(imageRef.current);

        return () => observer.disconnect();
    }, []);

    const handleAppointmentClick = () => {
        console.log('Redirigiendo a agendar cita...');
        // Aquí implementarías la navegación a la página de citas
    };


    return (
        <section className="consultation-cta" ref={sectionRef}>
            <div className="consultation-cta-container">

                {/* Text Content */}
                <div className="consultation-cta-content" ref={textRef}>
                    <div className="content-inner">

                        <h2 className="consultation-cta-title">
                            ¿Te gustaría una consulta?
                        </h2>

                        <p className="consultation-cta-description">
                            Es muy fácil, puedes llamarnos o
                            hacer directamente <strong>tu cita desde esta misma página</strong>, con
                            gusto te atenderemos.
                        </p>

                        <div className="consultation-cta-buttons">
                            <button
                                className="appointment-btn primary"
                                onClick={handleAppointmentClick}
                            >
                                Haz una cita
                            </button>
                        </div>

                    </div>
                </div>

                {/* Image Section */}
                <div className="consultation-cta-image-section" ref={imageRef}>
                    <div className="image-container">
                        <img
                            src="ConsultationCTA.jpg"
                            alt="Paciente durante consulta dental - selección de color de dientes"
                            className="consultation-image"
                        />
                        <div className="image-overlay"></div>
                    </div>
                </div>

            </div>

            {/* Decorative Elements */}
            <div className="decorative-elements">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
            </div>

        </section>
    );
};

export default ConsultationCTA;