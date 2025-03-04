import {
  UnoCardProps,
  UnoCardColors,
  UnoCardHeight,
  UnoCardWidth,
} from "@/types/CardTypes";

const UnoCard0: React.FC<UnoCardProps> = ({ color, size }) => {
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
        d="M121 121C98.9086 121 81 138.909 81 161V201C81 223.092 98.9086 241 121 241C143.091 241 161 223.092 161 201V161C161 138.909 143.091 121 121 121ZM121 141C132.046 141 141 149.954 141 161V201C141 212.046 132.046 221 121 221C109.954 221 101 212.046 101 201V161C101 149.954 109.954 141 121 141Z"
        fill={UnoCardColors[color]}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51 31.0001C39.9543 31.0001 31 39.9544 31 51.0001V71.0001C31 82.0458 39.9543 91.0001 51 91.0001C62.0457 91.0001 71 82.0458 71 71.0001V51.0001C71 39.9544 62.0457 31.0001 51 31.0001ZM51 41.0001C56.5228 41.0001 61 45.4773 61 51.0001V71.0001C61 76.523 56.5228 81.0001 51 81.0001C45.4772 81.0001 41 76.523 41 71.0001V51.0001C41 45.4773 45.4772 41.0001 51 41.0001Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M191 271C179.954 271 171 279.954 171 291V311C171 322.046 179.954 331 191 331C202.046 331 211 322.046 211 311V291C211 279.954 202.046 271 191 271ZM191 281C196.523 281 201 285.477 201 291V311C201 316.523 196.523 321 191 321C185.477 321 181 316.523 181 311V291C181 285.477 185.477 281 191 281Z"
        fill="white"
      />
    </svg>
  );
};
export default UnoCard0;
