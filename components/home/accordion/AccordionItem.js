import * as styled from './styles';

import { useState } from 'react';

export default function AccordionItem({ header, body }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((previousState) => !previousState);

  return (
    <styled.Item>
      <styled.Question onClick={toggleOpen}>
        {header}
        <styled.Icon className={isOpen && 'open'}>
          <styled.CloseIcon />
        </styled.Icon>
      </styled.Question>
      <styled.Answer className={isOpen ? 'open' : 'close'}>
        <span>{body}</span>
      </styled.Answer>
    </styled.Item>
  );
}
