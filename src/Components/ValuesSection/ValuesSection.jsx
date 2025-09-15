import React, { useEffect, useRef, useState } from 'react';
import './ValuesSection.css';

const ValuesSection = () => {
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

    const values = [
        {
            id: '01',
            title: 'Solidaridad',
            content: {
                text: 'Nuestro objetivo es ',
                highlight1: 'comprender',
                continuation1: ' y atender las ',
                highlight2: 'necesidades',
                continuation2: ' y deseos de ',
                highlight3: 'nuestros pacientes',
                continuation3: ' y ',
                highlight4: 'colegas',
                continuation4: ', escuchando atentamente y poniéndonos en el lugar de ellos.'
            }
        },
        {
            id: '02',
            title: 'Progresión',
            content: {
                text: 'Queremos seguir ',
                highlight1: 'adaptándonos',
                continuation1: ' a las ',
                highlight2: 'diferentes situaciones',
                continuation2: ', con ganas de aprender y esforzándonos por ser mejores. ',
                highlight3: 'Aprender',
                continuation3: ' nuevas ',
                highlight4: 'tendencias',
                continuation4: ' y ',
                highlight5: 'tecnologías',
                continuation5: ' en la ',
                highlight6: 'industria dental',
                continuation6: '.'
            }
        },
        {
            id: '03',
            title: 'Respeto',
            content: {
                text: 'Respetar a ',
                highlight1: 'todos',
                continuation1: ' y tratarlos como queremos ser tratados. Ya sea un ',
                highlight2: 'colega',
                continuation2: ' o un ',
                highlight3: 'paciente',
                continuation3: ', la ',
                highlight4: 'comprensión',
                continuation4: ' y el ',
                highlight5: 'respeto',
                continuation5: ' son importantes.'
            }
        },
        {
            id: '04',
            title: 'Coraje',
            content: {
                text: 'Somos los ',
                highlight1: 'expertos',
                continuation1: ' en nuestro campo. Por lo tanto, es importante tener el ',
                highlight2: 'coraje',
                continuation2: ' de ',
                highlight3: 'hacer lo correcto',
                continuation3: ' sabiendo que es por el ',
                highlight4: 'bien',
                continuation4: ' de la persona que pone su ',
                highlight5: 'confianza',
                continuation5: ' en nosotros.'
            }
        }
    ];

    const handleAppointmentClick = () => {
        if (window.location.pathname === '/' || window.location.pathname === '/agendar') {
            const formSection = document.getElementById('appointment-form');
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            localStorage.setItem('scrollToAppointment', 'true');
            window.location.href = '/';
        }
    };

    const renderContent = (content) => {
        const parts = [];
        let currentText = content.text;

        // Agregar todas las partes de contenido dinámicamente
        Object.keys(content).forEach((key, index) => {
            if (key.startsWith('highlight')) {
                const num = key.replace('highlight', '');
                const continuationKey = `continuation${num}`;

                parts.push(
                    <span key={`text-${index}`}>{currentText}</span>
                );
                parts.push(
                    <strong key={`highlight-${index}`}>{content[key]}</strong>
                );

                if (content[continuationKey]) {
                    parts.push(
                        <span key={`continuation-${index}`}>{content[continuationKey]}</span>
                    );
                    currentText = '';
                }
            }
        });

        return parts;
    };

    return (
        <section className="values-section" ref={sectionRef}>
            <div className="values-container">

                {/* Header */}
                <div className={`values-header ${isVisible ? 'animate-in' : ''}`}>
                    <span className="section-tag">Nuestros Valores</span>
                    <h2 className="values-title">
                        Nuestro trabajo está fuertemente determinado por nuestros valores fundamentales
                    </h2>
                </div>

                {/* Values Grid */}
                <div className="values-grid">
                    {values.map((value, index) => (
                        <div
                            key={value.id}
                            className={`value-card ${isVisible ? 'animate-in' : ''}`}
                            style={{ animationDelay: `${index * 0.3}s` }}
                        >
                            <div className="card-inner">

                                {/* Number */}
                                <div className="value-number">{value.id}.</div>

                                {/* Title */}
                                <h3 className="value-title">{value.title}</h3>

                                {/* Content */}
                                <p className="value-content">
                                    {renderContent(value.content)}
                                </p>

                                {/* Hover Effect */}
                                <div className="card-hover-effect"></div>

                            </div>
                        </div>
                    ))}
                </div>

               

                {/* Decorative Elements */}
                <div className="decorative-bg">
                    <div className="bg-shape shape-1"></div>
                    <div className="bg-shape shape-2"></div>
                    <div className="bg-shape shape-3"></div>
                </div>

            </div>
        </section>
    );
};

export default ValuesSection;