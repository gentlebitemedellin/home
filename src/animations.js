export const slideDown = (delay) => {
    return {
      initial: {
        y: -50, // Viene desde arriba
        opacity: 0 // Corregido de 'opassity' a 'opacity'
      },
      animate: {
        y: 0,
        opacity: 1, // Corregido de 'opassity' a 'opacity'
        transition: {
          delay,
          duration: 0.5
        }
      }
    }
  }
  export const slideUp = (delay) => {
    return {
      initial: {
        y: 50, // Viene desde abajo
        opacity: 0 // Corregido de 'opassity' a 'opacity'
      },
      animate: {
        y: 0,
        opacity: 1, // Corregido de 'opassity' a 'opacity'
        transition: {
          delay,
          duration: 0.5
        }
      }
    }
  }
  export const slideSide = (direction = "left", delay) => {
    return {
      initial: {
        x: direction === "left" ? -100 : 100, // Viene desde la izquierda o derecha
        opacity: 0 // Corregido de 'opassity' a 'opacity'
      },
      animate: {
        x: 0,
        opacity: 1, // Corregido de 'opassity' a 'opacity'
        transition: {
          delay,
          duration: 0.5
        }
      }
    }
  }
  
// animations.js
export const smoothUpDown = (delay = 0) => {
    return {
        initial: {
        y: 0,
        },
        animate: {
        y: 30,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 10,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 5,
            delay: delay + Math.random() * 0.5, // Agrega un pequeño delay aleatorio
        },
        },
    };
}
export const upDown = (delay = 0) => {
  return {
    initial: {
      y: 0,
    },
    animate: {
      y: 30,
      transition: {
        type: "spring",
        stiffness: 300, // Aumenta la rigidez para hacer la animación más rápida
        damping: 5, // Reduce la amortiguación para hacer la animación más rápida
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.2, // Reduce la duración para hacer la animación más rápida
        delay, // Agrega un pequeño delay aleatorio
      },
    },
  };
};