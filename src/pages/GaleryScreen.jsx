import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/PageHeader/PageHeader";
import QualityGallery from "../Components/QualityGallery/QualityGallery";

const GaleryScreen = () => {
    return (
        <div>
            <PageHeader title="Galería" currentPage="galeria" />
            <QualityGallery />
           
            {/* Aquí iría el contenido de la galería */}
            <Footer />
        </div>
    );
};

export default GaleryScreen;