import ContactFooter from "../Components/ContactFooter/ContactFooter";
import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/PageHeader/PageHeader";

const ServicesScreen = () => {
    return (
        <>
            <PageHeader title="Servicios" currentPage="services" />
            <h1>Our Services</h1>
            <p>Details about the services we offer.</p>
            <ContactFooter />
            <Footer />
        </>
    );
};

export default ServicesScreen;