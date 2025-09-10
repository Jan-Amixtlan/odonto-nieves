import DentalHero from '../Components/Hero/DentalHero';
import AboutSection from '../Components/AboutSection/AboutSection';
import ServicesSection from '../Components/ServicesSection/ServicesSection';   
import VideoGallery from '../Components/VideoGallery/VideoGallery'; 
import AppointmentForm from '../Components/AppointmentForm/AppointmentForm';


const HomeScreens = () => {
    return (
        <>
            <DentalHero />
            <AboutSection />
            <ServicesSection />
            <VideoGallery />
            <AppointmentForm />
            
        </>
    );
}

export default HomeScreens;
