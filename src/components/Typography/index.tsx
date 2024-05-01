import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

interface H1 {
  className?: string;
  text: string;
}

const H1 = ({className, text} : H1) => {
  return (
    <h1 className={
      classNames(
        "text-black font-bold text-4xl mb-4",
        className
      )
    }>
      {text}
    </h1>
  );
}

interface H2 {
  className?: string;
  text: string;
}

const H2 = ({className, text} : H2) => {
  return (
    <h2 className={
      classNames(
        "font-bold text-2xl mb-4",
        className
      )
    }>
      {text}
    </h2>
  );
}

const Paragraph = ({children} : {children: string}) => {
  return (
    <p className="text-black text-lg mb-4">
      {children}
    </p>
  );
}

const Span = ({children} : {children: string}) => {
  return (
    <span className="text-black">
      {children}
    </span>
  );
}

const MS_INTERVAL: number = 50;

interface TypeMachineParagraph {
  quote: string
};
const TypeMachineParagraph = ({quote}: TypeMachineParagraph): JSX.Element => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex(index + 1), MS_INTERVAL);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <Span>{' 👋 '}</Span>
      {quote.substring(0, index)}
    </>
  );
}

export {
  H1,
  H2,
  Paragraph,
  TypeMachineParagraph,
  Span,
}