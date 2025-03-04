import {
  UnoCardProps,
  UnoCardColors,
  UnoCardHeight,
  UnoCardWidth,
  UnoCardMainSymbol,
  UnoCardTopLeftSymbol,
  UnoCardBottomRightSymbol,
} from "@/types/CardTypes";

const UnoCard0: React.FC<UnoCardProps> = ({ color, size, value }) => {
  return (
    <svg
      width={UnoCardWidth[size]}
      height={UnoCardHeight[size]}
      viewBox="0 0 242 362"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M201 1.00012H41C18.9086 1.00012 1 18.9087 1 41.0001V321C1 343.092 18.9086 361 41 361H201C223.091 361 241 343.092 241 321V41.0001C241 18.9087 223.091 1.00012 201 1.00012Z"
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M201 21.0001H41C29.9543 21.0001 21 29.9544 21 41.0001V321C21 332.046 29.9543 341 41 341H201C212.046 341 221 332.046 221 321V41.0001C221 29.9544 212.046 21.0001 201 21.0001Z"
        fill={UnoCardColors[color]}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M181 81C92.6344 81 21 152.634 21 241C21 263.091 38.9086 281 61 281C149.366 281 221 209.366 221 121C221 98.9086 203.091 81 181 81Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={UnoCardMainSymbol[value]}
        fill={UnoCardColors[color]}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={UnoCardTopLeftSymbol[value]}
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={UnoCardBottomRightSymbol[value]}
        fill="white"
      />
    </svg>
  );
};
export default UnoCard0;
