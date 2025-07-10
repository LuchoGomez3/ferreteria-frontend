import { CustomIconProps } from "./index";
import { sizes } from "../Icon";

export const Cart = ({ size, color }: CustomIconProps) => {
  return (
    <svg
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={sizes[size]}
      height={sizes[size]}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
      />
    </svg>
  );
};
