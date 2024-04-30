"use client";
import useMousePosition from "./utils/useMousePosition";
import Link from "next/link";
import styles from "./page.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 600 : 40;
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <button className={styles.logo}>
          <span>Rucsandra</span>
          <span>Stefan</span>
        </button>
        <div className={styles.buttonsContainer}>
          <motion.div
            className={styles.button}
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          
          >
            <Link href="/projects">
              Projects
            </Link>
          </motion.div>
          <motion.button
            className={styles.button}
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
           <Link href="/aboutme">
              About me
            </Link>
          </motion.button>
        </div>
      </div>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          I'm a <span>selectively skilled</span> designer with strong focus on
          producing high quality digital experiences.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
          {" "}
          Hello! <br></br> I am Rucsandra - a <span>software engineer</span> and{" "}
          <span>visual designer</span> focusing on UI/UX design.
        </p>
      </div>
    </main>
  );
}
