import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/PageHeader/PageHeader";
import AppointmentContact from "../Components/AppointmentContact/AppointmentContact";
import LocationContact from "../Components/LocationContact/LocationContact";

const ContactScreen = () => {
    return (
        <div>
            <PageHeader title="Contáctanos" />
            <AppointmentContact />
            <LocationContact />
            <Footer />
        </div>
    );
};

export default ContactScreen;