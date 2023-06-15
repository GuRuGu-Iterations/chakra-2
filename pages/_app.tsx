import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
};

export default App;
