import * as React from 'react';
import { Link } from 'gatsby';
import { H1 } from '../components/Typography';

// styles
const pageStyles = {
  color: "white",
  padding: "96px",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>scostadavid</title>
      <H1 color="#00FF97">{'<Page not found/>'}</H1>
      <p style={paragraphStyles}>
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
