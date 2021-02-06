import React from 'react';
import Wall from '../General/Wall';
import { connect } from "react-redux";
import styles from './profile.module.css';

const Profile = ({
  posts
}) => (
  <div className={styles.profile}>
    <div className={styles.information}>

    </div>
    <Wall posts={posts}/>
    <div className={styles.friends}>

    </div>
  </div>
);

export default connect(
  (state) => ({
    posts: [0,0], 
  }),
  (dispatch) => ({
    fetchAllPostForUser(values) {
      console.log("fetch all post", values)
    },
    commentPost(values){
      console.log('create comment', values)
    },
    createPost(values) {
      console.log('create post', values)
    }
  }),
)(Profile);
