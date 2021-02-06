import React from 'react';
import styles from './wall.module.css';

const Comment = () => (
  <div className={styles.comment}>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed bibendum purus. In hac habitasse platea dictumst. Cras id nulla tortor. Nam vestibulum vitae dolor in consectetur.
    </p>
    <p>
      20/01/1233
    </p>
  </div>
);

const Post = () => (
  <div className={styles.post}>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed bibendum purus. In hac habitasse platea dictumst. Cras id nulla tortor. Nam vestibulum vitae dolor in consectetur.
    </p>
    <p>
      20/01/1233
    </p>
    <div className={styles.footer}>
      <p>
        comment
      </p>
      <p>
        view
      </p>
    </div>
    {
      true && (
        <div className={styles.bot}>
          {
            [0,0,0].map((post) => (<Comment />))
          }
        </div>
      )
    }
  </div>
)

const Main = ({
  posts
}) => (
  <div className={styles.wall}>
    {
      posts.map((post) => (<Post />))
    }
  </div>
);

export default Main;
