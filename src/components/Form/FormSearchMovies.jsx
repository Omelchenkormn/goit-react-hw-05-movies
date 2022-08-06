import { Formik, Form } from 'formik';
import { Container, EntryField, Button } from './FormSearchMovies.styled';

const initialValues = {
  query: '',
};

export const FormSearchMovies = ({ searchHandler }) => {
  const handleSubmit = (initialValues, { resetForm }) => {
    const { query } = initialValues;
    searchHandler(query);
    resetForm();
  };

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form autoComplete="off">
          <EntryField type="text" name="query" placeholder="Search movies" />
          <Button type="submit">Search</Button>
        </Form>
      </Formik>
    </Container>
  );
};
