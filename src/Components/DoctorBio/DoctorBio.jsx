import React, { useEffect, useRef } from 'react';
import './DoctorBio.css';

const DoctorBio = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        if (imageRef.current) observer.observe(imageRef.current);
        if (contentRef.current) observer.observe(contentRef.current);

        return () => observer.disconnect();
    }, []);

    const credentials = [
        {
            text: "cuenta con una especialidad en Prostodoncia. Realizó sus estudios de Licenciatura en Cirujano Dentista en la",
            highlight: "Universidad de Guadalajara."
        },
        {
            text: "Posteriormente realizó sus estudios de especialización de",
            highlight: "Prostodoncia",
            continuation: "en dicha universidad."
        },
        {
            text: "La Dra. Blanca está certificada por el",
            highlight: "Colegio Mexicano de Posgrados en Prostodoncia CMPP."
        },
        {
            text: "Profesora en la licenciatura de Odontología en la",
            highlight: "Universidad de Guadalajara.",
            continuation: "Profesora en la",
            highlight2: "Especialidad en Prostodoncia",
            continuation2: "de la Universidad de Guadalajara."
        },
        {
            text: "Autora y Co-autora de artículos científicos; Dra. En Investigación Multidisciplinaria en Salud en la Universidad de Guadalajara, en el Centro Universitario Tonalá (CUT). Perteneciente al colegio de",
            highlight: "Prostodoncistas Universitarios de Jalisco A.C."
        }
    ];

    return (
        <section className="doctor-bio-section" ref={sectionRef}>
            <div className="bio-container">

                {/* Image Section */}
                <div className="doctor-image-section" ref={imageRef}>
                    <div className="image-container">
                        <img
                            src="/DoctoraPerfil.png"
                            alt="Dra. Blanca Nieves Rodríguez"
                            className="doctor-photo"
                        />
                        <div className="image-border-effect"></div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="doctor-content-section" ref={contentRef}>

                    {/* Header */}
                    <div className="bio-header">
                        <h2 className="doctor-name">Dra. Blanca Nieves Rodríguez</h2>
                        <h1 className="main-title">
                            Especialista en Prostodoncia<br />
                            Odontología Estética
                        </h1>
                        <p className="intro-text">
                            Catedrática de UDG con 20 años de experiencia en el ramo odontológico y especializante en prostodoncia.
                        </p>
                    </div>

                    {/* Biography Content */}
                    <div className="bio-content">
                        <div className="bio-paragraph">
                            <span className="paragraph-start">Dra. </span>
                            <strong>Blanca Nieves Rodríguez, </strong>
                            {credentials[0].text} <strong>{credentials[0].highlight}</strong>
                        </div>

                        <div className="bio-paragraph">
                            {credentials[1].text} <strong>{credentials[1].highlight}</strong> {credentials[1].continuation}
                        </div>

                        <div className="bio-paragraph">
                            {credentials[2].text} <strong>{credentials[2].highlight}</strong>
                        </div>

                        <div className="bio-paragraph">
                            {credentials[3].text} <strong>{credentials[3].highlight}</strong> {credentials[3].continuation} <strong>{credentials[3].highlight2}</strong> {credentials[3].continuation2}
                        </div>

                        <div className="bio-paragraph">
                            {credentials[4].text} <strong>{credentials[4].highlight}</strong>
                        </div>
                    </div>

                    {/* Decorative Line */}
                    <div className="decorative-line"></div>

                </div>

            </div>
        </section>
    );
};

export default DoctorBio;