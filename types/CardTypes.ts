export type UnoCardProps = {
  color: "red" | "blue" | "green" | "yellow" | "";
  size: "sm" | "md" | "lg" | "100%";
};

export type IconColorProps = {
  color: "red" | "blue" | "green" | "yellow";
  className?: string;
};

export const UnoCardColors: Record<UnoCardProps["color"], string> = {
  red: "#FF5555",
  blue: "#5555FF",
  green: "#55AA55",
  yellow: "#FFAA00",
  "": "",
};

export const UnoCardHeight: Record<UnoCardProps["size"], string> = {
  sm: "100",
  md: "191",
  lg: "318",
  "100%": "100%",
};

export const UnoCardWidth: Record<UnoCardProps["size"], string> = {
  sm: "66.67",
  md: "128",
  lg: "212",
  "100%": "100%",
};

export const fill: Record<IconColorProps["color"], string> = {
  red: "#FF5555",
  blue: "#5555FF",
  green: "#55AA55",
  yellow: "#FFAA00",
};
