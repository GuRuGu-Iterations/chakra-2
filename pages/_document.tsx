import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const [count, setCount] = React.useState(0);

  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
