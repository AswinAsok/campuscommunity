import React from "react";
import EventsCard from "../../Components/EventsCard/EventsCard";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <>
      <div className={styles.main_conatiner}>
        <div className={styles.first_view_container}>
          <Navbar />
          <div className={styles.first_view_texts}>
            <div className={styles.first_view_heading}>GTech MuLearn CUCEK</div>
            <div className={styles.first_view_description}>
              A nonprofit network of high school coding clubs and makers around
              the world, for the students, by the students.
            </div>
            <div className={styles.join_button}>
              <button className={styles.join_campus_button}>Join Us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
