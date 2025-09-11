import ContactFooter from "../Components/ContactFooter/ContactFooter";
import Footer from "../Components/Footer/Footer";
import DoctorBio from "../Components/DoctorBio/DoctorBio";
import ValuesSection from "../Components/ValuesSection/ValuesSection";

const AboutMeScreen = () => {
    return (
        <>
            <h1>About Me</h1>
            <ValuesSection />
            <DoctorBio />
            <ContactFooter />
            <Footer />
        </>
    );
};

export default AboutMeScreen;
