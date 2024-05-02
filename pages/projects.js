import "tailwindcss/tailwind.css";
import Link from "next/link";
import styles from "./projects.module.scss";
import { motion } from "framer-motion";
import React from "react";

export default function Projects() {
  return (
    <main className={styles.main}>
     
      <div className={styles.header}>
      <Link href="/">
          <button className={styles.logo}>
            <span>Rucsandra</span>
            <span>Stefan</span>
          </button>
        </Link>
        <div className={styles.buttonsContainer}>
          <motion.div
            className={styles.button}
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <Link href="projects">
              Projects
            </Link>
          </motion.div>
          <motion.div
            className={styles.button}
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <Link href="/aboutme">
              About me
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="grid grid-cols-2  gap-y-1 justify-items-center gap-x-2 px-32 mt-24 ">
  {/* Box 1 */}
  <div className="bg-gray-300  aspect-square p-4 w-3/4 h-4/5 rounded-[10px] relative"> <img src="Graphite.png" alt="Thumbnail 1" class="absolute inset-0 w-full h-full object-contain rounded-[10px]" />
  <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100">
      <p className={styles.p}> TOKIO</p>
    </div></div>
  {/* Box 2 */}
  <div className="bg-gray-300 p-4 aspect-square w-3/4 h-4/5 rounded-[10px]">Thumbnail 2</div>
  {/* Box 3 */}
  <div className="bg-gray-300 p-4 aspect-square w-3/4 h-4/5 rounded-[10px]">Thumbnail 3</div>
  {/* Box 4 */}
  <div className="bg-gray-300 p-4 aspect-square w-3/4 h-4/5 rounded-[10px]">Thumbnail 4</div>
</div>

     


    
    </main>
  );
}
