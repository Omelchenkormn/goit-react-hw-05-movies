import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h3>
        Not Found error 404 :( go to <Link to="/">Home page</Link>
      </h3>
    </>
  );
};
export default NotFoundPage;
