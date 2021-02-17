import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import styles from './postForm.module.css';


const PostSchema = Yup.object().shape({
  content: Yup.string()
    .max(280, 'Too Long')
});

const PostForm = ({
  onSubmit
}) => (
  <Formik
    initialValues={{
      content: undefined,
    }}
    validationSchema={PostSchema}
    onSubmit={(values, actions) => {
      actions.resetForm({
        values: {
          content: '',
        }
      })
      onSubmit(values)
    }}
  >
    {({
      values,
      errors,
      handleChange,
      handleSubmit
    }) => (
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" disabled={!values.content || values.content === '' || errors.content}>Comment</button>
        <textarea
          id="content"
          name="content"
          placeholder="Write Something..."
          onChange={handleChange}
          value={values.content}
          autoFocus={false}
          formNoValidate
          className={styles.formTextArea}
        />
      </form>

    )}
  </Formik>
);

PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default PostForm;
