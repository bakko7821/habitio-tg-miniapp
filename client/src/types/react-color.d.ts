declare module "react-color" {
  import * as React from "react";

  export interface ColorResult {
    hex: string;
    rgb: {
      r: number;
      g: number;
      b: number;
      a?: number;
    };
    hsl: {
      h: number;
      s: number;
      l: number;
      a?: number;
    };
  }

  export interface ChromePickerStyles {
    default?: {
      picker?: React.CSSProperties;
      saturation?: React.CSSProperties;
      hue?: React.CSSProperties;
      color?: React.CSSProperties;
      input?: React.CSSProperties;
      swatch?: React.CSSProperties;
    };
  }

  export interface ChromePickerProps {
    color?: string;
    onChange?: (color: ColorResult) => void;
    disableAlpha?: boolean;
    styles?: ChromePickerStyles;
  }

  export const ChromePicker: React.FC<ChromePickerProps>;
}
