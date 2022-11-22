import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export const Acordeon = () => {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        ¿Cuales son los metodos de Pago?                        
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='parrafo'>
                        Puede pagarlo en efectivo, o targeta o credito a tasa 0%
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        ¿Cuanto tarda el envio?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='parrafo'>
                        Una vez realizado toda la documentacion de la transferencia del vehiculo lo puede retirar
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}