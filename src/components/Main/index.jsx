import React, { Component } from 'react';
import Wall from '../General/Wall';
import { connect } from "react-redux";
import * as postActions from '../../actions/post';
import * as selectors from '../../reducers';
import styles from './main.module.css';

class Main extends Component {
  componentDidMount() {
    const {
      fetchAllPost
    } = this.props;
    fetchAllPost();
  }

  render() {
    const {
      posts
    } = this.props;
    return(
      <div className={styles.main}>
        <Wall posts={posts}/>
      </div>
    );
  }

}

export default connect(
  (state) => ({
    posts: selectors.getAllPosts(state),
  }),
  (dispatch) => ({
    fetchAllPost() {
      dispatch(postActions.fetchAllPosts({}));
    },
    commentPost(values){
      console.log('create comment', values)
    },
    createPost(values) {
      console.log('create post', values)
    }
  }),
)(Main);
