import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Disclaimer from './Disclaimer';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import SubscriptionPlans from './SubscriptionPlans';
import Dashboard from './dashboard';
import Homepage from './homepage';
import Aboutus from './Aboutus';
import Startup from './Startup';
import StartupProfile from './StartupProfile';
import Merchant from './Merchant';
import MerchantProfile from './MerchantProfile';
import ContactForm from './ContactForm';
import AllCategory from './AllCategory';
import BusinessProfile from './BusinessProfile';
import Business2Customer from './Customer';
import InformationTechnology from './InformationTechnology';
import Healthcare from './Healthcare';
import Finance from './Financial';
import Resources from './Resources';
import Energy from './Energy';
import InvestorPage from './InvestorPage';
import InvestorConnect from './InvestorConnect';
import InvestorProfile from './InvestorProfile';
import NavMenu from './NavMenu';
import Kairaa from './Kairaa'
import Dpiit2 from './Dpiit2';
import Dpiit1 from './Dpiit1';
import ApplicationStatusPage from './ApplicationStatusPage';
import GstVerificationForm from './GstVerificationForm';
import Form  from './Form';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';
import ScrollToTop from './ScrollToTop'; // Import ScrollToTop
import Faq from './Faq';
import ForgetPassword from './ForgetPassword';


const App = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  useEffect(() => {
    const hasVisitedBefore = sessionStorage.getItem('hasVisitedBefore');

    if (!hasVisitedBefore) {
      setShowDisclaimer(true);
      sessionStorage.setItem('hasVisitedBefore', 'true'); 
    }
  }, []);

  const closeDisclaimer = () => {
    setShowDisclaimer(false);
  };

  return (
    <Router>
      {showDisclaimer && <Disclaimer onClose={closeDisclaimer} />}  
      <Header />
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <Routes>
        
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/subscriptionplan" element={<SubscriptionPlans />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/Startup1" element={<StartupProfile />} />
        <Route path='/dpiit2' element={<Dpiit2 />} />
        <Route path='/dpiit1' element={<Dpiit1 />} />
        <Route path='/navmenu5' element={<NavMenu />} />
        <Route path='/application' element={<ApplicationStatusPage />} />
        <Route path='/gstverificationform' element={<GstVerificationForm />} />
        <Route path='/form' element={<Form />} />
        <Route path='/Kairaa78' element={<Kairaa />} />
        <Route path='/Investor1' element={<InvestorPage />} />
        <Route path='/InvestorCont1' element={<InvestorConnect />} />
        <Route path='/Investorprofile' element={<InvestorProfile />} />
        <Route path="/merchant" element={<Merchant />} />
        <Route path="/MerchantProfile" element={<MerchantProfile />} />
        <Route path="/contactus" element={<ContactForm />} />
        <Route path="/allcategory" element={<AllCategory />} />
        <Route path="/b2b" element={<BusinessProfile />} />
        <Route path="/b2c" element={<Business2Customer />} />
        <Route path="/IT" element={<InformationTechnology />} />
        <Route path="/Healthcare" element={<Healthcare />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/resource" element={<Resources />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/Faq12" element={<Faq/>}/>
        <Route path="/termsandcondition" element={<TermsAndConditions/>}/>
        <Route path="/forgetpassword1" element={<ForgetPassword/>}/>
      </Routes>
      <Footer />
    </Router>

  );
};

export default App;

