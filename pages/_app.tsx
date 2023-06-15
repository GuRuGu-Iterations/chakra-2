import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/src/theme';
import { inter, montserrat } from '@/src/utils/fonts';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <style jsx global>{`
        :root {
          --inter-font: ${inter.style.fontFamily};
          --montserrat-font: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
};

export default App;
