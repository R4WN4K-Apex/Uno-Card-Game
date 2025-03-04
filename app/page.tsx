import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen flex items-center justify-evenly">
      <div className="hero">
        <Image
          className=""
          src="/Uno/Icon.svg"
          alt="hero"
          height="100"
          width="100"
        />
        <div>
          <>
            <h1 className="font-black text-[1.625rem] text-(--black)">
              Welcome to
            </h1>
            <h1 className="font-black text-[1.625rem] text-(--primary)">
              UNO Friends
            </h1>
          </>
          <p className="text-(--black) text-[0.875rem]">
            Uno is a card game you play with friends in person
          </p>
        </div>
      </div>
      <div>
        <Link href="/home" className="m-4">
          <button className="cursor-pointer btn-primary">Get Started</button>
        </Link>
      </div>
    </div>
  );
};
export default page;
