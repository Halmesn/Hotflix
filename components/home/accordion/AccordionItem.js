import * as styled from './styles';

import { useState } from 'react';

export default function AccordionItem({ header, body }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((previousState) => !previousState);
  const animation = isOpen ? 'open' : 'close';

  return (
    <styled.Item>
      <styled.Question onClick={toggleOpen}>
        {header}
        <styled.Icon animate={animation} variants={styled.iconVariants}>
          <styled.CloseIcon />
        </styled.Icon>
      </styled.Question>
      <styled.Answer animate={animation} variants={styled.answerVariants}>
        <span>{body}</span>
      </styled.Answer>
    </styled.Item>
  );
}
