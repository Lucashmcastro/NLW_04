import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/Profile.module.css";

export function Profile() {

  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/49847888?s=400&u=e0bd2588e0fd94d959a491ee8805511f607b81e3&v=4"
        alt="Lucas Castro"
      />
      <div> <strong>Lucas Castro</strong>
      <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
      </p>
      </div>
    </div>
  );
}
