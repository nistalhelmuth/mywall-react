import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  withRouter,
} from "react-router-dom";
import { compose } from 'recompose';
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
      userInformation: {
        email,
        name,
        city,
        visitors,
        genre,
        feeling,
        dateCreated,
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
        <Wall posts={posts}/>
        <div className={styles.friends}>

        </div>
      </div>
    );
  }
}


export default compose(
  withRouter,
  connect(
    (state) => ({
      posts: selectors.getAllPosts(state), 
      userInformation: selectors.getUserInformation(state),
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
  )
)(Profile);
