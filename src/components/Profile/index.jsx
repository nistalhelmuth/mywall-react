import React, { Component } from 'react';
import { connect } from "react-redux";
import { compose } from 'redux'
import PropTypes from 'prop-types';
import {
  withRouter,
} from "react-router-dom";
import Wall from '../General/Wall';
import * as userActions from '../../actions/user';
import * as postActions from '../../actions/post';
import * as selectors from '../../reducers';
import styles from './profile.module.css';

export const customPropTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    dateCreated: PropTypes.string,
    created_by: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  })),
  postLoading: PropTypes.bool,
  authId: PropTypes.number,
  userInformation: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
    city: PropTypes.string,
    genre: PropTypes.string,
    dateCreated: PropTypes.string,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      profileId: PropTypes.string,
    })
  })
}


class Profile extends Component {

  static propTypes = customPropTypes;

  componentDidMount() {
    const {
      fetchProfileInfo,
    } = this.props;
    fetchProfileInfo();
  }

  render() {
    const {
      posts,
      postLoading,
      userInformation: {
        email,
        name,
        city,
        genre,
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
      <div className={styles.profile} data-test="profileComponent">
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
            genre: {genre}
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
      </div>
    );
  }
}


export default compose(
  withRouter,
  connect(
    (state) => ({
      postLoading: selectors.getPostLoading(state),
      posts: selectors.getAllPosts(state), 
      userInformation: selectors.getUserInformation(state),
      authId: selectors.getAuthId(state),
    }),
    (dispatch, {...props}) => ({
      fetchAllPostForUser() {
        const {
          match: {
            params: {
              profileId,
            },
          }
        } = props;
        dispatch(postActions.fetchAllPosts({
          profileId,
        }));
      },
      fetchProfileInfo() {
        const {
          match: {
            params: {
              profileId,
            },
          }
        } = props;
        dispatch(userActions.fetchProfileInfo({
          profileId,
        }));
      },
    }),
  )
)(Profile);
