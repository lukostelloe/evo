import { motion } from 'framer-motion';

const fallingItems = ['🍎', '🍌', '🍇', '🍒', '🍉'];

function FreeFallingElements() {
  return (
    <div className='relative w-screen h-[200px] overflow-hidden bg-blue-100'>
      {fallingItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ y: -100 }} // Start slightly above the screen
          animate={{ y: '100%' }} // Animate to the bottom of the container
          transition={{
            duration: 0.2, // Random fall duration
            ease: 'linear', // Constant falling speed
            delay: 0, // Small random delay
          }}
          className='absolute'
          style={{
            left: `${Math.random() * 100}vw`, // Random horizontal position
            fontSize: '2rem',
          }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}

export default FreeFallingElements;
