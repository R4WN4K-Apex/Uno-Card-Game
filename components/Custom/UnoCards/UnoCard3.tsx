import {
  UnoCardBottomRightSymbol,
  UnoCardColors,
  UnoCardHeight,
  UnoCardMainSymbol,
  UnoCardProps,
  UnoCardTopLeftSymbol,
  UnoCardWidth,
} from "@/types/CardTypes";

const UnoCard3: React.FC<UnoCardProps> = ({ color, size, value }) => {
  return (
    <svg
      width={UnoCardWidth[size]}
      height={UnoCardHeight[size]}
      viewBox="0 0 242 362"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M201 1H41C18.9086 1 1 18.9086 1 41V321C1 343.091 18.9086 361 41 361H201C223.091 361 241 343.091 241 321V41C241 18.9086 223.091 1 201 1Z"
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M201 21H41C29.9543 21 21 29.9543 21 41V321C21 332.046 29.9543 341 41 341H201C212.046 341 221 332.046 221 321V41C221 29.9543 212.046 21 201 21Z"
        fill={UnoCardColors[color]}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M181 81C92.6344 81 21 152.634 21 241C21 263.091 38.9086 281 61 281C149.366 281 221 209.366 221 121C221 98.9086 203.091 81 181 81Z"
        fill="white"
      />
      <path d={UnoCardMainSymbol[value]} fill={UnoCardColors[color]} />
      <path d={UnoCardTopLeftSymbol[value]} fill="white" />
      <path d={UnoCardBottomRightSymbol[value]} fill="white" />
    </svg>
  );
};
export default UnoCard3;
