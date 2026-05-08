import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
  fadeUp:   { hidden: { opacity: 0, y: 60 },          visible: { opacity: 1, y: 0 } },
  fadeLeft: { hidden: { opacity: 0, x: -60 },         visible: { opacity: 1, x: 0 } },
  fadeRight:{ hidden: { opacity: 0, x: 60 },          visible: { opacity: 1, x: 0 } },
  scaleIn:  { hidden: { opacity: 0, scale: 0.85 },    visible: { opacity: 1, scale: 1 } },
  flipUp:   { hidden: { opacity: 0, rotateX: 30, y: 40 }, visible: { opacity: 1, rotateX: 0, y: 0 } },
  slideUp:  { hidden: { opacity: 0, y: 100, skewY: 3 },   visible: { opacity: 1, y: 0, skewY: 0 } },
};

export default function ScrollReveal({
  children, variant = 'fadeUp', delay = 0,
  duration = 0.85, threshold = 0.12, className = '', style = {},
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
