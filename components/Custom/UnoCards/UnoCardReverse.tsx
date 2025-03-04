import {
  UnoCardColors,
  UnoCardHeight,
  UnoCardProps,
  UnoCardWidth,
} from "@/types/CardTypes";

const UnoCardReverse: React.FC<UnoCardProps> = ({ color, size }) => {
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
        d="M121 116L131 126L91 166C81 176 81 196 91 206L111 186L151 146L161 156V116H121Z"
        fill={UnoCardColors[color]}
      />
      <path
        d="M121 246L111 236L151 196C161 186 161 166 151 156L131 176L91 216L81 206V246H121Z"
        fill={UnoCardColors[color]}
      />
      <path
        d="M51 30.9999L56 35.9999L36 55.9999C31 60.9999 31 70.9999 36 75.9999L46 65.9999L66 45.9999L71 50.9999V30.9999H51Z"
        fill="white"
      />
      <path
        d="M51 95.9999L46 90.9999L66 70.9999C71 65.9999 71 55.9999 66 50.9999L56 60.9999L36 80.9999L31 75.9999V95.9999H51Z"
        fill="white"
      />
      <path
        d="M191 266L196 271L176 291C171 296 171 306 176 311L186 301L206 281L211 286V266H191Z"
        fill="white"
      />
      <path
        d="M191 331L186 326L206 306C211 301 211 291 206 286L196 296L176 316L171 311V331H191Z"
        fill="white"
      />
    </svg>
  );
};
export default UnoCardReverse;
