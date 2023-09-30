import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Anabia shajjad</span>
              <span className={styles.date}>01.12.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p className={styles}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              minima enim illo laboriosam accusamus, eum corrupti. Ea ipsa natus
              nihil, animi amet maiores corrupti sunt alias a harum nobis
              voluptas.
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p className={styles}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              minima enim illo laboriosam accusamus, eum corrupti. Ea ipsa natus
              nihil, animi amet maiores corrupti sunt alias a harum nobis
              voluptas.
            </p>
            <p className={styles}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              minima enim illo laboriosam accusamus, eum corrupti. Ea ipsa natus
              nihil, animi amet maiores corrupti sunt alias a harum nobis
              voluptas.
            </p>
            <p className={styles}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              minima enim illo laboriosam accusamus, eum corrupti. Ea ipsa natus
              nihil, animi amet maiores corrupti sunt alias a harum nobis
              voluptas.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
