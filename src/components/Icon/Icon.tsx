"use client";
import classNames from "classnames";
import { Color } from "../Color/Color";

import styles from "./Icon.module.css";
import * as CustomIcons from "./icons";

export const sizes = {
  xxsmall: 14,
  xsmall: 18,
  small: 20,
  medium: 24,
  large: 32,
  xlarge: 40,
  xxxlarge: 52,
} as const;

export type Size = keyof typeof sizes;

export type Props = {
  color?: string;
  className?: string;
  onClick?: () => void;
  size?: Size;
  name: keyof typeof CustomIcons;
};

export const Icon = ({
  color,
  className,
  name,
  onClick,
  size = "small",
}: Props) => {
  let icon;

  if (name && !!CustomIcons[name]) {
    const CustomIcon = CustomIcons[name];
    icon = <CustomIcon color={color ?? Color.primary10} size={size} />;
  }

  return (
    <div
      className={classNames(
        styles.icon,
        { [styles.clickable]: !!onClick },
        className
      )}
      style={{ width: sizes[size], height: sizes[size] }}
      onClick={onClick}
    >
      {icon}
    </div>
  );
};
