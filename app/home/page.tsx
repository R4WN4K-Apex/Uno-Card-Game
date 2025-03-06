import LeaderBoard from "@/components/LeaderBoard";
import RoomMembers from "@/components/RoomMembers";
import Image from "next/image";
import Link from "next/link";

const homePage = () => {
  return (
    <div className="h-screen flex flex-col justify-evenly items-center">
      <Link href="/">
        <Image src="/Uno/Icon.svg" alt="hero" height="100" width="100" />
      </Link>
      <div className="flex justify-around items-center w-full">
        <div className="leaderboard flex flex-col items-center">
          <LeaderBoard className="w-64 h-96" />
        </div>
        <div className="bg-(--background) h-96 w-64 rounded-xl flex flex-col items-center justify-around relative">
          <h1 className="font-medium">UNO Game</h1>
          <Image src="/Uno/Stack.svg" alt="stack" height="130" width="146" />
          <button className="btn-secondary">
            <Link href="/game">Join Game</Link>
          </button>
        </div>
        <RoomMembers />
      </div>
    </div>
  );
};
export default homePage;
