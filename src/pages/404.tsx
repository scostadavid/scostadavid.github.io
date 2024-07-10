import * as React from 'react';
import { Link } from 'gatsby';
import { H1 } from '../components/Typography';

const NotFoundPage = () => {
  return (
    <main>
      <title>scostadavid</title>
      <H1>{'<Page not found/>'}</H1>
      <p>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        this page probably don't exists.
        <br />
      </p>
      <Link to="/">← Go back to home</Link>.
    </main>
  )
}

export default NotFoundPage
