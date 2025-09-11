import ContactFooter from "../Components/ContactFooter/ContactFooter";
import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/PageHeader/PageHeader";
import ServicesAll from "../Components/ServicesAll/ServicesAll";


const ServicesScreen = () => {
    return (
        <>
            <PageHeader title="Servicios" currentPage="services" />
            <ServicesAll /> 
            <Footer />
        </>
    );
};

export default ServicesScreen;