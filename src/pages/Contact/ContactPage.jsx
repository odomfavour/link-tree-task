import React from "react";
import ContactForm from "../../components/Contact/ContactForm";
import Footer from "../../components/Footer/Footer";

const ContactPage = () => {
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
