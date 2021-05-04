import * as styled from './AccordionStyles';

import { AccordionIcon } from 'components/icons/AccordionIcon';

import { useState } from 'react';

export default function AccordionItem({ header, body }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <styled.Item>
      <styled.Question onClick={toggleOpen}>
        {header}
        <styled.Icon
          animate={isOpen ? 'open' : 'close'}
          variants={iconVariants}
        >
          <AccordionIcon />
        </styled.Icon>
      </styled.Question>
      <styled.Answer
        animate={isOpen ? 'open' : 'close'}
        variants={answerVariants}
      >
        <span>{body}</span>
      </styled.Answer>
    </styled.Item>
  );
}

const iconVariants = {
  close: { rotate: -45 },
  open: {
    rotate: 0,
    transition: {
      duration: 0.1,
      ease: 'easeInOut',
    },
  },
};

const answerVariants = {
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
