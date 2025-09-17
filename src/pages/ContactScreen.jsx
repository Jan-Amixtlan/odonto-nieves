import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/PageHeader/PageHeader";
import LocationContact from "../Components/LocationContact/LocationContact";
import AppointmentForm from "../Components/AppointmentForm/AppointmentForm";
import AppointmentContact from "../Components/AppointmentContact/AppointmentContact";

const ContactScreen = () => {
    return (
        <div>
            <PageHeader title="Contacto" />
            <AppointmentForm /> 
            <AppointmentContact />
            <LocationContact />
            <Footer />
        </div>
    );
};

export default ContactScreen;