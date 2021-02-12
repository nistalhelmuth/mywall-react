import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as selectors from '../../../reducers';
import styles from './comment.module.css';

const Comment = ({
  content,
  dateCreated,
  created_by,
  authId,
  authName,
}) => (
  <div className={styles.comment}>
    <Link to={`/profile/${created_by? created_by.id : authId}`}>
      <img
        src="assets/defaultProfile.png"
        alt="profileImage"
      />
    </Link>
    <div className={styles.content}>
      <p className={styles.text}>
        {created_by ? created_by.name : authName}
      </p>
      <p>
        {content}
      </p>
      <p>
        {dateCreated}
      </p>
    </div>
  </div>
);

export default connect(
  (state) => ({
    authId: selectors.getAuthId(state),
    authName: selectors.getAuthName(state),
  }),
)(Comment);
