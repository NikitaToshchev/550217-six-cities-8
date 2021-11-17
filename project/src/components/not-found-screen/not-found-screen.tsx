import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <Header />

      <div className="page page--gray" style={{ margin: '220px 200px', textAlign: 'center' }}>
        <h1>404. Page not found</h1>
        <Link to="/">Back to the main page</Link>
      </div>
      <Footer />
    </>
  );
}

export default NotFoundScreen;
