import * as styled from './AccordionStyles';

import { AccordionClose } from 'components/icons/AccordionClose';

export default function AccordionItem({ header, body }) {
  return (
    <styled.Item>
      <styled.Question>
        {header}
        <styled.Icon>
          <AccordionClose />
        </styled.Icon>
      </styled.Question>
      <styled.Answer>
        <span>{body}</span>
      </styled.Answer>
    </styled.Item>
  );
}
