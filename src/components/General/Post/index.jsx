import React from 'react';
import Comment from '../Comment'
import styles from './post.module.css';

const Post = ({
  content,
  dateCreated,
  comments,
}) => (
  <div className={styles.post}>
    <img
      src="assets/defaultProfile.png"
      alt="profileImage"
    />
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