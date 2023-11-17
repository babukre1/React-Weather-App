import React from "react";
import { Accordion, AccordionItem, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion";
import { AccordionItemHeading } from "react-accessible-accordion/dist/types/components/AccordionItemHeading";

const Forecast = ({ data }) => {
  return (
    <>
      <label className="titile">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((e, i) => (
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Hello</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
