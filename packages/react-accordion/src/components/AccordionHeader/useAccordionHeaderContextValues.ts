import * as React from 'react';
import {
  AccordionHeaderContextValue,
  AccordionHeaderState,
  AccordionHeaderContextValues,
} from './AccordionHeader.types';

export function useAccordionHeaderContextValues(state: AccordionHeaderState): AccordionHeaderContextValues {
  const { disabled, expandIconPosition, open, size } = state;

  const accordionHeader = React.useMemo<AccordionHeaderContextValue>(
    () => ({
      disabled,
      expandIconPosition,
      open,
      size,
    }),
    [disabled, expandIconPosition, open, size],
  );

  return { accordionHeader };
}
