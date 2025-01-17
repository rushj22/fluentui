import * as React from 'react';
import { ComponentProps, ComponentState } from '@fluentui/react-utilities';

/**
 * Slider ref
 */
export interface SliderPublicRef {
  /**
   * Gets the current value of the Slider.
   */
  value: number | undefined;

  /**
   * Sets focus to the Slider's thumb.
   */
  focus: () => void;
}

/**
 * Names of the shorthand properties in SliderProps
 */
export type SliderSlots = {
  /**
   * The **Slider's** base. It is used to visibly display the min and max selectable values.
   */
  rail: React.HTMLAttributes<HTMLElement>;

  /**
   * The wrapper around the Slider component.
   */
  sliderWrapper: React.HTMLAttributes<HTMLElement>;

  /**
   * The wrapper around the Slider's track. It is primarily used to handle the positioning of the track.
   */
  trackWrapper: React.HTMLAttributes<HTMLElement>;

  /**
   * The bar showing the current selected area adjacent to the **Slider's** thumb.
   */
  track: React.HTMLAttributes<HTMLElement>;

  /**
   * The wrapper around the Slider's thumb. It is primarily used to handle the dragging animation from translateX.
   */
  thumbWrapper: React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLDivElement>;

  /**
   * The draggable icon used to select a given value from the **Slider**.
   */
  thumb: React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>;

  /**
   * The area in which the **Slider's** rail allows for the thumb to be dragged.
   */
  activeRail: React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLDivElement>;
};

export interface SliderCommon extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * The starting value for an `uncontrolled` **Slider**.
   * Mutually exclusive with `value` prop.
   */
  defaultValue?: number;

  /**
   * The current value of the `controlled` **Slider**.
   * Mutually exclusive with `defaultValue` prop.
   */
  value?: number;

  /**
   * The min value of the **Slider**.
   * @default 0
   */
  min?: number;

  /**
   * The max value of the **Slider**.
   * @default 100
   */
  max?: number;

  /**
   * The number of steps that the Slider's `value` will increment upon change. When provided, the Slider
   * will snap to the closest available value.
   */
  step?: number;

  /**
   * The number of steps that the Slider's value will change by during a key press. When provided, the `keyboardSteps`
   * will be separated from the pointer `steps` allowing for the value to go outside of pointer related
   * snapping values.
   *
   * @default `step` or 1
   */
  keyboardStep?: number;

  /**
   *  Whether to render the **Slider** as disabled.
   *
   * @default `false` (renders enabled)
   */
  disabled?: boolean;

  /**
   * Whether to render the **Slider** vertically.
   * @default `false` (renders horizontally)
   */
  vertical?: boolean;

  /**
   * The starting origin point for the Slider.
   * @default min
   */
  origin?: number;

  /**
   * The size of the Slider.
   * @default 'medium'
   */
  size: 'small' | 'medium';

  /**
   * Triggers a callback when the value has been changed. This will be called on every individual step.
   */
  onChange?: (
    ev: React.PointerEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
    data: { value: number },
  ) => void;

  /**
   * The **Slider's** current value label to be read by the screen reader.
   */
  ariaValueText?: (value: number) => string;
}

/**
 * Slider Props
 */
export interface SliderProps extends ComponentProps<Partial<SliderSlots>>, Partial<SliderCommon> {}

/**
 * State used in rendering Slider
 */
export interface SliderState extends ComponentState<SliderSlots>, SliderCommon {
  /**
   * Ref to the root element
   */
  ref: React.RefObject<HTMLElement & SliderPublicRef>;
}
