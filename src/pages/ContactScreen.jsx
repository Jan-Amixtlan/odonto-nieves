import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/PageHeader/PageHeader";
import LocationContact from "../Components/LocationContact/LocationContact";
import AppointmentForm from "../Components/AppointmentForm/AppointmentForm";

import DentalFooterContact from "../Components/DentalFooterContact/DentalFooterContact";

const ContactScreen = () => {
    return (
        <div>
            <PageHeader title="Contacto" currentPage="contactanos" />
            <AppointmentForm /> 

            <LocationContact />
            <DentalFooterContact />
            <Footer />
        </div>
    );
};

export default ContactScreen;