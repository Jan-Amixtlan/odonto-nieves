import React, { useEffect, useRef, useState } from 'react';
import './QualityGallery.css';

const QualityGallery = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detectar si es móvil
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Si es móvil, mostrar inmediatamente
        if (window.innerWidth <= 768) {
            setIsVisible(true);
        } else {
            // Para desktop, usar IntersectionObserver
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setIsVisible(true);
                        }
                    });
                },
                { threshold: 0.1 }
            );

            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }

            return () => {
                observer.disconnect();
                window.removeEventListener('resize', checkMobile);
            };
        }

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const galleryPairs = [
        {
            pairId: 1,
            before: {
                id: 1,
                image: 'GaleryAntes1.jpg',
                alt: 'Dientes antes del tratamiento - separación dental'
            },
            after: {
                id: 2,
                image: 'GaleryDespues1.jpg',
                alt: 'Sonrisa después del tratamiento - dientes alineados'
            }
        },
        {
            pairId: 2,
            before: {
                id: 3,
                image: 'GaleryAntes2.jpg',
                alt: 'Dientes antes del blanqueamiento'
            },
            after: {
                id: 4,
                image: 'GaleryDespues2.jpg',
                alt: 'Sonrisa después del blanqueamiento'
            }
        },
        {
            pairId: 3,
            before: {
                id: 5,
                image: 'GaleryAntes3.jpg',
                alt: 'Dientes antes de las carillas'
            },
            after: {
                id: 6,
                image: 'GaleryDespues3.jpg',
                alt: 'Sonrisa después de las carillas'
            }
        },
        {
            pairId: 4,
            before: {
                id: 7,
                image: 'GaleryAntes4.jpg',
                alt: 'Dientes antes de las carillas'
            },
            after: {
                id: 8,
                image: 'GaleryDespues4.jpg',
                alt: 'Sonrisa después de las carillas'
            }
        },
        {
            pairId: 5,
            before: {
                id: 9,
                image: 'GaleryAntes5.jpg',
                alt: 'Dientes antes de las carillas'
            },
            after: {
                id: 10,
                image: 'GaleryDespues5.jpg',
                alt: 'Sonrisa después de las carillas'
            }
        },
        {
            pairId: 6,
            before: {
                id: 11,
                image: 'GaleryAntes6.jpg',
                alt: 'Dientes antes de las carillas'
            },
            after: {
                id: 12,
                image: 'GaleryDespues6.jpg',
                alt: 'Sonrisa después de las carillas'
            }
        },
         {
            pairId: 7,
            before: {
                id: 13,
                image: 'GaleryAntes7.jpg',
                alt: 'Dientes antes de las carillas'
            },
            after: {
                id: 14,
                image: 'GaleryDespues7.jpg',
                alt: 'Sonrisa después de las carillas'
            }
        },
        {
            pairId: 8,
            before: {
                id: 15,
                image: 'GaleryAntes8.jpg',
                alt: 'Dientes antes de las carillas'
            },
            after: {
                id: 16,
                image: 'GaleryDespues8.jpg',
                alt: 'Sonrisa después de las carillas'
            }
        },
        {
            pairId: 9,
            before: {
                id: 17,
                image: 'GaleryAntes9.jpg',
                alt: 'Dientes antes de las carillas'
            },
            after: {
                id: 18,
                image: 'GaleryDespues9.jpg',
                alt: 'Sonrisa después de las carillas'
            }
        },
        {
            pairId: 10,
            before: {
                id: 19,
                image: 'GaleryAntes10.jpg',
                alt: 'Dientes antes de las carillas'
            },
            after: {
                id: 20,
                image: 'GaleryDespues10.jpg',
                alt: 'Sonrisa después de las carillas'
            }
        },
    ];

    const handleImageClick = (image) => {
        console.log('Abriendo imagen:', image.alt);
        // Aquí podrías implementar un modal o lightbox
    };

    return (
        <section className="quality-gallery" ref={sectionRef}>
            <div className="gallery-container">

                {/* Header */}
                <div className={`gallery-header ${isVisible ? 'animate-in' : ''}`}>
                    <h2 className="gallery-title">
                        Una muestra de la calidad que ofrecemos
                    </h2>
                </div>

                {/* Gallery Grid */}
                <div className="gallery-pairs-container">
                    {galleryPairs.map((pair, pairIndex) => (
                        <div
                            key={pair.pairId}
                            className={`gallery-pair ${isVisible ? 'animate-in' : ''}`}
                            style={{ animationDelay: `${pairIndex * 0.3}s` }}
                        >
                            {/* Antes Image */}
                            <div
                                className={`gallery-item before-item ${isVisible ? 'animate-in' : ''}`}
                                style={{ animationDelay: `${pairIndex * 0.3 + 0.1}s` }}
                                onClick={() => handleImageClick(pair.before)}
                            >
                                <div className="image-container">
                                    <img
                                        src={pair.before.image}
                                        alt={pair.before.alt}
                                        className="gallery-image"
                                    />
                                    
                                    <div className="type-label before-label">
                                        Antes
                                    </div>
                                    
                                    
                                </div>
                            </div>


                            {/* Después Image */}
                            <div
                                className={`gallery-item after-item ${isVisible ? 'animate-in' : ''}`}
                                style={{ animationDelay: `${pairIndex * 0.3 + 0.3}s` }}
                                onClick={() => handleImageClick(pair.after)}
                            >
                                <div className="image-container">
                                    <img
                                        src={pair.after.image}
                                        alt={pair.after.alt}
                                        className="gallery-image"
                                    />
                                    
                                    <div className="type-label after-label">
                                        Después
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className={`gallery-cta ${isVisible ? 'animate-in' : ''}`}>
                    <p className="cta-text">
                        ¿Te gustaría ver más casos de éxito? Agenda tu consulta y descubre cómo podemos transformar tu sonrisa.
                    </p>
                    <button
                        className="cta-button"
                        onClick={() => console.log('Navegando a galería completa')}
                    >
                        Ver más casos
                    </button>
                </div>

            </div>
        </section>
    );
};

export default QualityGallery;