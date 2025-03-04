import {
  UnoCardColors,
  UnoCardHeight,
  UnoCardProps,
  UnoCardWidth,
} from "@/types/CardTypes";

const UnoCard5: React.FC<UnoCardProps> = ({ color, size }) => {
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
      <path
        d="M85 121V161V181H125C136.08 181 145 189.92 145 201C145 212.08 136.08 221 125 221C113.92 221 105 212.08 105 201H85C85 223.16 102.84 241 125 241C147.16 241 165 223.16 165 201C165 178.84 147.16 161 125 161H105V141H125H161V121H125H105H85Z"
        fill={UnoCardColors[color]}
      />
      <path
        d="M31 31V51V61H51C56.54 61 61 65.46 61 71C61 76.54 56.54 81 51 81C45.46 81 41 76.54 41 71H31C31 82.08 39.92 91 51 91C62.08 91 71 82.08 71 71C71 59.92 62.08 51 51 51H41V41H51H69V31H51H41H31Z"
        fill="white"
      />
      <path
        d="M211 331V311V301H191C185.46 301 181 296.54 181 291C181 285.46 185.46 281 191 281C196.54 281 201 285.46 201 291H211C211 279.92 202.08 271 191 271C179.92 271 171 279.92 171 291C171 302.08 179.92 311 191 311H201V321H191H173V331H191H201H211Z"
        fill="white"
      />
    </svg>
  );
};
export default UnoCard5;
