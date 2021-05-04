import * as styled from './AccordionStyles';

import AccordionItem from './AccordionItem';

import faqsData from 'content/faqs';

export default function Accordion() {
  return (
    <styled.Accordion as="section">
      <styled.Wrapper>
        <styled.Title>Frequently Asked Questions</styled.Title>
        <styled.ItemContainer>
          {faqsData.map(({ id, header, body }) => (
            <AccordionItem key={id} header={header} body={body} />
          ))}
        </styled.ItemContainer>
      </styled.Wrapper>
    </styled.Accordion>
  );
}
