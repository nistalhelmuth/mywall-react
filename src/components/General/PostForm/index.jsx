import React from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import styles from './postForm.module.css';

const PostForm = ({
  onSubmit
}) => {
  const formik = useFormik({
    initialValues: {
      content: '',
    },
    onSubmit,
  });
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <button type="submit">Comment</button>
      <textarea
        id="content"
        name="content"
        placeholder="Write Something..."
        onChange={formik.handleChange}
        value={formik.values.content}
        autoFocus={false}
        formNoValidate
        className={styles.formTextArea}
      />
    </form>

  );
};

PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default PostForm;
