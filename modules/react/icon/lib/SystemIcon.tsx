import * as React from 'react';
import {iconColors} from '@workday/canvas-kit-react/tokens';
import {CanvasSystemIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/styled';
import Icon, {IconProps} from './Icon';
import {createComponent} from '@workday/canvas-kit-react/common';

export interface SystemIconStyles {
  /**
   * The accent color of the SystemIcon. This overrides `color`.
   */
  accent?: string;
  /**
   * The accent color of the SystemIcon on hover. This overrides `colorHover`.
   */
  accentHover?: string;
  /**
   * The background color of the SystemIcon.
   * @default transparent
   */
  background?: string;
  /**
   * The background color of the SystemIcon on hover.
   * @default transparent
   */
  backgroundHover?: string;
  /**
   * The color of the SystemIcon. This defines `accent` and `fill`. `color` may be overriden by `accent` and `fill`.
   * @default iconColors.standard
   */
  color?: string;
  /**
   * The hover color of the SystemIcon. This defines `accentHover` and `fillHover`. `colorHover` may be overriden by `accentHover` and `fillHover`.
   * @default iconColors.hover
   */
  colorHover?: string;
  /**
   * The fill color of the SystemIcon. This overrides `color`.
   */
  fill?: string;
  /**
   * The fill color of the SystemIcon on hover. This overrides `colorHover`.
   */
  fillHover?: string;
}

export interface SystemIconProps
  extends SystemIconStyles,
    Omit<IconProps, 'src' | 'color' | 'type' | 'background'> {
  /**
   * The icon to display from `@workday/canvas-system-icons-web`.
   */
  icon: CanvasSystemIcon;
  /**
   * The size of the SystemIcon in `px`.
   */
  size?: number | string | undefined;
  className?: string; //investigate more
}

export const systemIconStyles = ({
  accent,
  accentHover,
  background = 'transparent',
  backgroundHover = 'transparent',
  color = iconColors.standard,
  colorHover = iconColors.hover,
  fill,
  fillHover,
}: SystemIconStyles): CSSObject => ({
  '& .wd-icon-fill': {
    fill: fill || color,
  },
  ':hover .wd-icon-fill': {
    fill: fillHover || colorHover,
  },
  '& .wd-icon-accent, & .wd-icon-accent2': {
    fill: accent || color,
  },
  ':hover .wd-icon-accent, :hover .wd-icon-accent2': {
    fill: accentHover || colorHover,
  },
  '& .wd-icon-background': {
    fill: background,
  },
  ':hover .wd-icon-background': {
    fill: backgroundHover,
  },
});

const SystemIcon = createComponent('span')({
  displayName: 'SystemIcon',
  Component: (
    {
      background = 'transparent',
      backgroundHover = 'transparent',
      color = iconColors.standard,
      colorHover = iconColors.hover,
      icon,
      accent,
      accentHover,
      fill,
      fillHover,
      size,
      shouldMirror,
      ...elemProps
    }: SystemIconProps,
    ref,
    Element
  ) => {
    const style = systemIconStyles({
      accent,
      accentHover,
      background,
      backgroundHover,
      color,
      colorHover,
      fill,
      fillHover,
    });

    return (
      <Icon
        src={icon}
        type={CanvasIconTypes.System}
        size={size}
        as={Element}
        shouldMirror={shouldMirror}
        ref={ref}
        styles={style}
        {...elemProps}
      />
    );
  },
});

export default SystemIcon;
