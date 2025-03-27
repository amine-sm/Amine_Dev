import React from "react";
import { motion } from "framer-motion";
import "./styles.scss";

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="footer-content">
        <p className="copyright">
          &copy; 2025 - Tous droits réservés. Conçu  par{" " }
          <a href="https://votreportfolio.com" target="_blank" rel="noopener noreferrer">
      Amine Sm
          </a>
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;