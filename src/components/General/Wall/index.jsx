import React from 'react';
import Post from '../Post'
import styles from './wall.module.css';

const Main = ({
  posts
}) => (
  <div className={styles.wall}>
    {
      posts ? (
        <>
          {
            posts.map((post) => (
              <Post
                content={post.content}
                dateCreated={post.dateCreated}
                comments={post.comments}
              />
            ))
          }
        </>
      ) : (
        <p>
          No posts to display
        </p>
      )
    }
  </div>
);

export default Main;
