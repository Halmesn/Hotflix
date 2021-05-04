export const icon = {
  close: { rotate: -45 },
  open: {
    rotate: 0,
    transition: {
      duration: 0.1,
      ease: 'easeInOut',
    },
  },
};

export const answer = {
  close: { opacity: 0, height: 0 },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};
