import React from 'react';
import FormTextArea from '../FormTextArea';
import { useFormik } from 'formik';
import styles from './commentForm.module.css';

const CommentForm = ({
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
      <FormTextArea
        id="content"
        name="content"
        placeholder="Write Something..."
        onChange={formik.handleChange}
        value={formik.values.content}
      />
    </form>

  );
};

export default CommentForm;
