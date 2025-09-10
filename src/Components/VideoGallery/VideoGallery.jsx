import React, { useState } from 'react';
import './VideoGallery.css';

const VideoGallery = ({ videos = [], title = "Galería de Procedimientos", subtitle = "Conoce nuestros tratamientos dentales" }) => {

    // Videos por defecto - Solo dos videos
    const defaultVideos = [
        {
            id: 1,
            title: "Ortodoncia Invisible",
            description: "Alineadores transparentes para una sonrisa perfecta",
            thumbnail: "/api/placeholder/400/300",
            videoUrl: "/VideoGallery.mp4", // Tu video local
            duration: "4:30"
        },
        {
            id: 2,
            title: "Brackets Tradicionales", 
            description: "Tratamiento de ortodoncia con brackets metálicos",
            thumbnail: "/api/placeholder/400/300",
            videoUrl: "/VideoGallery2.mp4", // Tu segundo video
            duration: "3:45"
        }
    ];

    const videosToShow = videos.length > 0 ? videos : defaultVideos;

    return (
        <section className="video-gallery">
            <div className="gallery-container">

                {/* Grid de videos */}
                <div className="videos-grid">
                    {videosToShow.map((video) => (
                        <div
                            key={video.id}
                            className="video-card"
                        >
                            <div className="video-thumbnail">
                                <video
                                    src={video.videoUrl}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="video-element"
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default VideoGallery;