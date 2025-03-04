import { Trophy } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const LeaderBoard = ({ className }: { className: string }) => {
  return (
    <div className={`${className} bg-(--background) rounded-xl`}>
      <div className="container flex items-center m-2">
        <div className="size-12 flex items-center justify-center border-2 border-[#DDE2ED] bg-white rounded-full">
          <Trophy className="text-(--gold)" />
        </div>
        <h1 className="font-semibold ml-2 text-(--black)">Leaderboard</h1>
      </div>
      <div className="w-[80%] border border-(--black) mx-6" />
      <div className="ranks mx-6 mt-6 gap-2 overflow-y-auto">
        <div className="h-64 overflow-y-auto p-4 rounded-lg shadow-md">
          {Array.from({ length: 9 }, (_, i) => (
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
    </div>
  );
};
export default LeaderBoard;
