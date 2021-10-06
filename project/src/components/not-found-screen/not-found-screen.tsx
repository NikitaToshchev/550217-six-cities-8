import { Link } from 'react-router-dom';


function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray" style={{ margin: '100px 550px' }}>
      <h1>404. Page not found</h1>
      <Link to="/">Back to the main page</Link>
    </div>
  );
}

export default NotFoundScreen;
