import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/PageHeader/PageHeader";
import QualityGallery from "../Components/QualityGallery/QualityGallery";
import ServicesShowcase from "../Components/ServicesShowcase/ServicesShowcase";
import ConsultationGalery from "../Components/ConsultationGalery/ConsultationGalery";

const GaleryScreen = () => {
    return (
        <div>
            <PageHeader title="Galería" currentPage="galeria" />
            <QualityGallery />
            <ServicesShowcase />
            <ConsultationGalery />

            {/* Aquí iría el contenido de la galería */}
            <Footer />
        </div>
    );
};

export default GaleryScreen;