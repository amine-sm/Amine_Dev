import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import './styles.scss';
import profilePic from '../../assets/amine2.jpg';

function Home() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='home' id='home'>
      <div className='home__container'>
        {/* Texte animé */}
        <motion.div 
          className='home__text-wrapper'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <h1 className='typing-animation'>
            <Typewriter
              options={{
                strings: ['Welcome', 'Bienvenue', 'مرحبا'],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 50,
              }}
            />
          </h1>

          {/* Effet Typewriter pour l'introduction complète */}
          <p className='typing-animation delay highlight'>
            <Typewriter
              options={{
                strings: [
                  'I am Mohammed El Amine Said Mansour, Full Stack Developer'
                ],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 50,
              }}
            />
          </p>

          <p className='intro-text'>
            🎓 <strong>Software Engineer</strong> & Master's student in <strong>Artificial Intelligence</strong>.<br />
            🚀 Passionate about <strong>high-performance web applications</strong>.<br />
            💻 Expert in <strong>JavaScript, React, Node.js, Express, MongoDB</strong>.
          </p>
          
          {/* Bouton animé */}
          <motion.button 
            className='contact-button'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleContactClick}
          >
            Let's discuss your project 🚀
          </motion.button>
        </motion.div>

        {/* Image avec effet Parallax */}
        <motion.div 
          className='home__image'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img 
            src={profilePic} 
            alt='Amine Sm' 
            className='profile-pic'
            initial={{ borderRadius: '20%' }}
            animate={{ borderRadius: '50%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
