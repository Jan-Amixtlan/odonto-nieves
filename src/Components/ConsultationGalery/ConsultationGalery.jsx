import React from 'react';
import './ConsultationGalery.css';

const ConsultationGalery = () => {

    const handleAppointmentClick = () => {
        console.log('Redirigiendo a agendar cita...');
        // Aquí implementarías la navegación a la página de citas
    };


    return (
        <section className="consultation-gallery">
            <div className="consultation-gallery-container">

                {/* Text Content */}
                <div className="consultation-gallery-content">
                    <div className="content-inner">

                        <h2 className="consultation-gallery-title">
                            ¿Te gustaría una consulta?
                        </h2>

                        <p className="consultation-gallery-description">
                            Es muy fácil, puedes llamarnos o
                            hacer directamente <strong>tu cita desde esta misma página</strong>, con
                            gusto te atenderemos.
                        </p>

                        <div className="consultation-gallery-buttons">
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
                <div className="consultation-gallery-image-section">
                    <div className="image-container-galery">
                        <img
                            src="ConsultationGallery.jpg"
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

export default ConsultationGalery;
