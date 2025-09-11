import ContactFooter from "../Components/ContactFooter/ContactFooter";
import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/PageHeader/PageHeader";
import ServicesAll from "../Components/ServicesAll/ServicesAll";
import ConsultationCTA from "../Components/ConsultationCTA/ConsultationCTA";


const ServicesScreen = () => {
    return (
        <>
            <PageHeader title="Servicios" currentPage="services" />
            <ServicesAll /> 
            <ConsultationCTA /> 
            <Footer />
        </>
    );
};

export default ServicesScreen;