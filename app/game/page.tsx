import CardStack from "@/components/CardStack";
import {
  UnoCard0,
  UnoCard2,
  UnoCard4w,
  UnoCardSkip,
} from "@/components/Custom/UnoCards";
import PlayerCards from "@/components/PlayerCards";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const gamePage = () => {
  return (
    <div>
      <div>
        <div className="flex h-screen items-center justify-around overflow-hidden">
          <div className="players-list bg-(--background) overflow-y-auto h-[80vh] w-[33vh] rounded-xl">
            <div className="m-4">
              {Array.from({ length: 4 }, (_, i) => (
                <div key={i} className="player flex items-center mb-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h1 className="ml-2 text-gray-800">Player {i + 1}</h1>
                </div>
              ))}
            </div>
          </div>
          <div className="game-table h-[80vh] w-[80vh] rounded-xl bg-(--background) flex items-center justify-center relative">
            {/* <CardTable /> */}
            <div className="absolute z-3 rotate-0">
              <UnoCard0 size="sm" color="blue" />
            </div>
            <div className="absolute z-2 rotate-45">
              <UnoCard2 size="sm" color="red" />
            </div>
            <div className="absolute z-1 -rotate-45">
              <UnoCardSkip size="sm" color="red" />
            </div>
            <div className="absolute z-0 rotate-0">
              <UnoCard4w size="sm" color="" />
            </div>
          </div>
          <div className="Player h-[80vh] w-[33vh] rounded-xl bg-(--background) flex flex-col justify-between">
            <div className="overflow-y-auto m-4">
              <PlayerCards />
            </div>
            <CardStack className="flex items-center justify-center h-80 mx-4 mb-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default gamePage;
