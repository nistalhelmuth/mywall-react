import React from 'react';
import { Link } from 'react-router-dom';
import styles from './comment.module.css';

const Comment = ({
  content,
  dateCreated,
  created_by,
}) => (
  <div className={styles.comment}>
    <Link to={`/profile/${created_by.id}`}>
      <img
        src="assets/defaultProfile.png"
        alt="profileImage"
      />
    </Link>
    <div className={styles.content}>
      <p className={styles.text}>
        {created_by.name}
      </p>
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
