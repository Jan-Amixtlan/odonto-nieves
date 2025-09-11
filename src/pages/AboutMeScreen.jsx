import ContactFooter from "../Components/ContactFooter/ContactFooter";
import Footer from "../Components/Footer/Footer";
import DoctorBio from "../Components/DoctorBio/DoctorBio";
import ValuesSection from "../Components/ValuesSection/ValuesSection";
import OpinionsClients from "../Components/OpinionsClients/OpinionsClients";

const AboutMeScreen = () => {
    return (
        <>
            <h1>About Me</h1>
            
            <DoctorBio />
            <ValuesSection />
            <OpinionsClients />
            <ContactFooter />
            <Footer />
        </>
    );
};

export default AboutMeScreen;
