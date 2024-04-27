// _app.js
import "tailwindcss/tailwind.css";

import Link from "next/link";

export default function aboutme() {
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
              <p
                className="font-bold font-oswald text-xl m-0 p-0 "
               
              >
                STEFAN
              </p>
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
          <p className="text-4xl font-bold text-black pl-8 pt-8 tracking-tighter">
            Who am <span className="text-customViolet">I</span> ?
          </p>
          <div className="w-1/2">
            <div className="pt-4">
              <p className="text-black pl-8 pt-4 text-lg font-semibold">
                I have always considered myself a curious person, driven by a
                desire to experience as many diverse things as possible. After
                completing high school, I pursued my university studies in
                Software Engineering at Politehnica Timișoara. During my third
                year, I embarked on an Erasmus exchange program, which led me to
                live in Madrid for six eye-opening months. Immersed in the
                vibrant culture of Madrid, I found myself captivated by the
                world of visual arts. It was there that I discovered my passion
                for art. Upon completing my Bachelor's degree, I made the
                deliberate choice to delve into a field that allowed me to
                express my creativity more fully. This led me to enroll in the
                Master's program in Graphic Design at the University of West
                Timișoara. My long-term aspiration is to merge{" "}
                <span className="text-green-400 bg-customViolet font-bold">
                  technology
                </span>{" "}
                with{" "}
                <span className="font-bold text-customViolet bg-green-400">
                  creativity
                </span>
                , finding the perfect balance between innovation and design. I
                believe that the field of UI/UX design presents an ideal
                opportunity to blend my technical skills with my passion for
                visual aesthetics, ultimately creating impactful and
                user-centric experiences.
              </p>
              {/* Add more content about yourself here */}
              <p className="pl-8 pt-12 text-xl font-semibold">
                Other things I have worked on:
              </p>
            </div>
          </div>
          <div className="flex justify-around mt-12 mb-8">
            <div className="grid grid-cols-4 gap-12 w-5/6">
              <div className="w-full h-80 bg-black"></div>
              <div className="w-full h-80 bg-black"></div>
              <div className="w-full h-80 bg-black"></div>
              <div className="w-full h-80 bg-black"></div>
            </div>
          </div>
          <div className="justify-items-center text-center">
            <p className="font-semibold">
              If you are looking for a resume, you can download it from{" "}
              <span className="text-customViolet font-bold underline underline-offset-1">
                here
              </span>
              .
            </p>
          </div>
          <div className="justify-items-center text-center bg-customViolet ">
            <p className="font-bold text-4xl mt-8">Social and contact</p>
          </div>
        </div>
      </div>
    </main>
  );
}
