import React from 'react';
import Wall from '../General/Wall';
import { connect } from "react-redux";
import styles from './main.module.css';

const Main = ({
  posts
}) => (
  <div className={styles.main}>
    <Wall posts={posts}/>
  </div>
);

export default connect(
  (state) => ({
    posts: [0,0,0,0,0], 
  }),
  (dispatch) => ({
    fetchAllPost(values) {
      console.log("fetch all post", values)
    },
    commentPost(values){
      console.log('create comment', values)
    },
    createPost(values) {
      console.log('create post', values)
    }
  }),
)(Main);
