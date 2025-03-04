import {
  UnoWildCardHeight,
  UnoWildCardProps,
  UnoWildCardWidth,
} from "@/types/CardTypes";

const UnoCardWild: React.FC<UnoWildCardProps> = ({ size }) => {
  return (
    <svg
      width={UnoWildCardWidth[size]}
      height={UnoWildCardHeight[size]}
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
        fill="black"
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
        d="M32.75 181C25.2373 199.542 21 219.763 21 241C21 263.091 38.9086 281 61 281L121 181H32.75Z"
        fill="#FFAA00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M121 181L61 281C128.129 281 185.502 239.611 209.25 181H121Z"
        fill="#00AA00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M181 81C113.871 81 56.4976 122.389 32.75 181H121L181 81Z"
        fill="#FF5555"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M181 81L121 181H209.25C216.763 162.458 221 142.237 221 121C221 98.9086 203.091 81 181 81Z"
        fill="#5555FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.9375 56C32.0593 60.6355 31 65.6908 31 71C31 76.5229 35.4772 81 41 81L56 56H33.9375Z"
        fill="#FFAA00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56 56L41 81C57.7822 81 72.1256 70.6527 78.0625 56H56Z"
        fill="#00AA00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M71 31C54.2178 31 39.8744 41.3473 33.9375 56H56L71 31Z"
        fill="#FF5555"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M71 31L56 56H78.0625C79.9407 51.3645 81 46.3092 81 41C81 35.4771 76.5228 31 71 31Z"
        fill="#5555FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M163.938 306C162.059 310.635 161 315.691 161 321C161 326.523 165.477 331 171 331L186 306H163.938Z"
        fill="#FFAA00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M186 306L171 331C187.782 331 202.126 320.652 208.062 306H186Z"
        fill="#00AA00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M201 281C184.218 281 169.874 291.347 163.938 306H186L201 281Z"
        fill="#FF5555"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M201 281L186 306H208.062C209.941 301.364 211 296.309 211 291C211 285.477 206.523 281 201 281Z"
        fill="#5555FF"
      />
      <path
        d="M181 80.9999C113.871 80.9999 56.4976 122.389 32.75 181C25.2373 199.542 21 219.763 21 241C21 263.091 38.9086 281 61 281C128.129 281 185.502 239.611 209.25 181C216.763 162.458 221 142.237 221 121C221 98.9085 203.091 80.9999 181 80.9999Z"
        stroke="white"
        strokeWidth="4"
      />
      <path
        d="M71 30.9999C54.2178 30.9999 39.8744 41.3472 33.9375 55.9999C32.0593 60.6353 31 65.6907 31 70.9999C31 76.5227 35.4772 80.9999 41 80.9999C57.7822 80.9999 72.1256 70.6526 78.0625 55.9999C79.9407 51.3644 81 46.309 81 40.9999C81 35.477 76.5228 30.9999 71 30.9999Z"
        stroke="white"
        strokeWidth="4"
      />
      <path
        d="M201 281C184.218 281 169.874 291.347 163.938 306C162.059 310.635 161 315.691 161 321C161 326.523 165.477 331 171 331C187.782 331 202.126 320.653 208.062 306C209.941 301.364 211 296.309 211 291C211 285.477 206.523 281 201 281Z"
        stroke="white"
        strokeWidth="4"
      />
    </svg>
  );
};
export default UnoCardWild;
