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
    
    </main>
  );
}
