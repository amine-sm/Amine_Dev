import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageHeaderContent from "../../components/header/PageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaDev, FaApple, FaDatabase, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import "./styles.scss";

function About() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    fallbackInView: true,
  });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="about-section"
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <PageHeaderContent headerText="About Me" icon={<BsInfoCircleFill size={40} />} />

      <motion.div 
        className="about-container"
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -50 }} 
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} 
          transition={{ duration: 1, delay: 0.7 }}
        >
          <h2>Who am I?</h2>
          <p>
            I am <strong>Mohammed El Amine Said Mansour</strong>, a passionate developer specializing in web and modern technologies.
            As a <strong>full-stack</strong> developer, I mainly work with <strong>React</strong> and <strong>Node.js</strong>.
          </p>
        </motion.div>
      </motion.div>

      {/* Education & Experience */}
      <motion.div 
        className="experience-education"
        initial={{ opacity: 0, y: 50 }} 
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="section-header">
          <h3>My Background</h3>
          <div className="divider"></div>
          <p>Professional and academic journey</p>
        </div>

        <div className="timeline-container">
          <div className="timeline">
            {/* Education First */}
            <div className="timeline-section">
              <div className="section-title">
                <FaGraduationCap className="icon" />
                <h4>Education</h4>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">2020 - 2023</div>
                  <h5>Bachelor's in Computer Science</h5>
                  <div className="timeline-company">USTO University</div>
                  <ul className="timeline-description">
                    <li>Specialized in software engineering and web development</li>
                    <li>Final year project: <strong>Real estate web application - ImmoSmart</strong></li>
                    <li>Graduated with honors</li>
                  </ul>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">2024 - 2026</div>
                  <h5>Master's in Artificial Intelligence and Its Applications</h5>
                  <div className="timeline-company">Current Studies</div>
                </div>
              </div>
            </div>
            {/* Experience Second */}
            <div className="timeline-section">
              <div className="section-title">
                <FaBriefcase className="icon" />
                <h4>Experience</h4>
              </div>

         

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">March 2023 - April 2023</div>
                  <h5>Internship - Satellite Development Center</h5>
                  <div className="timeline-company">CDS</div>
                  <ul className="timeline-description">
                    <li>Developed internal applications using Node.js and PostgreSQL</li>
                    <li>Improved automation processes for enterprise applications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="personal-info"
        initial={{ opacity: 0, y: 50 }} 
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
        transition={{ duration: 1, delay: 1 }}
      >
        <h3>Personal Information</h3>
        <ul>
          <li><strong>Name:</strong> Mohammed El Amine Said Mansour</li>
          <li><strong>Age:</strong> 22 years</li>
          <li><strong>Email:</strong> mohammedelaminesaidmansour@gmail.com</li>
          <li><strong>Location:</strong> Oran,Algeria</li>
        </ul>
      </motion.div>
    </motion.section>
  );
}

export default About;
