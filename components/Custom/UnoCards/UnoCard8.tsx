import {
  UnoCardColors,
  UnoCardHeight,
  UnoCardProps,
  UnoCardWidth,
} from "@/types/CardTypes";

const UnoCard8: React.FC<UnoCardProps> = ({ color, size }) => {
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
        d="M121 121C104.431 121 91 134.431 91 151C91 157.795 93.3172 163.97 97.125 169C87.3533 176.28 81 187.824 81 201C81 223.16 98.84 241 121 241C143.16 241 161 223.16 161 201C161 187.824 154.647 176.28 144.875 169C148.683 163.97 151 157.795 151 151C151 134.431 137.569 121 121 121ZM121 141C126.523 141 131 145.477 131 151C131 156.523 126.523 161 121 161C115.477 161 111 156.523 111 151C111 145.477 115.477 141 121 141ZM119 181C119.674 180.932 120.307 181 121 181C132.08 181 141 189.92 141 201C141 212.08 132.08 221 121 221C109.92 221 101 212.08 101 201C101 190.612 108.89 182.02 119 181Z"
        fill={UnoCardColors[color]}
      />
      <path
        d="M51 31C42.7157 31 36 37.7156 36 46C36 49.3974 37.1586 52.4852 39.0625 55C34.1767 58.6398 31 64.412 31 71C31 82.08 39.92 91 51 91C62.08 91 71 82.08 71 71C71 64.412 67.8234 58.6398 62.9375 55C64.8414 52.4852 66 49.3974 66 46C66 37.7156 59.2843 31 51 31ZM51 41C53.7614 41 56 43.2386 56 46C56 48.7614 53.7614 51 51 51C48.2386 51 46 48.7614 46 46C46 43.2386 48.2386 41 51 41ZM50 60.9999C50.3368 60.9639 50.6537 60.9999 51 60.9999C56.54 60.9999 61 65.46 61 71C61 76.54 56.54 81 51 81C45.46 81 41 76.54 41 71C41 65.8062 44.9452 61.5101 50 60.9999Z"
        fill="white"
      />
      <path
        d="M191 331C182.716 331 176 324.284 176 316C176 312.603 177.159 309.515 179.062 307C174.177 303.36 171 297.588 171 291C171 279.92 179.92 271 191 271C202.08 271 211 279.92 211 291C211 297.588 207.823 303.36 202.938 307C204.841 309.515 206 312.603 206 316C206 324.284 199.284 331 191 331ZM191 321C193.761 321 196 318.761 196 316C196 313.239 193.761 311 191 311C188.239 311 186 313.239 186 316C186 318.761 188.239 321 191 321ZM190 301C190.337 301.036 190.654 301 191 301C196.54 301 201 296.54 201 291C201 285.46 196.54 281 191 281C185.46 281 181 285.46 181 291C181 296.194 184.945 300.49 190 301Z"
        fill="white"
      />
    </svg>
  );
};
export default UnoCard8;
