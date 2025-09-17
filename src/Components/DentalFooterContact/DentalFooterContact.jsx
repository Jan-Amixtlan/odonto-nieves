import React from 'react';
import './DentalFooterContact.css';

const DentalFooterContact = () => {
    const contactInfo = [
        {
            icon: <img src="/social.png" alt="WhatsApp" style={{ width: '1.3em', height: '1.3em', verticalAlign: 'middle' }} />,
            title: "WhatsApp:",
            info: "(33) 1701 5391",
            action: () => window.open('https://wa.me/5213317015391', '_blank')
        },
        {
            icon: <img src="/llamada-telefonica.png" alt="Teléfono" style={{ width: '1.3em', height: '1.3em', verticalAlign: 'middle' }} />,
            title: "Consultorio:",
            info: <span><span>(33) 3616 4250</span><br /><span style={{ fontSize: '0.95em', color: '#faf8f8ff' }}>Teléfono 2: (33) 3616 2586</span></span>,
            action: () => window.open('tel:3336164250', '_blank')
        },
        {
             icon: <img src="/contacto-correo-electronico.png" alt="Email" style={{ width: '1.3em', height: '1.3em', verticalAlign: 'middle' }} />,
            title: "",
            info: "blancanieves@odontonieves.com",
            action: () => window.open('mailto:blancanieves@odontonieves.com', '_blank')
        },
        {
             icon: <img src="/marcador-de-posicion.png" alt="Ubicación" style={{ width: '1.3em', height: '1.3em', verticalAlign: 'middle' }} />,
            title: "",
            info: "Av. Manuel Acuña #2755 Piso 2 Col. Providencia, C.P. 44680 Guadalajara, Jalisco.",
            action: () => window.open('https://maps.google.com/?q=Av.+Manuel+Acuña+2755+Guadalajara', '_blank')
        }
    ];

    const socialMedia = [
        {
            name: "Instagram",
            url: "instagram.com/odontonieves/",
             icon: <img src="/instagram.png" alt="Instagram" className="social-icon-img" />,
            action: () => window.open('https://instagram.com/odontonieves/', '_blank')
        },
        {
            name: "Facebook",
            url: "facebook.com/odontonieves/",
            icon: <img src="/facebook.png" alt="Facebook" className="social-icon-img" style={{ width: '2.2em', height: '2.2em', verticalAlign: 'middle' }} />,
            action: () => window.open('https://facebook.com/odontonieves/', '_blank')
        }
    ];

    return (
        <section className="dental-footer-contact">
            <div className="dental-contact-container">
                {/* Información de Contacto */}
                <div className="dental-contact-info-section">
                    <div className="dental-contact-content">

                        <div className="dental-contact-header">
                            <h2 className="dental-contact-title">¿Tienes Dudas?</h2>
                            <p className="dental-contact-subtitle">
                                Responderemos todas tus dudas, en nuestros medios de comunicación. Haz una cita y con gusto te atenderemos.
                            </p>
                        </div>

                        <div className="dental-contact-methods">
                            {contactInfo.map((contact, index) => (
                                <div
                                    key={index}
                                    className="dental-contact-item"
                                    onClick={contact.action}
                                >
                                    <span className="dental-contact-icon">{contact.icon}</span>
                                    <div className="dental-contact-details">
                                        {contact.title && <span className="dental-contact-type">{contact.title}</span>}
                                        <span className="dental-contact-value" style={{ fontSize: '1.25em', fontWeight: 400 }}>{contact.info}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="dental-social-media-section">
                            <h3 className="dental-social-title">Síguenos en Redes Sociales</h3>

                            <div className="dental-social-icon-container">
                                <div className="dental-social-graphic">
                                    <img className="dental-like-icon" src="/Contact.png" alt="Like" style={{ width: '90px', height: '90px' }} />
                                </div>
                            </div>

                            <div className="dental-social-links">
                                {socialMedia.map((social, index) => (
                                    <div
                                        key={index}
                                        className="dental-social-item"
                                        onClick={social.action}
                                    >
                                        <span className="dental-social-icon">{social.icon}</span>
                                        <span className="dental-social-url" style={{ fontSize: '1.15em', fontWeight: 500 }}>{social.url}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default DentalFooterContact;