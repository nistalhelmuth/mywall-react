import React from 'react';
import styles from './comment.module.css';

const Comment = ({
  content,
  dateCreated,
}) => (
  <div className={styles.comment}>
    <img
      src="assets/defaultProfile.png"
      alt="profileImage"
    />
    <div className={styles.content}>
      <p>
        {content}
      </p>
      <p>
        {dateCreated}
      </p>
    </div>
  </div>
);

export default Comment;
