import {
  UnoWildCardBlue,
  UnoWildCardGreen,
  UnoWildCardHeight,
  UnoWildCardProps,
  UnoWildCardRed,
  UnoWildCardWidth,
  UnoWildCardYellow,
} from "@/types/CardTypes";

const UnoCard4w: React.FC<UnoWildCardProps> = ({ size, value }) => {
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
        d="M80.6001 31L61 71V81H85V91H95V81H101V71H95V51H85V71H71.3999L91 31H80.6001Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35 51V61H25V70.9998H35V81H45V70.9998H55V61H45V51H35Z"
        fill="white"
      />
      <path
        d="M161.4 331L181 291V281H157V271H147V281H141V291H147V311H157V291H170.6L151 331H161.4Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M207 311V301H217V291H207V281H197V291H187V301H197V311H207Z"
        fill="white"
      />
      <path
        d="M123.857 131H83.8572C78.3343 131 72.7021 135.043 71.2772 140.03L50.7228 211.97C49.2979 216.957 52.62 221 58.1428 221H98.1428C103.666 221 109.298 216.957 110.723 211.97L131.277 140.03C132.702 135.043 129.38 131 123.857 131Z"
        fill="white"
        stroke="black"
        strokeWidth="2.03962"
      />
      <path d={UnoWildCardRed[value]} fill="#FF5555" />
      <path
        d="M163.857 101H123.857C118.334 101 112.702 105.043 111.277 110.03L90.7228 181.97C89.2979 186.957 92.62 191 98.1428 191H138.143C143.666 191 149.298 186.957 150.723 181.97L171.277 110.03C172.702 105.043 169.38 101 163.857 101Z"
        fill="white"
        stroke="black"
        strokeWidth="2.03962"
      />
      <path d={UnoWildCardBlue[value]} fill="#5555FF" />
      <path
        d="M153.857 161H113.857C108.334 161 102.702 165.043 101.277 170.03L80.7228 241.97C79.2979 246.957 82.62 251 88.1428 251H128.143C133.666 251 139.298 246.957 140.723 241.97L161.277 170.03C162.702 165.043 159.38 161 153.857 161Z"
        fill="white"
        stroke="black"
        strokeWidth="2.03962"
      />
      <path d={UnoWildCardYellow[value]} fill="#FFAA00" />
      <path
        d="M193.857 131H153.857C148.334 131 142.702 135.043 141.277 140.03L120.723 211.97C119.298 216.957 122.62 221 128.143 221H168.143C173.666 221 179.298 216.957 180.723 211.97L201.277 140.03C202.702 135.043 199.38 131 193.857 131Z"
        fill="white"
        stroke="black"
        strokeWidth="2.03962"
      />
      <path d={UnoWildCardGreen[value]} fill="#55AA55" />
    </svg>
  );
};
export default UnoCard4w;
