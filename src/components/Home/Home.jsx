import React from "react";
import styles  from  "./Home.module.css"

export default function Home() {
  return (
    <div className={styles.homeBackground}>
      <div className={styles.homeContainer}>
          <h1>So, you want to travel to</h1>
          <h2>Space</h2>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
          <a>Explore</a>
        </div>
      </div>
  );
};