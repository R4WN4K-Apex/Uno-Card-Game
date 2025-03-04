import {
  UnoCard2w,
  UnoCard4w,
  UnoCard0,
  UnoCard1,
  UnoCard2,
  UnoCard3,
  UnoCard4,
  UnoCard5,
  UnoCard6,
  UnoCard7,
  UnoCard8,
  UnoCard9,
  UnoCardReverse,
  UnoCardSkip,
  UnoCardWild,
  UnoCardBack,
} from "@/components/Custom/UnoCards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Deck = () => {
  return (
    <div className="py-8 min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div className="container flex items-center justify-center">
        <UnoCard0 size="100%" color="blue" />
        <UnoCard1 size="100%" color="blue" />
        <UnoCard2 size="100%" color="blue" />
        <UnoCard3 size="100%" color="blue" />
        <UnoCard4 size="100%" color="blue" />
        <UnoCard5 size="100%" color="blue" />
        <UnoCard6 size="100%" color="blue" />
        <UnoCard7 size="100%" color="blue" />
        <UnoCard8 size="100%" color="blue" />
        <UnoCard9 size="100%" color="blue" />
        <UnoCardSkip size="100%" color="blue" />
        <UnoCardSkip size="100%" color="blue" />
        <UnoCardReverse size="100%" color="blue" />
        <UnoCardReverse size="100%" color="blue" />
        <UnoCard2w size="100%" color="blue" />
        <UnoCard2w size="100%" color="blue" />
      </div>
      <div className="container flex items-center justify-center">
        <UnoCard0 size="100%" color="green" />
        <UnoCard1 size="100%" color="green" />
        <UnoCard2 size="100%" color="green" />
        <UnoCard3 size="100%" color="green" />
        <UnoCard4 size="100%" color="green" />
        <UnoCard5 size="100%" color="green" />
        <UnoCard6 size="100%" color="green" />
        <UnoCard7 size="100%" color="green" />
        <UnoCard8 size="100%" color="green" />
        <UnoCard9 size="100%" color="green" />
        <UnoCardSkip size="100%" color="green" />
        <UnoCardSkip size="100%" color="green" />
        <UnoCardReverse size="100%" color="green" />
        <UnoCardReverse size="100%" color="green" />
        <UnoCard2w size="100%" color="green" />
        <UnoCard2w size="100%" color="green" />
      </div>
      <div className="container flex items-center justify-center">
        <UnoCard0 size="100%" color="red" />
        <UnoCard1 size="100%" color="red" />
        <UnoCard2 size="100%" color="red" />
        <UnoCard3 size="100%" color="red" />
        <UnoCard4 size="100%" color="red" />
        <UnoCard5 size="100%" color="red" />
        <UnoCard6 size="100%" color="red" />
        <UnoCard7 size="100%" color="red" />
        <UnoCard8 size="100%" color="red" />
        <UnoCard9 size="100%" color="red" />
        <UnoCardSkip size="100%" color="red" />
        <UnoCardSkip size="100%" color="red" />
        <UnoCardReverse size="100%" color="red" />
        <UnoCardReverse size="100%" color="red" />
        <UnoCard2w size="100%" color="red" />
        <UnoCard2w size="100%" color="red" />
      </div>
      <div className="container flex items-center justify-center">
        <UnoCard0 size="100%" color="yellow" />
        <UnoCard1 size="100%" color="yellow" />
        <UnoCard2 size="100%" color="yellow" />
        <UnoCard3 size="100%" color="yellow" />
        <UnoCard4 size="100%" color="yellow" />
        <UnoCard5 size="100%" color="yellow" />
        <UnoCard6 size="100%" color="yellow" />
        <UnoCard7 size="100%" color="yellow" />
        <UnoCard8 size="100%" color="yellow" />
        <UnoCard9 size="100%" color="yellow" />
        <UnoCardSkip size="100%" color="yellow" />
        <UnoCardSkip size="100%" color="yellow" />
        <UnoCardReverse size="100%" color="yellow" />
        <UnoCardReverse size="100%" color="yellow" />
        <UnoCard2w size="100%" color="yellow" />
        <UnoCard2w size="100%" color="yellow" />
      </div>
      <div className="container flex">
        <UnoCard4w color="" size="100%" />
        <UnoCardWild color="" size="100%" />
        <UnoCard4w color="" size="100%" />
        <UnoCardWild color="" size="100%" />
        <UnoCard4w color="" size="100%" />
        <UnoCardWild color="" size="100%" />
        <UnoCard4w color="" size="100%" />
        <UnoCardWild color="" size="100%" />
        <UnoCardBack color="" size="100%" />
        <UnoCardBack color="" size="100%" />
        <UnoCardBack color="" size="100%" />
        <UnoCardBack color="" size="100%" />
        <UnoCardBack color="" size="100%" />
        <UnoCardBack color="" size="100%" />
        <UnoCardBack color="" size="100%" />
        <UnoCardBack color="" size="100%" />
      </div>
    </div>
  );
};
export default Deck;
