import "tailwindcss/tailwind.css";
import Link from "next/link";
import styles from "./projects.module.scss";
import { motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

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
            <Link href="projects">Projects</Link>
          </motion.div>
          <motion.div
            className={styles.button}
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <Link href="/aboutme">About me</Link>
          </motion.div>
        </div>
      </div>
      <div>
        <h3 className={styles.title}>Crafting Creativity with a Tech Twist</h3>
        <p className={styles.text}>
          {" "}
          I'm Rucsandra, a proud 2000 baby from Timișoara. With a blend of
          technical prowess and boundless curiosity, I've embarked on a journey
          that intertwines the worlds of engineering and design. After
          completing my Bachelor's in Software Engineering at Polytechnic
          University of Timișoara, I shifted gears and pursued a Master's in
          Graphic Design at West University of Timișoara to explore my creative
          side.
          <br></br>
          <br></br>Through my academic journey, I've cultivated a unique
          perspective that merges{" "}
          <span className={styles.span}>analytical thinking</span> with{" "}
          <span className={styles.span}>artistic expression</span>. Whether I'm
          crafting user interfaces or designing captivating visuals, my work is
          always infused with a blend of precision and creativity. I'm
          passionate about pushing boundaries and seeking inspiration from every
          corner of the world.<br></br>
          <br></br>So, whether you're seeking a tech-minded troubleshooter or a
          creative mind with an eye for detail, rest assured that I bring both
          professionalism and passion to the table.
        </p>
        <div className={styles.roundedDiv}>
          {" "}
          <div className={styles.connectContainer}>
            <p className={styles.connect}>Let's get to know each other !</p>
          </div>
          <div className={styles.iconContainer}>
            <a
              href="https://www.linkedin.com/in/rucsandra-stefan/"
              target="_blank"
              className={styles.iconLink}
            >
              {" "}
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                <p className={styles.iconLabel}> LinkedIn</p>
              </div>
            </a>
            <a
              href="https://github.com/rucsandrastefan"
              target="_blank"
              className={styles.iconLink}
            >
              {" "}
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faGithub} size="2x" />
                <p className={styles.iconLabel}> Github</p>
              </div>
            </a>
            <a
              href="https://www.figma.com/@rucsandra"
              target="_blank"
              className={styles.iconLink}
            >
              {" "}
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faFigma} size="2x" />
                <p className={styles.iconLabel}> Figma</p>
              </div>
            </a>
            <a href="mailto:rucsandrastefan@outlook.com" target="_blank">
              {" "}
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                <p className={styles.iconLabel}> E-mail</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
