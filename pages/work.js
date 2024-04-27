// _app.js
import "tailwindcss/tailwind.css";
import Link from "next/link";

export default function work() {
  return (
    <main className=" bg-white min-h-screen">
      <div className="flex min-h-full">
        <div className="flex-col pl-8 pt-4">
          <Link href="/">
            <div className="text-black hover:text-white hover:bg-black transition duration-300 ease-in-out ">
              <p
                className="font-bold font-oswald text-xl m-0 p-0 tracking-tighter"
                style={{ marginBottom: "-0.5em" }}
              >
                RUCSANDRA
              </p>
              <p className="font-bold font-oswald text-xl m-0 p-0 ">STEFAN</p>
              {/* <p className="font-bold font-Oswald text-xl m-0 p-0 ml-1">,</p> */}
            </div>
          </Link>
        </div>

        <div className="flex-grow font-semibold font-sans text-black p-4 pl-28 pt-6 text-lg">
          <p>visual designer & software engineer</p>
        </div>
        <div className="flex-col text-black p-4 pr-24 justify-end">
          <Link href="/work">
            <p className="pb-2 font-sans font-bold text-xl hover:text-customViolet cursor-pointer">
              Work
            </p>
          </Link>
          <Link href="/aboutme">
            <p className="font-sans font-bold text-xl hover:text-green-400 cursor-pointer">
              About me
            </p>
          </Link>
        </div>
      </div>

      <div className="flex pt-4">
        <div className="w-full">
          <p
            className="text-9xl font-semibold text-black pl-6 pt-32 tracking-tighter"
            style={{ color: "#B091C9" }}
          >
            Work
          </p>
          <div className="pt-4">
            <p className="text-black pl-8 pt-8 text-2xl font-semibold">
              Some information about yourself goes here.
            </p>
            {/* Add more content about yourself here */}
          </div>
        </div>
      </div>
    </main>
  );
}
