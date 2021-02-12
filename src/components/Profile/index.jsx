import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  withRouter,
} from "react-router-dom";
import Wall from '../General/Wall';
import * as userActions from '../../actions/user';
import * as postActions from '../../actions/post';
import * as selectors from '../../reducers';
import styles from './profile.module.css';


class Profile extends Component {
  componentDidMount() {
    const {
      fetchAllPostForUser,
      fetchProfileInfo,
      match: {
        params: {
          profileId,
        },
      },
    } = this.props;
    fetchAllPostForUser(profileId);
    fetchProfileInfo(profileId);
  }

  render() {
    const {
      posts,
      postLoading,
      userInformation: {
        email,
        name,
        city,
        visitors,
        genre,
        feeling,
        dateCreated,
      },
      authId,
      match: {
        params: {
          profileId,
        },
      },
    } = this.props;
    return (
      <div className={styles.profile}>
        <div className={styles.information}>
          <img
            src="assets/defaultProfile.png"
            alt="profileImage"
            className={styles.profileImage}
          />
          <p>
            mail: {name}
          </p>
          <p>
            email: {email}
          </p>
          <p>
            city: {city}
          </p>
          <p>
            visitors: {visitors}
          </p>
          <p>
            genre: {genre}
          </p>
          <p>
            feeling: {feeling}
          </p>
          <p>
            date joined: {dateCreated}
          </p>
        </div>
        <Wall
          posts={posts}
          enabledPost={authId === parseInt(profileId)}
          loading={postLoading}
        />
        <div className={styles.friends}>

        </div>
      </div>
    );
  }
}


export default withRouter(
connect(
  (state) => ({
    postLoading: selectors.getPostLoading(state),
    posts: selectors.getAllPosts(state), 
    userInformation: selectors.getUserInformation(state),
    authId: selectors.getAuthId(state),
  }),
  (dispatch) => ({
    fetchAllPostForUser(profileId) {
      dispatch(postActions.fetchAllPosts({
        profileId,
      }));
    },
    fetchProfileInfo(profileId) {
      dispatch(userActions.fetchProfileInfo({
        profileId,
      }));
    },
    commentPost(values){
      console.log('create comment', values)
    },
    createPost(values) {
      console.log('create post', values)
    }
  }),
)(Profile));
