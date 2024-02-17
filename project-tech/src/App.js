import './App.css';
import Layout from './Components/Layout';
import AboutUs from './Page/AboutUs';
import Blogs from './Page/Blogs';
import ContactForm from './Page/ContactUs';
import ServicePage from './Page/Service';
import RoutePage from './Routes';

function App() {
  return (
    <>
    <RoutePage/>
    <ServicePage/>
    <AboutUs/>
    <Blogs/>
    <ContactForm/>
    </>
  );
}

export default App;
