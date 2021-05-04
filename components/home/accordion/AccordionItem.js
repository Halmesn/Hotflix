import * as styled from './AccordionStyles';
import { icon, answer } from 'styles/animationVariants';

import { AccordionIcon } from 'components/icons/AccordionIcon';

import { useState } from 'react';

export default function AccordionItem({ header, body }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((previousState) => !previousState);
  const animation = isOpen ? 'open' : 'close';

  return (
    <styled.Item>
      <styled.Question onClick={toggleOpen}>
        {header}
        <styled.Icon animate={animation} variants={icon}>
          <AccordionIcon />
        </styled.Icon>
      </styled.Question>
      <styled.Answer animate={animation} variants={answer}>
        <span>{body}</span>
      </styled.Answer>
    </styled.Item>
  );
}
