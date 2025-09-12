import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/PageHeader/PageHeader";
import AppointmentContact from "../Components/AppointmentContact/AppointmentContact";

const ContactScreen = () => {
    return (
        <div>
            <PageHeader title="Contáctanos" />
            <AppointmentContact />
            <Footer />
        </div>
    );
};

export default ContactScreen;