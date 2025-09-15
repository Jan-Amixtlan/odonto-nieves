import React from 'react';
import './ContactFooter.css';

const ContactFooter = () => {
    const socialLinks = [
        {
            id: 'facebook',
             icon: <img src="/facebook.png" alt="Facebook" className="social-icon-img" />,
            url: 'https://www.facebook.com/odontonieves',
            color: '#1877F2'
        },
        {
            id: 'instagram',
           icon: <img src="/instagram.png" alt="Instagram" className="social-icon-img" />,
            url: 'https://www.instagram.com/odontonieves/',
            color: '#E4405F'
        },
        {
            id: 'whatsapp',
            icon: <img src="/social.png" alt="WhatsApp" style={{ width: '2.1em', height: '2.1em', verticalAlign: 'middle' }} />,
            url: 'https://web.whatsapp.com/send?phone=5213317015391&text=%C2%A1Hola!%20Estoy%20interesado%2Fa%20en%20agendar%20una%20cita%20o%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios%20dentales.%20%F0%9F%98%8A%20%F0%9F%91%8B',
            color: '#25D366'
        },
        {
            id: 'email',
            icon: <img src="/correo-electronico.png" alt="Correo Electrónico" style={{ width: '2.1em', height: '2.1em', verticalAlign: 'middle' }} />,
            url: 'https://mail.google.com/mail/?view=cm&fs=1&to=contacto@odontonieves.com',
            color: '#EA4335'
        }
    ];

    const handleSocialClick = (url, platform) => {
        if (url && url !== '#') {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    const handleAppointmentClick = () => {
        console.log('Redirigiendo a solicitar cita...');
        // Aquí implementarías la navegación a la página de citas
    };

    const handlePhoneClick = (phone) => {
        window.open(`tel:${phone}`);
    };

    const handleWhatsAppClick = (phone) => {
        window.open(`https://wa.me/52${phone.replace(/\D/g, '')}`);
    };

    const handleLocationClick = () => {
        window.open('https://maps.google.com/?q=Av.+Manuel+Acuña+2755+Piso+2+Col.+Providencia,+C.P.+44680+Guadalajara,+Jalisco');
    };

    return (
        <footer className="contact-footer">
            <div className="footer-container">

                {/* Social Media Icons */}
                <div className="social-media">
                    {socialLinks.map((social) => (
                        <button
                            key={social.id}
                            className="social-icon"
                            onClick={() => handleSocialClick(social.url, social.id)}
                            style={{ '--social-color': social.color }}
                        >
                            {social.icon}
                        </button>
                    ))}
                </div>

                {/* Contact Information Grid */}
                <div className="contact-grid">

                    {/* WhatsApp */}
                    <div className="contact-item">
                        <div className="contact-icon whatsapp-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="contact-content">
                            <h3 className="contact-title whatsapp-title">Llámanos <br>
                            </br> WhatsApp:</h3>
                            <p
                                className="contact-text clickable"
                                onClick={() => handleWhatsAppClick('33 1701 5391')}
                            >
                                (33) 1701 5391
                            </p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="contact-item">
                        <div className="contact-icon phone-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="contact-content">
                            <h3 className="contact-title phone-title">Consultorio:</h3>
                            <p
                                className="contact-text clickable"
                                onClick={() => handlePhoneClick('33 3616 4250')}
                            >
                                (33) 3616 4250
                            </p>
                            <p
                                className="contact-text clickable"
                                onClick={() => handlePhoneClick('33 3616 2586')}
                            >
                                (33) 3616 2586
                            </p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="contact-item">
                        <div className="contact-icon location-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="contact-content">
                            <p
                                className="contact-text address clickable"
                                onClick={handleLocationClick}
                            >
                                Av. Manuel Acuña #2755<br/>
                                Piso 2 Esq. Rubén Darío, Col.<br/>
                                Providencia, 44680 Guadalajara, Jal.
                            </p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="contact-item cta-section">
                        <div className="cta-content">
                            <h3 className="cta-title">
                                El cambio que necesitas en tu <br />
                                 sonrisa, hecho a tu medida
                            </h3>
                            <button
                                className="appointment-button"
                                onClick={handleAppointmentClick}
                            >
                                Solicitar Cita
                            </button>
                        </div>
                    </div>

                </div>

                {/* Decorative Elements */}
                <div className="decorative-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                </div>

            </div>
        </footer>
    );
};

export default ContactFooter;