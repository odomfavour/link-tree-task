import React, {useEffect} from "react";
import ContactForm from "../../components/Contact/ContactForm";
import Footer from "../../components/Footer/Footer";

const ContactPage = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  
  return (
    <section>
      <ContactForm />
      <div className="container">
        <Footer />
      </div>
    </section>
  );
};

export default ContactPage;
