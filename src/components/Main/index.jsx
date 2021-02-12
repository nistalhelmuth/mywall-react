import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  scrollCheck(event) {
    const {
      fetchAllPost,
    } = this.props;
    const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    if (bottom) {
      fetchAllPost();
    }
  };

  render() {
    const {
      posts,
      postLoading,
      authId,
    } = this.props;
    return(
      <div
        className={styles.main}
        onScroll={this.scrollCheck.bind(this)}
        data-test="mainComponent"
      >
        <Wall
          posts={posts}
          enabledPost={authId}
          loading={postLoading}
        />
      </div>
    );
  }

}

Main.propTypes = {
  posts: PropTypes.array,
  postLoading: PropTypes.bool,
  authId: PropTypes.number,
  fetchAllPost: PropTypes.func.isRequired,
}

export default connect(
  (state) => ({
    postLoading: selectors.getPostLoading(state),
    posts: selectors.getAllPosts(state),
    authId: selectors.getAuthId(state),
  }),
  (dispatch) => ({
    fetchAllPost() {
      dispatch(postActions.fetchAllPosts({}));
    },
  }),
)(Main);
