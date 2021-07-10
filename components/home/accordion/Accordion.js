import * as styled from './styles';

import AccordionItem from './AccordionItem';
import Subscribe from '../subscribe/Subscribe';

import faqsData from 'data/static/faqs';

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
        <Subscribe />
      </styled.Wrapper>
    </styled.Accordion>
  );
}
