import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeaderContent from "../../components/header/PageHeader";
import { BsEnvelopeFill, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import emailjs from "emailjs-com";
import "./styles.scss";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_yhjc3sm", "template_77powzk", e.target, "qDoLpPTdeZqPPGBC1")
      .then(() => {
        setIsSent(true);
        setTimeout(() => setIsSent(false), 3000);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => console.log("Échec de l'envoi du message:", error));
  };

  // Animation d'apparition et disparition
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.section
        id="contact"
        className="contact-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.3 }} // Visible quand 30% de la section est à l'écran
      >
        <PageHeaderContent headerText="Contact Me" icon={<BsEnvelopeFill size={40} />} />

        <motion.form className="contact-form" onSubmit={handleSubmit} variants={sectionVariants}>
          <motion.input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <motion.input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <motion.textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <motion.button type="submit" whileHover={{ scale: 1.05, backgroundColor: "#005bb5" }} whileTap={{ scale: 0.95 }}>
            Send Message
          </motion.button>
        </motion.form>

        <AnimatePresence>
          {isSent && (
            <motion.p className="success-message" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
              Message sent successfully! ✅
            </motion.p>
          )}
        </AnimatePresence>

        <motion.div className="social-links" initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: false, amount: 0.3 }}>
          <h3>Follow Me</h3>
          <div className="social-icons">
      
            <a href="https://www.linkedin.com/in/mohammed-el-amine-said-mansour-a3560b358/" target="_blank" rel="noopener noreferrer"><BsLinkedin size={28} /></a>
            <a href="https://github.com/amine-sm" target="_blank" rel="noopener noreferrer"><BsGithub size={28} /></a>
            <a href="mailto:mohammedelaminesaidmansour@gmail.com" className="email-link">
  <BsEnvelopeFill size={28} /></a>
          </div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}

export default Contact;
