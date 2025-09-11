import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/PageHeader/PageHeader";

const GaleryScreen = () => {
    return (
        <div>
            <PageHeader title="Galería" currentPage="galeria" />
            <h1>Galería</h1>

            {/* Aquí iría el contenido de la galería */}
            <Footer />
        </div>
    );
};

export default GaleryScreen;