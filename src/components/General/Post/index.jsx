import React from 'react';
import { Link } from 'react-router-dom';
import Comment from '../Comment'
import styles from './post.module.css';

const Post = ({
  content,
  dateCreated,
  comments,
  created_by,
}) => (
  <div className={styles.post}>
    <Link to={`/profile/${created_by.id}`}>
      <img
        src="assets/defaultProfile.png"
        alt="profileImage"
      />
    </Link>
    <div className={styles.content}>
      <p className={styles.text}>
        {content}
      </p>
      <p>
        {dateCreated}
      </p>
      <div className={styles.footer}>
        <p>
          Comment
        </p>
        <p>
          {comments && "View Comments"}
        </p>
      </div>
      {
        comments && (
          <div className={styles.bot}>
            {
              comments.map((comment) => (
                <Comment
                  content={comment.content}
                  dateCreated={comment.dateCreated}
                  created_by={comment.created_by}
                />
              ))
            }
          </div>
        )
      }
    </div>
  </div>
)

export default Post;