import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import PageHeaderContent from "../../components/header/PageHeader";
import { BsTools } from "react-icons/bs";
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp, FaLaravel, FaDatabase } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiElectron } from "react-icons/si";
import "./styles.scss";

function Skills() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  const categories = [
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Electron.js", icon: <SiElectron /> },
        { name: "PHP", icon: <FaPhp /> },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React.js", icon: <FaReact /> },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "SQL", icon: <FaDatabase /> }
      ]
    }
  ];

  return (
    <motion.section
      id="skills"
      className="skills-section"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: -50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <PageHeaderContent headerText="Skills" icon={<BsTools size={40} />} />
      </motion.div>

      <motion.p
        className="skills-content"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        My technical journey is built on modern technologies such as JavaScript (ES6+), React.js, Node.js, 
        Express.js, Electron.js, MongoDB, MySQL, PostgreSQL, PHP, and other web development tools.
      </motion.p>

      <div className="skills-container">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="skills-category"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.9, delay: 0.3 * index }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="skill-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.7, delay: 0.2 * i }}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
