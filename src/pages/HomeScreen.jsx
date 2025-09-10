import DentalHero from '../Components/Hero/DentalHero';
import AboutSection from '../Components/AboutSection/AboutSection';
import ServicesSection from '../Components/ServicesSection/ServicesSection';   
import VideoGallery from '../Components/VideoGallery/VideoGallery'; 
import AppointmentForm from '../Components/AppointmentForm/AppointmentForm';
import DoctorProfile from '../Components/DoctorProfile/DoctorProfile';
import Testimonials from '../Components/Testimonials/Testimonials';
import ContactFooter from '../Components/ContactFooter/ContactFooter';
import Footer from '../Components/Footer/Footer';


const HomeScreens = () => {
    return (
        <>
            <DentalHero />
            <AboutSection />
            <ServicesSection />
            <VideoGallery />
            <AppointmentForm />
            <DoctorProfile />
            <Testimonials />
            <ContactFooter />
            <Footer />
        </>
    );
}

export default HomeScreens;
